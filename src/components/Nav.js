import { Link } from 'react-router-dom';

export default function Nav() {
    return (
        <>
            <nav className="sm:flex-row sm:justify-between gap-4 p-4 flex flex-col items-center bg-[#FEFEFE] drop-shadow-xl text-gray-800">
                <Link to="/">Logo</Link>
                <div className="sm:flex-row flex flex-col gap-4 items-center">
                    <Link 
                        className="hover:text-blue-700" 
                        to="/about">
                        About
                    </Link>
                    <button className="hover:text-blue-700">Increment</button>
                    <button className="hover:text-blue-700">Decrement</button>
                </div>
            </nav>
        </>
    );
}