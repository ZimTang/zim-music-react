import ZimDiscover from "@/pages/discover";
import ZimFriend from "@/pages/friend";
import ZimMine from "@/pages/mine";
const routes = [
  {
    path: "/",
    exact: true,
    component: ZimDiscover,
  },
  {
    path: "/mine",
    component: ZimMine,
  },
  {
    path: "/friend",
    component: ZimFriend,
  },
];

export default routes;
