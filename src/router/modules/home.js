import MyPortal from "../../views/home";
import MyselfPortal from "../../views/home/components/myselfPortal";


const myPortal = {
    path: "/myPortal",
    component: MyPortal,
    redirect: () => {
      return {path: '/myPortal/protal-self'};
    },
    children: [
      { path: "/myPortal/protal-self", component: MyselfPortal }
    ]
};

export default myPortal;
