import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Employee from './pages/Employee'
import Attendance from './pages/Attendance'
import Profile from './pages/Profile'
import Payroll from './pages/Payroll'


function App() {
 

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login></Login>} />
        <Route path='/dashboard' element={<Dashboard />}></Route>
        <Route path='/employee' element={<Employee></Employee>}></Route>
        <Route path='/attendance' element={<Attendance></Attendance>}></Route>
        <Route path='/leave' element={<Attendance></Attendance>}></Route>
        <Route path='/payroll' element={<Payroll></Payroll>}></Route>
        <Route path='/announcement' element={<Attendance></Attendance>}></Route>
        <Route path='/profile' element={<Profile></Profile>}> </Route>

        
      </Routes>
    </BrowserRouter>
  )
}

export default App
