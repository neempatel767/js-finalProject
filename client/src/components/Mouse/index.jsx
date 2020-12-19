import React, { useContext, useState, useEffect } from 'react';
import { NotificationContext } from '../shared/Notifications';
import { GlobalStoreContext } from '../shared/Globals';
import { UserContext } from '../Authentication/UserProvider';
import Axios from 'axios';
import Header from '../shared/Header';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Table } from 'react-bootstrap';


const Mouse = () => {
  const { setNotification } = useContext(NotificationContext);
  const { globalStore } = useContext(GlobalStoreContext);
  const { user } = useContext(UserContext);
  const [Mouse, setMouses] = useState([]);

  useEffect(() => {
    Axios.get(`${globalStore.REACT_APP_ENDPOINT}/mouse`)
    .then(({ data }) => {
      setMouses(data);
    })
    .catch(error => {
      setNotification({
        type: "danger",
        message: `There was an error retrieving the data of mouse: ${error.message}`
      });
    });
  }, [globalStore, setNotification]);

  return (
    <>
      <Header title="mouse"/>

      <Container>
        {mouse && mouse.length > 0 ? (
          <Table striped bordered hover>
            <thead>
              <th>mouse Style</th>
              <th>mouse Series</th>
              <th>dpiModeNum</th>
            </thead>

            <tbody>
              {Mouse.map((Mouse, i) => (
                <tr key={i}>
                  <td>
                    {Mouse.mouseStyle}
                  </td>
                  
                  <td>
                    {Mouse.mouseSeries}
                  </td>

                  <td>
                    {Mouse.dpiModeNum}
                  </td>

                  <td>
                  
                  <Link to={`/mouse/edit/${Mouse._id}`}>Edit</Link>
                  &nbsp;|&nbsp;   
                  <Link to={`/mouse/delete/${Mouse._id}`}>Delete</Link>

                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : null}
      </Container>
    </>
  );
}
 
export default Mouse;