const InputTextArea = (props) => {
    return (
        <div className={`relative ${ props.style_extra }`}>
            <label htmlFor={ props.id } className="leading-7 text-sm text-gray-600">
                { props.label }
            </label>
            <textarea 
                type={ props.type } 
                name={ props.id } 
                data-testid="input-text-area"
                value={ props.value } 
                onChange={ props.onChange } 
                className="w-full h-36 bg-white resize-none rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            <span className="mt-1 text-rose-600 text-xs italic">
                { props.errorMsg }
            </span>
        </div>
    );
}

export default InputTextArea;