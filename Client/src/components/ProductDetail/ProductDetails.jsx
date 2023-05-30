import React from 'react';
import { useParams } from 'react-router-dom';
import "./ProductDetails.css";

function ProductDetails() {
    const { id, name, type } = useParams();
    //console.log(id, name, type);

    return (
        <div className='product-details'>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th></th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>{name}</td>
                        <td>{type}</td>
                        <td>Buy</td>
                    </tr>
                </tbody>

            </table>
        </div>
    );
}

export default ProductDetails;
