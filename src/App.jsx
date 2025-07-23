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
          path="/staff"
          element={
            <PrivateRoute>
              <Staff />
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
      </Routes>
    </>
  )
}