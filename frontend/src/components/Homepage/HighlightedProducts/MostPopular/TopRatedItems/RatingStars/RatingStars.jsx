import * as React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";

const RatingStars = ({ item }) => {
  return (
    <Box
      sx={{
        "& > legend": { mt: 2 },
        display: "flex",
        flexDirection: "row",
      }}
    >
      <span>{item.rating}</span>
      <Rating
        name="read-only"
        value={+item.rating > 4.5 ? 4.5 : +item.rating}
        precision={0.5}
        readOnly
        size="small"
        sx={{ marginLeft: "0.5rem", display: "flex", alignSelf: "center" }}
      />
    </Box>
  );
};

export default RatingStars;
