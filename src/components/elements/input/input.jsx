const Input = (props) => {
    const { type, placeholder, name, textP } = props;
    return(
        <>
        <input 
            type={type} 
            id={name} 
            className="text-sm border border-gray-300 rounded-md py-2 px-3 w-full text-slate-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500" 
            placeholder={placeholder}
            name={name}
        />
        <p className="text-sm text-gray-700 opacity-50">{textP}</p>
        </>
        
    )
}

export default Input