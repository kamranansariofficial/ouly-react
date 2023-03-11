// react dropzone
import { useDropzone } from "react-dropzone";
// material
import { styled } from "@mui/material/styles";
import { CircularProgress, Box, Typography } from "@mui/material";
// utils
import ReactSVG from "utils/reactSVG";
//

// ----------------------------------------------------------------------

const DropZoneStyle = styled("div")(({ theme, loading }) => ({
  outline: "none",
  display: "flex",
  overflow: "hidden",
  textAlign: "center",
  position: "relative",
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
  padding: !loading ? theme.spacing(5, 0) : "72px 0",
  transition: theme.transitions.create("padding"),
  height: "100%",
  background: "rgba(243, 242, 255, 0.5)",
  border: "2px dashed rgba(99, 91, 255, 0.2)",
  borderRadius: "8px",
  order: 3,
  "&:hover": {
    opacity: 0.72,
    cursor: "pointer",
  },
  [theme.breakpoints.up("md")]: { textAlign: "left", flexDirection: "row" },
}));

// ----------------------------------------------------------------------

export default function UploadMultipleFile({ ...props }) {
  const { error, preview, sx, onDrop, loading, ...other } = props;
  console.log(preview);
  const {
    acceptedFiles,
    getRootProps,
    getInputProps,
    isDragActive,
    isDragReject,
  } = useDropzone({
    multiple: false,
    onDrop,
    ...other,
  });

  const files = acceptedFiles.map((file) => (
    <Typography variant="body1" textAlign="center" key={file.path}>
      {file.path} - {file.size} bytes
    </Typography>
  ));

  return (
    <DropZoneStyle
      loading={loading}
      {...getRootProps()}
      sx={{
        ...(isDragActive && { opacity: 0.72 }),
        ...((isDragReject || error) && {
          color: "error.main",
          borderColor: "error.light",
          bgcolor: "error.lighter",
        }),
        ...(other.category && { padding: "8px 0" }),
        ...sx,
      }}
    >
      {loading && (
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
          }}
        >
          <CircularProgress
            sx={{
              width: "26px!important",
              height: "26px!important",
              mb: 2,
              svg: {
                width: 26,
                height: 26,
              },
            }}
          />
          <Typography variant="h6" color="text.primary">
            Uploading...
          </Typography>
        </Box>
      )}
      <input {...getInputProps()} />
      {!loading && (
        <Box textAlign={"center"} sx={{ p: 2 }}>
          <ReactSVG name={"upload"} width="32" height="32" />
          <Typography variant="body1" fontSize={16} color="text.primary">
            Upload Picture
          </Typography>
        </Box>
      )}

      {preview && (
        <Box
          component="img"
          alt="file preview"
          src={preview}
          sx={{
            top: 8,
            borderRadius: 1,
            objectFit: "contain",
            position: "absolute",
            width: "calc(100% - 16px)",
            height: "calc(100% - 16px)",
            objectFit: "cover",
            backgroundColor: "background.paper",
          }}
        />
      )}
    </DropZoneStyle>
  );
}
