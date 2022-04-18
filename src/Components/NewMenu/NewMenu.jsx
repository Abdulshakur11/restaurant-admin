import "./NewMenu.css";
import { useMutation, useQuery } from "@apollo/client";
import { MENUS, ALL_BRANCHES, NEW_MENU } from "../../Query";
import { useRef, useState } from "react";

function NewMenu() {
  const { data: all_branches } = useQuery(ALL_BRANCHES);
  const [id, setId] = useState();

  // By default 1 so as not to issue a bad request
  const { data: menus } = useQuery(MENUS, {
    variables: { branchId: id || 1 }
  });

  const [NewMenu] = useMutation(NEW_MENU, {
    update: (cache, data) => {
      console.log(data);
    }
  })

  const handleBrancheChange = (e) => {
    setId(e.target.value);
  };

  const handleChange = () => {
    const menuBtn = document.getElementById('menuBtn')
    menuBtn.disabled = false
  };

  const foodNameRef = useRef();
  const foodPriceRef = useRef();
  const brancheIdRef = useRef();


  const handleMenuSubmit = (e) => {
    NewMenu({
      variables: {
        food: foodNameRef.current.value,
        price: foodPriceRef.current.value - 0,
        branchId: brancheIdRef.current.value
      }
    });
    alert(`${foodNameRef.current.value} is added successfuly`)
  };

  return (
    <>


      <button type="button" className="btn btn-primary add-btn" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@fat">Add menu</button>

      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">New menu</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <form onSubmit={handleMenuSubmit}>
              <div className="modal-body">
                <label className="label" htmlFor="food_name">Food name</label>
                <input className="form-control" ref={foodNameRef} id="food_name" type="text" name="food_name" placeholder="Food name" required />
                <label className="label" htmlFor="food_price">Food price</label>
                <input className="form-control" ref={foodPriceRef} id="food_price" type="text" name="food_price" placeholder="Food price" required />

                <label className="label" htmlFor="branche">Choose branche</label>
                <select id="branche" className="form-select-sm select" ref={brancheIdRef} onChange={handleChange} name="brnacheId">
                  <option defaultValue="choose" hidden value="choose">Choose</option>
                  {
                    all_branches && all_branches.getAllBranches.map((e, i) => (
                      <option key={i} value={e.id}>{e.branche_name}</option>
                    ))
                  }
                </select>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button className="btn btn-primary" id="menuBtn" disabled={true} type="submit">Add</button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <h5 className="select-menu-title">See menus by filtering</h5>
      <select onChange={handleBrancheChange} className="form-select-sm select">
        {
          all_branches && all_branches.getAllBranches.map((e, i) => (
            <option key={i} value={e.id}>{e.branche_name}</option>
          ))
        }
      </select>

      <h5 className="table-title">Menus</h5>
      <div className="table-wrapper">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Food name</th>
              <th>Food price</th>
            </tr>
          </thead>
          <tbody>
            {
              menus && menus.getMenus.map((e, i) => (
                <tr key={i}>
                  <td>{e.id}</td>
                  <td>{e.food}</td>
                  <td>{e.price} so'm</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </>
  )
};

export default NewMenu;