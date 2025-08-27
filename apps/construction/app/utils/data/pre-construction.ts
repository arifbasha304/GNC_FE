import { CostingFormData } from "@libs/ui";

// Design Section
const DESIGN_SECTION_DEFINITION: CostingFormData = {
    label: "Design",
    name: "design",
    fields: [
      {
        name: "architectEngineer",
        label: "Architect or Engineer",
      },
      {
        name: "siteSurvey",
        label: "Site Survey",
      },
      {
        name: "hvacSurvey",
        label: "HVAC Survey",
      },
      {
        name: "permitExpeditor",
        label: "Permit Expeditor",
      },
      {
        name: "permits",
        label: "Permits",
      },
      {
        name: "caddTime",
        label: "CADD Time",
      },
    ],
  };
  
  // Signage Section
  const SIGNAGE_SECTION_DEFINITION: CostingFormData = {
    label: "Signage",
    name: "signage",
    fields: [
      {
        name: "firstStorefrontSite",
        label: "First Storefront Site",
      },
      {
        name: "secondStorefrontSign",
        label: "Second Storefront Sign",
      },
      {
        name: "awning",
        label: "Awning",
      },
      {
        name: "bladeSign",
        label: "Blade Sign",
      },
      {
        name: "pylonMonumentSign",
        label: "Pylon / Monument Sign",
      },
    ],
  };
  
  // Fixtures Section
  const FIXTURES_SECTION_DEFINITION: CostingFormData = {
    label: "Fixtures",
    name: "fixtures",
    fields: [
      {
        name: "refacePackage",
        label: "Reface Package",
      },
      {
        name: "fullFixturesPackage",
        label: "Full Fixtures Package",
      },
    ],
  };
  
  // Lighting Materials Section
  const LIGHTING_MATERIALS_SECTION_DEFINITION: CostingFormData = { 
    label: "Lighting Materials",
    name: "lightingMaterials",
    fields: [
      {
        name: "accentLightingPackage",
        label: "Accent Lighting Package",
      },
      {
        name: "fullLightingPackage",
        label: "Full Lighting Package",
      },
    ],
  };
  
  // Flooring Materials Section
  const FLOORING_MATERIALS_SECTION_DEFINITION: CostingFormData = { 
    label: "Flooring Materials",
    name: "flooringMaterials",
    fields: [
      {
        name: "flooringTile",
        label: "Flooring Tile",
      },
      {
        name: "storefrontTile",
        label: "Storefront Tile",
      },
    ],
  };
  
  // Miscellaneous Section
  const MISCELLANEOUS_SECTION_DEFINITION: CostingFormData = { 
    label: "Miscellaneous",
    name: "miscellaneous",
    fields: [
      {
        name: "firstStorefrontSiteMisc",
        label: "First Storefront Site",
      },
      {
        name: "cooler",
        label: "Cooler",
      },
      {
        name: "graphics",
        label: "Graphics",
      },
      {
        name: "mainframe",
        label: "Mainframe",
      },
    ],
  };
  
  // All sections array
 export const PRECONSTRUCTION_SECTION_DEFINITIONS: CostingFormData[] = [
    DESIGN_SECTION_DEFINITION,
    SIGNAGE_SECTION_DEFINITION,
    FIXTURES_SECTION_DEFINITION,
    LIGHTING_MATERIALS_SECTION_DEFINITION,
    FLOORING_MATERIALS_SECTION_DEFINITION,
    MISCELLANEOUS_SECTION_DEFINITION,
  ];