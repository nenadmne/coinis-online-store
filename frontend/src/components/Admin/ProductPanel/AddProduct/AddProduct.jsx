import { useState } from "react";
import * as React from "react";
import useInput from "../../../../hooks/use-input";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "../../../../UI/Button";
import Input from "../../../../UI/input";
import CategorySelect from "../../../../UI/CategorySelect";
import Textarea from "../../../../UI/Textarea";
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

export default function AddProduct({ open, handleClose, items }) {
  const [selectedOption, setSelectedOption] = useState("-");
  const categoryChangeHandler = (event) => {
    setSelectedOption(event.target.value);
  };

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
    enteredValue: enteredBrand,
    isValid: brandIsValid,
    hasError: brandHasError,
    onChangeHandler: changeBrandHandler,
    onBlurHandler: blurBrandHandler,
  } = useInput((enteredBrand) => enteredBrand.trim().length > 0);

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
  } = useInput((enteredThumbnail) => enteredThumbnail.trim().includes("@"));

  const {
    enteredValue: enteredImages,
    isValid: imagesIsValid,
    hasError: imagesHasError,
    onChangeHandler: changeImagesHandler,
    onBlurHandler: blurImagesHandler,
  } = useInput((enteredImages) => enteredImages.trim().includes("@"));

  const validationCheck =
    titleIsValid &&
    descriptionIsValid &&
    priceIsValid &&
    brandIsValid &&
    stockIsValid &&
    discountIsValid &&
    thumbnailIsValid &&
    imagesIsValid;

  const cancelHandler = () => {
    handleClose()
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
          <form method="POST" className="new-item-form">
            <Input
              input={{
                label:"Title",
                name: "title",
                type: "text",
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
                onChange: changeDescriptionHandler,
                onBlur: blurDescriptionHandler,
                value: enteredDescription,
              }}
            />

            <Input
              input={{
                label:"Price",
                name: "price",
                type: "number",
                onChange: changePriceHandler,
                onBlur: blurPriceHandler,
                value: enteredPrice,
                placeholder: "$ 0.00",
              }}
            />
            <CategorySelect
              selectedOption={selectedOption}
              onChange={categoryChangeHandler}
              items={items}
            />

            <Input
              input={{
                label:"Rating",
                name: "rating",
                type: "number",
                value: "0",
                disabled: true,
              }}
            />

            <Input
              input={{
                label:"Discount Percentage",
                name: "discount",
                type: "number",
                onChange: changeDiscountHandler,
                onBlur: blurDiscountHandler,
                value: enteredDiscount,
              }}
            />

            <Input
              input={{
                label:"Brand",
                name: "brand",
                type: "text",
                onChange: changeBrandHandler,
                onBlur: blurBrandHandler,
                value: enteredBrand,
              }}
            />

            <Input
              input={{
                label:"Stock",
                name: "stock",
                type: "text",
                onChange: changeStockHandler,
                onBlur: blurStockHandler,
                value: enteredStock,
              }}
            />

            <Input
              input={{
                label:"Thumbail",
                name: "thumbnail",
                type: "text",
                onChange: changeThumbnailHandler,
                onBlur: blurThumbnailHandler,
                value: enteredThumbnail,
              }}
            />

            <Input
              input={{
                label:"Images",
                name: "images",
                type: "text",
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
                className="btn btn-block btn-outline-success"
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
