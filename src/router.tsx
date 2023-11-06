import {createBrowserRouter, Navigate} from "react-router-dom";
import {MainLayout} from "./layouts";
import {ErrorPage, MoviesPage} from "./pages";

const router = createBrowserRouter([
    {path: '', element: <MainLayout/>, errorElement: <ErrorPage/>, children: [
            {index:true, element:<Navigate to={'movies'}/>},
            {path:'movies', element:<MoviesPage/>}
        ]
    }
])

export {router}