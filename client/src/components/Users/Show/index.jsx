import Axios from 'axios';
import React, { useState, useContext } from 'react';
import { useEffect } from 'react';
import { UserContext } from '../../Authentication/UserProvider';
import { GlobalStoreContext } from '../../shared/Globals';
import { Container, Media } from 'react-bootstrap';
import Header from '../../shared/Header';
import { Link } from 'react-router-dom';

const Show = () => {
  const { user } = useContext(UserContext);
  const { globalStore } = useContext(GlobalStoreContext);
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    Axios.get(`${globalStore.REACT_APP_ENDPOINT}/users/show?secret_token=${user.token}`)
    .then(({ data }) => {
      setUserDetails(data);
    });
  }, []);

  return (
    userDetails ? (
      <>
        <Header title="Your Profile">
          

          <p>
            you can edit the profile over here...
          </p>
        </Header>

        <Container>
         

          <Media>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdO2mrRcKP32QXOsCV0KMpi4-OLcYtCcmqYQ&usqp=CAU"
              width={150}
              height={150}
              className="mr-3"
            />
            <Media.Body>
              <h5>{userDetails.name}</h5>
              <p>
                <strong>Email:</strong>&nbsp;{userDetails.email}
              </p>

              <p>
                <strong>Since:</strong>&nbsp;{userDetails.createdAt}
              </p>

              <p>
                <Link to="/profile/edit">Edit profile...</Link>
              </p>
            </Media.Body>
          </Media>
        </Container>
      </>
    ) : null
  );
}
 
export default Show;