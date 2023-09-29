import UsersAndReviews from "./UsersAndReviews/UsersAndReviews";
import "./Admin.css";
import ProductPanel from "./ProductPanel/ProductPanel";

const Admin = () => {
  return (
    <section className="admin-page-wrapper">
      <UsersAndReviews />
      <ProductPanel />
    </section>
  );
};

export default Admin;
