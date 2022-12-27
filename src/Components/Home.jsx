import React, { Fragment } from 'react';
import { Button, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Employees from './Employees.jsx';
import { Link, useNavigate } from 'react-router-dom';

function Home(){

  let history = useNavigate();

  const handleEdit = (id, name, age) => {
    localStorage.setItem('Name', name);
    localStorage.setItem('Age', age);
    localStorage.setItem('Id', id);

  }

  const handleDelete = (id) => {
      var index = Employees.map(function(e){
        return e.id
      }).indexOf(id);
  
      Employees.splice(index,1);

      history('/');
    }

  return(
    <>
      <div style={{margin:'10rem'}}>
        <Table striped border hover size='sm'>
          <thead>
            <tr>
              <th>
                Name
              </th>
              <th>
                Age
              </th>
              <th>
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {
              Employees && Employees.length > 0
              ?
              Employees.map((e) =>{
                return(
                  <tr>
                    <td>
                      { e.Name }
                    </td>
                    <td>
                      { e.Age }
                    </td>
                    <td>
                      <Link to={'/edit'}>
                        <Button onClick={()=> handleEdit(e.id, e.Name, e.Age)}>EDIT</Button>
                      </Link>
                      &nbsp;
                      <Button onClick={()=> handleDelete(e.id)}>DELETE</Button>
                    </td>
                  </tr>
                )
              })
              :
              'No Data Avalible'
            }
          </tbody>
        </Table>
        <br />
        <Link className='d-grid gap-2' to='/create'>
          <Button className='btn-block lg'>CREATE</Button>
        </Link>
      </div>
    </>
  );
}

export default Home;
