import { useSelector, useDispatch } from 'react-redux';
import { removeTodo } from '../../store/todoSlice';


function Todos() {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  const removeHandler = (id) => {
    console.log(id);
    dispatch(removeTodo(id));

  };


  return (
    <>
      <h3>Todos</h3>
      {todos.map(t => (
        <li key={t.id}>{t.text} <button onClick={() => removeHandler(t.id)}>X</button></li>

      ))}
    </>
  );
}

export default Todos;
