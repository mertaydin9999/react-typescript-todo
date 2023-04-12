import React, { useState, FC, ChangeEvent } from "react";
import "./App.css";
import { todoType } from "./apptypes";
import TodoItem from "./TodoItem";

const App: FC = () => {
  const [task, setTask] = useState<string>("");
  const [workDay, setWorkDay] = useState<number>(0);
  const [todoList, setTodoList] = useState<todoType[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.name === "task") {
      setTask(event.target.value);
    } else {
      setWorkDay(Number(event.target.value));
    }
  };

  const addNewTask = () => {
    const newTask = { taskName: task, workDay: workDay };
    setTodoList([...todoList, newTask]);
    setTask("");
    setWorkDay(0);
  };
  const deleteTask = (nameToDelete: string): void => {
    setTodoList(
      todoList.filter((task) => {
        return task.taskName !== nameToDelete;
      })
    );
  };

  return (
    <div className="App">
      <div className="maincard">
        <input
          className="maincardinput"
          type="text"
          value={task}
          onChange={handleChange}
          name="task"
          placeholder="tasklarinizi giriniz"
        />
        <input
          className="maincardinput"
          type="number"
          value={workDay}
          onChange={handleChange}
          name="workDay"
          placeholder="kac gunde tamamlamalisiniz"
        />
        <button className="maincardbutton" onClick={addNewTask}>Yeni task ekle</button>
      </div>
      <div className="todocard">
        {todoList.map((task: todoType, index: number) => {
          return <TodoItem key={index} task={task} deleteTask={deleteTask} />;
        })}
      </div>
    </div>
  );
};

export default App;
