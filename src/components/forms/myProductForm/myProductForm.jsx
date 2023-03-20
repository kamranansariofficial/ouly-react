// yup
import * as Yup from "yup";
import { useState, useCallback } from "react";
// react router dom
import { Link as RouterLink, useNavigate } from "react-router-dom";
// formik
import { useFormik, Form, FormikProvider } from "formik";
// material
import {
  Skeleton,
  Stack,
  Typography,
  Grid,
  Box,
  TextField,
} from "@mui/material";
// mui lab
import { LoadingButton } from "@mui/lab";
// components
import { UploadSingleFile, UploadMultipleFile } from "components";
import RootStyled from "./styled";
//

// ----------------------------------------------------------------------

export default function MyProductForm({ isLoad }) {
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(false);
  const [upload, setupload] = useState({
    loading: false,
  });
  const [state, setstate] = useState({
    loading: false,
  });

  const handleDrop = useCallback(
    (acceptedFiles) => {
      setstate({ ...state, loading: true });
      setupload({ ...upload, loading: true });
      setTimeout(() => {
        const file = acceptedFiles[0];
        if (file) {
          setstate({
            ...file,
            loading: false,
            preview: URL.createObjectURL(file),
          });
          setupload({
            ...file,
            loading: false,
            preview: URL.createObjectURL(file),
          });
        }
      }, 2000);
    },
    [state, upload]
  );

  const handleDrop1 = useCallback(
    (acceptedFiles) => {
      setupload({ ...upload, loading: true });
      setTimeout(() => {
        const file = acceptedFiles[0];
        if (file) {
          setupload({
            ...file,
            loading: false,
            preview: URL.createObjectURL(file),
          });
        }
      }, 2000);
    },
    [state, upload]
  );

  const LoginSchema = Yup.object().shape({
    // name: Yup.string().required("Name is required"),
    // description: Yup.string().required("Short Description is required"),
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
        navigate("/my-product");
      }, 1500);
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
              {isLoad ? (
                <Skeleton variant="rounded" width="100%" height={264} />
              ) : (
                <UploadSingleFile
                  sx={{
                    height: "100%",
                    bgcolor: "background.paper",
                  }}
                  preview={state.preview}
                  onDrop={(file) => handleDrop(file)}
                  loading={state.loading}
                />
              )}
            </Grid>
            <Grid item xs={12} md={6}>
              <Stack spacing={3}>
                <Stack spacing={1}>
                  <Typography variant="body1" fontWeight={600}>
                    {isLoad ? (
                      <Skeleton variant="text" width={99} />
                    ) : (
                      "Product Name"
                    )}
                  </Typography>
                  {isLoad ? (
                    <Skeleton variant="rounded" height={52} width="100%" />
                  ) : (
                    <TextField
                      fullWidth
                      autoComplete="name"
                      type="text"
                      placeholder="Product Name"
                      // {...getFieldProps("name")}
                      // error={Boolean(touched.name && errors.name)}
                      // helperText={touched.name && errors.name}
                    />
                  )}
                </Stack>
                <Stack spacing={1}>
                  <Typography variant="body1" fontWeight={600}>
                    {isLoad ? (
                      <Skeleton variant="text" width={154} />
                    ) : (
                      "Description of Product"
                    )}
                  </Typography>
                  {isLoad ? (
                    <Skeleton variant="rounded" height={124} width="100%" />
                  ) : (
                    <TextField
                      multiline
                      className="describe"
                      rows={4}
                      fullWidth
                      autoComplete="describe"
                      type={"text"}
                      placeholder="Type Description"
                      // {...getFieldProps("description")}
                      // error={Boolean(touched.description && errors.description)}
                      // helperText={touched.description && errors.description}
                    />
                  )}
                </Stack>
              </Stack>
            </Grid>
            <Grid item xs={12} md={12}>
              <Box className="grid-preview">
                {[1, 2, 3, 4, 5].map((v) => (
                  <>
                    {isLoad ? (
                      <Skeleton variant="rounded" height={127} width={165} />
                    ) : (
                      <UploadMultipleFile
                        sx={{
                          height: "128px",
                          bgcolor: "background.paper",
                        }}
                        preview={upload.preview}
                        onDrop={(file) => handleDrop1(file)}
                        loading={upload.loading}
                      />
                    )}
                  </>
                ))}
              </Box>
            </Grid>
          </Grid>
          <Box className="loading-btn" mt={3}>
            {isLoad ? (
              <Skeleton variant="rounded" height={47} width="100%" />
            ) : (
              <LoadingButton
                fullWidth
                size="large"
                type="submit"
                variant="contained"
                loading={isLoading}
              >
                Generate
              </LoadingButton>
            )}
          </Box>
        </Form>
      </FormikProvider>
    </RootStyled>
  );
}
