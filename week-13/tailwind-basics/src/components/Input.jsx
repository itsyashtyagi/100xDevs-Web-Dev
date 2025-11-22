export const Input = ({ placeholder, type }) => {
  return (
    <input
      placeholder={placeholder}
      type={type}
      className="bg-blue-500 outline-none px-5 py-2 rounded-xl block min-w-0 placeholder:text-grey-500 text-white 
      h-12 w-3/12"
    ></input>
  );
};
