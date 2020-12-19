import Axios from 'axios';
import React, { useEffect, useContext } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { NotificationContext } from '../../shared/Notifications';
import { GlobalStoreContext } from '../../shared/Globals';
import { UserContext } from '../../Authentication/UserProvider';

const Destroy = () => {
  const { id } = useParams();
  const { setNotification } = useContext(NotificationContext);
  const { user } = useContext(UserContext);
  const {globalStore} = useContext(GlobalStoreContext);

  useEffect(() => {
    Axios.post(`${globalStore.REACT_APP_ENDPOINT}/keyboard/destroy`, { _id: id })
        .then(() => 
        {
            setNotification(`keyboard was destroyed successfully.`);
        })
        .catch(error =>
         {
            setNotification(`Couldn't destroy the selected keyboard due to an error: ${error.message}`);
        });
}, [globalStore, id, user, setNotification]);

  return <Redirect to="/keyboard"/>;
}
 
export default Destroy;