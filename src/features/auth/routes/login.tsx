import { Button } from "@/components/elements/Button";
import { ContentLayout } from "@/components/layout/ContentLayout";
import { theme } from "@/theme";
import { TextField } from "@mui/material";
import { useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useNavigate, useSearchParams } from "react-router-dom";
import styled from "styled-components";
import { useAuthentication } from "..";
import loginBackground from "@/assets/trees.avif";

type Inputs = {
  email: string;
  password: string;
};

export function Login() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { login } = useAuthentication();
  const [errorMessage, setErrorMessage] = useState<string | undefined>(
    undefined
  );

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async ({
    email,
    password,
  }: Inputs) => {
    try {
      await login(email, password);

      const previousPath = searchParams.get("redirectTo");
      const pathToHome = "/";
      navigate(previousPath || pathToHome);
    } catch (error) {
      setErrorMessage((error as Error).message);
    }
  };

  const handleOnKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSubmit(onSubmit)();
    }
  };

  return (
    <ContentLayout backgroundUrl={loginBackground}>
      <LoginContainer>
        <h1>Log in</h1>

        {errorMessage && <ErrorContainer>{errorMessage}</ErrorContainer>}

        <Form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="email"
            control={control}
            defaultValue=""
            rules={{
              required: "E-mail address is required",
              pattern: {
                value: EMAIL_REGEX,
                message: "Invalid email address",
              },
            }}
            render={({ field }) => (
              <TextField
                label="E-mail address"
                variant="outlined"
                error={!!errors.email}
                helperText={errors.email && errors.email.message}
                onKeyDown={handleOnKeyDown}
                {...field}
              />
            )}
          />

          <Controller
            name="password"
            control={control}
            defaultValue=""
            rules={{ required: "Password is required" }}
            render={({ field }) => (
              <TextField
                type="password"
                label="Password"
                variant="outlined"
                error={!!errors.password}
                helperText={errors.password && errors.password.message}
                onKeyDown={handleOnKeyDown}
                {...field}
              />
            )}
          />

          <Button type="submit">Login</Button>
        </Form>
      </LoginContainer>
    </ContentLayout>
  );
}

const LoginContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 500px;
  padding: 50px;
  border-radius: 16px;
  background: white;
`;

const ErrorContainer = styled.div`
  color: ${theme.color.error};
`;

const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
