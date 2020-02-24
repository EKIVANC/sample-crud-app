import React, { Component } from 'react';
import OrdersService from "../services/order-service";

export default class CreateOrder extends Component {
    constructor(props) {
        super(props);

        this.onChangeOrderDescription = this.onChangeOrderDescription.bind(this);
        this.onChangeOrderPrice = this.onChangeOrderPrice.bind(this);
        this.onChangeOrderPriority = this.onChangeOrderPriority.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            Order_description: '',
            Order_price: 0,
            Order_priority: '',
            Order_completed: false
        }
    }

    onChangeOrderDescription(e) {
        this.setState({
            Order_description: e.target.value
        });
    }

    onChangeOrderPrice(e) {
        this.setState({
            Order_price: e.target.value
        });
    }

    onChangeOrderPriority(e) {
        this.setState({
            Order_priority: e.target.value
        });
    }

    async onSubmit(e) {
        e.preventDefault();

        const newOrder = {
            order_description: this.state.Order_description,
            order_price: this.state.Order_price,
            order_priority: this.state.Order_priority,
            order_completed: this.state.Order_completed
        };

        await OrdersService.create(newOrder);

        this.setState({
            Order_description: '',
            Order_price: '',
            Order_priority: '',
            Order_completed: false
        })
        this.props.history.push('/');
    }

    render() {
        return (
            <div style={{marginTop: 10}}>
                <h3>Create New Order</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Description: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.Order_description}
                                onChange={this.onChangeOrderDescription}
                        />
                    </div>
                    <div className="form-group">
                        <label>Price: </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.Order_price}
                            onChange={this.onChangeOrderPrice}
                        />
                    </div>
                    <div className="form-group">
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input"
                                    type="radio"
                                    name="priorityOptions"
                                    id="priorityLow"
                                    value="Low"
                                    checked={this.state.Order_priority==='Low'}
                                    onChange={this.onChangeOrderPriority}
                            />
                            <label className="form-check-label">Low</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input"
                                    type="radio"
                                    name="priorityOptions"
                                    id="priorityMedium"
                                    value="Medium"
                                    checked={this.state.Order_priority==='Medium'}
                                    onChange={this.onChangeOrderPriority}
                            />
                            <label className="form-check-label">Medium</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input"
                                    type="radio"
                                    name="priorityOptions"
                                    id="priorityHigh"
                                    value="High"
                                    checked={this.state.Order_priority==='High'}
                                    onChange={this.onChangeOrderPriority}
                            />
                            <label className="form-check-label">High</label>
                        </div>
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Create Order" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}