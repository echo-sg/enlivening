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
  { id: 1, userName: '_shreygupta', name: 'Shrey Gupta' },
  { id: 2, userName: 'nafees87n', name: 'Nafees Nehar ' },
  { id: 3, userName: 'sumitshinde2608', name: 'Sumit Shinde' },
  { id: 4, userName: '4molydenum2', name: 'Tathagat Paul' },
  { id: 5, userName: 'maybe_anurag', name: 'Anurag' },
  { id: 6, userName: '_shreygupta', name: 'Shrey Gupta' },
  { id: 7, userName: 'nafees87n', name: 'Nafees Nehar ' },
  { id: 8, userName: 'sumitshinde2608', name: 'Sumit Shinde' },
  { id: 9, userName: '4molydenum2', name: 'Tathagat Paul' },
  { id: 10, userName: 'maybe_anurag', name: 'Anurag' },
];

const Options = () => {
  return (
    <div className="MainUI">
      <div></div>
      <div className="UsersListArea">
        <div className="UsersTable" style={{ fontWeight: 'bold' }}>
          <table>
            <tr>
              <th>S. No. </th>
              <th>Username</th>
              <th>Name</th>
              <th>Remove</th>
            </tr>
            {rows.map((val, key) => {
              return (
                <tr key={key}>
                  <td>{val.id}</td>
                  <td>{val.userName}</td>
                  <td>{val.name}</td>
                  <td id="RemoveOption">
                    {' '}
                    <i
                      className="fa fa-trash-o"
                      style={{
                        color: '#FE7575',
                        marginLeft: '5px ',
                        fontSize: '20px',
                      }}
                    ></i>
                  </td>
                </tr>
              );
            })}
          </table>
        </div>
      </div>
    </div>
  );
};

export default Options;
