import React from 'react';
import Form from '../Form';
import Header from '../../shared/Header';
import { Container } from 'react-bootstrap';

const New = () => {
  return (
    <>
      <Header title="Mouse">
        New mouse
      </Header>

      <Container>
        <Form endpoint="mouse"/>
      </Container>
    </>
  );
}
 
export default New;