import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Placements from './pages/Placements';
import Admissions from './pages/Admissions';
import Departments from './pages/Departments';
import DepartmentPage from './pages/DepartmentPage';
import Academics from './pages/Academics';
import TeacherDashboard from './pages/teacher-dashboard/TeacherDashboard';

import StudentLayout from './components/StudentLayout';
import Dashboard from './pages/student/Dashboard';
import Attendance from './pages/student/Attendance';
import Marks from './pages/student/Marks';
import Timetable from './pages/student/Timetable';
import Tasks from './pages/student/Tasks';
import Resources from './pages/student/Resources';
import Forum from './pages/student/Forum';
import Clubs from './pages/student/Clubs';
import Notices from './pages/student/Notices';
import Profile from './pages/student/Profile';

function App() {
  const location = useLocation();
  const hideNavFooter =
    location.pathname === '/portal' ||
    location.pathname.startsWith('/student') ||
    location.pathname.startsWith('/teacher-dashboard');

  return (
    <div className="min-h-screen flex flex-col font-sans relative">
      <div className="fixed inset-0 bg-dashboard -z-10" />
      {!hideNavFooter && <Navbar />}
      <main className={hideNavFooter ? 'flex-grow' : 'flex-grow pt-20 md:pt-24'}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/placement" element={<Placements />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/departments" element={<Departments />} />
          <Route path="/departments/:slug" element={<DepartmentPage />} />
          <Route path="/academics" element={<Academics />} />

          {/* Teacher Portal Routes */}
          <Route path="/teacher-dashboard/*" element={<TeacherDashboard />} />

          {/* Student Portal Routes */}
          <Route path="/portal" element={<StudentLayout><Dashboard /></StudentLayout>} />
          <Route path="/student/dashboard" element={<StudentLayout><Dashboard /></StudentLayout>} />
          <Route path="/student/attendance" element={<StudentLayout><Attendance /></StudentLayout>} />
          <Route path="/student/marks" element={<StudentLayout><Marks /></StudentLayout>} />
          <Route path="/student/timetable" element={<StudentLayout><Timetable /></StudentLayout>} />
          <Route path="/student/tasks" element={<StudentLayout><Tasks /></StudentLayout>} />
          <Route path="/student/resources" element={<StudentLayout><Resources /></StudentLayout>} />
          <Route path="/student/forum" element={<StudentLayout><Forum /></StudentLayout>} />
          <Route path="/student/clubs" element={<StudentLayout><Clubs /></StudentLayout>} />
          <Route path="/student/notices" element={<StudentLayout><Notices /></StudentLayout>} />
          <Route path="/student/profile" element={<StudentLayout><Profile /></StudentLayout>} />
        </Routes>
      </main>
      {!hideNavFooter && <Footer />}
    </div>
  );
}

export default App;
