import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Toggle } from "./toggle/Toggle";
import ToDoCard from "./ToDoCard";
import { NumberField } from "./NumberField";
import { LoginContext } from "../context/LoginContext";

export function DisplayToDos() {
  const { todos, fetchToDos, updateCompleted } = useContext(LoginContext);

  const [progressCount, setProgressCount] = useState(0);
  const [completedCount, setCompletedCount] = useState(0);
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    fetchToDos().then(() => {
      checkValid();
    });
  }, []);

  useEffect(() => {
    calculateProgressBar(todos);
  }, [todos]);

  const checkValid = () => {
    let today = new Date();
    const options = { year: "numeric", month: "long", day: "numeric" };

    today = today.toLocaleDateString("en-US", options);
    todos.map((todo) => {
      if (today > formatDateString(todo.date)) {
        updateCompleted(todo._id);
      }
    });
  };

  const calculateProgressBar = (todos) => {
    const inprogress = todos.filter((item) => item.inprogress === true);
    const completed = todos.filter((item) => item.completed === true);
    const total = todos.filter((item) => item.completed === false);

    setProgressCount(inprogress.length);
    setCompletedCount(completed.length);
    setTotalCount(total.length);
  };

  const formatDateString = (dateString) => {
    const cleanedDateString = dateString.replace(/[^0-9-:TZ.]/g, "");
    const date = new Date(cleanedDateString);
    const options = { year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString("en-US", options);
  };

  return (
    <div className="flex h-full flex-col rounded-2xl">
      {todos.length === 0 ? (
        <div className="flex h-full flex-col items-center justify-center rounded-2xl border border-dashed border-slate-700/70 bg-slate-950/60 px-4 py-10 text-center">
          <p className="text-lg font-semibold text-slate-200">No todos yet</p>
          <p className="mt-2 max-w-sm text-sm text-slate-400">
            Start by adding a new task from the panel on the left.
          </p>
        </div>
      ) : (
        <>
          {/* Stats row */}
          <div className="mt-4 w-full px-2 sm:px-0">
            <div className="mx-auto grid max-w-md grid-cols-3 gap-3 rounded-2xl bg-slate-950/70 px-3 py-4 shadow-inner shadow-black/40 sm:max-w-xl sm:gap-4 sm:px-4">
              <div className="flex flex-col items-center justify-center">
                <NumberField count={progressCount} color="orange" />
                <p className="mt-1 text-xs font-medium text-slate-200 sm:text-sm">
                  In Progress
                </p>
              </div>

              <div className="flex flex-col items-center justify-center">
                <NumberField count={completedCount} color="green" />
                <p className="mt-1 text-xs font-medium text-slate-200 sm:text-sm">
                  Completed
                </p>
              </div>

              <div className="flex flex-col items-center justify-center">
                <NumberField count={totalCount} color="red" />
                <p className="mt-1 text-xs font-medium text-slate-200 sm:text-sm">
                  Todo&apos;s
                </p>
              </div>
            </div>
          </div>

          {/* List of todos */}
          <div className="mt-4 flex-1 overflow-y-auto pb-4 custom-scrollbar">
            <div className="mx-auto flex w-full max-w-xl flex-col px-2 sm:px-0">
              {todos?.map((todo, index) => (
                <div key={index} className="mb-4">
                  <ToDoCard
                    todo={todo}
                    date={formatDateString(todo.date)}
                    index={index}
                  />
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
