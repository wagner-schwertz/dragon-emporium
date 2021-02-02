import { StyledField } from "./styles";

export default function Field({ label, error, register, id, ...props }) {
  return (
    <StyledField error={!!error}>
      <label htmlFor={id}>{label}</label>
      <input {...props} id={id} ref={register} autoComplete="off" />
      {error && <span>{error}</span>}
    </StyledField>
  );
}
