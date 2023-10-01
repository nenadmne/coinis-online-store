import * as React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";

const RatingStars = ({ item }) => {
  console.log(item)
  return (
    <Box
      sx={{
        "& > legend": { mt: 2 },
      }}
    >
      <span>{item.rating}</span>
      <Rating
        name="read-only"
        value={+item.rating > 4.5 ? 4.5 : +item.rating}
        precision={0.5}
        readOnly
        size="small"
      />
    </Box>
  );
};

export default RatingStars;
