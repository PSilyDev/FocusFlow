import { DisplayToDos } from "./DisplayToDos";
import CreateToDo from "./CreateToDo";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { LoginContext } from "../context/LoginContext";
import { LandingPage } from "./LandingPage";
import { enqueueSnackbar } from "notistack";

export const MainLayout = () => {
  const navigate = useNavigate();

  const { loggedIn, setUserData, setLoggedIn, setTodos } =
    useContext(LoginContext);

  const handleLogout = () => {
    enqueueSnackbar("logout successfull!");
    // update context
    setUserData([]);
    // remove the stored token
    sessionStorage.removeItem("userInfo");
    // set Logged In to false
    setLoggedIn(false);
    // empty the todos stored
    setTodos([]);
    // navigate to main layout
    navigate("/");
  };

  return (
    <div className="flex h-full flex-col">
      {/* Glass Nav Bar */}
      <div className="mb-6 flex items-center justify-between rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm shadow-lg shadow-black/40 backdrop-blur-md">
        {/* Branding */}
        <div className="flex items-center gap-3">
          {/* Logo */}
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-500/20 ring-1 ring-indigo-400/60 shadow-md shadow-indigo-500/20">
            <span className="text-lg font-semibold text-indigo-300">✓</span>
          </div>
          {/* Text (hidden on mobile to save space) */}
          <div className="hidden sm:block">
            <h1 className="text-lg font-semibold tracking-tight sm:text-xl">
              FocusFlow
            </h1>
            <p className="text-xs text-slate-400 -mt-0.5">
              A clean, minimal todo app to keep you on track.
            </p>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-3">
          {loggedIn ? (
            <button
              type="button"
              className="rounded-xl border border-slate-700 bg-slate-900 px-4 py-2 text-xs font-medium text-slate-100 shadow-sm transition hover:bg-slate-800 hover:text-white sm:text-sm"
              onClick={handleLogout}
            >
              Logout
            </button>
          ) : (
            <>
              <Link to="/login">
                <button
                  type="button"
                  className="rounded-xl border border-slate-700 bg-slate-900 px-4 py-2 text-xs font-medium text-slate-100 shadow-sm transition hover:bg-slate-800 hover:text-white sm:text-sm"
                >
                  Login
                </button>
              </Link>
              <Link to="/signup">
                <button
                  type="button"
                  className="rounded-xl bg-indigo-600 px-4 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-indigo-500 sm:text-sm"
                >
                  Signup
                </button>
              </Link>
            </>
          )}
        </div>
      </div>

      {/* Main content */}
      {!loggedIn ? (
        <div className="h-full">
          <LandingPage />
        </div>
      ) : (
        <div className="flex h-full flex-1 flex-col gap-6 lg:flex-row">
          {/* Left: create todo / profile */}
          <div className="w-full lg:w-2/5">
            <CreateToDo />
          </div>

          {/* Right: stats + todos */}
          <div className="w-full flex-1 overflow-y-auto rounded-2xl bg-slate-950/70 p-3 shadow-lg shadow-black/40 custom-scrollbar sm:p-4">
            <DisplayToDos />
          </div>
        </div>
      )}
    </div>
  );
};
