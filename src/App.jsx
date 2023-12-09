
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import {
  About,
  Cart,
  CheckOut,
  Error,
  HomeLayout,
  Landing,
  Login,
  Register,
  Orders,
  Products,
  SingleProduct
} from './pages'
import ErrorElement from './components/ErrorElement'

// Loaders
import {loader as LoaderLanding} from './pages/Landing'
import {loader as LoaderSingle} from './pages/SingleProduct'
import {loader as LoaderProduct} from './pages/Product'
import {loader as LoaderCheckOut} from './pages/Checkout'
import {loader as LoaderOrders} from './pages/Orders'
// Actions
import {action as RegisterAction} from './pages/Register'
import {action as LoginAction} from './pages/Login'
import {action as CheckOutFormAction} from './components/CheckoutForm'

import { store } from './store'


const router = createBrowserRouter([
  {
      path: '/',
      element: <HomeLayout/>,
      errorElement : <Error/>,
      children : [
        {
          index : true,
          element : <Landing/>,
          errorElement : <ErrorElement/>,
          loader : LoaderLanding
        },
        {
          path : 'products',
          element : <Products/>,
          loader : LoaderProduct
        },
        {
          path : 'products/:id',
          element : <SingleProduct/>,
          errorElement : <ErrorElement/>,
          loader : LoaderSingle
        },
        {
          path : 'cart',
          element : <Cart/>
        },
        {
          path : 'about',
          element : <About/>
        },
        {
          path : 'checkout',
          element : <CheckOut/>,
          loader : LoaderCheckOut(store),
          action : CheckOutFormAction(store)
        },
        {
          path : 'orders',
          element : <Orders/>,
          loader : LoaderOrders(store)
        }
      ]
  },
  { path : '/login' , element : <Login/> , action : LoginAction(store)},
  { path : '/register' , element : <Register/> , action : RegisterAction},
  // { path : '*' , element : <Error/>}
])




const App = () => {
  return <RouterProvider router={router} />
}

export default App