import CounterForm from '../components/CounterForm';
import { useState } from 'react';

export default function Home({mode}) {
    const [number, setNumber] = useState(0);
    // Calculate number of digits
    const countDigits = n => {
        return Math.abs(n).toString().length;
    }

    // Calculate font size based on the number of digits
    const digits = countDigits(number);
    const fontSize = Math.max(1, 35 / Math.sqrt(digits)); // prevent font size too small

    return (<>
        <h1 style={{ fontSize: `${fontSize}vh` }} className="text-center">{number}</h1>
        <CounterForm mode={mode} number={number} setNumber={setNumber}></CounterForm>
    </>)
}