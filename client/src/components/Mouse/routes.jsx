import React, { useContext } from 'react';
import { Route, Switch } from 'react-router-dom';
import { UserContext } from '../Authentication/UserProvider';

import Index from './index';
import New from './New';
import Edit from './Edit';
import Form from './Form';
import Delete from './Delete';


const Routes = () => {
  const { user } = useContext(UserContext);

  return (
    <Switch>
      <Route exact path="/mouse" component={Index}/>

      {user && user.token ? (
        <>
          <Route exact path="/mouse/new" component={New}/>
          <Route exact path="/mouse/edit/:id" component={Edit}/>
          <Route exact path="/mouse/form" component={Form}/>
          <Route exact path="/mouse/delete/:id" component={Delete}/>
        </>
      ) : null}
    </Switch>
  );
}
 
export default Routes;