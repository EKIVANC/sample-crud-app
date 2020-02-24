import React, { Component } from 'react';
import {Link} from "react-router-dom";

export default class Order extends Component {

    render() {
        return (
            <tr>
                <td>{this.props.order.order_description}</td>
                <td>{this.props.order.order_price}</td>
                <td>{this.props.order.order_priority}</td>
                <td>
                    <Link to={"/edit/"+this.props.order._id}>Edit</Link>
                </td>
            </tr>
        );
    }
}