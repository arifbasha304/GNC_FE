import { CostingCard, CostingFormData } from "@libs/ui";

import { CONSTRUCTION_SECTION_DEFINITIONS }  from '../../../utils/data/construction'


function Construction() {
  return (
    <div >
      <h2 className="p-6 text-2xl font-semibold text-gray-500 capitalize w-3/5 h-12">Construction</h2>
      {CONSTRUCTION_SECTION_DEFINITIONS.map((section) => (
        <CostingCard key={section.name} data={section} />
      ))}
    </div>
  );
}

export default Construction;