const Input = ({props}:{
    props?: React.InputHTMLAttributes<HTMLInputElement>
})=>{
    return (
        <input
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Type something..."
            aria-label="Input field for user text"
            autoComplete="off"
            autoCorrect="off"
            spellCheck="false"
            {...props}
        />
    );
}

export default Input;