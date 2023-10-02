import { useState, useEffect, useContext } from "react";
import ProductContext from "../../../../store/product-context";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import {
  DataGrid,
  GridToolbarContainer,
  GridActionsCellItem,
  GridRowEditStopReasons,
} from "@mui/x-data-grid";
import { Avatar } from "@mui/material";
import deleteProduct from "../../../../api/apiCalls/deleteProduct";
import "./ProductTable.css";

export default function ProductTable({ handleOpen, handleProduct }) {
  const prodCtx = useContext(ProductContext);
  const { products } = prodCtx;

  function EditToolbar() {
    const handleClick = () => {
      handleOpen();
    };

    return (
      <GridToolbarContainer>
        <Button color="primary" startIcon={<AddIcon />} onClick={handleClick}>
          Add product
        </Button>
      </GridToolbarContainer>
    );
  }

  const [rows, setRows] = useState([]);
  const [rowModesModel, setRowModesModel] = useState({});

  useEffect(() => {
    if (products.length > 0) {
      setRows(products);
    }
  }, [products]);

  const handleRowEditStop = (params, event) => {
    if (params.reason === GridRowEditStopReasons.rowFocusOut) {
      event.defaultMuiPrevented = true;
    }
  };

  const handleDeleteClick = (id) => () => {
    setRows(rows.filter((row) => row.id !== id));
    const [slug] = rows.filter((row) => row.id === id).map((item) => item.slug);
    const deleteHandler = async () => {
      await deleteProduct(slug);
    };
    deleteHandler();
  };

  const processRowUpdate = (newRow) => {
    const updatedRow = { ...newRow, isNew: false };
    setRows(rows.map((row) => (row.id === newRow.id ? updatedRow : row)));
    return updatedRow;
  };

  const handleRowModesModelChange = (newRowModesModel) => {
    setRowModesModel(newRowModesModel);
  };

  const columns = [
    { field: "title", headerName: "Title", width: 150, editable: true },
    {
      field: "description",
      headerName: "Description",
      type: "text",
      width: 200,
    },
    {
      field: "price",
      headerName: "Price",
      type: "number",
      width: 80,
    },
    {
      field: "discountPercentage",
      headerName: "- [%]",
      width: 80,
      type: "number",
    },
    {
      field: "rating",
      headerName: "Rating",
      width: 80,
      type: "number",
    },
    {
      field: "stock",
      headerName: "Stock",
      width: 80,
      type: "number",
    },
    {
      field: "brand",
      headerName: "Brand",
      width: 100,
      type: "text",
    },
    {
      field: "category",
      headerName: "Category",
      width: 130,
      type: "text",
    },
    {
      field: "thumbnail",
      headerName: "Thumbnail",
      align: "center",
      width: 90,
      type: "text",
      renderCell: (params) => <Avatar src={params.value} />,
    },
    {
      field: "images",
      headerName: "Images",
      width: 220,
      type: "text",
      renderCell: (params) =>
        params.value.map((item, index) => <Avatar src={item} key={index} />),
    },
    {
      field: "actions",
      type: "actions",
      headerName: "Actions",
      width: 100,
      cellClassName: "actions",
      getActions: ({ id }) => {
        return [
          <GridActionsCellItem
            icon={<EditIcon />}
            label="Edit"
            className="textPrimary"
            onClick={() => {
              handleProduct(id);
            }}
            color="inherit"
          />,
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            onClick={handleDeleteClick(id)}
            color="inherit"
          />,
        ];
      },
    },
  ];

  return (
    <Box
      sx={{
        height: 500,
        width: "100%",
        "& .actions": {
          color: "text.secondary",
        },
        "& .textPrimary": {
          color: "text.primary",
        },
      }}
    >
      <DataGrid
        rows={rows}
        columns={columns}
        editMode="row"
        rowModesModel={rowModesModel}
        onRowModesModelChange={handleRowModesModelChange}
        onRowEditStop={handleRowEditStop}
        processRowUpdate={processRowUpdate}
        slots={{
          toolbar: EditToolbar,
        }}
        slotProps={{
          toolbar: { setRows, setRowModesModel },
        }}
      />
    </Box>
  );
}
