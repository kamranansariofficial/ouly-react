// ----------------------------------------------------------------------

export default function Button(theme) {
  return {
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: 16,
          fontWeight: 600,
          "&:hover": {
            boxShadow: "none",
          },
        },
        sizeLarge: {
          height: 48,
        },
        // contained
        containedInherit: {
          color: theme.palette.grey[800],
          boxShadow: "none",
          "&:hover": {
            backgroundColor: theme.palette.grey[400],
          },
        },
        containedPrimary: {
          boxShadow: "none",
        },
        containedSecondary: {
          boxShadow: "none",
        },
        containedInfo: {
          boxShadow: "none",
        },
        containedSuccess: {
          boxShadow: "none",
        },
        containedWarning: {
          boxShadow: "none",
        },
        containedError: {
          boxShadow: "none",
        },
        // outlined
        outlinedInherit: {
          border: `1px solid ${theme.palette.grey[500_32]}`,
          "&:hover": {
            backgroundColor: theme.palette.action.hover,
          },
        },
        textInherit: {
          "&:hover": {
            backgroundColor: theme.palette.action.hover,
          },
        },
      },
    },
  };
}
