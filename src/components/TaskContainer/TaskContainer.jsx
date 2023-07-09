import { TaskBox } from './TaskBox.styled';
const TaskContainer = props => {
  return (
    <TaskBox>
      <p className='Task'>Task {props.text}</p>
      {props.children}
    </TaskBox>
  );
};

export default TaskContainer;
