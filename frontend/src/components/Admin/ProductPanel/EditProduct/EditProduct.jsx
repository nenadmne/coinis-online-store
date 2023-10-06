import { useState, useEffect, useContext } from "react";
import ProductContext from "../../../../store/product-context";
import { toast } from "react-toastify";
import getCategories from "../../../../api/apiCalls/getCategories";
import getBrands from "../../../../api/apiCalls/getBrands";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Input from "../../../../UI/input";
import Button from "../../../../UI/Button";
import Textarea from "../../../../UI/Textarea";
import Select from "../../../../UI/Select";
import "./EditProduct.css";
import editProduct from "../../../../api/apiCalls/editProduct";

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
  const { editedProduct } = prodCtx;
  const [itemInfo, setItemInfo] = useState({});

  const categoryFetcher = async () => {
    const response = await getCategories();
    setCategories(response);
  };

  const brandFetcher = async () => {
    const response = await getBrands();
    setBrands(response);
  };

  const [categories, setCategories] = useState(null);
  const [selectedCategoryOption, setSelectedCategoryOption] = useState("-");
  const categoryChangeHandler = (event) => {
    setSelectedCategoryOption(event.target.value);
    setItemInfo((prevItemInfo) => ({
      ...prevItemInfo,
      category: event.target.value,
    }));
  };

  const [brands, setBrands] = useState(null);
  const [selectedBrandOption, setSelectedBrandOption] = useState("-");
  const brandChangeHandler = (event) => {
    setSelectedBrandOption(event.target.value);
    setItemInfo((prevItemInfo) => ({
      ...prevItemInfo,
      brand: event.target.value,
    }));
  };

  const createChangeHandler = (key, setState) => (event) => {
    setState((prevItemInfo) => ({
      ...prevItemInfo,
      [key]: event.target.value,
    }));
  };

  useEffect(() => {
    categoryFetcher();
    brandFetcher();
    if (product) {
      setItemInfo(product[0]);
      setSelectedCategoryOption(product[0].category);
      setSelectedBrandOption(product[0].brand);
    }
  }, [product]);

  if (itemInfo === undefined) {
    return null;
  }

  const titleHandler = createChangeHandler("title", setItemInfo);
  const descriptionHandler = createChangeHandler("description", setItemInfo);
  const priceHandler = createChangeHandler("price", setItemInfo);
  const discountHandler = createChangeHandler(
    "discount_percentage",
    setItemInfo
  );
  const stockHandler = createChangeHandler("stock", setItemInfo);
  const thumbnailHandler = createChangeHandler("thumbnail", setItemInfo);
  const imagesHandler = createChangeHandler("images", setItemInfo);

  const validationCheck =
    itemInfo.title !== "" &&
    itemInfo.description !== "" &&
    itemInfo.price !== "" &&
    itemInfo.discountPercentage !== "" &&
    itemInfo.stock !== "" &&
    itemInfo.thumbnail !== "" &&
    itemInfo.images !== "" &&
    selectedCategoryOption !== "-" &&
    selectedBrandOption !== "-";

  const submitHandler = async (event) => {
    event.preventDefault();
    const item = {
      title: itemInfo.title,
      description: itemInfo.description,
      price: itemInfo.price,
      discountPercentage: itemInfo.discountPercentage,
      rating: itemInfo.rating,
      stock: itemInfo.stock,
      thumbnail: itemInfo.thumbnail,
      images: itemInfo.images,
      category: itemInfo.category,
      brand: itemInfo.brand,
    };
    try {
      if (validationCheck) {
        await editProduct(itemInfo.slug, item);
        handleClose();
        toast.success("Product edited successfully!");
      }
    } catch (error) {
      console.error("Error adding product:", error);
    }

    editedProduct({
      ...item,
      id: itemInfo.id,
      slug: itemInfo.title.replace(/\s+/g, "-"),
    });
  };

  const cancelHandler = () => {
    handleClose();
  };


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
            <form
              method="POST"
              onSubmit={submitHandler}
              className="new-item-form"
            >
              <Input
                input={{
                  label: "Title",
                  name: "title",
                  type: "text",
                  onChange: titleHandler,
                  value: itemInfo.title || "",
                }}
              />
              <Textarea
                textarea={{
                  label: "Description",
                  rows: "4",
                  name: "description",
                  type: "text",
                  onChange: descriptionHandler,
                  value: itemInfo.description || "",
                }}
              />
              <Input
                input={{
                  label: "Price",
                  name: "price",
                  type: "number",
                  onChange: priceHandler,
                  value: itemInfo.price || "",
                  placeholder: "$ 0.00",
                }}
              />
              <Select
                selectedOption={selectedCategoryOption}
                onChange={categoryChangeHandler}
                items={categories}
                name="category"
              />
              <Input
                input={{
                  label: "Discount Percentage",
                  name: "discount",
                  type: "number",
                  onChange: discountHandler,
                  value: itemInfo.discountPercentage || "",
                }}
              />
              <Select
                selectedOption={selectedBrandOption}
                onChange={brandChangeHandler}
                items={brands}
                name="brand"
              />
              <Input
                input={{
                  label: "Stock",
                  name: "stock",
                  type: "text",
                  onChange: stockHandler,
                  value: itemInfo.stock || "",
                }}
              />
              <Input
                input={{
                  label: "Thumbail",
                  name: "thumbnail",
                  type: "text",
                  onChange: thumbnailHandler,
                  value: itemInfo.thumbnail || "",
                }}
              />
              <Input
                input={{
                  label: "Images",
                  name: "images",
                  type: "text",
                  onChange: imagesHandler,
                  value: itemInfo.images || "",
                }}
              />
              <div className="button-div">
                <Button
                  className="btn btn-block btn-outline-danger"
                  name="cancel"
                  function={cancelHandler}
                />
                <Button
                  name="submit"
                  type="submit"
                  className={
                    validationCheck
                      ? "btn btn-block btn-outline-success"
                      : "btn btn-block btn-outline-success disabled"
                  }
                />
              </div>
            </form>
          )}
        </Box>
      </Modal>
    </div>
  );
}
