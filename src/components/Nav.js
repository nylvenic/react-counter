import { Link } from 'react-router-dom';

export default function Nav() {
    return (
        <>
            <nav className="p-4 flex justify-between bg-gray-800 text-gray-100">
                <Link to="/">Logo</Link>
                <div className="flex flex-row gap-4">
                    <Link to="/about">About</Link>
                    <button>Increment</button>
                    <button>Decrement</button>
                </div>
            </nav>
        </>
    );
}