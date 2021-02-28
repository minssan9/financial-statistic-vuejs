import Home from "../../views/Home";  
import Chart from "../../views/Chart";

export default[
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {path: '/chart', component: Chart},
    ]
  }
]