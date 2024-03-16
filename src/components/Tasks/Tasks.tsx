import { ChangeEvent, KeyboardEvent, MouseEvent, useState } from "react";
import { Task } from "../../types/Types";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { addTask, removeTask, setDone } from "../../store/reducers/TasksSlice";
import { v4 as uuidv4 } from "uuid";

export const Tasks = () => {
  const tasks = useAppSelector((state) => state.tasks.tasks);
  const dispatch = useAppDispatch();

  const [task, setTask] = useState<Task>({
    date: "",
    id: "",
    name: "",
    isDone: false,
  });

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setTask({
      date: "",
      id: e.target.id,
      name: e.target.value,
      isDone: false,
    });
  };

  const onKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      dispatch(addTask(task));
      setTask({ date: "", id: "", name: "", isDone: false });
    }
  };

  const onClickRemoveHandler = (e: MouseEvent<HTMLButtonElement>) => {
    dispatch(removeTask(e.currentTarget.id));
  };

  const onChangeDoneHandler = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setDone(e.target.id));
  };

  return (
    <>
      <input
        type="text"
        onChange={onChangeHandler}
        onKeyDown={onKeyDownHandler}
        id={uuidv4()}
        value={task.name}
      />
      {tasks.map((task) => {
        return (
          <div key={uuidv4()}>
            <input
              type="text"
              value={task.name}
              onChange={onChangeHandler}
              onKeyDown={onKeyDownHandler}
              id={task.id}
            />
            <button id={task.id} onClick={onClickRemoveHandler}>
              x
            </button>
            <input
              type="checkbox"
              checked={task.isDone}
              id={task.id}
              onChange={onChangeDoneHandler}
            />
          </div>
        );
      })}
    </>
  );
};
