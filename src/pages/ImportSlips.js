
import React from 'react';
import ResourcePage from '../components/ResourcePlace';
const columns = [
  { key: 'id', label: 'Mã phiếu nhập' },
  { key: 'supplier', label: 'Nhà cung cấp' },
  { key: 'employee', label: 'Nhân viên lập' },
  { key: 'import_date', label: 'Ngày nhập' },
  { key: 'total_amount', label: 'Tổng tiền' },
  { key: 'status', label: 'Trạng thái' }
];

const data = [
  {
    id: 'PN001',
    supplier: 'Công ty Dược phẩm ABC',
    employee: 'Nguyễn Văn An',
    import_date: '10/11/2026',
    total_amount: '5.000.000đ',
    status: 'Đã duyệt'
  },
  {
    id: 'PN002',
    supplier: 'Công ty Dược phẩm XYZ',
    employee: 'Trần Thị Bình',
    import_date: '11/11/2026',
    total_amount: '3.500.000đ',
    status: 'Chờ duyệt'
  }
];

function ImportSlips() {
  return (
    <ResourcePage
      title="Phiếu nhập"
      description="Quản lý các phiếu nhập thuốc từ nhà cung cấp"
      columns={columns}
      data={data}
    />
  );
}

export default ImportSlips;
