import { useState, useContext } from "react";
import ProductContext from "../../../store/product-context";
import AddProduct from "./AddProduct/AddProduct";
import ProductTable from "./ProductTable/ProductTable";
import EditProduct from "./EditProduct/EditProduct";
import "./ProductPanel.css";

const ProductPanel = () => {
  const prodCtx = useContext(ProductContext);
  const { products } = prodCtx;

  const [product, setProduct] = useState(null);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [editModal, setEditModal] = useState(false);
  const handleEditClose = () => setEditModal(false);

  const handleProduct = (id) => {
    setProduct(products.filter((item) => item.id === id));
    setEditModal(true);
  };

  return (
    <div className="product-panel">
      <ProductTable handleOpen={handleOpen} handleProduct={handleProduct} />
      <AddProduct open={open} handleClose={handleClose} />
      <EditProduct
        product={product}
        open={editModal}
        handleClose={handleEditClose}
      />
    </div>
  );
};

export default ProductPanel;
