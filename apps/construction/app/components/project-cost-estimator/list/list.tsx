import React from 'react';
import { TableWrapper } from '@libs/ui'; // Assuming you export TableWrapper there
import { ColumnDef } from '@tanstack/react-table';

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

const data: Site[] = [
  {
    site: 1335,
    siteName: 'Afton',
    city: 'New York',
    state: 'Alabama',
    projectManager: 'Jeff Warner',
    totalCost: '$30,983,721.00',
  },
  {
    site: 1336,
    siteName: 'Afton',
    city: 'Hyderabad',
    state: 'Alabama',
    projectManager: 'Jeff Warner',
    totalCost: '$30,983,721.00',
  },
  {
    site: 1337,
    siteName: 'Afton',
    city: 'Hyderabad',
    state: 'Alabama',
    projectManager: 'Jeff Warner',
    totalCost: '$30,983,721.00',
  },
  {
    site: 1338,
    siteName: 'Afton',
    city: 'Hyderabad',
    state: 'Alabama',
    projectManager: 'Jeff Warner',
    totalCost: '$30,983,721.00',
  },{
    site: 1339,
    siteName: 'Afton',
    city: 'Hyderabad',
    state: 'Alabama',
    projectManager: 'Jeff Warner',
    totalCost: '$30,983,721.00',
  },{
    site: 1440,
    siteName: 'Afton',
    city: 'Hyderabad',
    state: 'Alabama',
    projectManager: 'Jeff Warner',
    totalCost: '$30,983,721.00',
  },{
    site: 1441,
    siteName: 'Afton',
    city: 'Hyderabad',
    state: 'Alabama',
    projectManager: 'Jeff Warner',
    totalCost: '$30,983,721.00',
  },{
    site: 1442,
    siteName: 'Afton',
    city: 'Hyderabad',
    state: 'Alabama',
    projectManager: 'Jeff Warner',
    totalCost: '$30,983,721.00',
  },{
    site: 1443,
    siteName: 'Afton',
    city: 'Hyderabad',
    state: 'Alabama',
    projectManager: 'Jeff Warner',
    totalCost: '$30,983,721.00',
  },{
    site: 1444,
    siteName: 'Afton',
    city: 'Hyderabad',
    state: 'Alabama',
    projectManager: 'Jeff Warner',
    totalCost: '$30,983,721.00',
  },{
    site: 1445,
    siteName: 'Afton',
    city: 'Hyderabad',
    state: 'Alabama',
    projectManager: 'Jeff Warner',
    totalCost: '$30,983,721.00',
  },{
    site: 1446,
    siteName: 'Afton',
    city: 'Hyderabad',
    state: 'Alabama',
    projectManager: 'Jeff Warner',
    totalCost: '$30,983,721.00',
  },{
    site: 1447,
    siteName: 'Afton',
    city: 'Hyderabad',
    state: 'Alabama',
    projectManager: 'Jeff Warner',
    totalCost: '$30,983,721.00',
  },{
    site: 1448,
    siteName: 'Afton',
    city: 'Hyderabad',
    state: 'Alabama',
    projectManager: 'Jeff Warner',
    totalCost: '$30,983,721.00',
  },{
    site: 1449,
    siteName: 'Afton',
    city: 'Hyderabad',
    state: 'Alabama',
    projectManager: 'Jeff Warner',
    totalCost: '$30,983,721.00',
  },{
    site: 1450,
    siteName: 'Afton',
    city: 'Hyderabad',
    state: 'Alabama',
    projectManager: 'Jeff Warner',
    totalCost: '$30,983,721.00',
  },{
    site: 1451,
    siteName: 'Afton',
    city: 'Hyderabad',
    state: 'Alabama',
    projectManager: 'Jeff Warner',
    totalCost: '$30,983,721.00',
  }
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
    <div className="max-w-8xl mt-10">
      <TableWrapper columns={columns} data={data} stateOptions={stateOptions} />
    </div>
  );
}
