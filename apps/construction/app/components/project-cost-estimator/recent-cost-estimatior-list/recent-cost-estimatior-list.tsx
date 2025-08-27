import React from 'react';
import { TableWrapper } from '@libs/ui';
import { ColumnDef } from '@tanstack/react-table';
import { recentEstimationsMockData } from '@libs/ui';

type Site = {
  site: number;
  siteName: string;
  city: string;
  state: string;
  projectManager: string;
  totalCost: string;
};

const columns: ColumnDef<Site>[] = [
  { accessorKey: 'site', header: 'Site' },
  { accessorKey: 'siteName', header: 'Site Name' },
  { accessorKey: 'city', header: 'City' },
  { accessorKey: 'state', header: 'State' },
  { accessorKey: 'projectManager', header: 'Project Manager' },
  { accessorKey: 'totalCost', header: 'Total Cost' },
];

const stateOptions = [
  'Alabama',
  'Alaska',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
];

export default function EstimationsPage() {
  return (
    <div className="max-w-8xl mt-10 shadow-2xl rounded-b-2xl border-b-gray-400">
      <TableWrapper columns={columns} data={recentEstimationsMockData} stateOptions={stateOptions} />
    </div>
  );
}
