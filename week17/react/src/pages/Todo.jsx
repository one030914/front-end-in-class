import TodoList from "../components/TodoList";
import style from "./Todo.module.css";

import { useState } from "react";

export default function Todo() {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState("");
    const [date, setDate] = useState("");

    const addTodo = (e) => {
        e.preventDefault();
        if (!input.trim() || !date) return;
        const newTodo = {
            id: Date.now(),
            input: input,
            date: date,
            state: false,
        };
        setTodos([...todos, newTodo]);
        setInput("");
        setDate("");
    };

    const change = (id, update) => {
        setTodos(todos.map((todo) => (todo.id === id ? update : todo)));
    };

    const toggler = (id, e) => {
        e.preventDefault();
        const update = todos.find((todo) => todo.id === id);
        update.state = !update.state;
        change(id, update);
    };

    const update = (id, newText, newDate) => {
        const update = todos.find((todo) => todo.id === id);
        update.input = newText;
        update.date = newDate;
        change(id, update);
    };

    const deleteTodo = (id, e) => {
        e.preventDefault();
        const update = todos.filter((todo) => todo.id !== id);
        setTodos(update);
    };

    return (
        <div className={style.App}>
            <h1 className={style.title}>To Do List</h1>
            <form onSubmit={addTodo} className={style.form}>
                <input
                    type="text"
                    className={style.input}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Add a ToDo"
                />
                <input
                    type="date"
                    className={style.input}
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                />
                <button type="submit" className={style.button}>
                    Add
                </button>
            </form>
            <TodoList todos={todos} toggler={toggler} update={update} deleteTodo={deleteTodo} />
        </div>
    );
}
