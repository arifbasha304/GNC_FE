

import React, { useMemo, useState } from 'react';
import {
  ColumnDef,
  getCoreRowModel,
  useReactTable,
  flexRender,
  getFilteredRowModel,
  getPaginationRowModel,
} from '@tanstack/react-table';
import { useNavigate } from 'react-router-dom';
import CommonButton from '../common-ui/CommonButon';

import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';

type TableWrapperProps<TData extends Record<string, any>> = {
  columns: ColumnDef<TData, any>[];
  data: TData[];
  stateOptions?: string[];
  initialPageSize?: number;
};

export function TableWrapper<TData extends Record<string, any>>({
  columns,
  data,
  stateOptions = [],
  initialPageSize = 5,
}: TableWrapperProps<TData>) {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [selectedState, setSelectedState] = useState<string | null>(null);

  // PrimeReact Dropdown expects options as { label, value }
  const dropdownOptions = stateOptions.map((state) => ({ label: state, value: state }));

  const filteredData = useMemo(() => {
    return data.filter((row) => {
      const searchFields = ['site', 'siteName', 'city', 'state'];
      const matchesSearch = searchFields.some((field) =>
        String(row[field] ?? '').toLowerCase().includes(search.toLowerCase())
      );

      const matchesState = selectedState ? row['state'] === selectedState : true;

      return matchesSearch && matchesState;
    });
  }, [data, search, selectedState]);

  const table = useReactTable({
    data: filteredData,
    columns,
    initialState: { pagination: { pageIndex: 0, pageSize: initialPageSize } },
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  const pageCount = table.getPageCount();
  const pageIndex = table.getState().pagination.pageIndex;

  const paginationRange = (() => {
    const totalPageNumbers = 5;
    if (pageCount <= totalPageNumbers) {
      return [...Array(pageCount).keys()];
    }

    let startPage = Math.max(0, pageIndex - 2);
    let endPage = Math.min(pageCount - 1, pageIndex + 2);

    if (startPage === 0) {
      endPage = totalPageNumbers - 1;
    }
    if (endPage === pageCount - 1) {
      startPage = pageCount - totalPageNumbers;
    }

    return Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);
  })();

  return (
    <div className="p-6 bg-white rounded-lg shadow space-y-4">
      {/* Header Controls */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="flex flex-col sm:flex-row gap-3">
          <span className="p-input-icon-left">
            {/* <i className="pi pi-search" /> */}
            <InputText
              placeholder="Search by name, city, state"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-64"
            />
          </span>

          <Dropdown
            value={selectedState}
            options={dropdownOptions}
            onChange={(e) => setSelectedState(e.value)}
            placeholder="State"
            className="w-40"
            showClear
          />
        </div>

        <CommonButton
          icon="pi pi-plus"
          value="Create New Estimation"
          className="bg-[#e31837] text-white px-2 py-2 rounded hover:bg-red-600 transition cursor-pointer"
          onClick={() => navigate('/edit')}
        />
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 text-sm">
          <thead className="bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id} className="px-4 py-3 whitespace-nowrap">
                    {header.isPlaceholder
                      ? null
                      : flexRender(header.column.columnDef.header, header.getContext())}
                  </th>
                ))}
                <th className="px-4 py-3">Actions</th>
              </tr>
            ))}
          </thead>

          <tbody className="divide-y divide-gray-100">
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id} className="hover:bg-gray-50">
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="px-4 py-3 whitespace-nowrap text-gray-700">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
                <td className="px-4 py-3 whitespace-nowrap">
                  <CommonButton
                    value="View"
                    className="text-slate-600 rounded-sm border-1 p-1 cursor-pointer"
                    // onClick={() => navigate(`/edit/${row.original.site}`)}
                    onClick={() => navigate('/edit')}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination with CommonButton, neutral styling */}
      <div className="flex items-center justify-center space-x-2 mt-6">
        <CommonButton
          className={`px-3 py-1 rounded border ${
            !table.getCanPreviousPage()
              ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
              : 'bg-white text-gray-700'
          }`}
          onClick={() => table.setPageIndex(0)}
          value=""
          icon="pi pi-angle-double-left"
          disabled={!table.getCanPreviousPage()}
        />

        <CommonButton
          className={`px-3 py-1 rounded border ${
            !table.getCanPreviousPage()
              ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
              : 'bg-white text-gray-700'
          }`}
          onClick={() => table.previousPage()}
          value=""
          icon="pi pi-angle-left"
          disabled={!table.getCanPreviousPage()}
        />

        {paginationRange.map((pageNum) => (
          <CommonButton
            key={pageNum}
            className={`px-3 py-1 rounded border ${
              pageIndex === pageNum
                ? 'bg-gray-300 text-gray-900 cursor-default'
                : 'bg-white text-gray-700'
            }`}
            onClick={() => table.setPageIndex(pageNum)}
            value={(pageNum + 1).toString()}
            disabled={pageIndex === pageNum}
          />
        ))}

        <CommonButton
          className={`px-3 py-1 rounded border ${
            !table.getCanNextPage()
              ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
              : 'bg-white text-gray-700'
          }`}
          onClick={() => table.nextPage()}
          value=""
          icon="pi pi-angle-right"
          disabled={!table.getCanNextPage()}
        />

        <CommonButton
          className={`px-3 py-1 rounded border ${
            !table.getCanNextPage()
              ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
              : 'bg-white text-gray-700'
          }`}
          onClick={() => table.setPageIndex(pageCount - 1)}
          value=""
          icon="pi pi-angle-double-right"
          disabled={!table.getCanNextPage()}
        />
      </div>
    </div>
  );
}


