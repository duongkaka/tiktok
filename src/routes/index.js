import Folowing from "~/pages/Folowing"
import Home from "~/pages/Home"
import Profile from "~/pages/Profile"
import Upload from "~/pages/Upload";

//Public Routes
const publicRoutes = [
    { path:'/',component : Home},
    { path:'/flow',component : Folowing},
    { path:'/profile',component : Profile},
    { path:'/upload',component : Upload, layout : null}
];

const privateRoutes = [
    
]

export {publicRoutes,privateRoutes}