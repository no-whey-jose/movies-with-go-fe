import { forwardRef } from "react";

const Input = forwardRef((props, ref) => {
  const {
    name,
    title,
    type,
    classname,
    placeholder,
    onChange,
    autoComplete,
    value,
    errorDiv,
    errorMessage,
  } = props;
  return (
    <div className="mb-3">
      <label htmlFor={name} className="form-label">
        {title}
      </label>
      <input
        type={type}
        className={classname}
        id={name}
        name={name}
        placeholder={placeholder}
        ref={ref}
        onChange={onChange}
        autoComplete={autoComplete}
        value={value}
      />
      <div className={errorDiv}>{errorMessage}</div>
    </div>
  );
});

export default Input;
