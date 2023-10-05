import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridRowEditStopReasons } from "@mui/x-data-grid";
import { randomCreatedDate, randomEmail } from "@mui/x-data-grid-generator";
import "./MessageList.css";

const messageData = [
  {
    id: 1,
    title: "Brunch this weekend?",
    description: "I'll be in your neighborhood doing errands this…",
    email: randomEmail(),
    date: randomCreatedDate(),
  },
  {
    id: 2,
    title: "Summer BBQ",
    description: "Wish I could come, but I'm out of town this…",
    email: randomEmail(),
    date: randomCreatedDate(),
  },
  {
    id: 3,
    title: "Oui Oui",
    description: "Do you have Paris recommendations? Have you ever…",
    email: randomEmail(),
    date: randomCreatedDate(),
  },
  {
    id: 4,
    title: "Brunch this weekend?",
    description: "I'll be in your neighborhood doing errands this…",
    email: randomEmail(),
    date: randomCreatedDate(),
  },
  {
    id: 5,
    title: "Oui Oui",
    description: "Wish I could come, but I'm out of town this…",
    email: randomEmail(),
    date: randomCreatedDate(),
  },
  {
    id: 6,
    title: "Brunch this weekend?",
    description: "Do you have Paris recommendations? Have you ever…",
    email: randomEmail(),
    date: randomCreatedDate(),
  },
  {
    id: 7,
    title: "Oui Oui",
    description: "I'll be in your neighborhood doing errands this…",
    email: randomEmail(),
    date: randomCreatedDate(),
  },
];

export default function MessageList() {
  const initialRows = messageData;

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

  const columns = [
    {
      field: "email",
      headerName: "Email",
      type: "e-mail",
      width: 180,
    },
    {
      field: "title",
      type: "text",
      headerName: "Title",
      width: 200,
      editable: true,
    },
    {
      field: "description",
      headerName: "Ticket Content",
      type: "text",
      width: 700,
    },
    {
      field: "date",
      headerName: "Date",
      type: "date",
      width: 150,
    },
  ];

  const gridColumns =
    window.innerWidth < 768
      ? [columns[0], columns[3]]
      : window.innerWidth >= 768 && window.innerWidth < 1300
      ? [columns[0], columns[1], columns[3]]
      : columns;

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
