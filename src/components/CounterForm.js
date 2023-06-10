export default function CounterForm({props = {mode: "increment"}}) {
    const {mode} = props;
    
    return (<>
        <form className="flex flex-col gap-4">
            {mode === "increment" ?
                <input 
                className="rounded border border-solid border-gray-500 py-1 px-3" 
                placeholder="Increment mode - enter a number." 
                type="number" 
                id="increment"></input>
            : 
                <input 
                className="rounded border border-solid border-gray-500 py-1 px-3" 
                placeholder="Decrement mode - enter a number." 
                type="number" 
                id="decrement"></input>
            }
            <button className="hover:bg-blue-700 bg-blue-800 text-gray-100 py-1 px-3 rounded">Submit</button>
        </form>
    </>)
}