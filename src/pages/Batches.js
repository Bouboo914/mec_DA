
import React from 'react';
import ResourcePage from '../components/ResourcePlace';

const columns = [
  { key: 'id', label: 'Mã lô' },
  { key: 'medicine_id', label: 'Mã thuốc' },
  { key: 'batch_number', label: 'Số lô' },
  { key: 'manufacture_date', label: 'Ngày sản xuất' },
  { key: 'expiry_date', label: 'Hạn sử dụng' },
  { key: 'quantity', label: 'Số lượng' },
  { key: 'storage_location', label: 'Vị trí lưu kho' }
];

const data = [
  {
    id: 'LO001',
    medicine_id: 'TH001',
    batch_number: 'PAR001',
    manufacture_date: '01/01/2026',
    expiry_date: '01/01/2028',
    quantity: '500',
    storage_location: 'Kệ A01'
  },
  {
    id: 'LO002',
    medicine_id: 'TH002',
    batch_number: 'AMO002',
    manufacture_date: '15/02/2026',
    expiry_date: '15/02/2028',
    quantity: '300',
    storage_location: 'Kệ B02'
  }
];

function Batches() {
  return (
    <ResourcePage
      title="Quản lý lô thuốc"
      description="Theo dõi số lô, hạn sử dụng và số lượng tồn kho."
      columns={columns}
      data={data}
    />
  );
}

export default Batches;
