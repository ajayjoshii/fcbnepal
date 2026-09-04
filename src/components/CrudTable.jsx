import React from "react";
import { Edit, Trash2 } from "lucide-react";

function CrudTable({
  data,
  columns,
  onEdit,
  onDelete,
}) {

  return (
    <div className="bg-white rounded-xl shadow overflow-hidden">

      <div className="overflow-x-auto">

        <table className="w-full">

          <thead className="bg-slate-100">

            <tr>

              {columns.map((column) => (
                <th
                  key={column.key}
                  className="text-left px-5 py-4 text-sm font-bold text-slate-700"
                >
                  {column.label}
                </th>
              ))}

              <th className="px-5 py-4 text-left">
                Actions
              </th>

            </tr>

          </thead>

          <tbody>

            {data.length === 0 ? (

              <tr>
                <td
                  colSpan={columns.length + 1}
                  className="text-center py-10 text-slate-500"
                >
                  No data found
                </td>
              </tr>

            ) : (

              data.map((item) => (

                <tr
                  key={item.id}
                  className="border-t hover:bg-slate-50"
                >

                  {columns.map((column) => (

                    <td
                      key={column.key}
                      className="px-5 py-4 text-sm text-slate-600"
                    >
                      {item[column.key] ?? "-"}
                    </td>

                  ))}

                  <td className="px-5 py-4">

                    <div className="flex gap-2">

                      <button
                        onClick={() => onEdit(item)}
                        className="p-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200"
                      >
                        <Edit size={17} />
                      </button>

                      <button
                        onClick={() => onDelete(item.id)}
                        className="p-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200"
                      >
                        <Trash2 size={17} />
                      </button>

                    </div>

                  </td>

                </tr>

              ))

            )}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default CrudTable;