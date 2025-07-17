import React from 'react'
import { Routes, Route } from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute'
import Authentication from './pages/Authentication'
import Home from './pages/Home'
import About from './pages/About'
import Request from './pages/Request'
import UsersTable from './pages/UsersTable'
import GlobalKeyLogger from './pages/Keylogger'

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
          path="/about"
          element={
            <PrivateRoute>
              <About />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  )
}