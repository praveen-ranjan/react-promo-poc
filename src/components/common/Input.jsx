import React, { Component } from 'react';

const Input = ({name, label, value, type, placeholder, error, onChange}) => {
    return (
        <React.Fragment>
        <label>{label}</label>
        <input value={value} 
        name={name} 
        type={type} 
        className="form-control" 
        placeholder={placeholder} 
        onChange={onChange}/>
        {error && <div className="alert alert-danger">{error}</div>} 
        </React.Fragment>     
       
      );
}
 
export default Input;