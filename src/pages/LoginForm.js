import { Box, Typography } from "@mui/material";
import GlobalInput from "../components/UI/GlobalInput";
import { useNavigate } from "react-router-dom";
import React from "react";
import GlobalButton from "../components/UI/GlobalButton";
import { useFormik } from "formik";
import { signupSchema } from "../schemas";

const LoginForm = () => {
  const navigate = useNavigate();
  const handleSignUp = () => {
    navigate("/signUp");
  };
  const initialValues = {
    email: "",
    password: "",
  };
  const { handleChange, handleBlur, touched, values, errors } = useFormik({
    initialValues: initialValues,
    validationSchema: signupSchema,
    onSubmit: (values, action) => {
      action.resetForm();
    },
  });
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "80vh",
      }}
    >
      <Box
        sx={{
          width: "400px", // Adjust width as needed
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.8)",
          padding: 2,
          borderRadius: 4,
          textAlign: "center",
        }}
      >
        <Typography variant="h4" fontWeight="fontWeightBold" padding={3}>
          Login Page
        </Typography>
        <form>
          <GlobalInput
            name="email"
            label="Email"
            type="email"
            value={values.email}
            onChangehandler={handleChange}
            onBlurHandler={handleBlur}
            values={values}
            helperText={touched.email && errors.email ? errors.email : null}
          />
          <GlobalInput
            name="password"
            label="Password"
            type="password"
            value={values.password}
            onChangehandler={handleChange}
            onBlurHandler={handleBlur}
            values={values}
            helperText={
              touched.password && errors.password ? errors.password : null
            }
          />
          <Box sx={{ display: "flex", justifyContent: "center", gap: "15px" }}>
            <GlobalButton variant="contained" color="success" title="Log In" />
            <GlobalButton
              variant="contained"
              color="secondary"
              title="Sign Up"
              onclickHandler={handleSignUp}
            />
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default LoginForm;
