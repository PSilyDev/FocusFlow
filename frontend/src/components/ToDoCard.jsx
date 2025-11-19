import { useContext } from "react";
import { Toggle } from "./toggle/Toggle";
import { LoginContext } from "../context/LoginContext";

export default function ToDoCard({ todo, date }) {
  const { updateCompleted, setTrigger, setDeleteId } =
    useContext(LoginContext);

  const handleDeleteClick = (id) => {
    setDeleteId(id);
    setTrigger(true);
  };

  const statusLabel = todo.completed
    ? "Completed"
    : todo.inprogress
    ? "In Progress"
    : "Pending";

  const statusColor = todo.completed
    ? "bg-emerald-500/10 text-emerald-300 border-emerald-400/60"
    : todo.inprogress
    ? "bg-amber-500/10 text-amber-300 border-amber-400/60"
    : "bg-slate-500/10 text-slate-300 border-slate-400/60";

  const priorityLabel =
    todo.priority === "high"
      ? "High"
      : todo.priority === "med"
      ? "Medium"
      : todo.priority === "low"
      ? "Low"
      : null;

  const priorityColor =
    todo.priority === "high"
      ? "bg-red-500/15 text-red-300 border-red-400/60"
      : todo.priority === "med"
      ? "bg-amber-500/15 text-amber-200 border-amber-400/60"
      : todo.priority === "low"
      ? "bg-emerald-500/15 text-emerald-300 border-emerald-400/60"
      : "bg-slate-500/10 text-slate-300 border-slate-500/50";

  return (
    <div className="group rounded-2xl border border-white/5 bg-slate-950/70 p-4 shadow-lg shadow-black/40 backdrop-blur-md transition hover:border-indigo-500/50 hover:shadow-indigo-500/30 sm:p-5">
      {/* Top Row */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div className="space-y-2">
          {/* Title + Priority */}
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="text-lg font-semibold text-slate-50 sm:text-xl break-words">
              {todo.title}
            </h3>

            {priorityLabel && (
              <span
                className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium ${priorityColor}`}
              >
                Priority: {priorityLabel}
              </span>
            )}
          </div>

          <p className="text-sm text-slate-400 break-words sm:text-base">
            {todo.description}
          </p>
        </div>

        {/* Date + Status */}
        <div className="flex flex-col items-end gap-2 text-right">
          <span className="inline-flex items-center rounded-full bg-slate-900/80 px-3 py-1 text-xs font-medium text-slate-200 ring-1 ring-white/10 sm:text-sm">
            {date}
          </span>

          <span
            className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-[11px] font-medium sm:text-xs ${statusColor}`}
          >
            {statusLabel}
          </span>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="mt-4 flex flex-col gap-4 border-t border-slate-800 pt-4 sm:flex-row sm:items-center sm:justify-between">
        {/* Toggle */}
        {!todo.completed ? (
          <div className="flex items-center gap-2">
            <Toggle todo={todo} id={todo.id} />
            <span className="text-xs font-medium text-slate-300 sm:text-sm">
              In Progress
            </span>
          </div>
        ) : (
          <div className="text-xs font-medium uppercase tracking-wide text-emerald-300 sm:text-sm">
            Task completed
          </div>
        )}

        {/* Actions */}
        <div className="flex items-center justify-end gap-3 flex-wrap sm:flex-nowrap">
          {/* Delete */}
          <button
            onClick={() => handleDeleteClick(todo._id)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-slate-900/80 ring-1 ring-red-500/40 transition hover:bg-red-500/20 hover:ring-red-400"
            aria-label="Delete todo"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="h-4 w-4 sm:h-5 sm:w-5"
            >
              <path
                fill="#f97373"
                d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM184 232H328c13.3 0 24 10.7 24 24s-10.7 24-24 24H184c-13.3 0-24-10.7-24-24s10.7-24 24-24z"
              />
            </svg>
          </button>

          {/* Mark complete */}
          <button
            className="rounded-xl bg-gradient-to-r from-lime-500 to-emerald-500 px-3 py-2 text-xs font-semibold text-white shadow-md shadow-lime-500/30 transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-40 sm:text-sm"
            onClick={() => updateCompleted(todo._id)}
            disabled={todo.completed}
          >
            MARK COMPLETE
          </button>
        </div>
      </div>
    </div>
  );
}
