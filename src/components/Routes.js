import { Switch, Route } from 'react-router-dom'
import AddCategory from './admin/AddCategory'
import AddProduct from './admin/AddProduct'
import AdminDashboard from './admin/AdminDashboard'
import Order from './admin/Order'
import PrivateAdmin from './admin/PrivateAdmin'
import PrivateUser from './admin/PrivateUser'
import UserDashboard from './admin/UserDashboard'
import Cart from './core/Cart'
import Home from './core/Home'
import Product from './core/Product'
import Shop from './core/Shop'
import Signin from './core/Signin'
import Signup from './core/Signup'


function Routes () {
  return (
    <Switch>
      <Route path='/' component={Home} exact/>
      <Route path='/shop' component={Shop} />
      <Route path='/signin' component={Signin}/>
      <Route path='/signup' component={Signup}/>
      <PrivateUser path='/user/dashboard' component={UserDashboard}/>
      <PrivateAdmin path='/admin/dashboard' component={AdminDashboard}/>
      <PrivateAdmin path='/create/category' component={AddCategory}/>
      <PrivateAdmin path='/create/product' component={AddProduct}/>
      <Route path='/product/:productId' component={Product}/>
      <Route path='/cart' component={Cart}/>
      <PrivateAdmin path='/admin/order' component={Order}/>
    </Switch>
  )
}

export default Routes
