import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import Main from './components/Main'
import Login from './components/account/Login'
import Register from './components/account/Register'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Main />} />
            <Route path='login' Component={Login} />
            <Route path='register' Component={Register} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;