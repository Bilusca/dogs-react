import {
  LoginForm,
  LoginCreate,
  LoginPasswordLost,
  LoginPasswordReset,
} from "@components/Login";
import { Route, Routes } from "react-router-dom";

export function Login() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="criar" element={<LoginCreate />} />
        <Route path="perdeu" element={<LoginPasswordLost />} />
        <Route path="resetar" element={<LoginPasswordReset />} />
      </Routes>
    </div>
  );
}
