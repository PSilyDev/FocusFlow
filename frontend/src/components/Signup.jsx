import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { enqueueSnackbar } from "notistack";
import { api } from "../apiClient"; // <-- use shared axios instance

export function Signup() {
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await api.post("/signup", data);

      enqueueSnackbar(response.data);
      navigate("/login");
    } catch (err) {
      console.log(err);
      throw err;
    }
  };

  return (
    <div className="flex min-h-screen w-full items-center justify-center px-4 py-6">
      {/* Home / Brand Button */}
      <div className="absolute left-4 top-4">
        <Link to="/">
          <button className="rounded-xl bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-purple-500/40 transition hover:brightness-110">
            FocusFlow
          </button>
        </Link>
      </div>

      {/* Signup Card */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-md rounded-2xl border border-white/10 bg-slate-950/60 px-6 py-8 shadow-xl shadow-black/40 backdrop-blur-lg"
      >
        <h2 className="text-center text-2xl font-bold text-white">
          Create a new account
        </h2>

        <p className="mt-2 mb-6 text-center text-sm text-slate-400">
          It’s quick and easy.
        </p>

        {/* Username */}
        <div className="mt-4">
          <input
            type="text"
            placeholder="Username"
            {...register("username")}
            className="w-full rounded-xl bg-slate-900/60 px-4 py-3 text-slate-100 placeholder-slate-400 outline-none ring-1 ring-white/10 transition focus:ring-indigo-500/40"
          />
        </div>

        {/* Email */}
        <div className="mt-4">
          <input
            type="text"
            placeholder="Email"
            {...register("email")}
            className="w-full rounded-xl bg-slate-900/60 px-4 py-3 text-slate-100 placeholder-slate-400 outline-none ring-1 ring-white/10 transition focus:ring-indigo-500/40"
          />
        </div>

        {/* Password */}
        <div className="mt-4">
          <input
            type="password"
            placeholder="Password"
            {...register("password")}
            className="w-full rounded-xl bg-slate-900/60 px-4 py-3 text-slate-100 placeholder-slate-400 outline-none ring-1 ring-white/10 transition focus:ring-indigo-500/40"
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          className="mt-6 w-full rounded-xl bg-gradient-to-r from-green-500 via-green-600 to-green-700 px-4 py-3 font-semibold text-white shadow-lg shadow-green-600/30 transition hover:brightness-110"
        >
          Signup
        </button>

        {/* Footer */}
        <div className="mt-4 text-center text-slate-300">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-medium text-blue-400 hover:underline"
          >
            Login
          </Link>
        </div>
      </form>
    </div>
  );
}
