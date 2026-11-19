
import React from 'react';
import ResourcePage from '../components/ResourcePlace';
const columns = [
  { key: 'id', label: 'Mã phiếu hủy' },
  { key: 'department', label: 'Khoa / Phòng' },
  { key: 'employee', label: 'Nhân viên lập' },
  { key: 'termination_date', label: 'Ngày hủy' },
  { key: 'reason', label: 'Lý do hủy' },
  { key: 'status', label: 'Trạng thái' }
];

const data = [
  {
    id: 'PH001',
    department: 'Kho dược',
    employee: 'Nguyễn Văn An',
    termination_date: '09/11/2026',
    reason: 'Thuốc hết hạn sử dụng',
    status: 'Đã duyệt'
  },
  {
    id: 'PH002',
    department: 'Khoa Nội',
    employee: 'Trần Thị Bình',
    termination_date: '11/11/2026',
    reason: 'Thuốc bị hư hỏng',
    status: 'Chờ duyệt'
  }
];

function TerminationSlips() {
  return (
    <ResourcePage
      title="Phiếu hủy"
      description="Quản lý các phiếu hủy thuốc trong kho"
      columns={columns}
      data={data}
    />
  );
}

export default TerminationSlips;
