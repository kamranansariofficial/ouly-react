import React, { useState } from "react";
// yup
import * as Yup from "yup";
// formik
import { useFormik, Form, FormikProvider } from "formik";
// material
import {
  Divider,
  Typography,
  Box,
  Stack,
  TextField,
  Button,
} from "@mui/material";
// components
import RootStyled from "./styled";
import ReactSvg from "utils/reactSVG";

export default function CreditCard({ handleClose }) {
  const [isLoading, setLoading] = useState(false);

  const RegisterSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Holder name required"),
    password: Yup.string().required("CVV is required"),
    date: Yup.string().required("Date is required"),
    number: Yup.number()
      .min(14, "Too Short!")
      .required("Card number is required"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      password: "",
      date: "",
      number: "",
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
      <Typography variant="h4" mt={4} mb={3} textAlign="center">
        Add New Credit/Debit Card
      </Typography>
      <Divider />
      <FormikProvider value={formik}>
        <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
          <Stack spacing={3} p={4}>
            <Stack spacing={1}>
              <Typography variant="subtitle2">Holder Name</Typography>
              <TextField
                fullWidth
                placeholder="Enter Holder Name"
                {...getFieldProps("name")}
                error={Boolean(touched.name && errors.name)}
                helperText={touched.name && errors.name}
              />
            </Stack>
            <Stack spacing={1}>
              <Typography variant="subtitle2">Card Number</Typography>
              <TextField
                fullWidth
                type={"number"}
                placeholder="Enter Card Number"
                {...getFieldProps("number")}
                error={Boolean(touched.number && errors.number)}
                helperText={touched.number && errors.number}
              />
            </Stack>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              <Stack spacing={1} sx={{ width: "100%" }}>
                <Typography variant="subtitle2">Expiration Date</Typography>
                <TextField
                  fullWidth
                  type={"date"}
                  placeholder="Enter Expiration Date"
                  {...getFieldProps("date")}
                  error={Boolean(touched.date && errors.date)}
                  helperText={touched.date && errors.date}
                />
              </Stack>
              <Stack spacing={1} sx={{ width: "100%" }}>
                <Typography variant="subtitle2">CVV</Typography>
                <TextField
                  fullWidth
                  type={"password"}
                  placeholder="Enter Expiration Date"
                  {...getFieldProps("password")}
                  error={Boolean(touched.password && errors.password)}
                  helperText={touched.password && errors.password}
                />
              </Stack>
            </Stack>
          </Stack>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={3}
            px={4}
            py={3}
            className="dialog-footer"
          >
            <Button
              variant="outlined"
              size="large"
              onClick={handleClose}
              fullWidth
            >
              cancel
            </Button>
            <Button
              variant="contained"
              size="large"
              fullWidth
              type="submit"
              startIcon={<ReactSvg name="card" width={20} height={20} />}
            >
              add card
            </Button>
          </Stack>
        </Form>
      </FormikProvider>
    </RootStyled>
  );
}
