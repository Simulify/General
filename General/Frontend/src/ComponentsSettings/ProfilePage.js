import React, { useState } from "react";
import FormSettings from "./FormSettings";
import Navbar from "../components/Navbar";
import "../pages/Settings.css";
import InputButton from "../Components_login/InputButton";

function ProfilePage() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  const handleModify = () => {
    setIsEditing(true);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // send the form data to the backend 
    console.log({
      email,
      username,
    });
    setIsEditing(false);
  };

  return (
    <div className="ProfilePage">
      <Navbar label="Parametres" />
      <FormSettings isEditing={isEditing} handleModify={handleModify} />
      <form onSubmit={handleSubmit}>
        <div className="ProfileContainer">
          <div className="inputs">
            <div className="Email">
              <label htmlFor="email">E-mail</label>
              <InputButton
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                readOnly={!isEditing} 
                placeholer='email'
              />
            </div>
            <div className="Username">
              <label htmlFor="username">Nom d'utilisateur</label>
              <InputButton
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                readOnly={!isEditing} 
                placeholer='nom d utilisateur'
              />
            </div>
          </div>
        </div>
        {isEditing && (
          <div className="TwoButtons">
            <button className="sauvegarder" type="submit">
              Sauvegarder
            </button>
            <button className="annuler" type="button" onClick={handleCancel}>
              Annuler
            </button>
          </div>
        )}
      </form>
    </div>
  );
}

export default ProfilePage;
