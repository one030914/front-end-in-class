import TodoItem from "./TodoItem"
import PropTypes from "prop-types"

function TodoList({todos, toggler, deleteTodo}){
    return (
        <ul>
            {
                todos.map((todo) => {
                    <TodoItem key={todo.id} todo={todo} toggler={toggler} deleteTodo={deleteTodo} />
                })
            }
        </ul>
    );
}

export default TodoList;

TodoList.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
            status: PropTypes.bool.isRequired,
        })
    ).isRequired,
    toggler: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
}