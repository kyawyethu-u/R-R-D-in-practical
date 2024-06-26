import {createBrowserRouter,RouterProvider} from "react-router-dom";

import Main from "./layouts/Main";
import {ProductDetails,About,Home,Products,Error,UserList} from "./pages/Index";
import {loader as productsLoader} from "./pages/Products"
import {loader as productDetailsLoader} from "./pages/ProductDetails"
import {loader as userListLoader} from "./pages/UserList"


const router = createBrowserRouter([
    {path: "/",
        element: <Main/>,
        errorElement: <Error/>,
        children: [ 
            
        {index: true, element: <Home/>},
        {path: "/about",element: <About/>},
        {path: "/products",
         element: <Products/>,
         loader:  productsLoader,
        },
        {path: "/product/:postID",
        element: <ProductDetails/>,
        loader: productDetailsLoader,
        },
        {path: "/users",
         element: <UserList/>,  
         loader:  userListLoader,
        }
    ]
    }
   
])



const App = () => {
 
    return (<>
    <RouterProvider router ={router}/>
    </>)

}

export default App