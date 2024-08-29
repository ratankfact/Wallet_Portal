import React from 'react'
import Home from './Home/Home'
import { Route, Routes } from "react-router-dom"
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import AdminLayout from "./Layout/ClientLayout"
import '@fontsource/ibm-plex-sans';
import Order from './components/Order'
import View from './components/View'
import Wallet from './components/Wallet'
import BodFba from './components/BodFba'
import PaymentStage from './components/PaymentStage'
import ShippingAdress from './components/ShippingAdress'
import YourTiarStatus from './components/YourTiarStatus'
import ViewTransactions from './components/ViewTransactions'
import DispatchLayout from './Layout/DispatchLayout'
import DispatchOrderTab from './components/DispatchOrderTab'
import CreateOrder from './components/CreateOrder'
import AddItems from './components/AddItems'
import DailyOrderDispatch from './components/DailyOrderDispatch'
import UploadProducts from './components/UploadProducts'
import OrderReport from './components/OrderReport'
import DetailsReporting from './components/DetailsReporting'


const App = () => {
  return (
    <>
    <div className="dark:bg-slate-900 dark:text-white">
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/navbar" element={<Navbar/>}/>
      <Route path="/footer" element={<Footer/>}/>
      <Route path="/adminlayout" element={<AdminLayout/>}/>
      <Route path="/admin-order" element={<Order/>}/>
      <Route path="/order-view" element={<View/>}/>
      <Route path="/order-wallet" element={<Wallet/>}/>
      <Route path="/order-bod-fba" element={<BodFba/>}/>
      <Route path="/order-payment-stage" element={<PaymentStage/>}/>
      <Route path="/order-shipping-address" element={<ShippingAdress/>}/>
      <Route path="/your-tiar-status" element={<YourTiarStatus/>}/>
      <Route path="/order-wallet/view-transactions" element={<ViewTransactions/>}/>
      <Route path="/dispatch-team" element={<DispatchLayout/>}/>
      <Route path="/dispatch-team/dispatch-order-tab" element={<DispatchOrderTab/>}/>
      <Route path="/dispatch-team/create-order" element={<CreateOrder/>}/>
      <Route path="/dispatch-team/add-items" element={<AddItems/>}/>
      <Route path="/dispatch-team/daily-order-dispatch" element={<DailyOrderDispatch/>}/>
      <Route path="/dispatch-team/upload-products" element={<UploadProducts/>}/>
      <Route path="/dispatch-team/order-report" element={<OrderReport/>}/>
      <Route path="/dispatch-team/details-reporting" element={<DetailsReporting/>}/>
    </Routes>
    </div>
    </>
  )
}

export default App