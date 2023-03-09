const variants = {
  default: "text-primary hover:text-secondary",
  filled: "bg-primary text-white hover:opacity-90",
  outline:
    "border-2 border-primary text-primary hover:border-secondary hover:text-secondary",
};

export default function Button({
  children,
  className,
  variant = "default",
  ...rest
}) {
  const variantClasses = variants[variant];

  return (
    <button
      type="button"
      className={`outline-none p-2 2xl:p-3 flex items-center justify-center font-semibold rounded-sm transition-all ease delay-50 ${variantClasses} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}
