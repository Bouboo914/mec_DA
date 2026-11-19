
import React from 'react';
import ResourcePage from '../components/ResourcePlace';
const columns = [
  { key: 'id', label: 'Mã phiếu xuất' },
  { key: 'department', label: 'Khoa / Phòng' },
  { key: 'employee', label: 'Nhân viên lập' },
  { key: 'export_date', label: 'Ngày xuất' },
  { key: 'total_amount', label: 'Tổng tiền' },
  { key: 'status', label: 'Trạng thái' }
];

const data = [
  {
    id: 'PX001',
    department: 'Khoa Nội',
    employee: 'Nguyễn Văn An',
    export_date: '10/11/2026',
    total_amount: '1.500.000đ',
    status: 'Đã duyệt'
  },
  {
    id: 'PX002',
    department: 'Khoa Ngoại',
    employee: 'Trần Thị Bình',
    export_date: '11/11/2026',
    total_amount: '2.000.000đ',
    status: 'Chờ duyệt'
  }
];

function ExportSlips() {
  return (
    <ResourcePage
      title="Phiếu xuất"
      description="Quản lý các phiếu xuất và cấp phát thuốc"
      columns={columns}
      data={data}
    />
  );
}

export default ExportSlips;
