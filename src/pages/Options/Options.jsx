import React from 'react';
import './Options.css';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  {
    field: 'userName',
    headerName: 'userName',
    width: 110,

    // editable: true,
  },

  {
    field: 'user',
    headerName: 'User',
    width: 100,
    renderCell: (params) => {
      console.log(params.row.avatar);
      return (
        <>
          <Avatar src={params.row.avatar} />
        </>
      );
    },
  },
  {
    field: 'remove',
    headerName: 'Remove',
    width: 100,
    renderCell: (params) => {
      return (
        <>
          <Button
            variant="contained"
            color="primary"
            size="small"
            style={{ marginLeft: 16 }}
            // onClick={}
          >
            Remove
          </Button>
        </>
      );
    },
    disableClickEventBubbling: true,
  },
];
const rows = [
  { id: 1, userName: 'Jon', avatar: '' },
  { id: 2, userName: 'Cersei', avatar: '' },
  { id: 3, userName: 'Jaime', avatar: '' },
  { id: 4, userName: 'Arya', avatar: '' },
  { id: 5, userName: 'Daenerys', avatar: '' },
];

// interface Props {
//   title: string;
// }

const Options = () => {
  // return <div className="OptionsContainer">Hello World</div>;
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        // checkboxSelection
        // disableSelectionOnClick
      />
    </div>
  );
};

export default Options;
