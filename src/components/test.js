'use client'
import { useState } from "react"

export default function Test() {
    const name = "Meiirim"
    const [counter, setCounter] = useState(10)
    const plusFunc = () => {
        setCounter(counter + 1);
    }

    const minusFunc = () => {
        setCounter(counter - 1);
    }

    const  resetFunc = () => {
        setCounter(0)
    }

    return ( 
    <div>
        <h1>My test component {name}</h1>
        <p>Counter: {counter}</p>
        <button onClick={minusFunc}>Минус</button>
        <button onClick={plusFunc}>Плюс</button>
        <button onClick={resetFunc}>Сбросить</button> 
    </div>)
}