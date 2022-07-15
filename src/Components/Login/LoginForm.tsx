import { FormEvent } from "react";
import { Link } from "react-router-dom";

import { Button, Input } from "@components/Form";
import { useForm } from "@hooks/useForm";
import { useUserContext } from "@context/UserContext";

export function LoginForm() {
  const username = useForm({});
  const password = useForm({});
  const { userLogin } = useUserContext();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (username.validate() && password.validate()) {
      await userLogin(username.value, password.value);
    }
  }

  return (
    <section>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <Input
          label="Usuário"
          name="username"
          type="text"
          error={username.error}
          onChange={username.onChange}
          value={username.value}
          onBlur={username.onBlur}
        />
        <Input
          label="Password"
          name="password"
          type="password"
          error={password.error}
          onChange={password.onChange}
          value={password.value}
          onBlur={password.onBlur}
        />
        <Button disabled={!username.value || !password.value} type="submit">
          Entrar
        </Button>
      </form>
      <Link to="/login/criar">Cadastro</Link>
    </section>
  );
}
