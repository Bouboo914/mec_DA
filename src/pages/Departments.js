
import React from 'react';
import ResourcePage from '../components/ResourcePlace';

const columns = [
  { key: 'id', label: 'Mã khoa/phòng' },
  { key: 'name', label: 'Tên khoa/phòng' },
  { key: 'phone', label: 'Số điện thoại' },
  { key: 'deputy_head_name', label: 'Tên trưởng/phụ trách' }
];

const data = [
  {
    id: 'KHOA001',
    name: 'Khoa Nội',
    phone: '0281111222',
    deputy_head_name: 'Nguyễn Văn Hùng'
  },
  {
    id: 'KHOA002',
    name: 'Khoa Ngoại',
    phone: '0283333444',
    deputy_head_name: 'Trần Thị Lan'
  }
];

function Departments() {
  return (
    <ResourcePage
      title="Quản lý khoa/phòng"
      description="Quản lý thông tin các khoa và phòng ban."
      columns={columns}
      data={data}
    />
  );
}

export default Departments;
