import { forwardRef } from "react";
import Div from "./style";

const InputRegister = (
  { label, type, id, placeholder, error, ...rest },
  ref
) => {
  return (
    <Div>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        ref={ref}
        {...rest}
      />
      {error ? <p>{error}</p> : null}
    </Div>
  );
};

export default forwardRef(InputRegister);
