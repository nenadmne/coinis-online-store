import { useState } from "react";
import Box from "@mui/material/Box";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import {
  DataGrid,
  GridActionsCellItem,
  GridRowEditStopReasons,
} from "@mui/x-data-grid";
import {
  randomEmail,
  randomCreatedDate,
  randomTraderName,
  randomId,
} from "@mui/x-data-grid-generator";
import "./UserList.css";

const initialRows = [
  {
    id: randomId(),
    name: randomTraderName(),
    email: randomEmail(),
    joinDate: randomCreatedDate(),
  },
  {
    id: randomId(),
    name: randomTraderName(),
    email: randomEmail(),
    joinDate: randomCreatedDate(),
  },
  {
    id: randomId(),
    name: randomTraderName(),
    email: randomEmail(),
    joinDate: randomCreatedDate(),
  },
  {
    id: randomId(),
    name: randomTraderName(),
    email: randomEmail(),
    joinDate: randomCreatedDate(),
  },
  {
    id: randomId(),
    name: randomTraderName(),
    email: randomEmail(),
    joinDate: randomCreatedDate(),
  },
];

export default function UserList() {
  const [rows, setRows] = useState(initialRows);
  const [rowModesModel, setRowModesModel] = useState({});

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
      field: "joinDate",
      headerName: "Date created",
      type: "date",
      width: 100,
    },
    {
      field: "email",
      headerName: "Email",
      width: 200,
      type: "singleSelect",
    },
    {
      field: "actions",
      type: "actions",
      align: "center",
      headerName: "Actions",
      width: 90,

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

  const gridColumns =
    window.innerWidth < 768 ? [columns[0], columns[1], columns[3]] : columns;
    
  return (
    <Box
      className="user-grid"
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
      <h1> User List </h1>
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
