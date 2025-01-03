import style from "./TodoItem.module.css";
import PropTypes from "prop-types";
import { useState } from "react";

export default function TodoItem({ todo, toggler, update, deleteTodo }) {
    const done = todo.state ? style.done : "";
    const [isEdit, setIsEdit] = useState(false);
    const [newText, setNewText] = useState(todo.input);
    const [newDate, setNewDate] = useState(todo.date);

    const handler = () => {
        update(todo.id, newText, newDate);
        setIsEdit(false);
    };

    if (isEdit) {
        return (
            <li className={style.item}>
                <form className={style.form}>
                    <input
                        type="text"
                        className={style.input}
                        value={newText}
                        onChange={(e) => setNewText(e.target.value)}
                    />
                    <input
                        type="date"
                        className={style.input}
                        value={newDate}
                        onChange={(e) => setNewDate(e.target.value)}
                    />
                </form>
                <div className={style.buttons}>
                    <button type="button" className={style.update} onClick={handler}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="24px"
                            viewBox="0 -960 960 960"
                            width="24px"
                            fill="#e8eaed"
                        >
                            <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" />
                        </svg>
                    </button>
                    <button type="button" className={style.cancel} onClick={() => setIsEdit(false)}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="24px"
                            viewBox="0 -960 960 960"
                            width="24px"
                            fill="#e8eaed"
                        >
                            <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
                        </svg>
                    </button>
                </div>
            </li>
        );
    } else {
        return (
            <li className={style.item}>
                <div className={`${style.content} ${done}`}>
                    <div>{todo.input}</div>
                    <div>{todo.date}</div>
                </div>
                <div className={style.buttons}>
                    <button
                        type="button"
                        className={style.state}
                        onClick={(e) => toggler(todo.id, e)}
                    >
                        {todo.state ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="24px"
                                viewBox="0 -960 960 960"
                                width="24px"
                                fill="#e8eaed"
                            >
                                <path d="m424-312 282-282-56-56-226 226-114-114-56 56 170 170ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z" />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="24px"
                                viewBox="0 -960 960 960"
                                width="24px"
                                fill="#e8eaed"
                            >
                                <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Z" />
                            </svg>
                        )}
                    </button>
                    <button
                        type="button"
                        className={style.delete}
                        onClick={(e) => deleteTodo(todo.id, e)}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="24px"
                            viewBox="0 -960 960 960"
                            width="24px"
                            fill="#e8eaed"
                        >
                            <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
                        </svg>
                    </button>
                    <button type="button" className={style.edit} onClick={() => setIsEdit(true)}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="24px"
                            viewBox="0 -960 960 960"
                            width="24px"
                            fill="#e8eaed"
                        >
                            <path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z" />
                        </svg>
                    </button>
                </div>
            </li>
        );
    }
}

TodoItem.propTypes = {
    todo: PropTypes.shape({
        id: PropTypes.number.isRequired,
        input: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        state: PropTypes.bool.isRequired,
    }),
    toggler: PropTypes.func.isRequired,
    update: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
};
