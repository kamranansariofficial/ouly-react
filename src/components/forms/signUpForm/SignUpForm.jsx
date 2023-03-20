import { useState } from "react";
// react router dom
import { useNavigate } from "react-router-dom";
// yup
import * as Yup from "yup";
// formik
import { useFormik, Form, FormikProvider } from "formik";
// material
import { Stack, TextField, Typography, Alert } from "@mui/material";
import { LoadingButton } from "@mui/lab";
// ----------------------------------------------------------------------

export default function RegisterForm() {
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(false);
  const RegisterSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("First name required"),
    lastName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Last name required"),
    email: Yup.string()
      .email("Email must be a valid email address")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
    number: Yup.number().required("Mobile number is required"),
  });

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      number: "",
    },
    validationSchema: RegisterSchema,
    onSubmit: async ({ setSubmitting }) => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        navigate("/dashboard");
      }, 3000);
    },
  });

  const { errors, touched, handleSubmit, isSubmitting, getFieldProps } = formik;

  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Stack spacing={3}>
          {errors.afterSubmit && (
            <Alert severity="error">{errors.afterSubmit}</Alert>
          )}

          <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
            <Stack spacing={1}>
              <Typography variant="subtitle2">First Name</Typography>
              <TextField
                fullWidth
                placeholder="Enter First name"
                {...getFieldProps("firstName")}
                error={Boolean(touched.firstName && errors.firstName)}
                helperText={touched.firstName && errors.firstName}
              />
            </Stack>
            <Stack spacing={1}>
              <Typography variant="subtitle2">Last Name</Typography>
              <TextField
                fullWidth
                placeholder="Enter Last name"
                {...getFieldProps("lastName")}
                error={Boolean(touched.lastName && errors.lastName)}
                helperText={touched.lastName && errors.lastName}
              />
            </Stack>
          </Stack>
          <Stack spacing={1}>
            <Typography variant="subtitle2">Email</Typography>
            <TextField
              fullWidth
              autoComplete="username"
              type="email"
              placeholder="Enter Email address"
              {...getFieldProps("email")}
              error={Boolean(touched.email && errors.email)}
              helperText={touched.email && errors.email}
            />
          </Stack>
          <Stack spacing={1}>
            <Typography variant="subtitle2">Mobile Number</Typography>
            <TextField
              fullWidth
              autoComplete="current-number"
              type={"number"}
              placeholder="Enter Mobile Number"
              {...getFieldProps("number")}
              error={Boolean(touched.number && errors.number)}
              helperText={touched.number && errors.number}
            />
          </Stack>
          <Stack spacing={1}>
            <Typography variant="subtitle2">Password</Typography>
            <TextField
              fullWidth
              autoComplete="current-password"
              type={"password"}
              placeholder="Enter your Password"
              {...getFieldProps("password")}
              error={Boolean(touched.password && errors.password)}
              helperText={touched.password && errors.password}
            />
          </Stack>

          <LoadingButton
            fullWidth
            size="large"
            type="submit"
            variant="contained"
            loading={isLoading}
          >
            Register
          </LoadingButton>
        </Stack>
      </Form>
    </FormikProvider>
  );
}
