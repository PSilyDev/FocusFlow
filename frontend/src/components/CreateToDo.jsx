import React, { useContext, useMemo } from "react";
import { useForm } from "react-hook-form";
import Avatar from "react-avatar";
import { LoginContext } from "../context/LoginContext";
import { enqueueSnackbar } from "notistack";
import { api } from "../apiClient";

function CreateToDo() {
  const { userData, fetchToDos } = useContext(LoginContext);

  const { register, handleSubmit, reset } = useForm();

  const today = new Date().toISOString().split("T")[0];

  const onSubmit = async (data) => {
    try {
      const payload = { ...data, userId: userData.userId };
      const response = await api.post("/todo", payload);

      if (response.status === 201) {
        fetchToDos();
        enqueueSnackbar(response.data.msg);
      }
      reset();
    } catch (err) {
      console.log(err);
      throw err;
    }
  };

  const avatarName = useMemo(() => {
    return `${userData.username[0]} ${userData.username[1]}`;
  }, [userData.username]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-full flex-col items-center px-3 py-4 sm:px-6 sm:py-6 lg:px-4"
    >
      {/* Avatar */}
      <div className="mt-2 flex items-center justify-center sm:mt-4">
        <Avatar
          name={avatarName}
          round={true}
          size="120"
          className="shadow-xl ring-4 ring-indigo-500/30"
        />
      </div>

      {/* Welcome Text */}
      <div className="mt-5 w-full text-center sm:mt-6">
        <p className="text-2xl font-semibold text-indigo-300">
          Welcome, {userData.username}
        </p>
        <p className="mt-1 text-sm text-slate-400 sm:mt-2">
          Your personal task manager
        </p>
      </div>

      {/* Form Container */}
      <div className="mt-6 w-full max-w-md space-y-4 rounded-2xl bg-slate-950/40 p-4 shadow-xl backdrop-blur-md ring-1 ring-white/10 sm:mt-8 sm:p-6">
        {/* Title */}
        <input
          type="text"
          placeholder="Task Title"
          {...register("title")}
          className="w-full rounded-xl bg-slate-900/60 px-4 py-3 text-slate-100 placeholder-slate-400 outline-none ring-1 ring-white/10 transition focus:ring-indigo-500/40"
        />

        {/* Description */}
        <textarea
          placeholder="Description"
          {...register("description")}
          className="h-28 w-full resize-none rounded-xl bg-slate-900/60 px-4 py-3 text-slate-100 placeholder-slate-400 outline-none ring-1 ring-white/10 transition focus:ring-indigo-500/40"
        />

        {/* Date + Priority */}
        <div className="flex w-full flex-col gap-3 sm:flex-row">
          <input
            type="date"
            {...register("date")}
            min={today}
            required
            className="flex-1 rounded-xl bg-slate-900/60 px-4 py-3 text-slate-100 outline-none ring-1 ring-white/10 transition focus:ring-indigo-500/40"
          />

          <select
            {...register("priority")}
            defaultValue=""
            required
            className="flex-1 rounded-xl bg-slate-900/60 px-4 py-3 text-slate-100 outline-none ring-1 ring-white/10 transition focus:ring-indigo-500/40"
          >
            <option value="" disabled>
              Priority
            </option>
            <option value="high">High</option>
            <option value="med">Medium</option>
            <option value="low">Low</option>
          </select>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="mt-3 w-full rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-3 font-semibold text-white shadow-lg shadow-blue-600/30 transition hover:brightness-110 sm:mt-4"
        >
          Add Todo
        </button>
      </div>

      {/* Mobile “Todos” heading (only visible on small screens) */}
      <div className="mt-12 w-full text-center sm:mt-16 lg:hidden">
        <p className="text-3xl font-semibold text-slate-500">Todos</p>
      </div>
    </form>
  );
}

export default React.memo(CreateToDo);
