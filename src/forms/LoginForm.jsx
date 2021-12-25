import React from "react";
import { MainContainer } from "./components/MainContainer";
import { Typography } from "@material-ui/core";
import { Form } from "./components/Form";
import { Input } from "./components/Input";
import { PrimaryButton } from "./components/PrimaryButton";
import { useForm } from "react-hook-form";

const LoginForm = (props) => {
  const { register, handleSubmit, errors } = useForm({
    mode: "onBlur",
  });

  const onSubmit = (data) => props.getLogin(data);
  //const onSubmit = (data) => console.log(data);

  return (
    <MainContainer>
      <Typography component="h2" variant="h5">
        🦄 LoginForm
      </Typography>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          {...register("email", { required: true })}
          id="email"
          type="text"
          label="email"
          name="email"
          //error={!!errors.email}
          //helperText={errors?.email?.message}
        />
        <Input
          {...register("password", { required: true })}
          id="password"
          type="password"
          label="password"
          name="password"
          //error={!!errors.password}
          //helperText={errors?.password?.message}
        />
        <PrimaryButton>Login</PrimaryButton>
      </Form>
    </MainContainer>
  );
};

export default LoginForm;
