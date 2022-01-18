import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";

import { handleAddUser, openModal } from "../../../store/actions";

import styles from "./auth.module.css";
import ComboBox, { Option } from "./ComboBox";

function SignUp({ handleAddUser, openModal }) {
  const [avatar, setAvatar] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  useEffect(() => (document.title = "Sign up - Would You Rather App"), []);

  const items = ["male0", "male1", "female0", "female1"];

  const handleAdd = () => {
    if (avatar.length && name.length && username.length) {
      handleAddUser(
        username.toLowerCase(),
        name.replace(/^\w|\s\w/g, (c) => c.toUpperCase()).replaceAll(),
        avatar
      );
      navigate("/sign-in");
    } else {
      if (!name.length) openModal("Please enter your name");
      else if (!username.length) openModal("Please enter your username");
      else if (!avatar.length) openModal("Please select your avatar");
    }
  };

  return (
    <>
      <h2>Sign Up</h2>

      <div className={styles.wrapper}>
        <ComboBox
          setVal={setAvatar}
          placeHolder="Select your avatar"
          slideUP={true}
          style={{ gridRow: "span 2" }}
        >
          {items.map((item) => (
            <Option key={item} dataVal={`/img/avatar/${item}.svg`}>
              <img
                src={`/img/avatar/${item}.svg`}
                alt={`Avatar of ${item.slice(0, -1)}`}
              />
            </Option>
          ))}
        </ComboBox>

        <input
          type="text"
          name="name"
          value={name}
          className="input"
          placeholder="Enter your name..."
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          name="username"
          value={username}
          className="input"
          placeholder="Enter your username..."
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>

      <button className="btn" onClick={handleAdd}>
        Submit
      </button>
    </>
  );
}

export default connect(null, { handleAddUser, openModal })(SignUp);
