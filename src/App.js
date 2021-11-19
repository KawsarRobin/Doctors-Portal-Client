import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import AuthProvider from './context/AuthProvider/AuthProvider';
import Appointment from './Pages/Appointment/Appointment/Appointment';
import AddDoctor from './Pages/Dashboard/AddDoctor/AddDoctor';
import Dashboard from './Pages/Dashboard/Dashboard';
import DashboardHome from './Pages/Dashboard/DashboardHome/DashboardHome';
import MakeAdmin from './Pages/Dashboard/jMakeAdmin/MakeAdmin';
import Payment from './Pages/Dashboard/Payment/Payment';
import Home from './Pages/Home/Home/Home';
import AdminRoute from './Pages/Home/Login/AdminRoute/AdminRoute';
import Login from './Pages/Home/Login/Login';
import PrivateRoute from './Pages/Home/Login/PrivateRoute/PrivateRoute';
import Register from './Pages/Home/Login/Register/Register';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Routes>
            <Route
              path="/appointment"
              element={
                <PrivateRoute>
                  <Appointment />
                </PrivateRoute>
              }
            ></Route>
            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <Dashboard></Dashboard>
                </PrivateRoute>
              }
            >
              <Route
                exact
                path={'/dashboard'}
                element={<DashboardHome></DashboardHome>}
              ></Route>
              <Route
                path={`/dashboard/payment/:appointmentId`}
                element={<Payment></Payment>}
              ></Route>
              <Route
                path={`/dashboard/makeAdmin`}
                element={
                  <AdminRoute>
                    <MakeAdmin></MakeAdmin>
                  </AdminRoute>
                }
              ></Route>
              <Route
                path={`/dashboard/addDoctor`}
                element={
                  <AdminRoute>
                    <AddDoctor></AddDoctor>
                  </AdminRoute>
                }
              ></Route>
            </Route>
            <Route path="/home" element={<Home></Home>}></Route>
            <Route path="/login" element={<Login></Login>}></Route>
            <Route path="/register" element={<Register></Register>}></Route>
            <Route exact path="/" element={<Home></Home>}></Route>
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
