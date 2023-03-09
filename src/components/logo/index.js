const colors = {
  default: {
    text: "text-secondary",
    circle: "border-secondary",
  },
  white: {
    text: "text-white",
    circle: "border-white",
  },
};

export default function Logo({ color = "default" }) {
  const colorClasses = colors[color];

  return (
    <div className="relative">
      <span
        className={`absolute top-[-12px] sm:top-[-16px] left-[-6px] sm:left-[-6px] w-10 sm:w-12 h-10 sm:h-12 border rounded-[50%] ${colorClasses.circle}`}
      />
      <p
        className={`z-10 font-bold text-md sm:text-xl tracking-widest ${colorClasses.text}`}
      >
        ODUO
      </p>
      <span
        className={`absolute bottom-[-7px] sm:bottom-[-10px] right-[-3px] sm:right-[-4px] w-8 sm:w-10 h-8 sm:h-10 border rounded-[50%] ${colorClasses.circle}`}
      />
    </div>
  );
}
