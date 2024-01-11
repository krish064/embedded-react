import React, { useEffect, useState } from "react";
import { fieldTypes } from "./constants";
import "./App.css";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [isFormDirty, setFormDirty] = useState(false);

  const handleSubmit = () => {
    console.log({
      username,
      password,
    });
    resetFields();
  };

  const resetFields = () => {
    setUsername(() => "");
    setPassword(() => "");
    setFormDirty(false);
  };

  const onFieldChange = (value, changeType) => {
    setFormDirty(true);
    if (changeType === fieldTypes.username) {
      setUsername(value);
    } else {
      setPassword(value);
    }
  };

  useEffect(() => {
    function confirmNavigation(event) {
      if (isFormDirty) {
        event.preventDefault();
      }
    }

    window.addEventListener("beforeunload", confirmNavigation);

    return () => {
      window.removeEventListener("beforeunload", confirmNavigation);
    };
  }, [isFormDirty]);

  return (
    <div className="App">
      <section className="app-form">
        <form className="auth">
          <label className={"formItem"}>
            <span>Username</span>
            <input
              type="text"
              name="username"
              value={username}
              onChange={(event) =>
                onFieldChange(event.target.value, fieldTypes.username)
              }
            />
          </label>
          <label className={"formItem"}>
            <span>Password</span>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(event) =>
                onFieldChange(event.target.value, fieldTypes.password)
              }
            />
          </label>
          <div className={"formItem"}>
            <input
              disabled={!isFormDirty}
              className="submitButton"
              type="button"
              value="Login"
              onClick={handleSubmit}
            />
          </div>
        </form>
      </section>
    </div>
  );
}

export default App;
