import ProductAdd from '@/features/products/_components/Add'
import ProductEdit from '@/features/products/_components/Edit'
import BaseLayout from '@/layouts/BaseLayout'
import ManagerLayout from '@/layouts/ManagerLayout'
import AboutPage from '@/pages/about'
import SigninPage from '@/pages/auth/Signin'
import SignUpPage from '@/pages/auth/Signup'
import HomePage from '@/pages/home'
import DashboardAdminPage from '@/pages/manager/dashboard'
import ProductAdminPage from '@/pages/manager/product'
import UsersAdminPage from '@/pages/manager/users'
import ProductDetailPage from '@/pages/product-detail'
import { Route, Routes } from 'react-router-dom'

const Routers = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<BaseLayout/>}>
          <Route index element={<HomePage/>}/>
          <Route path='about' element={<AboutPage/>}/>
          <Route path='/product-detail/:id' element={<ProductDetailPage/>}/>
        </Route>
        <Route path='signin' element={<SigninPage/>}/>
        <Route path='signup' element={<SignUpPage/>}/>
        <Route path='admin' element={<ManagerLayout/>}>
          <Route index element={<DashboardAdminPage/>}/>
          <Route path='products' element={<ProductAdminPage/>}/>
          <Route path='products/add' element={<ProductAdd/>}/>
          <Route path='products/:id/edit' element={<ProductEdit/>}/>
          <Route path='users' element={<UsersAdminPage/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default Routers