import { useEffect, useState } from "react";
import "./App.css";

import { Signup } from "./components/Signup";
import { Login } from "./components/Login";
import { MainLayout } from "./components/MainLayout.jsx";
import { Route, Routes } from "react-router-dom";
import { LoginContext } from "./context/LoginContext.js";
import { jwtDecode } from "jwt-decode";
import { enqueueSnackbar } from "notistack";
import { Modal } from "./components/modal/Modal.jsx";
import { api } from "./apiClient"; // 👈 new import

function App() {
  const [todos, setTodos] = useState([]);
  const [userData, setUserData] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [trigger, setTrigger] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  // Restore session on refresh
  useEffect(() => {
    if (
      Object.keys(userData)?.length === 0 &&
      sessionStorage.getItem("userInfo") !== null
    ) {
      const userInfo = JSON.parse(sessionStorage.getItem("userInfo"));

      if (!userInfo.token) {
        console.log("token not found!");
      } else {
        try {
          const decodedToken = jwtDecode(userInfo.token);

          if (decodedToken.username === userInfo.username) {
            setUserData(userInfo);
            setLoggedIn(true);
          }
        } catch (err) {
          console.error(err);
        }
      }
    }
  }, []);

  const fetchToDos = async () => {
    try {
      const response = await api.post("/todos", {
        userId: userData.userId,
      });

      const sortedToDos = response.data.payload.sort(
        (a, b) => new Date(a.date) - new Date(b.date)
      );

      setTodos(sortedToDos || []);
    } catch (err) {
      console.log("Error while fetching, error - ", err);
    }
  };

  const updateCompleted = async (id) => {
    try {
      const response = await api.put("/completed", { id });

      if (response.status === 200) {
        fetchToDos();
        enqueueSnackbar(response.data.msg);
      }
    } catch (err) {
      console.log("Error while marking todo as completed, error - ", err);
    }
  };

  const handleOnChange = async (id) => {
    try {
      const response = await api.put("/inprogress", { id });

      if (response.status === 200) {
        fetchToDos();
        enqueueSnackbar(response.data.msg);
      }
    } catch (err) {
      console.log("Error while updating, error - ", err);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await api.post("/delete", { id });

      if (response.status === 200) {
        fetchToDos();
      }
      enqueueSnackbar(response.data.msg);
    } catch (err) {
      console.log("Error while deleting todo, error - ", err);
    }
  };

  const getSelected = (selected) => {
    if (selected === "yes") {
      handleDelete(deleteId);
    }
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-black via-slate-950 to-black text-slate-100">
      <LoginContext.Provider
        value={{
          fetchToDos,
          updateCompleted,
          handleOnChange,
          userData,
          setUserData,
          loggedIn,
          setLoggedIn,
          todos,
          setTodos,
          handleDelete,
          trigger,
          setTrigger,
          setDeleteId,
        }}
      >
        {/* Page Container */}
        <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-4 py-4 sm:px-6 sm:py-6 lg:px-10 lg:py-2">
          <main className="flex-1">
            <div className="rounded-2xl border border-white/5 bg-black/30 p-4 shadow-xl shadow-black/40 backdrop-blur-md sm:p-6 lg:p-8">
              <Routes>
                <Route path="/" element={<MainLayout />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
              </Routes>
            </div>
          </main>
        </div>
      </LoginContext.Provider>

      {/* Global modal */}
      <Modal
        trigger={trigger}
        setTrigger={setTrigger}
        getSelected={getSelected}
      />
    </div>
  );
}

export default App;
