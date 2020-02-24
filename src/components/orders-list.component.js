import React, { Component } from 'react';
import Order from './order.component'
import OrdersService from "../services/order-service";


export default class OrdersList extends Component {

    constructor(props) {
        super(props);
        this.state = {orders: []};
    }

    async componentDidMount() {
        const serviceResult = await OrdersService.get();
        this.setState({ orders: serviceResult });
    }

    render() {
        return (
            <div>
                <h3>Orders List</h3>
                <table className="table table-striped" style={{ marginTop: 20 }} >
                    <thead>
                    <tr>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Priority</th>
                        <th>Update</th>
                    </tr>
                    </thead>
                    <tbody>
                    { this.orderList() }
                    </tbody>
                </table>
            </div>
        )
    }

    orderList() {
        return this.state.orders.map(function(currentOrder, i){
            return <Order order={currentOrder} key={i} />;
        })
    }
}