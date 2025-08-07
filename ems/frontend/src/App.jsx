import { BrowserRouter, Routes, Route, Router } from 'react-router-dom'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Employee from './pages/Employee'
import Attendance from './pages/Attendance'
import Profile from './pages/Profile'
import Payroll from './pages/Payroll'
import { AuthContextProvider } from './context/AuthContext'

// function App() {


//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path='/' element={<Login></Login>} />
//         <Route path='/dashboard' element={<Dashboard />}></Route>
//         <Route path='/employee' element={<Employee></Employee>}></Route>
//         <Route path='/attendance' element={<Attendance></Attendance>}></Route>
//         <Route path='/leave' element={<Attendance></Attendance>}></Route>
//         <Route path='/payroll' element={<Payroll></Payroll>}></Route>
//         <Route path='/announcement' element={<Attendance></Attendance>}></Route>
//         <Route path='/profile' element={<Profile></Profile>}> </Route>


//       </Routes>
//     </BrowserRouter>
//   )
// }

// export default App



function App() {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        
          <Routes>
            <Route path='/' element={<Login></Login>}></Route>
            <Route path='/dashboard' element={<h1>Dashboard</h1>}></Route>
          </Routes>
        


      </BrowserRouter>
    </AuthContextProvider>
  )
}

export default App;