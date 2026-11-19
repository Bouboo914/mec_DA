import React from 'react';
import {
  Pill,
  Users,
  Boxes,
  AlertTriangle,
  TrendingUp,
  TrendingDown
} from 'lucide-react';

const statistics = [
  {
    title: 'Tổng số thuốc',
    value: '120',
    description: 'Danh mục thuốc',
    icon: Pill,
    color: 'blue'
  },
  {
    title: 'Tổng số nhân viên',
    value: '25',
    description: 'Nhân viên đang quản lý',
    icon: Users,
    color: 'green'
  },
  {
    title: 'Tổng số lô thuốc',
    value: '86',
    description: 'Các lô đang quản lý',
    icon: Boxes,
    color: 'purple'
  },
  {
    title: 'Thuốc sắp hết hạn',
    value: '08',
    description: 'Cần kiểm tra',
    icon: AlertTriangle,
    color: 'orange'
  }
];

function Dashboard() {
  return (
    <div className="dashboard">
      <div className="welcome-section">
        <div>
          <h2>Tổng quan kho dược phẩm</h2>
          <p>
            Theo dõi tình hình hoạt động và quản lý kho thuốc.
          </p>
        </div>

        <span className="today-label">
          Hôm nay: {new Date().toLocaleDateString('vi-VN')}
        </span>
      </div>

      <div className="statistics-grid">
        {statistics.map((item, index) => {
          const Icon = item.icon;

          return (
            <div className="stat-card" key={index}>
              <div className={`stat-icon ${item.color}`}>
                <Icon size={27} />
              </div>

              <div className="stat-content">
                <p>{item.title}</p>
                <h2>{item.value}</h2>
                <span>{item.description}</span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="dashboard-grid">
        <div className="dashboard-panel">
          <h3>Tình hình nhập - xuất kho</h3>

          <div className="transaction-item">
            <div className="transaction-icon import">
              <TrendingUp size={22} />
            </div>

            <div>
              <strong>Phiếu nhập kho</strong>
              <p>Hoạt động nhập thuốc</p>
            </div>

            <strong className="transaction-number">35 phiếu</strong>
          </div>

          <div className="transaction-item">
            <div className="transaction-icon export">
              <TrendingDown size={22} />
            </div>

            <div>
              <strong>Phiếu xuất kho</strong>
              <p>Hoạt động xuất thuốc</p>
            </div>

            <strong className="transaction-number">28 phiếu</strong>
          </div>
        </div>

        <div className="dashboard-panel">
          <h3>Cảnh báo kho</h3>

          <div className="warning-item">
            <AlertTriangle size={21} />
            <div>
              <strong>Thuốc sắp hết hạn</strong>
              <p>Có 08 lô thuốc cần kiểm tra hạn sử dụng.</p>
            </div>
          </div>

          <div className="warning-item">
            <AlertTriangle size={21} />
            <div>
              <strong>Tồn kho thấp</strong>
              <p>Cần kiểm tra các mặt hàng có số lượng thấp.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="dashboard-panel">
        <h3>Thông tin hệ thống</h3>
        <p>
          Đây là giao diện thử nghiệm sử dụng dữ liệu mẫu.
          Các chức năng quản lý sẽ được xây dựng ở những phần tiếp theo.
        </p>
      </div>
    </div>
  );
}

export default Dashboard;