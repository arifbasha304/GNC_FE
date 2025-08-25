

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
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

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
      <DataTable className='border-solid border-[1px] border-gray-200 rounded-xl' value={data} paginator rows={10} tableStyle={{ minWidth: '50rem' }}>
                <Column field="site" header="Name" style={{ width: '25%' }}></Column>
                <Column field="siteName" header="Country" style={{ width: '25%' }}></Column>
                <Column field="city" header="Company" style={{ width: '25%' }}></Column>
                <Column field="state" header="Representative" style={{ width: '25%' }}></Column>
                <Column field="projectManager" header="Representative" style={{ width: '25%' }}></Column>
                <Column field="totalCost" header="Representative" style={{ width: '25%' }}></Column>
                <Column field="" header="" style={{ width: '25%' }} body={()=>{
                  return <div className='flex gap-2'>
                    <button className='bg-transparent text-black px-2 py-1 rounded hover:bg-blue-600 transition cursor-pointer'>View</button>
                  </div>
                }}></Column>
      </DataTable>
    </div>
  );
}


