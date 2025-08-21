import {  CostingFormData } from "@libs/ui";

const ELECTRICAL_SECTION_DEFINITION: CostingFormData = { 
    label: "Electrical",
    name: "electrical",
    fields: [
      {
        name: "accentLighting",
        label: "Accent Lighting",
      },
      {
        name: "gateways",
        label: "Gateways",
      },
      {
        name: "electricalPanel",
        label: "Electrical Panel and Transformer",
      },
      {
        name: "exitLighting",
        label: "Exit Lighting",
      },
      {
        name: "lighting",
        label: "Lighting",
      },
      {
        name: "outlets",
        label: "Outlets",
      },
      {
        name: "gfiTile",
        label: "GFI Tile #1",
      },
    ],
  };
  
  // Fire Suppression Section
  const FIRE_SUPPRESION_SECTION_DEFINITION: CostingFormData = { 
    label: "Fire Suppression",
    name: "fireSuppression",
    fields: [
      {
        name: "fireAlarm",
        label: "Fire Alarm",
      },
      {
        name: "existingSprinklersModification",
        label: "Existing Sprinklers Modification",
      },
      {
        name: "newSprinklers",
        label: "New Sprinklers",
      },
    ],
  };
  
  // Flooring Section
  const FLOORING_SECTION_DEFINITION: CostingFormData = { 
    label: "Flooring",
    name: "flooring",
    fields: [
      {
        name: "compositeSlab",
        label: "Composite Slab",
      },
      {
        name: "floorPreparation",
        label: "Floor Preparation",
      },
      {
        name: "flooring",
        label: "Flooring",
      },
    ],
  };
  
  // HVAC Section
  const HVAC_SECTION_DEFINITION: CostingFormData = { 
    label: "HVAC",
    name: "hvac",
    fields: [
      {
        name: "hvacCompositeSlab",
        label: "Composite Slab",
      },
      {
        name: "hvacFloorPreparation",
        label: "Floor Preparation",
      },
      {
        name: "hvacFlooring",
        label: "Flooring",
      },
    ],
  };
  
  // Storefront Section
  const STORE_FRONT_SECTION_DEFINITION: CostingFormData = { 
    label: "Storefront",
    name: "storefront",
    fields: [
      {
        name: "storefrontCompositeSlab",
        label: "Composite Slab",
      },
      {
        name: "storefrontFloorPreparation",
        label: "Floor Preparation",
      },
      {
        name: "storefrontFlooring",
        label: "Flooring",
      },
    ],
  };
  
  // Plumbing Section
  const PLUMBING_SECTION_DEFINITION: CostingFormData = { 
    label: "Plumbing",
    name: "plumbing",
    fields: [
      {
        name: "plumbingFireAlarm",
        label: "Fire Alarm",
      },
      {
        name: "plumbingExistingSprinklersModification",
        label: "Existing Sprinklers Modification",
      },
      {
        name: "plumbingGateways",
        label: "Gateways",
      },
    ],
  };
  
  // Demolition Section
  const DEMOLITION_SECTION_DEFINITION: CostingFormData = { 
    label: "Demolition",
    name: "demolition",
    fields: [
      {
        name: "demolitionFireAlarm",
        label: "Fire Alarm",
      },
      {
        name: "demolitionExistingSprinklersModification",
        label: "Existing Sprinklers Modification",
      },
      {
        name: "demolitionGateways",
        label: "Gateways",
      },
    ],
  };
  
  // Ceiling Section
  const CEILING_SECTION_DEFINITION: CostingFormData = { 
    label: "Ceiling",
    name: "ceiling",
    fields: [
      {
        name: "ceilingFireAlarm",
        label: "Fire Alarm",
      },
      {
        name: "ceilingExistingSprinklersModification",
        label: "Existing Sprinklers Modification",
      },
      {
        name: "ceilingGateways",
        label: "Gateways",
      },
    ],
  };
  
  // Walls Section
  const WALLS_SECTION_DEFINITION: CostingFormData = { 
    label: "Walls",
    name: "walls",
    fields: [
      {
        name: "wallsFireAlarm",
        label: "Fire Alarm",
      },
      {
        name: "wallsExistingSprinklersModification",
        label: "Existing Sprinklers Modification",
      },
      {
        name: "wallsGateways",
        label: "Gateways",
      },
    ],
  };
  
  // Paint Section
  const PAINT_SECTION_DEFINITION: CostingFormData = { 
    label: "Paint",
    name: "paint",
    fields: [
      {
        name: "paintFireAlarm",
        label: "Fire Alarm",
      },
      {
        name: "paintExistingSprinklersModification",
        label: "Existing Sprinklers Modification",
      },
      {
        name: "paintGateways",
        label: "Gateways",
      },
    ],
  };
  
  // Fixture Installation Section
  const FIXTURE_INSTALLATION_SECTION_DEFINITION: CostingFormData = { 
    label: "Fixture Installation",
    name: "fixtureInstallation",
    fields: [
      {
        name: "fixtureInstallationFireAlarm",
        label: "Fire Alarm",
      },
      {
        name: "fixtureInstallationExistingSprinklersModification",
        label: "Existing Sprinklers Modification",
      },
      {
        name: "fixtureInstallationGateways",
        label: "Gateways",
      },
    ],
  };
  
  // Equipment Section
  const EQUIPMENT_SECTION_DEFINITION: CostingFormData = { 
    label: "Equipment",
    name: "equipment",
    fields: [
      {
        name: "equipmentFireAlarm",
        label: "Fire Alarm",
      },
      {
        name: "equipmentExistingSprinklersModification",
        label: "Existing Sprinklers Modification",
      },
      {
        name: "equipmentGateways",
        label: "Gateways",
      },
    ],
  };
  
  // Cleaning Section
  const CLEANINIG_SECTION_DEFINITION: CostingFormData = { 
    label: "Cleaning",
    name: "cleaning",
    fields: [
      {
        name: "cleaningExistingSprinklersModification",
        label: "Existing Sprinklers Modification",
      },
      {
        name: "cleaningGateways",
        label: "Gateways",
      },
    ],
  };
  
  // All construction sections array
 export const CONSTRUCTION_SECTION_DEFINITIONS: CostingFormData[] = [
    ELECTRICAL_SECTION_DEFINITION,
    FIRE_SUPPRESION_SECTION_DEFINITION,
    FLOORING_SECTION_DEFINITION,
    HVAC_SECTION_DEFINITION,
    STORE_FRONT_SECTION_DEFINITION,
    PLUMBING_SECTION_DEFINITION,
    DEMOLITION_SECTION_DEFINITION,
    CEILING_SECTION_DEFINITION,
    WALLS_SECTION_DEFINITION,
    PAINT_SECTION_DEFINITION,
    FIXTURE_INSTALLATION_SECTION_DEFINITION,
    EQUIPMENT_SECTION_DEFINITION,
    CLEANINIG_SECTION_DEFINITION,
  ];
