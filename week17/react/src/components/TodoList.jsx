import TodoItem from "./TodoItem";
import PropTypes from "prop-types";
import style from "./TodoList.module.css";

export default function TodoList({ todos, toggler, update, deleteTodo }) {
    return (
        <ul>
            {todos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    toggler={toggler}
                    update={update}
                    deleteTodo={deleteTodo}
                />
            ))}
        </ul>
    );
}

TodoList.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            input: PropTypes.string.isRequired,
            date: PropTypes.string.isRequired,
            state: PropTypes.bool.isRequired,
        })
    ).isRequired,
    toggler: PropTypes.func.isRequired,
    update: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
};
