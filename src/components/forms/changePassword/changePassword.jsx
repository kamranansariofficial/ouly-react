import React, { useState } from "react";
// yup
import * as Yup from "yup";
// formik
import { useFormik, Form, FormikProvider } from "formik";
// material
import { Typography, Stack, TextField, Box, Button } from "@mui/material";

// components
import RootStyled from "./styled";
export default function ChangePassword() {
  const [isLoading, setLoading] = useState(false);

  const RegisterSchema = Yup.object().shape({
    currentPassword: Yup.string().required("Current Password is required"),
    password: Yup.string().required("Password is required"),
    newpassword: Yup.string().required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      currentPassword: "",
      newpassword: "",
      password: "",
    },
    validationSchema: RegisterSchema,
    onSubmit: async ({ setSubmitting }) => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    },
  });

  const { errors, touched, handleSubmit, isSubmitting, getFieldProps } = formik;
  return (
    <RootStyled>
      <Typography variant="h5">Contact Information</Typography>
      <FormikProvider value={formik}>
        <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
          <Stack spacing={5} p={4}>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              <Stack spacing={1} sx={{ width: "100%" }}>
                <Typography variant="subtitle2">Current Password</Typography>
                <TextField
                  fullWidth
                  type={"password"}
                  placeholder="Current Password"
                  {...getFieldProps("currentPassword")}
                  error={Boolean(
                    touched.currentPassword && errors.currentPassword
                  )}
                  helperText={touched.currentPassword && errors.currentPassword}
                />
              </Stack>
              <Stack spacing={1} sx={{ width: "100%" }}>
                <Typography variant="subtitle2">Change Password</Typography>
                <TextField
                  fullWidth
                  type={"password"}
                  placeholder="Change Password"
                  {...getFieldProps("password")}
                  error={Boolean(touched.password && errors.password)}
                  helperText={touched.password && errors.password}
                />
              </Stack>
              <Stack spacing={1} sx={{ width: "100%" }}>
                <Typography variant="subtitle2">Confirm Password</Typography>
                <TextField
                  fullWidth
                  type={"password"}
                  placeholder="Confirm Password"
                  {...getFieldProps("newpassword")}
                  error={Boolean(touched.newpassword && errors.newpassword)}
                  helperText={touched.newpassword && errors.newpassword}
                />
              </Stack>
            </Stack>
            <Box>
              <Button
                variant="contained"
                size="large"
                type="submit"
                sx={{ minWidth: 170 }}
              >
                Confrim
              </Button>
            </Box>
          </Stack>
        </Form>
      </FormikProvider>
    </RootStyled>
  );
}
