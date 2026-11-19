
import React from 'react';
import ResourcePage from '../components/ResourcePlace';
const columns = [
  { key: 'id', label: 'Mã chi tiết' },
  { key: 'slip_id', label: 'Mã phiếu' },
  { key: 'slip_type', label: 'Loại phiếu' },
  { key: 'medicine', label: 'Tên thuốc' },
  { key: 'batch_id', label: 'Mã lô thuốc' },
  { key: 'quantity', label: 'Số lượng' },
  { key: 'total_amount', label: 'Thành tiền' }
];

const data = [
  {
    id: 'CT001',
    slip_id: 'PN001',
    slip_type: 'Phiếu nhập',
    medicine: 'Paracetamol 500mg',
    batch_id: 'LO001',
    quantity: 500,
    total_amount: '250.000đ'
  },
  {
    id: 'CT002',
    slip_id: 'PX001',
    slip_type: 'Phiếu xuất',
    medicine: 'Amoxicillin 500mg',
    batch_id: 'LO002',
    quantity: 100,
    total_amount: '150.000đ'
  }
];

function SlipDetails() {
  return (
    <ResourcePage
      title="Chi tiết phiếu"
      description="Theo dõi danh sách thuốc trong từng phiếu nhập, xuất và hủy"
      columns={columns}
      data={data}
    />
  );
}

export default SlipDetails;
