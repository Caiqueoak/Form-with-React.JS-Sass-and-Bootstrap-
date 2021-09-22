import React, { useState } from "react";
import FormInput from "./FormInput";

const Form = () => {
	const placeHolders = [
    {placeHolder: "First Name", type: 'text'},
    {placeHolder: "Last Name", type: 'text'},
    {placeHolder: "Email Adress", type: 'email'},
    {placeHolder: "Password", type: 'password'}
  ]
	return (
		<form id="form-container">
			{/* Maps through placeHolders object and return an array of form input components */}
			{placeHolders.map((obj, index) => (
				<FormInput type={obj.type} key={index} placeHolder={obj.placeHolder} />
			))}
			<input type="submit" value="CLAIM YOUR FREE TRIAL" id="button" />
			<p id="disclaimer">
				By clicking the button, you are agreeing to our <strong>Terms and Services</strong>
			</p>
		</form>
	);
};

export default Form;
