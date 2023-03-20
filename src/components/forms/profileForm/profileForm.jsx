import React from "react";
import { useCallback } from "react";
// yup
import * as Yup from "yup";
// formik
import { useFormik, Form, FormikProvider } from "formik";
// material
import { Grid, Stack, TextField, Typography, Box } from "@mui/material";
// mui lab
import { LoadingButton } from "@mui/lab";

// components
import RootStyled from "./styled";
import { UploadAvatar } from "components/upload/uploadAvatar";

export default function ProfileForm() {
  const [isLoading, setLoading] = React.useState(false);
  const LoginSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Email must be a valid email address")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
    avatarUrl: Yup.mixed().required("Avatar is required"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      avatarUrl: "",
      remember: true,
    },
    validationSchema: LoginSchema,
    onSubmit: async ({ setSubmitting }) => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        // navigate("/");
      }, 3000);
    },
  });
  const {
    errors,
    touched,
    values,
    setFieldValue,
    handleSubmit,
    getFieldProps,
  } = formik;
  const handleDrop = useCallback(
    (acceptedFiles) => {
      const file = acceptedFiles[0];
      if (file) {
        setFieldValue("avatarUrl", {
          ...file,
          preview: URL.createObjectURL(file),
        });
      }
    },
    [setFieldValue]
  );
  return (
    <RootStyled>
      <FormikProvider value={formik}>
        <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
          <Box>
            <Typography variant="h5" mb={2}>
              Profile Photo
            </Typography>
            <Box mt={3} mb={4}>
              <UploadAvatar
                accept="image/*"
                file={values.avatarUrl}
                maxSize={3145728}
                onDrop={handleDrop}
                error={Boolean(touched.avatarUrl && errors.avatarUrl)}
              />
            </Box>
          </Box>
          <Typography variant="h5" mb={2}>
            Contact Information
          </Typography>
          <Grid container spacing={2}>
            <Grid item sm={12} md={4}>
              <Stack spacing={1}>
                <Typography variant="body1" fontWeight={600}>
                  Name
                </Typography>
                <TextField
                  fullWidth
                  autoComplete="username"
                  type="text"
                  value={values}
                  placeholder="Name"
                  {...getFieldProps("name")}
                  error={Boolean(touched.name && errors.name)}
                  helperText={touched.name && errors.name}
                />
              </Stack>
            </Grid>
            <Grid item sm={12} md={4}>
              <Stack spacing={1}>
                <Typography variant="body1" fontWeight={600}>
                  Email
                </Typography>
                <TextField
                  fullWidth
                  autoComplete="username"
                  type="email"
                  placeholder="Email address"
                  {...getFieldProps("email")}
                  error={Boolean(touched.email && errors.email)}
                  helperText={touched.email && errors.email}
                />
              </Stack>
            </Grid>
            <Grid item sm={12} md={4}>
              <Stack spacing={1}>
                <Typography variant="body1" fontWeight={600}>
                  Password
                </Typography>
                <TextField
                  fullWidth
                  autoComplete="current-password"
                  type={"password"}
                  placeholder="Password"
                  {...getFieldProps("password")}
                  error={Boolean(touched.password && errors.password)}
                  helperText={touched.password && errors.password}
                />
              </Stack>
            </Grid>
          </Grid>
          <Box className="loading-btn">
            <LoadingButton
              size="large"
              type="submit"
              variant="contained"
              loading={isLoading}
            >
              Confirm
            </LoadingButton>
          </Box>
        </Form>
      </FormikProvider>
    </RootStyled>
  );
}
