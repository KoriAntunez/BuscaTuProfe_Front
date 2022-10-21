const InputText = ({style_extra, id, label, value, step, onChange, errorMsg}) => {
    return (
      <div className={`relative ${style_extra}`}>
        <label htmlFor={id} className="leading-7 text-sm text-gray-600">
          {label}
        </label>
        <input
          type="number"
          data-testid="input-number"
          name={id}
          value={value}
          step={step}
          onChange={onChange}
          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
        <span
            className="mt-1 text-rose-600 text-xs italic"
            data-testid="input-error">
          {errorMsg}
        </span>
      </div>
    );
  };
  
  export default InputText;
  