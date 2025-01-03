import "./App.css";
import { useState } from "react";
import Home from "./pages/Home";
import Todo from "./pages/Todo";
import About from "./pages/About";
import Product from "./pages/Product";

export default function App() {
    const [page, setPage] = useState("home");

    const renderPage = () => {
        const pages = {
            home: <Home />,
            todo: <Todo />,
            about: <About />,
            product: <Product />,
        };
        return pages[page] ? pages[page] : <Home />;
    };

    const menu = (page, e) => {
        e.preventDefault();
        setPage(page);
    };

    return (
        <div className="container">
            <header>
                <div className="logo">
                    <img src="../src/assets/react.svg" alt="logo" />
                    <span>NUU CSIE</span>
                </div>
                <nav>
                    <ul>
                        <li onClick={(e) => menu("home", e)}>
                            <a href="/home">Home</a>
                        </li>
                        <li onClick={(e) => menu("todo", e)}>
                            <a href="/todo">To Do</a>
                        </li>
                        <li onClick={(e) => menu("product", e)}>
                            <a href="/product">Product and Service</a>
                        </li>
                        <li onClick={(e) => menu("about", e)}>
                            <a href="/about">About Us</a>
                        </li>
                    </ul>
                </nav>
            </header>
            <main>{renderPage()}</main>
            <footer>
                <p>NUU CSIE | 苗栗縣苗栗市聯大1號 | 037-380000</p>
            </footer>
        </div>
    );
}

