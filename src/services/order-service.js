import { BACK_END_URL } from "../utils/constants"
import axios from "axios";

const OrdersService = {

    get: async function getOrder() {

        try {
            const result = await axios.get(`${BACK_END_URL}`)
                .then(response => {
                    return response.data;
                })
                .catch(function (error){
                    console.log(error);
                });
            return result;
        } catch (e) {
            console.log(e)
            throw e;
        }
    },

    getById: async function getOrderById(id) {
        try {
            const result = await axios.get( `${BACK_END_URL}/${id}`).then(res => {
                     return {
                        order_description: res.data.order_description,
                        order_price: res.data.order_price,
                        order_priority: res.data.order_priority,
                        order_completed: res.data.order_completed
                    };
                }
            );
            return result;
        } catch (e) {
            console.log(e)
            throw e;
        }
    },

    update: async function updateOrder(order) {
        try {
            await axios.post( `${BACK_END_URL}/update/`+order.order_id, order).then(res => console.log(res.data));
        } catch (e) {
            console.log(e)
            throw e;
        }
    },

    create: async function createOrder(newOrder) {
        try {
            await
                axios.post(`${BACK_END_URL}/add`, newOrder)
                    .then(res => console.log(res.data));
        } catch (e) {
            console.log(e)
            throw e;
        }
    },

    delete: async function deleteOrder(id) {
        try {
            await axios.delete( `${BACK_END_URL}/${id}`).then(res => {console.log(res.data) });
        }
            catch (e) {
            console.log(e)
            throw e;
        }
    },
}

export default OrdersService