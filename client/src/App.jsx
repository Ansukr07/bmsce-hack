import { useEffect } from 'react';
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
import AboutPage from './pages/AboutPage';
import TeacherDashboard from './pages/teacher-dashboard/TeacherDashboard';
import CampusTour from './pages/CampusTour';
import NetworkInfrastructure from './pages/NetworkInfrastructure';
import IdeaLab from './pages/IdeaLab';
import EStudio from './pages/EStudio';
import BICEP from './pages/BICEP';
import IPCell from './pages/IPCell';
import HigherEducation from './pages/HigherEducation';
import ResearchPage from './pages/ResearchPage';
import PaperDetail from './pages/PaperDetail';
import CampusLifePage from './pages/CampusLifePage';

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
import { useLanguage } from './context/LanguageContext';
import campusBg from './assets/images/campus.png';
import facilitiesBg from './assets/images/facilities.png';
import classroomBg from './assets/images/classroom.png';

function App() {
  const location = useLocation();
  const { language, applyLanguage } = useLanguage();
  const hideNavFooter =
    location.pathname === '/portal' ||
    location.pathname === '/campus-tour' ||
    location.pathname.startsWith('/student') ||
    location.pathname.startsWith('/teacher-dashboard');

  // Remove padding on Home page so the Hero section flushes to the top
  const isHome = location.pathname === '/';
  const shouldUseCampusBackground =
    !isHome &&
    location.pathname !== '/campus-tour' &&
    location.pathname !== '/portal' &&
    !location.pathname.startsWith('/student') &&
    !location.pathname.startsWith('/teacher-dashboard');

  useEffect(() => {
    applyLanguage(language);
  }, [location.pathname, language, applyLanguage]);

  return (
    <div className="min-h-screen flex flex-col font-sans relative isolate">
      <div id="google_translate_element" />
      {isHome ? <div className="fixed inset-0 bg-dashboard -z-10" /> : null}
      {shouldUseCampusBackground ? (
        <>
          <div
            className="fixed inset-0 pointer-events-none"
            style={{
              zIndex: -10,
              backgroundImage: `url(${campusBg}), url(${facilitiesBg}), url(${classroomBg})`,
              backgroundPosition: 'center top, left center, right center',
              backgroundSize: 'cover, 40% auto, 40% auto',
              backgroundRepeat: 'no-repeat, no-repeat, no-repeat',
            }}
          />
          <div className="fixed inset-0 pointer-events-none bg-[linear-gradient(180deg,rgba(255,255,255,0.7),rgba(255,255,255,0.6))] backdrop-blur-[1px]" style={{ zIndex: -5 }} />
        </>
      ) : null}
      {!hideNavFooter && <Navbar />}
      <main className={hideNavFooter || isHome ? 'flex-grow' : 'flex-grow pt-20 md:pt-24'}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/placement" element={<Placements />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/departments" element={<Departments />} />
          <Route path="/departments/:slug" element={<DepartmentPage />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/campus-tour" element={<CampusTour />} />
          <Route path="/network-infrastructure" element={<NetworkInfrastructure />} />
          <Route path="/idea-lab" element={<IdeaLab />} />
          <Route path="/e-studio" element={<EStudio />} />
          <Route path="/bicep" element={<BICEP />} />
          <Route path="/ip-cell" element={<IPCell />} />
          <Route path="/higher-education" element={<HigherEducation />} />
          <Route path="/research" element={<ResearchPage />} />
          <Route path="/research/paper/:id" element={<PaperDetail />} />
          <Route path="/campus-life" element={<CampusLifePage />} />

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
