"use client";
import "./globals.css";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./store/api/counter";
import Headermain from "./components/header";
export default function Home() {
	const counter = useSelector((state) => state.counter);
	const dispatch = useDispatch();
	return (
		<div>
			<Headermain />

			<h1>Counter: {counter}</h1>
			<button onClick={() => dispatch(increment())}>Increment</button>
			<button onClick={() => dispatch(decrement())}>Decrement</button>
		</div>
	);
}
