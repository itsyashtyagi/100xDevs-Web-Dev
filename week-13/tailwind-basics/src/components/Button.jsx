export const Button = ({ disabled, children, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`py-3 px-32 text-xl font-semibold text-white cursor-pointer rounded-md border-white ${
        disabled ? "bg-blue-200" : "bg-green-400"
      }`}
    >
      {children}
    </div>
  );
};
