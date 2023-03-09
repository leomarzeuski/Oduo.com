import { forwardRef } from "react";

const SelectBase = (
  { children, containerStyle = {}, label, name, ...rest },
  ref
) => {
  return (
    <div className="w-full" style={containerStyle}>
      {label && (
        <label htmlFor={name} className="block mb-1 text-sm md:text-md">
          {label}
        </label>
      )}
      <select
        ref={ref}
        name={name}
        className="w-full p-2 border-2 bg-white border-[#DDD] focus:border-primary outline-none rounded-sm"
        {...rest}
      >
        {children}
      </select>
    </div>
  );
};

const Select = forwardRef(SelectBase);

export default Select;
