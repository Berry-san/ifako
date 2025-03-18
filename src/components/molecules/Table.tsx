import React from 'react'

interface TableProps {
  title: string
  columns: string[]
  data: { [key: string]: string | number }[]
}

const Table: React.FC<TableProps> = ({ title, columns, data }) => {
  return (
    <div className="w-full">
      <h2 className="text-xl mb-4">{title}</h2>
      <div className="overflow-x-auto rounded-xl">
        <table className="min-w-full rounded-xl border-gray-300">
          {/* Table Head */}
          <thead className="bg-[#C4C4C4]/32">
            <tr>
              {columns.map((col, index) => (
                <th key={index} className="py-2 px-4 text-left font-medium">
                  {col}
                </th>
              ))}
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {data.map((row, rowIndex) => (
              <tr key={rowIndex} className="border-b hover:bg-#C4C4C41A">
                {Object.values(row).map((value, colIndex) => (
                  <td key={colIndex} className="py-2 px-4 text-left">
                    {value}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Table
