import "./NewRestaurant.css";
import { useRef } from "react"
import { useQuery, useMutation } from "@apollo/client";
import { NEW_RESTAURANT, ALLRESTAURANTS, CATEGORIES } from "../../Query";

function NewRestaurant() {
  const { data: categories } = useQuery(CATEGORIES);
  const { data: allRestaurants } = useQuery(ALLRESTAURANTS);

  const restaurantRef = useRef();
  const categoryIdRef = useRef();

  const [NewRestaurant] = useMutation(NEW_RESTAURANT, {
    update: (cache, data) => {
      console.log(data);
    }
  });

  const handleRestSubmit = (e) => {
    NewRestaurant({
      variables: {
        restaurant_name: restaurantRef.current.value,
        categoryId: categoryIdRef.current.value
      }
    });
    alert(`${restaurantRef.current.value} is added successfuly`)
  }

  return (
    <>

      <button type="button" className="btn btn-primary add-btn" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@fat">Add restaurant</button>
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">New message</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <form onSubmit={handleRestSubmit}>
              <div className="modal-body">
                <label className="label" htmlFor="restaurant-lable">Restaurant name</label>
                <input ref={restaurantRef} className="form-control category-input" id="restaurant-lable" type="text" name="restaurant_name" placeholder="New Restaurant" required />

                <label className="label" htmlFor="rsaturant-lable">Choose category</label>
                <select ref={categoryIdRef} className="form-select-sm select select-res" name="categoryId">
                  <option defaultValue="choose" hidden value="choose">Choose</option>
                  {
                    categories && categories.getCategories.map((e, i) => (
                      <option key={i} value={e.id}>{e.category_name}</option>
                    ))
                  }
                </select>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="submit" className="btn btn-primary">Add</button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <h5 className="table-title">Restaurants:</h5>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Restaurant name</th>
          </tr>
        </thead>
        <tbody>
          {
            allRestaurants && allRestaurants.getAllRestaurants.map((e, i) => (
              <tr key={i}>
                <td>{e.id}</td>
                <td>{e.restaurant_name}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </>
  )
};

export default NewRestaurant;