import React, { useState,useEffect } from "react";
import FormSettings from "./FormSettings";
import Navbar from "../components/Navbar";
import "../pages/Settings.css";
import InputButton from "../Components_login/InputButton";
import axios from "axios";

function ProfilePage() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const storedUser = JSON.parse(localStorage.getItem("currentUser"));
        console.log('currentUser:', storedUser);
        console.log('currentUser_id:', storedUser._id);
        const response = await axios.get(`https://simulify.onrender.com/users/${storedUser._id}`);
        const user = response.data;
        setEmail(user.email);
        setUsername(user.username);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  
  
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
  const handleClick = async () => {
    try {
      const storedUser = JSON.parse(localStorage.getItem("currentUser"));
      console.log('currentUser:', storedUser);
      console.log('currentUser_id:', storedUser._id);
      const response = await axios.put(`https://simulify.onrender.com/users/${storedUser._id}/username`, { username });
      const response1 = await axios.put(`https://simulify.onrender.com/users/${storedUser._id}/email`, { email });
      const updatedUser = response.data;
      const updatedUser1 = response1.data;
      setUsername(updatedUser.username);
      setEmail(updatedUser1.email);
      setIsEditing(false);
    } catch (error) {
      console.error(error);
    }
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
                placeholer='Email'
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
                placeholer='Nom d utilisateur'
              />
            </div>
          </div>
        </div>
        {isEditing && (
          <div className="TwoButtons">
            <button className="sauvegarder" type="submit" onClick={handleClick}>
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
