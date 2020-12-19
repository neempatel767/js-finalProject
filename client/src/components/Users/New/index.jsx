import React from 'react';
import { Container } from 'react-bootstrap';

import Header from '../../shared/Header';
import UserForm from '../UserForm';

const New = () => {
  return (
    <>
      <Header title="Register">
       

        <p>
          register if you have not , its free.....!!!
        </p>
      </Header>
      
      <Container>
       

        <UserForm endpoint="users"/>
      </Container>
    </>
  );
}
 
export default New;