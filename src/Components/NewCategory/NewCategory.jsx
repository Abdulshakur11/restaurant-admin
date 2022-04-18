import { useQuery, useMutation } from "@apollo/client";
import { NEW_CATEGORY, CATEGORIES } from "../../Query";
import "./NewCategory.css"

function NewCategory() {
  const { data } = useQuery(CATEGORIES);

  // Mutation
  const [NewCategory] = useMutation(NEW_CATEGORY, {
    update: (cache, data) => {
      console.log(data);
    }
  })

  const handleCategorySubmit = (e) => {
    const { category_name } = e.target.elements;
    NewCategory({
      variables: {
        category_name: category_name.value
      }
    });
    alert('A new category was successfully added')
  }

  return (
    <>
      <div>
        <form onSubmit={handleCategorySubmit}>
          <label className="label" htmlFor="category">Category name</label>
          <input className="form-control category-input" type="text" id="category" name="category_name" placeholder="New category" required />
          <button className="btn btn-primary add-btn" type="submit">Add</button>
        </form>

        <h5 className="table-title">Categories</h5>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Category name</th>
            </tr>
          </thead>
          <tbody>
            {
              data && data.getCategories.map((e, i) => (
                <tr key={i}>
                  <td>{e.id}</td>
                  <td>{e.category_name}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </>
  )
}

export default NewCategory;