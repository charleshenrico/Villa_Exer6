import {saveStudent, update, removeUser, removeAllUser, user, members} from './controller.js'

const router = (app) => {
  app.post('/saveStudent', saveStudent);
  app.post('/update', update);  
  app.post('/removeUser', removeUser);
  app.post('/removeAllUser', removeAllUser);  
  app.get('/user', user);
  app.get('/members', members);
}

export default router;



//save add findStudent
//remove all