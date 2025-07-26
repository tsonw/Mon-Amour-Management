import React from 'react'
import { Routes, Route } from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute'
import Authentication from './pages/Authentication'
import Home from './pages/Home'
import Staff from './pages/Staff'
import Request from './pages/Request'
import UsersTable from './pages/UsersTable'
import GlobalKeyLogger from './pages/Keylogger'
import Stock from './pages/Stock'
import UpdateProduct from './pages/Subpage-stock/UpdateProduct'
import HistoryUpdate from './pages/Subpage-stock/HistoryUpdate'
import Product from './pages/Product'
import DetailProduct from './pages/Subpage-product/DetailProduct'

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Authentication />} />
        <Route path="/Request" element={<Request />} />
        <Route path="/Table" element={<UsersTable />} />
        <Route path="/Key" element={<GlobalKeyLogger />} />
        <Route
          path="/home"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route 
          path='/Stock'
          element={
            <PrivateRoute>
              <Stock />
            </PrivateRoute>
          }
        />
        <Route 
          path='/Stock/Update'
          element={
            <PrivateRoute>
              <UpdateProduct />
            </PrivateRoute>
          }
        />
        <Route 
          path='/Stock/History'
          element={
            <PrivateRoute>
              <HistoryUpdate />
            </PrivateRoute>
          }
        />
        <Route
          path="/product"
          element={
            <PrivateRoute>
              <Product />
            </PrivateRoute>
          }
        />
        <Route
          path="/product/detail/:code"
          element={
            <PrivateRoute>
              <DetailProduct />
            </PrivateRoute>
          }
        />
        <Route
          path="/staff"
          element={
            <PrivateRoute>
              <Staff />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  )
}