import React from 'react';
import "./Button.css"; 

function LoginButton(props) {
const handleLogin = () => {
// login logic here
console.log('User logged in!');
};

return (
<div className="ButtonContainer">
<div className="Button">
<button className="LoginButton" onClick={handleLogin}>
{props.text}
</button>
</div>
</div>
);
}

export default LoginButton;