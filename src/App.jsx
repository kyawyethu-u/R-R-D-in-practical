import {createBrowserRouter,RouterProvider} from "react-router-dom";

import Main from "./layouts/Main";
import {ProductDetails,About,Home,Error,Products} from "./pages/Index";

const router = createBrowserRouter([
    {path: "/",
        element: <Main/>,
        errorElement: <Error/>,
        children: [ 
            
        {index: true, element: <Home/>},
        {path: "/about",element: <About/>},
        {path: "/products",element: <Products/>},
        {path: "/product/:title",element: <ProductDetails/>},
       
    ]
    }
   
])



const App = () => {
 
    return (<>
    <RouterProvider router ={router}/>
    </>)

}

export default App