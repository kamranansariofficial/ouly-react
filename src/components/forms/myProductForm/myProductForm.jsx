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
  Grid,
  Card,
  CardContent,
  Box,
} from "@mui/material";
// mui lab
import { LoadingButton } from "@mui/lab";
// components
import { UploadSingleFile } from "components";
import RootStyled from "./styled";
//

// ----------------------------------------------------------------------

export default function LoginForm() {
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(false);
  const LoginSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    description: Yup.string().required("Short Description is required"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
    },
    validationSchema: LoginSchema,
    onSubmit: async ({ setSubmitting }) => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        navigate("/dashboard/product");
      }, 3000);
    },
  });

  const { errors, touched, values, isSubmitting, handleSubmit, getFieldProps } =
    formik;
  return (
    <RootStyled>
      <FormikProvider value={formik}>
        <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <UploadSingleFile
                sx={{
                  height: "100%",
                  bgcolor: "background.paper",
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Stack spacing={3}>
                <Stack spacing={1}>
                  <Typography variant="body1" fontWeight={600}>
                    Product Name
                  </Typography>
                  <TextField
                    fullWidth
                    autoComplete="name"
                    type="text"
                    placeholder="Product Name"
                    {...getFieldProps("name")}
                    error={Boolean(touched.name && errors.name)}
                    helperText={touched.name && errors.name}
                  />
                </Stack>
                <Stack spacing={1}>
                  <Typography variant="body1" fontWeight={600}>
                    Description of Product
                  </Typography>
                  <TextField
                    multiline
                    className="describe"
                    rows={4}
                    fullWidth
                    autoComplete="describe"
                    type={"text"}
                    placeholder="Type Description"
                    {...getFieldProps("description")}
                    error={Boolean(touched.description && errors.description)}
                    helperText={touched.description && errors.description}
                  />
                </Stack>
              </Stack>
            </Grid>
            <Grid item xs={4} md={3}>
              <img src="/static/images/myproduct.png" alt="myproduct-img" />
            </Grid>
            <Grid item xs={4} md={9}>
              <Grid container spacing={5}>
                {[1, 2, 3, 4].map((v) => (
                  <Grid key={v} item xs={4} md={3}>
                    <Box className="empty-box"></Box>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
          <Box className="loading-btn" mt={3}>
            <LoadingButton
              fullWidth
              size="large"
              type="submit"
              variant="contained"
              loading={isLoading}
            >
              Generate
            </LoadingButton>
          </Box>
        </Form>
      </FormikProvider>
    </RootStyled>
  );
}
