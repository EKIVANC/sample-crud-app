import React, { Component } from 'react';
import OrdersService from "../services/order-service";

export default class EditOrder extends Component {

    constructor(props) {
        super(props);

        this.onChangeOrderDescription = this.onChangeOrderDescription.bind(this);
        this.onChangeOrderPrice = this.onChangeOrderPrice.bind(this);
        this.onChangeOrderPriority = this.onChangeOrderPriority.bind(this);
        this.onChangeOrderCompleted = this.onChangeOrderCompleted.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            order_description: '',
            order_price: 0,
            order_priority: '',
            order_completed: false
        }
    }

    async componentDidMount() {
        const data = await OrdersService.getById(this.props.match.params.id)
        this.setState( {...data} );
    }


    onChangeOrderDescription(e) {
        this.setState({
            order_description: e.target.value
        });
    }

    onChangeOrderPrice(e) {
        this.setState({
            order_price: e.target.value
        });
    }

    onChangeOrderPriority(e) {
        this.setState({
            order_priority: e.target.value
        });
    }

    onChangeOrderCompleted(e) {
        this.setState({
            order_completed: !this.state.order_completed
        });
    }

    async onSubmit(e) {
        e.preventDefault();
        const order = {
            order_description: this.state.order_description,
            order_price: this.state.order_price,
            order_priority: this.state.order_priority,
            order_completed: this.state.order_completed,
            order_id: this.props.match.params.id
        };
        console.log(order);

        await OrdersService.update(order);

        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <h3 align="center">Update Order</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Description: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.order_description}
                                onChange={this.onChangeOrderDescription}
                        />
                    </div>
                    <div className="form-group">
                        <label>Price: </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.order_price}
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
                                    checked={this.state.order_priority==='Low'}
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
                                    checked={this.state.order_priority==='Medium'}
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
                                    checked={this.state.order_priority==='High'}
                                    onChange={this.onChangeOrderPriority}
                            />
                            <label className="form-check-label">High</label>
                        </div>
                    </div>
                    <div className="form-check">
                        <input  className="form-check-input"
                                id="completedCheckbox"
                                type="checkbox"
                                name="completedCheckbox"
                                onChange={this.onChangeOrderCompleted}
                                checked={this.state.order_completed}
                                value={this.state.order_completed}
                        />
                        <label className="form-check-label" htmlFor="completedCheckbox">
                            Completed
                        </label>
                    </div>

                    <br />

                    <div className="form-group">
                        <input type="submit" value="Update Order" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}