import React, { Component } from 'react';

const Checkbox = ({name, label, value, onChange}) => {
    return (
        <React.Fragment>
        <label>{label}</label>
        <input value={value} 
        name={name} 
        type="checkbox" 
        className="form-control" 
        onChange={onChange}/>
        </React.Fragment>     
       
      );
}
 
export default Checkbox;