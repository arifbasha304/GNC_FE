import { CostingCard, CostingFormData } from "@libs/ui";

import { PRECONSTRUCTION_SECTION_DEFINITIONS } from "../../../utils/data/pre-construction";

function PreConstruction() {
  return (
    <>
    <div>
    <h2 className="p-6 text-2xl font-semibold text-gray-500 capitalize w-3/5 h-12">Pre-Construction</h2>
      {PRECONSTRUCTION_SECTION_DEFINITIONS.map((section) => (
        <CostingCard data={section} key={section.name}/>
      ))}
    </div>
    </>
    
  );
}

export default PreConstruction;
