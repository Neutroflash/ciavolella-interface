import { DataGrid, GridColDef } from "@mui/x-data-grid";
import {
  DeleteButton,
  EditButton,
  List,
  ShowButton,
  useDataGrid,
} from "@refinedev/mui";
import React from "react";

export const J01List = () => {
  const { dataGridProps } = useDataGrid({});

  const columns = React.useMemo<GridColDef[]>(
    () => [
      {
        field: "j01",
        headerName: "J01",
        type: "number",
        minWidth: 20,
      },
      {
        field: "j03",
        flex: 1,
        headerName: "J03",
        minWidth: 500,
      },
      {
       field: "j04",
       headerName: "J04",
       type: "number",
       minWidth: 20
      },
      {
        field: "j1mpiva",
        headerName: "J1mpiva",
        minWidth: 20
      },
      {
        field: "j1rif_offer",
        headerName: "J1rif_offer",
        minWidth: 20
      },
      {
        field: "j1rif_client",
        headerName: "J1rif_client",
        minWidth: 20
      },
      {
        field: "j1dat",
        headerName: "J1dat",
        type: "date",
        minWidth: 20
      },
      {
        field: "j1titol",
        headerName: "J1titol",
        minWidth: 20
      },
      {
        field: "j1note",
        headerName: "J1note",
        minWidth: 20
      },
      {
        field: "j1fat_1",
        headerName: "J1fat_1",
        minWidth: 20
      },
      {
        field: "j1fat_1_rif",
        headerName: "J1fat_1_rif",
        minWidth: 20
      },
      {
        field: "j1fat_2",
        headerName: "J1fat_2",
        minWidth: 20
      },
      {
        field: "j1fat_2_rif",
        headerName: "J1fat_2_rif",
        minWidth: 20
      },
      {
        field: "j1fat_3",
        headerName: "J1fat_3",
        minWidth: 50
      },
      {
        field: "j1fat_3_rif",
        headerName: "J1fat_3_rif",
        minWidth: 20
      },
      {
        field: "j1tot_fat",
        headerName: "J1tot_fat",
        minWidth: 20
      },
      {
        field: "sel",
        headerName: "Sel",
        minWidth: 20,
        type: "boolean"
      },
      {
        field: "link_ordine",
        headerName: "link_ordine",
        minWidth: 20
      },
      {
        field: "j1_avanz",
        headerName: "J1_avanz",
        minWidth: 20
      },
      {
        field: "j1_av_data",
        headerName: "J1_av_data",
        type: "date",
        minWidth: 20
      },
      {
        field: "actions",
        headerName: "Actions",
        sortable: false,
        renderCell: function render({ row }) {
          return (
            <>
              <EditButton hideText recordItemId={row.id} />
              <ShowButton hideText recordItemId={row.id} />
              <DeleteButton hideText recordItemId={row.id} />
            </>
          );
        },
        align: "center",
        headerAlign: "center",
        minWidth: 80,
      },
    ],
    []
  );

  return (
    <List>
      <DataGrid {...dataGridProps} columns={columns} autoHeight />
    </List>
  );
};
