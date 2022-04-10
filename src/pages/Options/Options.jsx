import React, { useEffect, useState } from 'react';
import './Options.css';
import logo from './../../assets/img/logo-black.png';
import { getAllUsers, saveRecords } from '../../storageUtils';
import { getTwitterUserByUserName } from '../../dataUtils';

// const rows = [
//   { id: 1, userName: '_shreygupta', name: 'Shrey Gupta' },
//   { id: 2, userName: 'nafees87n', name: 'Nafees Nehar ' },
//   { id: 3, userName: 'sumitshinde2608', name: 'Sumit Shinde' },
//   { id: 4, userName: '4molydenum2', name: 'Tathagat Paul' },
//   { id: 5, userName: 'maybe_anurag', name: 'Anurag' },
//   { id: 6, userName: '_shreygupta', name: 'Shrey Gupta' },
//   { id: 7, userName: 'nafees87n', name: 'Nafees Nehar ' },
//   { id: 8, userName: 'sumitshinde2608', name: 'Sumit Shinde' },
//   { id: 9, userName: '4molydenum2', name: 'Tathagat Paul' },
//   { id: 10, userName: 'maybe_anurag', name: 'Anurag' },
// ];

const Options = () => {
  const [username, setUsername] = useState('');
  const [userList, setUserList] = useState([]);
  const [shouldRefresh, setShouldRefresh] = useState(false);

  const addUser = () => {
    getTwitterUserByUserName(username)
      .then((userObject) => {
        if (userObject.data) {
          saveRecords([{ ...userObject.data }]);
          setUsername('');
        } else {
          throw Error('User not found');
        }
      })
      .then(() => setShouldRefresh(true));
  };

  useEffect(() => {
    getAllUsers()
      .then((res) => setUserList(res))
      .then(() => setShouldRefresh(false));
  }, [shouldRefresh]);

  return (
    <div className="MainUI">
      <div className="header container">
        <img
          src={logo}
          alt="logo"
          height="80px"
          width="auto"
          className="logo"
        />
      </div>
      <div className="UsersListArea">
        <div className="SearchBarArea">
          <div>
            <input
              className="SearchBar"
              placeholder="Add User"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            ></input>
          </div>
          <button className="AddUserButton" onClick={addUser}>
            Add new user
          </button>
        </div>
        <div className="UsersTable" style={{ fontWeight: 'bold' }}>
          <table>
            <tr>
              <th>S. No. </th>
              <th>Username</th>
              <th>Name</th>
              <th>Remove</th>
            </tr>
            {userList.map((val, key) => {
              return (
                <tr key={key}>
                  <td>{key + 1}</td>
                  <td>{val.username}</td>
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
                      onClick={() => {
                        console.log('Delete triggered');
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
