/***************************************************************************************/
import React, { useState } from 'react';
/***************************************************************************************/


function SignUpForm() {
  const [isChecked, setIsChecked] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isChecked) {
      // submit the form
      console.log('Form submitted!');
    } else {
      // display an error message
      console.log('Please agree to the terms and conditions.');
    }
  };

  const handleCheck = (e) => {
    setIsChecked(e.target.checked);
  };

  /***************************************************************************************/
  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input type="checkbox" checked={isChecked} onChange={handleCheck} />
        Je lis et j'accepte les termes et conditions
      </label>
      <br />
      <button type="submit">S'inscrire</button>
    </form>
  );
}
/***************************************************************************************/
export default SignUpForm;
