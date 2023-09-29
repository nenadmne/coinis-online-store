import * as React from "react";
import Box from "@mui/material/Box";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import {
  DataGrid,
  GridActionsCellItem,
  GridRowEditStopReasons,
} from "@mui/x-data-grid";
import {
  randomTraderName,
  randomId,
  randomRating,
  randomStatusOptions,
  randomCreatedDate,
} from "@mui/x-data-grid-generator";
import "./ReviewList.css";
import { Rating } from "@mui/material";

const initialRows = [
  {
    id: randomId(),
    name: randomTraderName(),
    rating: randomRating(),
    review: randomStatusOptions(),
    joinDate: randomCreatedDate(),
  },
  {
    id: randomId(),
    name: randomTraderName(),
    rating: randomRating(),
    review: randomStatusOptions(),
    joinDate: randomCreatedDate(),
  },
  {
    id: randomId(),
    name: randomTraderName(),
    rating: randomRating(),
    review: randomStatusOptions(),
    joinDate: randomCreatedDate(),
  },
  {
    id: randomId(),
    name: randomTraderName(),
    rating: randomRating(),
    review: randomStatusOptions(),
    joinDate: randomCreatedDate(),
  },
  {
    id: randomId(),
    name: randomTraderName(),
    rating: randomRating(),
    review: randomStatusOptions(),
    joinDate: randomCreatedDate(),
  },
];

export default function ReviewList() {
  const [rows, setRows] = React.useState(initialRows);
  const [rowModesModel, setRowModesModel] = React.useState({});

  const handleRowEditStop = (params, event) => {
    if (params.reason === GridRowEditStopReasons.rowFocusOut) {
      event.defaultMuiPrevented = true;
    }
  };

  const handleDeleteClick = (id) => () => {
    setRows(rows.filter((row) => row.id !== id));
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
    {
      field: "name",
      headerName: "Name",
      width: 150,
    },
    {
      field: "rating",
      headerName: "Rating",
      type: "number",
      align: "left",
      width: 120,
      renderCell: (params) => (
        <Rating
          value={params.value}
          precision={0.5}
          readOnly
          size="small"
        />
      ),
    },
    {
      field: "review",
      headerName: "Review",
      width: 220,
      type: "singleSelect",
    },
    {
      field: "joinDate",
      headerName: "Date created",
      type: "date",
      width: 110,
    },
    {
      field: "actions",
      type: "actions",
      align: "center",
      headerName: "Actions",
      width: 100,

      getActions: ({ id }) => {
        return [
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
        height: "fit-content",
        width: "fit-content",
        padding: "2rem",
        "& .actions": {
          color: "text.secondary",
        },
        "& .textPrimary": {
          color: "text.primary",
        },
      }}
    >
      <h1> Review List </h1>
      <DataGrid
        rows={rows}
        columns={columns}
        editMode="row"
        rowModesModel={rowModesModel}
        onRowModesModelChange={handleRowModesModelChange}
        onRowEditStop={handleRowEditStop}
        processRowUpdate={processRowUpdate}
        slotProps={{
          toolbar: { setRows, setRowModesModel },
        }}
      />
    </Box>
  );
}
