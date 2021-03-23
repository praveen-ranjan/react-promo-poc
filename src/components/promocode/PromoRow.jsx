import React, { Component } from 'react';

const PromoRow = ({ row }) => {
    return ( 
        <tr>
        <td>{row.promocode}</td>
        <td>{row.description}</td>
        <td>{row.freeDelivery === true ? "Yes" : "No" }</td>
        <td>{row.discount}</td>
      </tr>
     );
}
 
export default PromoRow;