"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}
function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const date = new Date("August 26 2024");
  date.setDate(date.getDate() + count);
  return (
    <div>
      <div>
        <button onClick={() => setStep((s) => s - 1)}>-</button>
        step:{step}
        <button onClick={() => setStep((s) => s + 1)}>+</button>
      </div>
      <div>
        <button onClick={() => setCount((c) => c - step)}>-</button>
        count
        {count}
        <button onClick={() => setCount((c) => c + step)}>+</button>
      </div>
      <span>
        {count === 0
          ? "Today"
          : count > 0
          ? `${count} days was`
          : `${Math.abs(count)} days was ago`}
      </span>
      <span>{date.toDateString()}</span>
    </div>
  );
}
