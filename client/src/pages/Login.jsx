import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useConvex } from 'convex/react';
import { api } from "../../convex/_generated/api";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const convex = useConvex();

  const role = new URLSearchParams(location.search).get('role') || 'student';
  const isStaff = role === 'staff';
  const portalName = isStaff ? 'Faculty Portal Login' : 'Student Portal Login';
  const targetRoute = isStaff ? '/teacher-dashboard' : '/student/dashboard';

  const colorHex = isStaff ? '#2E8B57' : '#FB6D39';
  const hoverHex = isStaff ? '#1f5c3a' : '#7a0000';

  const [showRealAuth, setShowRealAuth] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleRealLogin = async (e) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }

    setLoading(true);
    try {
      const currentRole = isStaff ? "faculty" : "student";
      const result = await convex.query(api.users.authenticateUser, {
        email,
        password,
        role: currentRole
      });

      if (result.success) {
        if (result.user.role === currentRole) {
          localStorage.setItem('userId', result.user._id);
          localStorage.setItem('userRole', currentRole);
          navigate(targetRoute);
        } else {
          setError(`Role mismatch! Please use the ${result.user.role} portal.`);
        }
      } else {
        setError(result.message);
      }
    } catch (err) {
      console.error(err);
      setError('Failed to connect to Convex Database. Please ensure backend is running.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[calc(100vh-80px)] flex items-center justify-center bg-[#EFEDEE] py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden font-sans">
      {/* Soft Ambient Glow */}
      <div className="absolute top-[20%] left-[20%] w-[30%] h-[40%] bg-[#B6FA82] rounded-full mix-blend-multiply filter blur-[120px] opacity-[0.2] pointer-events-none"></div>
      <div className="absolute bottom-[20%] right-[20%] w-[40%] h-[40%] bg-[#8ddbfe] rounded-full mix-blend-multiply filter blur-[120px] opacity-[0.2] pointer-events-none"></div>

      <div className="max-w-md w-full space-y-8 bg-white/70 backdrop-blur-2xl p-10 rounded-[28px] shadow-[0_12px_40px_-10px_rgba(0,0,0,0.05)] border border-white/80 relative z-10 transition-all duration-300 hover:shadow-[0_16px_50px_-12px_rgba(0,0,0,0.08)]">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold font-serif" style={{ color: colorHex }}>
            {portalName}
          </h2>
          <p className="mt-4 text-center text-[14px] text-gray-500 font-medium">
            Access your personalized dashboard below.
          </p>
        </div>

        <div className="mt-8 space-y-6">
          {!showRealAuth ? (
            <div className="flex flex-col gap-4 w-full">
              <button
                onClick={() => setShowRealAuth(true)}
                className="group relative w-full flex justify-center items-center py-4 px-4 border border-transparent text-[13px] font-bold rounded-[16px] text-white focus:outline-none focus:ring-2 focus:ring-offset-2 uppercase tracking-widest transition-all duration-300 hover:-translate-y-0.5 shadow-[0_8px_20px_rgba(0,0,0,0.12)] hover:shadow-[0_12px_24px_rgba(0,0,0,0.15)]"
                style={{ backgroundColor: colorHex, outlineColor: colorHex }}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = hoverHex}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = colorHex}
              >
                Login with Real Database
              </button>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-[12px]">
                  <span className="px-2 bg-white/80 text-gray-500 uppercase tracking-widest rounded-full font-bold">Or Test Mode</span>
                </div>
              </div>

              <button
                onClick={() => navigate(targetRoute)}
                className="group relative w-full flex justify-center items-center py-4 px-4 border text-[13px] font-bold rounded-[16px] bg-white hover:bg-gray-50 text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 uppercase tracking-widest transition-all duration-300"
                style={{ borderColor: colorHex, outlineColor: colorHex }}
              >
                Simulate Login (Test)
              </button>
            </div>
          ) : (
            <form onSubmit={handleRealLogin} className="flex flex-col gap-5 w-full">

              {error && (
                <div className="bg-red-50 text-red-600 text-[13px] p-3 rounded-xl border border-red-100 font-medium text-center">
                  {error}
                </div>
              )}

              <div className="space-y-4">
                <div>
                  <label className="block text-[13px] font-bold text-gray-700 mb-1 lg:mb-2 uppercase tracking-wide">
                    {isStaff ? 'Faculty Email' : 'Student Email'}
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="appearance-none block w-full px-4 py-3.5 border border-gray-200 rounded-[16px] shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:border-transparent transition-all bg-white/80 backdrop-blur-sm sm:text-[14px] font-medium text-gray-900"
                    placeholder={isStaff ? "faculty@bmsit.in" : "student@bmsit.in"}
                  />
                </div>
                <div>
                  <label className="block text-[13px] font-bold text-gray-700 mb-1 lg:mb-2 uppercase tracking-wide">
                    Password
                  </label>
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="appearance-none block w-full px-4 py-3.5 border border-gray-200 rounded-[16px] shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:border-transparent transition-all bg-white/80 backdrop-blur-sm sm:text-[14px] font-medium text-gray-900"
                    placeholder="••••••••"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="group relative w-full flex justify-center items-center py-4 px-4 border border-transparent text-[13px] font-bold rounded-[16px] text-white focus:outline-none focus:ring-2 focus:ring-offset-2 uppercase tracking-widest transition-all duration-300 hover:-translate-y-0.5 shadow-[0_8px_20px_rgba(0,0,0,0.12)] hover:shadow-[0_12px_24px_rgba(0,0,0,0.15)] disabled:opacity-70 disabled:hover:translate-y-0"
                style={{ backgroundColor: colorHex, outlineColor: colorHex }}
              >
                {loading ? 'Authenticating...' : 'Sign In'}
              </button>

              <button
                type="button"
                onClick={() => { setShowRealAuth(false); setError(''); }}
                className="text-[13px] font-bold text-gray-500 hover:text-gray-700 text-center uppercase tracking-wider mt-2 transition-colors"
              >
                ← Back to Options
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
