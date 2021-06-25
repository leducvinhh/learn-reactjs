import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import classnames from 'classnames';

TodoList.propTypes = {
   todoList: PropTypes.array,
};

TodoList.defaultProps = {
   todoList: [],
};

function TodoList({ todoList, onStatusChange }) {
   return (
      <ul className="todo-list">
         {todoList.map((todo) => {
            return (
               <li
                  onClick={(e) => {
                     e.stopPropagation();
                     onStatusChange(todo.id);
                  }}
                  className={classnames({ completed: todo.status === 'completed' })}
                  key={todo.id}
               >
                  {todo.title}
               </li>
            );
         })}
      </ul>
   );
}

export default TodoList;
