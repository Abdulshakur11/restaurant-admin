import './Home.css';
import { NavLink } from 'react-router-dom';

function Home() {
  return (
    <>
      <div>
        <ul className='categories-list'>
          <li>
            <NavLink className="link" to="/newcategory" activeClassName="nested-link__link-active">Categories</NavLink>
          </li>
          <li>
            <NavLink className="link" to="/newrestaurant" activeClassName="nested-link__link-active">Restaurants</NavLink>
          </li>
          <li>
            <NavLink className="link" to="/newbranche" activeClassName="nested-link__link-active">Branche</NavLink>
          </li>
          <li>
            <NavLink className="link" to="/newmenu" activeClassName="nested-link__link-active">Menu</NavLink>
          </li>
          <li>
            <NavLink className="link" to="/orders" activeClassName="nested-link__link-active">Orders</NavLink>
          </li>
        </ul>
      </div>
    </>
  )
}
export default Home;