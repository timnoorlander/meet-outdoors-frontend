import { Button } from "@/components/elements/Button";
import { theme } from "@/constants/theme";
import { TextField } from "@mui/material";
import { useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useNavigate, useSearchParams } from "react-router-dom";
import styled, { css } from "styled-components";
import { useAuthentication } from "..";
import loginBackground from "@/assets/trees.avif";
import { BREAKPOINTS } from "@/constants";

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
    <Container backgroundUrl={loginBackground}>
      <Box>
        <h1>Welcome back!</h1>

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

          <StyledButton type="submit">Log in</StyledButton>
        </Form>
      </Box>
      <Box>
        <h1>New here?</h1>
        <Button isFullWidth>Create an account</Button>
      </Box>
    </Container>
  );
}

const ErrorContainer = styled.div`
  color: ${theme.color.error};
`;

const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const StyledButton = styled(Button)`
  margin-top: 2rem;
`;

type ContainerProps = {
  backgroundUrl?: string;
};

export const Container = styled.div<ContainerProps>`
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  min-height: 100%;

  ${(props) => {
    console.log(props);
    return props.backgroundUrl
      ? css`
          background-image: url(${props.backgroundUrl});
          background-size: cover;
          background-position: center;
        `
      : null;
  }}

  @media screen and (min-width: ${BREAKPOINTS.lg.min}px) {
    flex-direction: row;
  }
`;

const Box = styled.section`
  width: clamp(0rem, 100%, 20rem);
  padding: 1.5rem;
  border-radius: 16px;
  background: white;
`;
