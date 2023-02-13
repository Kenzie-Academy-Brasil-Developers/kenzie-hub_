import { forwardRef } from "react";

const InputRegister = (
  { label, type, id, placeholder, error, ...rest },
  ref
) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        ref={ref}
        {...rest}
      />
      {error ? <p>{error}</p> : null}
    </div>
  );
};

export default forwardRef(InputRegister);
