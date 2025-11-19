import { useContext } from "react";
import "./Toggle.css";
import { LoginContext } from "../../context/LoginContext";

export function Toggle({ todo, disabled }) {
  const { handleOnChange } = useContext(LoginContext);

  return (
    <label className="switch">
      <input
        type="checkbox"
        disabled={disabled}
        defaultChecked={todo.inprogress}
        onChange={() => handleOnChange(todo._id)}
      />
      <span className="slider" />
    </label>
  );
}
