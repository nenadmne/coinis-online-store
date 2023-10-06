import { useEffect, useState, useContext } from "react";
import ProductContext from "../../../../store/product-context";
import useInput from "../../../../hooks/use-input";
import { toast } from "react-toastify";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "../../../../UI/Button";
import Input from "../../../../UI/input";
import Select from "../../../../UI/Select";
import Textarea from "../../../../UI/Textarea";
import addProduct from "../../../../api/apiCalls/addProduct";
import getCategories from "../../../../api/apiCalls/getCategories";
import getBrands from "../../../../api/apiCalls/getBrands";
import "./AddProduct.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "fit-content",
  bgcolor: "background.paper",
  boxShadow: 24,
};

export default function AddProduct({ open, handleClose }) {
  const prodCtx = useContext(ProductContext);
  const { submitProduct } = prodCtx;
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
  };

  const [brands, setBrands] = useState(null);
  const [selectedBrandOption, setSelectedBrandOption] = useState("-");
  const brandChangeHandler = (event) => {
    setSelectedBrandOption(event.target.value);
  };

  useEffect(() => {
    categoryFetcher();
    brandFetcher();
  }, []);

  const {
    enteredValue: enteredTitle,
    isValid: titleIsValid,
    hasError: titleHasError,
    onChangeHandler: changeTitleHandler,
    onBlurHandler: blurTitleHandler,
  } = useInput((enteredTitle) => enteredTitle.trim().length > 0);

  const {
    enteredValue: enteredDescription,
    isValid: descriptionIsValid,
    hasError: descriptionHasError,
    onChangeHandler: changeDescriptionHandler,
    onBlurHandler: blurDescriptionHandler,
  } = useInput((enteredDescription) => enteredDescription.trim().length > 0);

  const {
    enteredValue: enteredPrice,
    isValid: priceIsValid,
    hasError: priceHasError,
    onChangeHandler: changePriceHandler,
    onBlurHandler: blurPriceHandler,
  } = useInput((enteredPrice) => enteredPrice.trim().length > 0);

  const {
    enteredValue: enteredStock,
    isValid: stockIsValid,
    hasError: stockHasError,
    onChangeHandler: changeStockHandler,
    onBlurHandler: blurStockHandler,
  } = useInput((enteredStock) => enteredStock.trim().length > 0);

  const {
    enteredValue: enteredDiscount,
    isValid: discountIsValid,
    hasError: discountHasError,
    onChangeHandler: changeDiscountHandler,
    onBlurHandler: blurDiscountHandler,
  } = useInput((enteredDiscount) => enteredDiscount.trim().length > 0);

  const {
    enteredValue: enteredThumbnail,
    isValid: thumbnailIsValid,
    hasError: thumbnailHasError,
    onChangeHandler: changeThumbnailHandler,
    onBlurHandler: blurThumbnailHandler,
  } = useInput((enteredThumbnail) => enteredThumbnail.trim().length > 0);

  const {
    enteredValue: enteredImages,
    isValid: imagesIsValid,
    hasError: imagesHasError,
    onChangeHandler: changeImagesHandler,
    onBlurHandler: blurImagesHandler,
  } = useInput((enteredImages) => enteredImages.trim().length > 0);

  const validationCheck =
    titleIsValid &&
    descriptionIsValid &&
    priceIsValid &&
    stockIsValid &&
    discountIsValid &&
    thumbnailIsValid &&
    imagesIsValid &&
    selectedCategoryOption !== "-" &&
    selectedBrandOption !== "-";

  const cancelHandler = () => {
    handleClose();
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    const item = {
      title: enteredTitle,
      description: enteredDescription,
      price: enteredPrice,
      discountPercentage: enteredDiscount,
      rating: 0,
      stock: enteredStock,
      thumbnail: enteredThumbnail,
      images: enteredImages.split(","),
      category: selectedCategoryOption,
      brand: selectedBrandOption,
    };
    try {
      if (validationCheck) {
        await addProduct(item);
        handleClose();
      }
    } catch (error) {
      console.error("Error adding product:", error);
    }
    submitProduct(item);
    toast.success("Product added successfully!");
  };

  const getInputClasses = (isValid, hasError) => {
    if (hasError) {
      return "form-control is-invalid";
    } else if (isValid) {
      return "form-control is-valid";
    } else {
      return "";
    }
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
                inputClasses: getInputClasses(titleIsValid, titleHasError),
                onChange: changeTitleHandler,
                onBlur: blurTitleHandler,
                value: enteredTitle,
              }}
            />
            <Textarea
              textarea={{
                label: "Description",
                rows: "4",
                name: "description",
                type: "text",
                textareaClasses: getInputClasses(
                  descriptionIsValid,
                  descriptionHasError
                ),
                onChange: changeDescriptionHandler,
                onBlur: blurDescriptionHandler,
                value: enteredDescription,
              }}
            />

            <Input
              input={{
                label: "Price",
                name: "price",
                type: "number",
                inputClasses: getInputClasses(priceIsValid, priceHasError),
                onChange: changePriceHandler,
                onBlur: blurPriceHandler,
                value: enteredPrice,
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
                inputClasses: getInputClasses(
                  discountIsValid,
                  discountHasError
                ),
                onChange: changeDiscountHandler,
                onBlur: blurDiscountHandler,
                value: enteredDiscount,
              }}
            />

            <Select
              selectedOption={selectedBrandOption}
              onChange={brandChangeHandler}
              items={brands}
              name="brands"
            />

            <Input
              input={{
                label: "Stock",
                name: "stock",
                type: "text",
                inputClasses: getInputClasses(stockIsValid, stockHasError),
                onChange: changeStockHandler,
                onBlur: blurStockHandler,
                value: enteredStock,
              }}
            />

            <Input
              input={{
                label: "Thumbail",
                name: "thumbnail",
                type: "text",
                inputClasses: getInputClasses(
                  thumbnailIsValid,
                  thumbnailHasError
                ),
                onChange: changeThumbnailHandler,
                onBlur: blurThumbnailHandler,
                value: enteredThumbnail,
              }}
            />

            <Input
              input={{
                label: "Images",
                name: "images",
                type: "text",
                inputClasses: getInputClasses(imagesIsValid, imagesHasError),
                onChange: changeImagesHandler,
                onBlur: blurImagesHandler,
                value: enteredImages,
              }}
            />

            <div className="button-div">
              <Button
                className="btn btn-block btn-outline-danger"
                name="cancel"
                function={cancelHandler}
              />
              <Button
                className={
                  validationCheck
                    ? "btn btn-block btn-outline-success"
                    : "btn btn-block btn-outline-success disabled"
                }
                name="submit"
                type="submit"
              />
            </div>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
