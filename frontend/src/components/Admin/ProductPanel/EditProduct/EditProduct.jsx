import { useState, useEffect, useContext } from "react";
import ProductContext from "../../../../store/product-context";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Input from "../../../../UI/input";
import Button from "../../../../UI/Button";
import Textarea from "../../../../UI/Textarea";
import CategorySelect from "../../../../UI/CategorySelect";
import "./EditProduct.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "fit-content",
  bgcolor: "background.paper",
  boxShadow: 24,
};

export default function EditProduct({ open, handleClose, product }) {
  const prodCtx = useContext(ProductContext);
  const { products } = prodCtx;
  const [itemInfo, setItemInfo] = useState(null);
  const [selectedOption, setSelectedOption] = useState("");
  const categoryChangeHandler = (event) => {
    setSelectedOption(event.target.value);
  };

  const createChangeHandler = (key, setState) => (event) => {
    setState((prevItemInfo) => ({
      ...prevItemInfo,
      [key]: event.target.value,
    }));
  };

  useEffect(() => {
    if (product) {
      setItemInfo(product);
      setSelectedOption(product[0].category);
    }
  }, [product]);

  if (!itemInfo) {
    return null;
  }

  const titleHandler = createChangeHandler("title", setItemInfo);
  const descriptionHandler = createChangeHandler("description", setItemInfo);
  const priceHandler = createChangeHandler("price", setItemInfo);
  const discountHandler = createChangeHandler("discount_percentage", setItemInfo);
  const stockHandler = createChangeHandler("stock", setItemInfo);
  const brandHandler = createChangeHandler("brand", setItemInfo);
  const thumbnailHandler = createChangeHandler("thumbnail", setItemInfo);
  const imagesHandler = createChangeHandler("images", setItemInfo);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {itemInfo !== null && (
            <form method="POST" className="new-item-form">
              <Input
                input={{
                  label: "Title",
                  name: "title",
                  type: "text",
                  onChange: titleHandler,
                  value: itemInfo[0].title,
                }}
              />
              <Textarea
                textarea={{
                  label: "Description",
                  rows: "4",
                  name: "description",
                  type: "text",
                  onChange: descriptionHandler,
                  value: itemInfo[0].description,
                }}
              />
              <Input
                input={{
                  label: "Price",
                  name: "price",
                  type: "number",
                  onChange: priceHandler,
                  value: itemInfo[0].price,
                  placeholder: "$ 0.00",
                }}
              />
              <CategorySelect
                selectedOption={selectedOption}
                onChange={categoryChangeHandler}
                items={products}
              />
              <Input
                input={{
                  label: "Rating",
                  name: "rating",
                  type: "number",
                  value: "0",
                  disabled: true,
                }}
              />
              <Input
                input={{
                  label: "Discount Percentage",
                  name: "discount",
                  type: "number",
                  onChange: discountHandler,
                  value: itemInfo[0].discountPercentage,
                }}
              />
              <Input
                input={{
                  label: "Brand",
                  name: "brand",
                  type: "text",
                  onChange: brandHandler,
                  value: itemInfo[0].brand,
                }}
              />
              <Input
                input={{
                  label: "Stock",
                  name: "stock",
                  type: "text",
                  onChange: stockHandler,
                  value: itemInfo[0].stock,
                }}
              />
              <Input
                input={{
                  label: "Thumbail",
                  name: "thumbnail",
                  type: "text",
                  onChange: thumbnailHandler,
                  value: itemInfo[0].thumbnail,
                }}
              />
              <Input
                input={{
                  label: "Images",
                  name: "images",
                  type: "text",
                  onChange: imagesHandler,
                  value: itemInfo[0].images,
                }}
              />
              <div className="button-div">
                <Button
                  className="btn btn-block btn-outline-danger"
                  name="cancel"
                />
                <Button
                  className="btn btn-block btn-outline-success"
                  name="submit"
                  type="submit"
                />
              </div>
            </form>
          )}
        </Box>
      </Modal>
    </div>
  );
}
