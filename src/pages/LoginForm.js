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
  const { handleChange, handleBlur, handleSubmit, touched, values, errors } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signupSchema,
      onSubmit: (values, action) => {
        console.log("login");
        console.log(values);

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
          width: "400px",
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
            autoComplete="email"
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
            autoComplete="current-password"
          />

          <Box sx={{ display: "flex", justifyContent: "center", gap: "15px" }}>
            <GlobalButton
              variant="contained"
              color="success"
              title="Log In"
              type="submit"
              onClick={() => {
                console.log("clicked");
                handleSubmit();
              }}
            />
            <GlobalButton
              variant="contained"
              color="secondary"
              title="Sign Up"
              onClick={handleSignUp}
            />
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default LoginForm;
