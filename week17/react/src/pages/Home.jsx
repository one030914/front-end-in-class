import { useState } from "react";
import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";
import style from "./Home.module.css";

export default function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <div>
                <a href="https://vite.dev" target="_blank" rel="noreferrer">
                    <img src={viteLogo} className={style.logo} alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank" rel="noreferrer">
                    <img
                        src={reactLogo}
                        className={`${style.logo} ${style.react}`}
                        alt="React logo"
                    />
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className={style.card}>
                <button type="button" onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <p>
                    Edit <code>src/App.jsx</code> and save to test HMR
                </p>
            </div>
            <p className={style.readTheDocs}>Click on the Vite and React logos to learn more</p>
        </>
    );
}
