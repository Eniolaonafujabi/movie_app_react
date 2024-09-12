import React from "react";
import {increment, decrement} from "../app/features/counterSlice/counterSlice"
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();
    return (
        <div>
            <h1>Count:{count}</h1>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
        </div>
    )   
}
export default Counter;