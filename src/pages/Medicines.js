
import React from 'react';
import ResourcePage from '../components/ResourcePlace';

const columns = [
  { key: 'id', label: 'Mã thuốc' },
  { key: 'name', label: 'Tên thuốc' },
  { key: 'active_ingredient', label: 'Hoạt chất' },
  { key: 'strength', label: 'Hàm lượng' },
  { key: 'unit', label: 'Đơn vị' },
  { key: 'dosage_form', label: 'Dạng bào chế' },
  { key: 'import_price', label: 'Giá nhập' },
  { key: 'sale_price', label: 'Giá bán' }
];

const data = [
  {
    id: 'TH001',
    name: 'Paracetamol',
    active_ingredient: 'Paracetamol',
    strength: '500mg',
    unit: 'Viên',
    dosage_form: 'Viên nén',
    import_price: '500đ',
    sale_price: '800đ'
  },
  {
    id: 'TH002',
    name: 'Amoxicillin',
    active_ingredient: 'Amoxicillin',
    strength: '500mg',
    unit: 'Viên',
    dosage_form: 'Viên nang',
    import_price: '1.000đ',
    sale_price: '1.500đ'
  }
];

function Medicines() {
  return (
    <ResourcePage
      title="Quản lý thuốc"
      description="Quản lý danh mục và thông tin các loại thuốc."
      columns={columns}
      data={data}
    />
  );
}

export default Medicines;
