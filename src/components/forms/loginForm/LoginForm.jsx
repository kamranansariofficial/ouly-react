// yup
import * as Yup from "yup";
import { useState } from "react";
// react router dom
import { Link as RouterLink, useNavigate } from "react-router-dom";
// formik
import { useFormik, Form, FormikProvider } from "formik";
// material
import {
  Link,
  Stack,
  Alert,
  Checkbox,
  TextField,
  FormControlLabel,
  Typography,
} from "@mui/material";
// mui lab
import { LoadingButton } from "@mui/lab";
//

// ----------------------------------------------------------------------

export default function LoginForm() {
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(false);
  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .email("Email must be a valid email address")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      remember: true,
    },
    validationSchema: LoginSchema,
    onSubmit: async ({ setSubmitting }) => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        navigate("/dashboard");
      }, 3000);
    },
  });

  const { errors, touched, values, isSubmitting, handleSubmit, getFieldProps } =
    formik;
  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Stack spacing={3}>
          {errors.afterSubmit && (
            <Alert severity="error">{errors.afterSubmit}</Alert>
          )}
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
        </Stack>

        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          mt={1}
          mb={2}
        >
          <FormControlLabel
            control={
              <Checkbox
                {...getFieldProps("remember")}
                checked={values.remember}
              />
            }
            label="Remember me"
          />

          <Link
            component={RouterLink}
            variant="subtitle1"
            underline="none"
            to={"/"}
          >
            Forgot password?
          </Link>
        </Stack>

        <LoadingButton
          fullWidth
          size="large"
          type="submit"
          variant="contained"
          loading={isLoading}
        >
          Log in
        </LoadingButton>
      </Form>
    </FormikProvider>
  );
}
