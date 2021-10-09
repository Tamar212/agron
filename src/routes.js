/*!

=========================================================
* Argon Dashboard React - v1.2.1
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Index from "views/Index.js";
import Profile from "views/examples/Profile.js";
import Maps from "views/examples/Maps.js";
import Register from "views/examples/Register.js";
import Login from "views/examples/Login.js";
import Tables from "views/examples/Tables.js";
import Icons from "views/examples/Icons.js";
import Home from "views/examples/Home.js";
import Tz from "views/examples/Tz.js";
import Temp from "views/examples/Temp.js";
import EntryOrExit from "views/examples/EntryOrExit.js";
import Details from "views/examples/Details.js";
import Home1 from "views/examples/index.js";
var routes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/admin",
  },
  {
    path: "/Home",
    name: "Home",
    icon: "ni ni-tv-2 text-primary",
    component: Home,
    layout: "/admin",
  },
  {
    path: "/Home1",
    name: "Home1",
    icon: "ni ni-tv-2 text-primary",
    component: Home1,
    layout: "/admin",
  },
  {
    path: "/Tz",
    name: "Tz",
    icon: "ni ni-tv-2 text-primary",
    component: Tz,
    layout: "/admin",
  },
  {
    path: "/Temp",
    name: "Temp",
    icon: "ni ni-tv-2 text-primary",
    component:Temp,
    layout: "/admin",
  },
  {
    path: "/EntryOrExit",
    name: "EntryOrExit",
    icon: "ni ni-tv-2 text-primary",
    component: EntryOrExit,
    layout: "/admin",
  },
  {
    path: "/Details",
    name: "Details",
    icon: "ni ni-tv-2 text-primary",
    component: Details,
    layout: "/admin",
  },
  {
    path: "/icons",
    name: "Icons",
    icon: "ni ni-planet text-blue",
    component: Icons,
    layout: "/admin",
  },
  {
    path: "/maps",
    name: "Maps",
    icon: "ni ni-pin-3 text-orange",
    component: Maps,
    layout: "/admin",
  },
  {
    path: "/user-profile",
    name: "User Profile",
    icon: "ni ni-single-02 text-yellow",
    component: Profile,
    layout: "/admin",
  },
  {
    path: "/tables",
    name: "Tables",
    icon: "ni ni-bullet-list-67 text-red",
    component: Tables,
    layout: "/admin",
  },
  {
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    component: Login,
    layout: "/auth",
  },
  {
    path: "/register",
    name: "Register",
    icon: "ni ni-circle-08 text-pink",
    component: Register,
    layout: "/auth",
  },
];
export default routes;
