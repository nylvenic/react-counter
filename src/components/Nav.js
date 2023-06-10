import { Link } from 'react-router-dom';

export default function Nav({mode, setMode}) {
    function clickHandler(e) {
        setMode(e.target.value);
    }

    return (
        <>
            <nav className="sm:flex-row sm:justify-between w-full gap-4 p-4 flex flex-col items-center bg-[#FEFEFE] drop-shadow-xl text-gray-800 sticky top-0">
                <Link to="/" className="font-bold">Logo</Link>
                <div className="sm:flex-row flex flex-col gap-4 items-center">
                    <Link 
                        className="hover:text-blue-700" 
                        to="/about">
                        About
                    </Link>
                    <button 
                    onClick={clickHandler} 
                    value='increment' 
                    disabled={mode === 'increment' ? true : false}
                    className={mode === 'increment' ? 
                    'bg-blue-700 text-[#FEFEFE] rounded py-1 px-2' : 
                    "hover:text-blue-700"}>Increment</button>
                    <button
                    onClick={clickHandler}
                    value='decrement'
                    disabled={mode === 'decrement' ? true : false}
                    className={mode === 'decrement' ? 
                    'bg-blue-700 text-[#FEFEFE] rounded rounded py-1 px-2' : 
                    "hover:text-blue-700"}>Decrement</button>
                </div>
            </nav>
        </>
    );
}