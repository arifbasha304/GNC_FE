import { CostingCard, CostingFormData } from "@libs/ui";

// Design Section
const designSection: CostingFormData = {
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
const signageSection: CostingFormData = {
  label: "Signage",
  name: "Pre-Construction",
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
const fixturesSection: CostingFormData = {
  label: "Fixtures",
  name: "Pre-Construction",
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
const lightingMaterialsSection: CostingFormData = {
  label: "Lighting Materials",
  name: "Pre-Construction",
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
const flooringMaterialsSection: CostingFormData = {
  label: "Flooring Materials",
  name: "Pre-Construction",
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
const miscellaneousSection: CostingFormData = {
  label: "Miscellaneous",
  name: "Pre-Construction",
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
const sections: CostingFormData[] = [
  designSection,
  signageSection,
  fixturesSection,
  lightingMaterialsSection,
  flooringMaterialsSection,
  miscellaneousSection,
];

function PreConstruction() {
  return (
    <div className=" p-6 bg-white">
      {sections.map((section) => (
        <CostingCard data={section} />
      ))}
    </div>
  );
}

export default PreConstruction;
