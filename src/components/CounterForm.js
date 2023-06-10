import { useState } from "react";
export default function CounterForm({mode, number, setNumber}) {
    const [modifier, setModifier] = useState("");

    function submitHandler(e) {
        e.preventDefault();
        let result;
        if(mode === 'increment') {
            result = number + modifier;
        } else {
            result = number - modifier;
        }
        setNumber(result);
    }

    function changeHandler(e) {
        setModifier(Number(e.target.value));
    }

    return (<>
        <form className="flex flex-col gap-4 w-full" onSubmit={submitHandler}>
            <input 
                onChange={changeHandler}
                value={modifier}
                className="rounded border border-solid border-gray-500 py-1 px-3" 
                placeholder={mode === 'increment' ? "Increment mode - enter a number." : "Decrement mode - enter a number."} 
                type="number">
            </input>
            <button 
            className="hover:bg-blue-700 bg-blue-800 text-gray-100 py-1 px-3 rounded">
                {mode === 'increment' ? "Increment" : "Decrement"}
            </button>
        </form>
    </>)
}