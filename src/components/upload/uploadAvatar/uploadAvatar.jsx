import { isString } from "lodash";
import PropTypes from "prop-types";
import { Icon } from "@iconify/react";
import { useDropzone } from "react-dropzone";
// import roundAddAPhoto from "@iconify/icons-ic/round-add-a-photo";
// material
import { alpha, styled } from "@mui/material/styles";
import { Box, Typography, Paper, Stack } from "@mui/material";
// utils
import { fData } from "utils/formatNumber";
import ReactSvg from "utils/reactSVG";

// ----------------------------------------------------------------------

const RootStyle = styled("div")(({ theme }) => ({
  width: 125,
  height: 48,
  borderRadius: "8px",
  padding: theme.spacing(1),
  marginLeft: theme.spacing(9),
  background: theme.palette.background.paper,
  position: "relative",
  display: "flex",
  alignItems: "center",
  cursor: "pointer",
  justifyContent: "center",
  border: `1px dashed ${theme.palette.grey[500_32]}`,
  "& .upload-sec": {
    position: "absolute",
    top: -7,
    left: -80,
    width: 60,
    height: 60,
    borderRadius: "50%",
    border: `1px dashed ${theme.palette.grey[500_32]}`,
    img: {
      width: 60,
      height: 60,
      borderRadius: "50%",
    },
  },
}));

const DropZoneStyle = styled("div")({});

// ----------------------------------------------------------------------

UploadAvatar.propTypes = {
  error: PropTypes.bool,
  file: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  caption: PropTypes.node,
  sx: PropTypes.object,
};

export default function UploadAvatar({ error, file, caption, sx, ...other }) {
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragReject,
    fileRejections,
  } = useDropzone({
    multiple: false,
    ...other,
  });

  const ShowRejectionItems = () => (
    <Paper
      variant="outlined"
      sx={{
        py: 1,
        px: 2,
        my: 2,
        borderColor: "error.light",
        bgcolor: (theme) => alpha(theme.palette.error.main, 0.08),
      }}
    >
      {fileRejections.map(({ file, errors }) => {
        const { path, size } = file;
        return (
          <Box key={path} sx={{ my: 1 }}>
            <Typography variant="subtitle2" noWrap>
              {path} - {fData(size)}
            </Typography>
            {errors.map((e) => (
              <Typography key={e.code} variant="caption" component="p">
                - {e.message}
              </Typography>
            ))}
          </Box>
        );
      })}
    </Paper>
  );

  return (
    <>
      <RootStyle sx={sx}>
        <DropZoneStyle
          {...getRootProps()}
          sx={{
            ...(isDragActive && { opacity: 0.72 }),
            ...((isDragReject || error) && {
              color: "error.main",
              borderColor: "error.light",
              bgcolor: "error.lighter",
            }),
          }}
        >
          <Stack direction="row" spacing={1}>
            <ReactSvg name="uploadIcon" height={16} width={16} />
            <Typography variant="caption" color="text.secondary">
              {file ? "Update photo" : "Upload photo"}
            </Typography>
          </Stack>
        </DropZoneStyle>
        <Box className="upload-sec">
          <input {...getInputProps()} />

          {file && (
            <Box
              component="img"
              alt="avatar"
              src={isString(file) ? file : file.preview}
              sx={{ zIndex: 8, objectFit: "cover" }}
            />
          )}
        </Box>
      </RootStyle>

      {caption}

      {fileRejections.length > 0 && <ShowRejectionItems />}
    </>
  );
}
