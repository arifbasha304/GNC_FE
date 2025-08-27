import { CostingCard, CostingFormData } from "@libs/ui";

import { PRECONSTRUCTION_SECTION_DEFINITIONS } from "../../../utils/data/pre-construction";

// A reusable type for each costing item
export interface CostingItem {
  isChecked: boolean;
  value: number;
}

// Each subsection under preConstruction
export interface PreConstructionDesign {
  architectEngineer: CostingItem;
  siteSurvey: CostingItem;
  hvacSurvey: CostingItem;
  permitExpeditor: CostingItem;
  permits: CostingItem;
  caddTime: CostingItem;
}

export interface PreConstructionSignage {
  firstStorefrontSite: CostingItem;
  secondStorefrontSign: CostingItem;
  awning: CostingItem;
  bladeSign: CostingItem;
  pylonMonumentSign: CostingItem;
}

export interface PreConstructionFixtures {
  refacePackage: CostingItem;
  fullFixturesPackage: CostingItem;
}

export interface PreConstructionLightingMaterials {
  accentLightingPackage: CostingItem;
  fullLightingPackage: CostingItem;
}

export interface PreConstructionFlooringMaterials {
  flooringTile: CostingItem;
  storefrontTile: CostingItem;
}

export interface PreConstructionMiscellaneous {
  firstStorefrontSiteMisc: CostingItem;
  cooler: CostingItem;
  graphics: CostingItem;
  mainframe: CostingItem;
}

// Top-level PreConstruction type
export interface PreConstructionData {
  design: PreConstructionDesign;
  signage: PreConstructionSignage;
  fixtures: PreConstructionFixtures;
  lightingMaterials: PreConstructionLightingMaterials;
  flooringMaterials: PreConstructionFlooringMaterials;
  miscellaneous: PreConstructionMiscellaneous;
}


function PreConstruction({data}:{data:PreConstructionData}) {
  return (
    <>
    <div>
    <h2 className="p-6 text-2xl font-semibold text-gray-500 capitalize w-3/5 h-12">Pre-Construction</h2>
      {PRECONSTRUCTION_SECTION_DEFINITIONS.map((section) => (
        <CostingCard definition={section} data={data[section.name as keyof PreConstructionData]} key={section.name}/>
      ))}
    </div>
    </>
    
  );
}

export default PreConstruction;
