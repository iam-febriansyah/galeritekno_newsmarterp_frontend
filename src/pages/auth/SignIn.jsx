import React, { useEffect, useState } from 'react';
import { loginUser } from '../../redux/reducers/userSlice'
import { useSelector, useDispatch } from 'react-redux';
// import { Grid, Table, TableHeaderRow } from '@devexpress/dx-react-grid-material-ui';

// const columns = [
//   { name: 'id', title: 'ID' },
//   { name: 'product', title: 'Product' },
//   { name: 'owner', title: 'Owner' },
// ];
// const rows = [
//   { id: 0, product: 'DevExtreme', owner: 'DevExpress' },
//   { id: 1, product: 'DevExtreme Reactive', owner: 'DevExpress' },
// ];
const Hello = () => {
  const [data, setData] = useState({});

  const dispatch = useDispatch();

  const onChange = (e) => {
    setData({...data, [e.target.name]: e.target.value})
  }

  const onSubmit = () => {
    dispatch(loginUser(data))
  };

  return (
    <div>
      <input placeholder="user" onChange={onChange} name="UserName" />
      <input placeholder="password" onChange={onChange} name="UserPassword" />
      <button onClick={onSubmit}>login</button>

      {/* <Grid
      rows={rows}
      columns={columns}
    >
      <Table />
      <TableHeaderRow />
    </Grid> */}
    </div>
  );
};

export default Hello;
