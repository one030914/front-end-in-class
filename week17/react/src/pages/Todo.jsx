import TodoList from "../components/TodoList";
import style from "./Todo.module.css";

import { useState } from "react";

function Todo() {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState("");
    const [date, setDate] = useState("");

    const addTodo = (e) =>{
        e.preventDefault();
        if(!input.trim() || !date) return;
        const newTodo = {
            id: Date.now(),
            text: input,
            date: date,
            status: false,
        }
        setTodos([...todos, newTodo]);
        setInput("");
        setDate("");
    };

    const toggler = (id, e) => {
        e.preventDefault();
        const update = todos.find((todo) => todo.id === id);
        update.status = !update.status;
        setTodos(todos.map((todo) => {todo.id !== id}));
    };

    const deleteTodo = (id, e) => {
        e.preventDefault();
        const update = todos.filter((todo) => todo.id !== id);
        setTodos(update);
    }

    return (
        <div className={style.App}>
            <h1 className={style.title}>ToDo List</h1>
            <form onSubmit={addTodo} className={style.form}>
                <input type="text" className={style.input} value={input} onChange={(e) => setInput(e.target.value)} placeholder="Add a ToDo" />
                <input type="date" className={style.input} value={date} onChange={(e) => setDate(e.target.value)} />
                <button type="submit" className={style.button}>Add</button>
            </form>
            <TodoList todos={todos} toggler={toggler} deleteTodo={deleteTodo} />
            <ul>
                {todos.map((todo) => {
                    <li key={todo.id}>
                        {`${todo.text} ${todo.date}`}
                    </li>
                })}
            </ul>
        </div>
    );
}

export default Todo;
