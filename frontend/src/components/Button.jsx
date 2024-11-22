export const Button = ({label}) => {
  return (
    <div>
      <button
        type="button"
        className="w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm py-2.5 px-5 me-2 mb-2"
      >
        {label}
      </button>
    </div>
  );
};
