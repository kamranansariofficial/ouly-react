// react dropzone
import { useDropzone } from "react-dropzone";
// material
import { styled } from "@mui/material/styles";
import { CircularProgress, Box, Typography } from "@mui/material";
//

// ----------------------------------------------------------------------

const DropZoneStyle = styled("div")(({ theme }) => ({
  outline: "none",
  display: "flex",
  overflow: "hidden",
  textAlign: "center",
  position: "relative",
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
  padding: theme.spacing(5, 0),

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

export default function UploadSingleFile({ ...props }) {
  const { error, file, sx, onDrop, loading, ...other } = props;

  const { getRootProps, getInputProps, isDragActive, isDragReject } =
    useDropzone({
      multiple: false,
      onDrop,
      ...other,
    });

  return (
    <DropZoneStyle
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
        <Box sx={{ p: 2, ml: { md: 2 } }}>
          <Typography
            variant={"subtitle1"}
            sx={{
              span: {
                color: "primary.main",
                textDecoration: "underline",
              },
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.37939 22.2387C4.52272 22.312 4.67572 22.3467 4.82672 22.3467C5.18505 22.3467 5.53072 22.1504 5.70505 21.8094C5.95239 21.3247 5.76039 20.7314 5.27572 20.484C4.94105 20.313 4.66039 20.0727 4.44172 19.7694C4.12339 19.328 3.50772 19.2284 3.06639 19.5464C2.62505 19.8647 2.52505 20.4804 2.84339 20.9217C3.24072 21.473 3.77205 21.9284 4.37939 22.2387Z"
                fill="#2563EB"
              />
              <path
                d="M14.0109 3C14.0109 2.45567 13.5699 2 13.0255 2H11.4492C10.9052 2 10.4639 2.45567 10.4639 3C10.4639 3.54433 10.9049 4 11.4492 4H13.0255C13.5695 4 14.0109 3.54433 14.0109 3Z"
                fill="#2563EB"
              />
              <path
                d="M9.69285 20.6666C9.14852 20.6666 8.70752 21.1223 8.70752 21.6666C8.70752 22.211 9.14852 22.6666 9.69285 22.6666H11.2692C11.8135 22.6666 12.2545 22.211 12.2545 21.6666C12.2545 21.1223 11.8135 20.6666 11.2692 20.6666H9.69285Z"
                fill="#2563EB"
              />
              <path
                d="M6.52301 4C7.06701 4 7.50835 3.54433 7.50835 3C7.50835 2.45567 7.06735 2 6.52301 2H6.44701C5.79035 2 5.16235 2.155 4.57968 2.42333C4.08568 2.651 3.86968 3.24567 4.09768 3.73967C4.26401 4.10033 4.62035 4.31733 4.99301 4.31733C5.13101 4.31733 5.27135 4.28667 5.40501 4.225C5.72701 4.07667 6.07735 4 6.44701 4H6.52301Z"
                fill="#2563EB"
              />
              <path
                d="M3 10.038C3.54433 10.038 4 9.59697 4 9.05263V7.4763C4 6.93197 3.54433 6.49097 3 6.49097C2.45567 6.49097 2 6.93197 2 7.4763V9.05263C2 9.59697 2.45567 10.038 3 10.038Z"
                fill="#2563EB"
              />
              <path
                d="M2 15.5553C2 16.0997 2.45567 16.5407 3 16.5407C3.54433 16.5407 4 16.0997 4 15.5553V13.979C4 13.4347 3.54433 12.9937 3 12.9937C2.45567 12.9937 2 13.4347 2 13.979V15.5553Z"
                fill="#2563EB"
              />
              <path
                d="M15.3871 14.2363C14.9981 14.2363 14.6341 14.4287 14.4125 14.7503C14.1915 15.0713 14.1431 15.481 14.2845 15.85L16.1885 20.757C15.6478 20.761 15.2105 21.1697 15.2105 21.7113C15.2105 22.2557 15.6515 22.6663 16.1958 22.6663H16.9531L19.0538 28.111C19.2321 28.57 19.6655 28.8817 20.1575 28.8817C20.5798 28.8817 20.9578 28.668 21.1688 28.323L23.0885 26.3237L26.3585 29.5953C26.5875 29.8217 26.8911 29.9473 27.2131 29.9473C27.5351 29.9473 27.8385 29.823 28.0718 29.5923L29.6545 28.01C30.1275 27.5367 30.1271 26.7667 29.6541 26.2943L26.5158 23.156L28.4411 21.1933C28.7531 20.9937 28.9588 20.655 28.9821 20.2687C29.0135 19.751 28.7091 19.278 28.2251 19.0917L15.8151 14.3153C15.6768 14.2633 15.5331 14.2363 15.3871 14.2363ZM26.3705 20.4903L23.7418 23.17L27.7251 27.1533L27.2125 27.6657L23.0578 23.5113L20.4331 26.25L18.7418 21.8913C18.7495 21.8423 18.7568 21.793 18.7568 21.7417C18.7568 21.432 18.6111 21.159 18.3875 20.9783L16.7635 16.793L26.3705 20.4903Z"
                fill="#2563EB"
              />
              <path
                d="M21.6665 9.83435C22.2108 9.83435 22.6665 9.39335 22.6665 8.84902V7.27269C22.6665 6.72835 22.2108 6.28735 21.6665 6.28735C21.1222 6.28735 20.6665 6.72835 20.6665 7.27269V8.84902C20.6665 9.39335 21.1222 9.83435 21.6665 9.83435Z"
                fill="#2563EB"
              />
              <path
                d="M21.6665 16.3367C22.2108 16.3367 22.6665 15.8957 22.6665 15.3513V13.775C22.6665 13.2307 22.2108 12.7897 21.6665 12.7897C21.1222 12.7897 20.6665 13.2307 20.6665 13.775V15.3513C20.6665 15.8957 21.1222 16.3367 21.6665 16.3367Z"
                fill="#2563EB"
              />
              <path
                d="M17.9515 4H18.1772C18.5088 4 18.8302 4.06467 19.1318 4.18467C19.2512 4.23233 19.3742 4.25633 19.4952 4.25633C19.8868 4.25633 20.2575 4.022 20.4112 3.63567C20.6122 3.13 20.3648 2.53933 19.8592 2.33833C19.3248 2.12567 18.7588 2 18.1768 2H17.9512C17.4072 2 16.9658 2.45567 16.9658 3C16.9658 3.54433 17.4072 4 17.9515 4Z"
                fill="#2563EB"
              />
            </svg>
            Drag an image here or <span>upload a file</span>
          </Typography>
        </Box>
      )}

      {file && (
        <Box
          component="img"
          alt="file preview"
          src={!file.preview ? file.url : file.preview}
          sx={{
            top: 8,
            borderRadius: 1,
            objectFit: "contain",
            position: "absolute",
            width: "calc(100% - 16px)",
            height: "calc(100% - 16px)",
            backgroundColor: "background.paper",
          }}
        />
      )}
    </DropZoneStyle>
  );
}
