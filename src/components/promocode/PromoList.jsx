import React, { Component } from 'react';

import PromoRow from "./PromoRow";

const PromoList = ({listings}) => {
    
return ( <div className="container">
  <div className="col col-lg-6">
        <div className="row">
        <h2>Promo Codes</h2>
        </div>

<table className="table table-striped">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Description</th>
      <th scope="col">Free Delivery</th>
      <th scope="col">Discount</th>
    </tr>
  </thead>
  <tbody>
    {
    listings.length ?  
    listings.map((list, index) =>(
      <PromoRow row={list} key={index}></PromoRow>         
    ))
    :  
    <tr>
    <td>Record not found!</td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
    }   
  </tbody>
</table>
      
        
        </div></div> );
}
 
export default React.memo(PromoList);