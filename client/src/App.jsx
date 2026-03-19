import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Login from './pages/Login';
import AdminLogin from './pages/AdminLogin';
import UserLayout from './components/layout/UserLayout';
import Dashboard from './pages/user/Dashboard';
import Explore from './pages/user/Explore';
import EventRegistration from './pages/user/EventRegistration';
import Profile from './pages/user/Profile';
import Tickets from './pages/user/Tickets';
import Certificates from './pages/user/Certificates';
import AdminLayout from './components/layout/AdminLayout';
import AdminDashboard from './pages/admin/Dashboard';
import CreateEvent from './pages/admin/CreateEvent';
import GuestDetails from './pages/admin/GuestDetails';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          
          {/* User Routes */}
          <Route element={<UserLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/register-event/:id" element={<EventRegistration />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/tickets" element={<Tickets />} />
            <Route path="/certificates" element={<Certificates />} />
          </Route>

          {/* Admin Routes */}
          <Route element={<AdminLayout />}>
             <Route path="/admin/dashboard" element={<AdminDashboard />} />
             <Route path="/admin/create-event" element={<CreateEvent />} />
             <Route path="/admin/guests" element={<GuestDetails />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App;
