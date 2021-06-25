import React, { useState } from 'react';
import TodoList from './components/TodoList';

const TodoFeature = () => {
   const initialTodo = [
      {
         id: 1,
         title: 'Object Oriented Programming',
         status: 'completed',
      },
      {
         id: 2,
         title: 'Event Driven Programming',
         status: 'new',
      },

      {
         id: 3,
         title: 'Open Source Programming',
         status: 'new',
      },
   ];

   const [todoList, setTodoList] = useState(initialTodo);
   const [filterStatus, setFilterStatus] = useState('all');

   const handleStatusChange = (id) => {
      setTodoList(
         todoList.map((todo) =>
            todo.id === id ? { ...todo, status: todo.status === 'new' ? 'completed' : 'new' } : todo
         )
      );
   };

   const handleShowAll = () => {
      setFilterStatus('all');
   };
   const handleShowCompleted = () => {
      setFilterStatus('completed');
   };
   const handleShowNew = () => {
      setFilterStatus('new');
   };
   const renderedTodoList = todoList.filter((todo) => filterStatus === 'all' || filterStatus === todo.status);

   const style = {
      display: 'flex',
      justifyContent: 'center',
      marginTop: '40px',
   };

   const styleBtn = {
      marginLeft: '20px',
      display: 'inline-block',
      padding: ' 12px 20px',
      backgroundColor: 'green',
      borderRadius: '8px',
      minWidth: '160px',
      border: 'none',
      outline: 'none',
      color: 'white',
      cursor: 'pointer',
   };

   return (
      <div>
         <TodoList todoList={renderedTodoList} onStatusChange={handleStatusChange} />
         <div style={style}>
            <button style={styleBtn} onClick={handleShowAll}>
               Show All
            </button>
            <button style={styleBtn} onClick={handleShowNew}>
               Show New
            </button>
            <button style={styleBtn} onClick={handleShowCompleted}>
               Show Completed
            </button>
         </div>
      </div>
   );
};
export default TodoFeature;
