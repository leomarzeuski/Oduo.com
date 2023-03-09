import { forwardRef } from "react";

const InputBase = (
  { containerStyle = {}, error, label, name, ...rest },
  ref
) => {
  return (
    <div className="w-full" style={containerStyle}>
      {label && (
        <label htmlFor={name} className="block mb-1 text-sm md:text-md">
          {label}
        </label>
      )}
      <input
        ref={ref}
        type="text"
        name={name}
        className={`w-full p-2 border-2 border-[#DDD] focus:border-primary outline-none rounded-sm ${
          !!error ? "border-red" : ""
        }`}
        autoComplete="off"
        {...rest}
      />
      {!!error && (
        <span className="text-xs font-bold text-white">{error.message}</span>
      )}
    </div>
  );
};

const Input = forwardRef(InputBase);

export default Input;
