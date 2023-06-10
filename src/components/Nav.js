import { Routes, Route, Link } from 'react-router-dom';
import About from '../pages/About';
import Home from '../pages/Home';

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
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/about" element={<About></About>}></Route>
            </Routes>
        </>
    );
}