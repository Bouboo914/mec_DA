import React from 'react';
import {
  LayoutDashboard,
  Users,
  UserCog,
  Pill,
  Truck,
  Boxes,
  Building2,
  ClipboardList,
  FileText,
  FileArchive,
  ScrollText,
  LogOut
} from 'lucide-react';

const menuItems = [
  {
    title: 'TỔNG QUAN',
    items: [
      {
        name: 'Dashboard',
        path: '/dashboard',
        icon: LayoutDashboard
      }
    ]
  },
  {
    title: 'QUẢN LÝ DANH MỤC',
    items: [
      {
        name: 'Nhân viên',
        path: '/employees',
        icon: Users
      },
      {
        name: 'Tài khoản',
        path: '/accounts',
        icon: UserCog
      },
      {
        name: 'Thuốc',
        path: '/medicines',
        icon: Pill
      },
      {
        name: 'Nhà cung cấp',
        path: '/suppliers',
        icon: Truck
      },
      {
        name: 'Lô thuốc',
        path: '/batches',
        icon: Boxes
      },
      {
        name: 'Khoa / Phòng',
        path: '/departments',
        icon: Building2
      }
    ]
  },
  {
    title: 'QUẢN LÝ PHIẾU',
    items: [
      {
        name: 'Phiếu nhập',
        path: '/import-slips',
        icon: ClipboardList
      },
      {
        name: 'Phiếu xuất',
        path: '/export-slips',
        icon: FileText
      },
      {
        name: 'Phiếu hủy',
        path: '/termination-slips',
        icon: FileArchive
      },
      {
        name: 'Chi tiết phiếu',
        path: '/slip-details',
        icon: ScrollText
      },
      {
        name: 'Hợp đồng',
        path: '/contracts',
        icon: FileText
      }
    ]
  }
];

function Sidebar({ currentPath, onNavigate, onLogout }) {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <div className="logo-icon">
          <Pill size={26} />
        </div>

        <div>
          <h2>PHARMA</h2>
          <span>WAREHOUSE SYSTEM</span>
        </div>
      </div>

      <div className="sidebar-menu">
        {menuItems.map((group, index) => (
          <div className="menu-group" key={index}>
            <p className="menu-title">{group.title}</p>

            {group.items.map((item) => {
              const Icon = item.icon;

              return (
                <button
                  key={item.path}
                  className={`menu-item ${
                    currentPath === item.path ? 'active' : ''
                  }`}
                  onClick={() => onNavigate(item.path)}
                >
                  <Icon size={19} />
                  <span>{item.name}</span>
                </button>
              );
            })}
          </div>
        ))}
      </div>

      <div className="sidebar-bottom">
        <button className="logout-button" onClick={onLogout}>
          <LogOut size={19} />
          <span>Đăng xuất</span>
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;