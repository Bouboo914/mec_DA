
import React, { useState } from 'react';

import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useNavigate,
  useLocation
} from 'react-router-dom';

// Components
import Sidebar from './components/Sidebar';
import Header from './components/Header';

// Pages
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Employees from './pages/Employees';
import Accounts from './pages/Accounts';
import Medicines from './pages/Medicines';
import Suppliers from './pages/Suppliers';
import Batches from './pages/Batches';
import Departments from './pages/Departments';
import ImportSlips from './pages/ImportSlips';
import ExportSlips from './pages/ExportSlips';
import TerminationSlips from './pages/TerminationSlips';
import SlipDetails from './pages/SlipDetails';
import Contracts from './pages/Contracts';

import './App.css';

// ======================================
// MAIN LAYOUT
// ======================================

function MainLayout({ onLogout }) {
  const navigate = useNavigate();
  const location = useLocation();

  // Tên các trang
  const pageTitles = {
    '/dashboard': 'Dashboard',
    '/employees': 'Quản lý nhân viên',
    '/accounts': 'Quản lý tài khoản',
    '/medicines': 'Quản lý thuốc',
    '/suppliers': 'Quản lý nhà cung cấp',
    '/batches': 'Quản lý lô thuốc',
    '/departments': 'Quản lý khoa / phòng',
    '/import-slips': 'Quản lý phiếu nhập',
    '/export-slips': 'Quản lý phiếu xuất',
    '/termination-slips': 'Quản lý phiếu hủy',
    '/slip-details': 'Chi tiết phiếu',
    '/contracts': 'Quản lý hợp đồng'
  };

  const title = pageTitles[location.pathname] || 'Dashboard';

  return (
    <div className="app-layout">

      {/* Sidebar */}
      <Sidebar
        currentPath={location.pathname}
        onNavigate={navigate}
        onLogout={onLogout}
      />

      {/* Nội dung chính */}
      <main className="main-content">

        <Header title={title} />

        <div className="page-content">

          <Routes>

            {/* Dashboard */}
            <Route
              path="/dashboard"
              element={<Dashboard />}
            />

            {/* Quản lý nhân viên */}
            <Route
              path="/employees"
              element={<Employees />}
            />

            {/* Quản lý tài khoản */}
            <Route
              path="/accounts"
              element={<Accounts />}
            />

            {/* Quản lý thuốc */}
            <Route
              path="/medicines"
              element={<Medicines />}
            />

            {/* Quản lý nhà cung cấp */}
            <Route
              path="/suppliers"
              element={<Suppliers />}
            />

            {/* Quản lý lô thuốc */}
            <Route
              path="/batches"
              element={<Batches />}
            />

            {/* Quản lý khoa / phòng */}
            <Route
              path="/departments"
              element={<Departments />}
            />

            {/* Quản lý phiếu nhập */}
            <Route
              path="/import-slips"
              element={<ImportSlips />}
            />

            {/* Quản lý phiếu xuất */}
            <Route
              path="/export-slips"
              element={<ExportSlips />}
            />

            {/* Quản lý phiếu hủy */}
            <Route
              path="/termination-slips"
              element={<TerminationSlips />}
            />

            {/* Chi tiết phiếu */}
            <Route
              path="/slip-details"
              element={<SlipDetails />}
            />

            {/* Quản lý hợp đồng */}
            <Route
              path="/contracts"
              element={<Contracts />}
            />

            {/* Các trang chưa xây dựng */}
            <Route
              path="*"
              element={
                <div className="coming-soon">
                  <h2>{title}</h2>
                  <p>
                    Chức năng này sẽ được xây dựng
                    ở phần tiếp theo.
                  </p>
                </div>
              }
            />

          </Routes>

        </div>
      </main>
    </div>
  );
}

function AppContent() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem('isLoggedIn') === 'true'
  );

  const navigate = useNavigate();

  // Xử lý đăng nhập
  const handleLogin = () => {
    setIsLoggedIn(true);
    navigate('/dashboard');
  };

  // Xử lý đăng xuất
  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('username');

    setIsLoggedIn(false);

    navigate('/login');
  };

  return (
    <Routes>

      {/* Trang đăng nhập */}
      <Route
        path="/login"
        element={
          isLoggedIn
            ? <Navigate to="/dashboard" replace />
            : <Login onLogin={handleLogin} />
        }
      />

      {/* Các trang sau khi đăng nhập */}
      <Route
        path="/*"
        element={
          isLoggedIn
            ? <MainLayout onLogout={handleLogout} />
            : <Navigate to="/login" replace />
        }
      />

    </Routes>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
