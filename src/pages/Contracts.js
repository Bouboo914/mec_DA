
import React from 'react';
import ResourcePage from '../components/ResourcePlace';
const columns = [
  { key: 'id', label: 'Mã hợp đồng' },
  { key: 'supplier', label: 'Nhà cung cấp' },
  { key: 'medicine', label: 'Tên thuốc' },
  { key: 'unit_price', label: 'Đơn giá' },
  { key: 'effective_date', label: 'Ngày hiệu lực' },
  { key: 'total_value', label: 'Tổng giá trị' },
  { key: 'status', label: 'Trạng thái' }
];

const data = [
  {
    id: 'HD001',
    supplier: 'Công ty Dược phẩm ABC',
    medicine: 'Paracetamol 500mg',
    unit_price: '500đ',
    effective_date: '01/01/2026',
    total_value: '10.000.000đ',
    status: 'Đang hoạt động'
  },
  {
    id: 'HD002',
    supplier: 'Công ty Dược phẩm XYZ',
    medicine: 'Amoxicillin 500mg',
    unit_price: '1.000đ',
    effective_date: '01/03/2026',
    total_value: '15.000.000đ',
    status: 'Đang hoạt động'
  }
];

function Contracts() {
  return (
    <ResourcePage
      title="Hợp đồng"
      description="Quản lý hợp đồng cung ứng thuốc với nhà cung cấp"
      columns={columns}
      data={data}
    />
  );
}

export default Contracts;
