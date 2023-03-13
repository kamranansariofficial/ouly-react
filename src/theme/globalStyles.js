// material
import { useTheme } from "@mui/material/styles";
import { GlobalStyles as GlobalThemeStyles } from "@mui/material";

// ----------------------------------------------------------------------

export default function GlobalStyles() {
  const theme = useTheme();

  return (
    <GlobalThemeStyles
      styles={{
        "*": {
          margin: 0,
          padding: 0,
          boxSizing: "border-box",
        },
        html: {
          width: "100%",
          height: "100%",
          WebkitOverflowScrolling: "touch",
        },
        body: {
          width: "100%",
          height: "100%",
        },
        "#root": {
          width: "100%",
          height: "100%",
        },
        input: {
          "&[type=number]": {
            MozAppearance: "textfield",
            "&::-webkit-outer-spin-button": {
              margin: 0,
              WebkitAppearance: "none",
            },
            "&::-webkit-inner-spin-button": {
              margin: 0,
              WebkitAppearance: "none",
            },
          },
        },
        textarea: {
          "&::-webkit-input-placeholder": {
            color: theme.palette.text.disabled,
          },
          "&::-moz-placeholder": {
            opacity: 1,
            color: theme.palette.text.disabled,
          },
          "&:-ms-input-placeholder": {
            color: theme.palette.text.disabled,
          },
          "&::placeholder": {
            color: theme.palette.text.disabled,
          },
        },
        "& .auth-main": {
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          "& .top-left-circle": {
            position: "fixed",
            left: -268,
            top: -186,
            content: "''",
            width: 500,
            height: 500,
            background: theme.palette.grey[200],
            zIndex: 2,
            borderRadius: "50%",
            "&:before": {
              position: "fixed",
              left: -114,
              top: -328,
              content: "''",
              width: 500,
              height: 500,
              border: `0.5px solid ${theme.palette.primary.main}`,
              zIndex: 1,
              borderRadius: "50%",
            },
          },
          "& .bottom-right-circle": {
            position: "fixed",
            right: -114,
            bottom: -328,
            content: "''",
            width: 500,
            height: 500,
            background: theme.palette.grey[200],
            zIndex: 2,
            borderRadius: "50%",
            "&:before": {
              position: "fixed",
              right: -268,
              bottom: -186,
              content: "''",
              width: 500,
              height: 500,
              border: `0.5px solid ${theme.palette.primary.main}`,
              zIndex: 1,
              borderRadius: "50%",
            },
          },
          "& .main": {
            alignItems: "center",
            width: "100%",
          },
        },
        ".edit-btn": {
          position: "absolute",
          top: 14,
          left: 32,
          zIndex: 1000,
          "& .title-top": {
            height: 19,
            fontSize: "11px",
            background: theme.palette.primary.main,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: theme.palette.common.white,
            padding: theme.spacing(0, 1),
            svg: {
              path: {
                fill: "#fff",
              },
            },
          },
          "& .setting-btn": {
            width: 28,
            height: 19,
            marginLeft: 2,
            background: theme.palette.primary.main,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
          },
        },
      }}
    />
  );
}
