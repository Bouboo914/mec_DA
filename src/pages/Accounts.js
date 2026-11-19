
import React from 'react';
import ResourcePage from '../components/ResourcePlace';

const columns = [
  { key: 'id', label: 'Mã tài khoản' },
  { key: 'employee_id', label: 'Mã nhân viên' },
  { key: 'username', label: 'Tên đăng nhập' },
  { key: 'password', label: 'Mật khẩu' },
  { key: 'permission_id', label: 'Mã quyền' },
  { key: 'status', label: 'Trạng thái' }
];

const data = [
  {
    id: 'TK001',
    employee_id: 'NV001',
    username: 'nhanvien01',
    password: '********',
    permission_id: '1',
    status: 'Đang hoạt động'
  },
  {
    id: 'TK002',
    employee_id: 'NV002',
    username: 'quanlykho',
    password: '********',
    permission_id: '2',
    status: 'Đang hoạt động'
  }
];

function Accounts() {
  return (
    <ResourcePage
      title="Quản lý tài khoản"
      description="Quản lý tài khoản đăng nhập và quyền sử dụng."
      columns={columns}
      data={data}
    />
  );
}

export default Accounts;
