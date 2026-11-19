
import React from 'react';
import ResourcePage from '../components/ResourcePlace';

const columns = [
  { key: 'id', label: 'Mã nhân viên' },
  { key: 'full_name', label: 'Họ và tên' },
  { key: 'date_of_birth', label: 'Ngày sinh' },
  { key: 'gender', label: 'Giới tính' },
  { key: 'phone', label: 'Số điện thoại' },
  { key: 'email', label: 'Email' },
  { key: 'position', label: 'Chức vụ' }
];

const data = [
  {
    id: 'NV001',
    full_name: 'Nguyễn Văn An',
    date_of_birth: '15/03/1998',
    gender: 'Nam',
    phone: '0901234567',
    email: 'an@gmail.com',
    position: 'Nhân viên kho'
  },
  {
    id: 'NV002',
    full_name: 'Trần Thị Bình',
    date_of_birth: '20/08/1995',
    gender: 'Nữ',
    phone: '0912345678',
    email: 'binh@gmail.com',
    position: 'Quản lý kho'
  }
];

function Employees() {
  return (
    <ResourcePage
      title="Quản lý nhân viên"
      description="Quản lý thông tin nhân viên trong hệ thống."
      columns={columns}
      data={data}
    />
  );
}

export default Employees;
