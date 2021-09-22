import React from 'react';

const FormInput = (props) => {
  return (  
    <input
    required
    className='form-imput'
    type="text" 
    placeholder={props.placeHolder}
    type={props.type}
    />
  );
}

export default FormInput;