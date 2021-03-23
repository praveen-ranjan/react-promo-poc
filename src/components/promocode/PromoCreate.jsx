import React, { useState, useEffect } from 'react';
import Joi from "joi-browser";
import Input from "../common/Input";
import Checkbox from "../common/Checkbox";
import PromoList from "./PromoList";
import  './style.css';

const PromoCreate = () => {

    //  initialize promocode object
    const initPromo = { promocode: "", description: "", discount:"", freeDelivery: false};
    const [promo, setPromo] = useState(initPromo);
    const [promoList, setPromoList] = useState([]);

    // validation schema
    const schema = {
        promocode : Joi.string().required().label("Promocode"),
        description : Joi.string().required().label("Description"),
        discount : Joi.string().required().label("Discount")
    }

    // validation
    const [errors, setErrors] = useState({});

    const validate = () => {
        const _promo =  {...promo}; delete _promo['id']; delete _promo['freeDelivery'];
        const {error}  = Joi.validate(_promo, schema, {abortEarly: false});
        if(!error) return null;

        const errors = {};
        for(let item of error.details){ 
            errors[item.path[0]] = item.message;
        }
        return errors;    
    }

    const validateProperty = ({name, value}) => {
      const obj = {[name]: value};
      const _schema = {[name]: schema[name]};
      const {error} =  Joi.validate(obj, _schema);  
      return error ? error.details[0].message : null;
    }

    const handleChange = ({currentTarget: input}) => {
       
       const _errors = {...errors};
       const errorMessage = validateProperty(input);
       if(errorMessage) _errors[input.name] = errorMessage;
       else delete _errors[input.name];

        const _promo = {...promo};
        _promo[input.name] = input.value;        
        setPromo(_promo);
        setErrors(_errors);
    }

    const handleSwitch = e => {
        const {name} = e.target;       
        setPromo({...promo, [name]: !promo.freeDelivery});
    }

    const submitForm = (e) => {
        e.preventDefault();
        const errors = validate();
        setErrors(errors || {} );
        if(errors) return;
        setPromoList([promo,...promoList]);    
    }

    useEffect(() => {
        setPromo({...initPromo});
    },[promoList])

    return ( 
        <div className="container" data-testid="promo-create-1">
           <h2>+ Create New Promo Code</h2>
        <div className="col col-lg-6">
        <form method="post">
        <div className="form-group">
         
          <Input label="Code"
            value={promo.promocode}
            name="promocode"
            type="text"
            placeholder="Promocode" 
            error={errors.promocode}
            onChange={handleChange}
          ></Input>
        </div>
        <div className="form-group">
         
         <Input label="Description"
            value={promo.description}
            name="description"
            type="text"
            placeholder="Description" 
            error={errors.description}
            onChange={handleChange}
          ></Input>
        </div>

        <div className="form-row">
        <div className="form-group col-md-6">
      
          <Input label="Discount (USD)"
            value={promo.discount}
            name="discount"
            type="number"
            placeholder="Discount" 
            error={errors.discount}
            onChange={handleChange}
          ></Input>
        
        </div>

        <div className="form-group col-md-6">

        <Checkbox label="Free delivery?"
            value={promo.freeDelivery}
            name="freeDelivery"
            onChange={handleSwitch}
          ></Checkbox>          

        </div>

        </div>

       
        <button type="submit" className="btn btn-primary" onClick={submitForm}>Create Promo Code</button>
      </form>
      </div>
      <br/>
      <PromoList listings={promoList}></PromoList>
      </div> );
}
 
export default PromoCreate;