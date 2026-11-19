
import React, { useState } from 'react';
import { Search, Database } from 'lucide-react';

function ResourcePage({ title, description, columns, data }) {
  const [keyword, setKeyword] = useState('');

  const filteredData = data.filter((item) =>
    Object.values(item).some((value) =>
      String(value).toLowerCase().includes(keyword.toLowerCase())
    )
  );

  return (
    <div className="resource-page">
      <div className="resource-heading">
        <div>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>

        <span className="resource-count">
          {filteredData.length} bản ghi
        </span>
      </div>

      <div className="resource-toolbar">
        <div className="resource-search">
          <Search size={18} />
          <input
            type="text"
            placeholder={`Tìm kiếm ${title.toLowerCase()}...`}
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
        </div>
      </div>

      <div className="resource-table-wrapper">
        <table className="resource-table">
          <thead>
            <tr>
              {columns.map((column) => (
                <th key={column.key}>{column.label}</th>
              ))}
            </tr>
          </thead>

          <tbody>
            {filteredData.length > 0 ? (
              filteredData.map((item, index) => (
                <tr key={index}>
                  {columns.map((column) => (
                    <td key={column.key}>
                      {column.key === 'status' ? (
                        <span className={`status-label ${
                          item[column.key] === 'Đang hoạt động'
                            ? 'status-active'
                            : 'status-inactive'
                        }`}>
                          {item[column.key]}
                        </span>
                      ) : (
                        item[column.key] ?? '-'
                      )}
                    </td>
                  ))}
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={columns.length}>
                  <div className="empty-data">
                    <Database size={30} />
                    <p>Không tìm thấy dữ liệu</p>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ResourcePage;
