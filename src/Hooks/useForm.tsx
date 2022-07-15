import { ChangeEvent, useState } from "react";

interface UseFormProps {
  type?: "email" | boolean;
}

interface Types {
  email: {
    regex: RegExp;
    message: string;
  };
}

interface OnChage extends ChangeEvent<HTMLInputElement> {}

const types: Types = {
  email: {
    regex:
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: "Preencha um email válido.",
  },
};

export function useForm({ type = false }: UseFormProps) {
  const [value, setVaule] = useState<string>("");
  const [error, setError] = useState<string>("");

  function validate(value: string) {
    if (value.length === 0) {
      setError("Preencha um valor.");
      return false;
    } else if (
      typeof type === "string" &&
      Object.keys(types).includes(type) &&
      !types[type].regex.test(value)
    ) {
      setError(types[type].message);
      return false;
    } else {
      setError("");
      return true;
    }
  }

  function onChange({ target }: OnChage) {
    if (error) {
      validate(target.value);
    }
    setVaule(target.value);
  }

  return {
    value,
    error,
    onChange,
    validate: () => validate(value),
    onBlur: () => validate(value),
  };
}
