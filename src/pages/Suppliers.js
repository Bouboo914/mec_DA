
import React from 'react';
import ResourcePage from '../components/ResourcePlace';

const columns = [
  { key: 'id', label: 'Mã nhà cung cấp' },
  { key: 'name', label: 'Tên nhà cung cấp' },
  { key: 'tax_code', label: 'Mã số thuế' },
  { key: 'phone', label: 'Số điện thoại' }
];

const data = [
  {
    id: 'NCC001',
    name: 'Công ty Dược phẩm ABC',
    tax_code: '0312345678',
    phone: '02812345678'
  },
  {
    id: 'NCC002',
    name: 'Công ty Dược phẩm XYZ',
    tax_code: '0318765432',
    phone: '02887654321'
  }
];

function Suppliers() {
  return (
    <ResourcePage
      title="Quản lý nhà cung cấp"
      description="Quản lý thông tin các đơn vị cung cấp thuốc."
      columns={columns}
      data={data}
    />
  );
}

export default Suppliers;
