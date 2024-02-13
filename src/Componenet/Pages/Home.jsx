import React, { useEffect, useState } from 'react'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { NavLink } from 'react-router-dom';
import Register from './Register';

function Home() {
  const [getuserdata, setUserdata] = useState([]);
  console.log(getuserdata);

  const getdata = async () => {
    const res = await fetch("/getdata", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });

    const data = await res.json();
    console.log(data);

    if (res.status === 404 || !data) {
      console.log("error ");

    } else {
      setUserdata(data)
      console.log("get data");

    }
  }

  useEffect(() => {
    getdata ();
  }, [])

  return (
    <div className='mt-5'>
      <div className='container'>
        <div className='add_btn mt-2 mb-2'>
          <NavLink to='/register' className="btn btn-primary ">+Add Data</NavLink>
        </div>
        <table className="table">

          <thead>
            <tr className='table-dark'>
              <th scope="col">Id</th>
              <th scope="col">UserName</th>
              <th scope="col">Email</th>
              <th scope="col">Job</th>
              <th scope="col">Phone</th>
              <th scope="col"></th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <th scope='row'>1</th>
              <td>Archana</td>
              <td>kumariarchana567@gmail.com</td>
              <td>work</td>
              <td>9145678345</td>
              <td className="d-flex justify-content-between">
              <NavLink to='view/:id'> <button className="btn btn-success"><RemoveRedEyeIcon /></button></NavLink>
             <NavLink to='edit/:id'>  <button className="btn btn-primary"><EditIcon /></button></NavLink>
             <button className="btn btn-danger" onClick={() =>('')}><DeleteIcon /></button>
              </td>
              
            </tr>
          </tbody>
          <tbody>
            <tr>
              <th scope='row'>2</th>
              <td>Aruhi</td>
              <td>kumariaruhi456@gmail.com</td>
              <td>work</td>
              <td>9145987345</td>
              <td className="d-flex justify-content-between">
              <NavLink to='view/:id'> <button className="btn btn-success"><RemoveRedEyeIcon /></button></NavLink>
             <NavLink to='edit/:id'>  <button className="btn btn-primary"><EditIcon /></button></NavLink>
             <button className="btn btn-danger" onClick={() =>('')}><DeleteIcon /></button>
              </td>
              
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Home