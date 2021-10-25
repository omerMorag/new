import {Users} from './pages/Users.jsx'
import {UserDetails} from './pages/UserDetails.jsx'

const routes = [
  {
    path: "/user/",
  component:  UserDetails,
  label: "UserDetails",
}, 
  {
      path: "/",
      component: Users,
      label: "Users",
    },

  ];
  
  export default routes;
  