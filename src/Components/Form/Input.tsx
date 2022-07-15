import { InputHTMLAttributes } from "react";
import styles from "./Input.module.css";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  error: string;
}

export function Input({ label, name, error, ...rest }: InputProps) {
  return (
    <div className={styles.wrapper}>
      <label htmlFor={name}>{label}</label>
      <input id={name} name={name} className={styles.input} {...rest} />
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
}
