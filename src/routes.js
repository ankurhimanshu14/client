// core components
import Dashboard from "./views/admin/Dashboard.js";
import Search from "./views/admin/Search.js";
import Paytm from "./views/admin/Paytm.js";
import Login from "./views/auth/Login.js";
// import Maps from "./views/admin/Maps.js";
import Profile from "./views/admin/Profile.js";
import Register from "./views/auth/Register.js";
// @material-ui/icons components
import AccountCircle from "@material-ui/icons/AccountCircle";
// import Grain from "@material-ui/icons/Grain";
// import LocationOn from "@material-ui/icons/LocationOn";
import SearchSharpIcon from '@material-ui/icons/SearchSharp';
import Person from "@material-ui/icons/Person";
import Tv from "@material-ui/icons/Tv";
import VpnKey from "@material-ui/icons/VpnKey";
import AccountBalanceSharpIcon from '@material-ui/icons/AccountBalanceSharp';

var routes = [
  {
    id: 'dashboard',
    path: "/index",
    name: "Dashboard",
    icon: Tv,
    iconColor: "Primary",
    component: Dashboard,
    layout: "/admin",
    item: []
  },
  {
    id: 'redeem-history',
    path: "/index",
    name: "Redeem History",
    icon: AccountBalanceSharpIcon,
    iconColor: "Error",
    component: null,
    layout: "/admin",
    item:[
      {
        id: 'paytm',
        path: "/paytm",
        name: "PayTM",
        icon: Person,
        iconColor: "WarningLight",
        component: Paytm,
        layout: "/admin",
      },
      {
        id: 'google-giftcard',
        path: "/google-giftcard",
        name: "Google Giftcard",
        icon: VpnKey,
        iconColor: "Info",
        component: Search,
        layout: "/admin"
      },
      {
        id: 'freefire',
        path: "/freefire",
        name: "Freefire",
        icon: VpnKey,
        iconColor: "Info",
        component: Dashboard,
        layout: "/admin"
      },
    ]
  },
  {
    id: 'refer-details',
    path: "/refer-details",
    name: "Refer Details",
    icon: SearchSharpIcon,
    iconColor: "Error",
    component: Search,
    layout: "/admin",
    item: []
  },
  {
    id: 'user-profile',
    path: "/user-profile",
    name: "User Profile",
    icon: Person,
    iconColor: "WarningLight",
    component: Profile,
    layout: "/admin",
    item: []
  },
  {
    id: 'login',
    path: "/login",
    name: "Login",
    icon: VpnKey,
    iconColor: "Info",
    component: Login,
    layout: "/auth",
    item: []
  },
  {
    id: 'register',
    path: "/register",
    name: "Register",
    icon: AccountCircle,
    iconColor: "ErrorLight",
    component: Register,
    layout: "/auth",
    item:[]
  }
];
export default routes;


// {
//   id: 'redeem-history',
//   path: "/",
//   name: "Redeem History",
//   icon: AccountBalanceSharpIcon,
//   iconColor: "Error",
//   component: "",
//   layout: "/",
//   item:[
//     {
//       id: 'paytm',
//       path: "/paytm",
//       name: "PayTM",
//       icon: Person,
//       iconColor: "WarningLight",
//       component: Paytm,
//       layout: "/redeem-history",
//     },
//     {
//       id: 'login',
//       path: "/login",
//       name: "Google Giftcard",
//       icon: VpnKey,
//       iconColor: "Info",
//       component: Paytm,
//       layout: "/auth/index"
//     },
//     {
//       id: 'login',
//       path: "/login",
//       name: "Freefire",
//       icon: VpnKey,
//       iconColor: "Info",
//       component: Paytm,
//       layout: "/auth/index"
//     },