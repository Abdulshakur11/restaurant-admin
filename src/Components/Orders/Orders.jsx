import "./Orders.css";
import { GET_ORDERS } from "../../Query";
import { useQuery } from "@apollo/client";
import Moment from "react-moment";

function Orders() {
  const { data: orders } = useQuery(GET_ORDERS);

  return (
    <>
      <h5 className="table-title">Orders</h5>
      <div className="table-wrapper">
        {
          <table className="table table-striped">
            <thead>
              <tr>
                <th>ID</th>
                <th>Username</th>
                <th>Location</th>
                <th>Phone number</th>
                <th>Food name</th>
                <th>Food price</th>
                <th>Food count</th>
                <th>Ordered time</th>
              </tr>
            </thead>
            <tbody>
              {
                orders && orders.getOrders.map((e, i) => (
                  <tr key={i}>
                    <td>{e.id}</td>
                    <td>{e.username}</td>
                    <td>{e.location}</td>
                    <td>{e.phone_number}</td>
                    <td>{e.food_name}</td>
                    <td>{e.food_price}</td>
                    <td>{e.food_count}</td>
                    <td><Moment fromNow>{e.createdAt}</Moment></td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        }
      </div>
    </>
  )
};

export default Orders;