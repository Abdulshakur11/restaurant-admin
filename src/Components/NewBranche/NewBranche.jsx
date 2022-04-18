import "./NewBranche.css";
import { useMutation, useQuery } from "@apollo/client";
import { NEW_BRANCHE, ALL_BRANCHES, ALLRESTAURANTS } from "../../Query";
import { useRef } from "react";


function NewBrnache() {
  const { data: all_branches } = useQuery(ALL_BRANCHES);
  const { data: all_restaurants } = useQuery(ALLRESTAURANTS);
  const [NewBranche] = useMutation(NEW_BRANCHE, {
    update: (cache, data) => {
      console.log(data);
    }
  });

  const brancheNameRef = useRef();
  const restaurantIdRef = useRef();

  const handleBrnacheSubmit = e => {
    NewBranche({
      variables: {
        branche_name: brancheNameRef.current.value,
        restaurantId: restaurantIdRef.current.value
      }
    });
    alert(`${brancheNameRef.current.value} is added successfuly`)
  };

  return (
    <>

      <button type="button" className="btn btn-primary add-btn" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@fat">Add branche</button>

      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">New branche</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <form onSubmit={handleBrnacheSubmit}>
              <div className="modal-body">
                <label className="label" htmlFor="branche">Branche name</label>
                <input ref={brancheNameRef} id="branche" className="form-control category-input" type="text" name="brancheName" placeholder="New Branche" required />

                <label className="label" htmlFor="">Choose restaurant</label>
                <select ref={restaurantIdRef} className="form-select-sm select select-br" name="restaurantId" required >
                  <option defaultValue="choose" hidden value="choose">Choose</option>
                  {
                    all_restaurants && all_restaurants.getAllRestaurants.map((e, i) => (
                      <option key={i} value={e.id}>{e.restaurant_name}</option>
                    ))
                  }
                </select>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button className="btn btn-primary" id="menuBtn" type="submit">Add</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <h5 className="table-title">Branches</h5>
      <div className="branche-table">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Branche name</th>
            </tr>
          </thead>
          <tbody>
            {
              all_branches && all_branches.getAllBranches.map((e, i) => (
                <tr key={i}>
                  <td>{e.id}</td>
                  <td>{e.branche_name}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </>
  )
}

export default NewBrnache;