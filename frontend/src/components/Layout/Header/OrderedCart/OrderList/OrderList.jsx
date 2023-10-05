import * as React from "react";
import Box from "@mui/material/Box";
import { GridActionsCellItem } from "@mui/x-data-grid";
import { DataGrid, GridRowEditStopReasons } from "@mui/x-data-grid";
import {
  randomCreatedDate,
  randomPrice,
  randomUserName,
} from "@mui/x-data-grid-generator";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import CheckIcon from "@mui/icons-material/Check";
import "./OrderList.css";

const orderData = [
  {
    id: 1,
    username: randomUserName(),
    total: randomPrice(),
    date: randomCreatedDate(),
  },
  {
    id: 2,
    username: randomUserName(),
    total: randomPrice(),
    date: randomCreatedDate(),
  },
  {
    id: 3,
    username: randomUserName(),
    total: randomPrice(),
    date: randomCreatedDate(),
  },
  {
    id: 4,
    username: randomUserName(),
    total: randomPrice(),
    date: randomCreatedDate(),
  },
  {
    id: 5,
    username: randomUserName(),
    total: randomPrice(),
    date: randomCreatedDate(),
  },
  {
    id: 6,
    username: randomUserName(),
    total: randomPrice(),
    date: randomCreatedDate(),
  },
  {
    id: 7,
    username: randomUserName(),
    total: randomPrice(),
    date: randomCreatedDate(),
  },
];

export default function OrderList() {
  const initialRows = orderData;

  const [rows, setRows] = React.useState(initialRows);
  const [rowModesModel, setRowModesModel] = React.useState({});

  const handleRowEditStop = (params, event) => {
    if (params.reason === GridRowEditStopReasons.rowFocusOut) {
      event.defaultMuiPrevented = true;
    }
  };

  const processRowUpdate = (newRow) => {
    const updatedRow = { ...newRow, isNew: false };
    setRows(rows.map((row) => (row.id === newRow.id ? updatedRow : row)));
    return updatedRow;
  };

  const handleRowModesModelChange = (newRowModesModel) => {
    setRowModesModel(newRowModesModel);
  };

  const handleDeleteClick = () => {};
  const handleAcceptClick = () => {};
  const columns = [
    {
      field: "username",
      headerName: "Username",
      type: "text",
      width: 150,
    },
    {
      field: "date",
      headerName: "Ordered date",
      type: "date",
      width: 120,
    },
    {
      field: "total",
      type: "number",
      headerName: "Total ($)",
      width: 120,
      editable: true,
    },
    {
      field: "actions",
      type: "actions",
      align: "center",
      headerName: "Actions",
      width: 150,
      getActions: ({ id }) => {
        return [
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            onClick={handleDeleteClick(id)}
            color="inherit"
          />,
          <GridActionsCellItem
            icon={<CheckIcon />}
            label="Accept"
            onClick={handleAcceptClick(id)}
            color="inherit"
          />,
        ];
      },
    },
  ];

  const gridColumns =
    window.innerWidth < 768 ? [columns[0], columns[3]] : columns;

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
        columns={gridColumns}
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
