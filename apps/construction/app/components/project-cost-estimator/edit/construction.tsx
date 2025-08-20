import { CostingCard, CostingFormData } from "@libs/ui";

// Electrical Section
const electricalSection: CostingFormData = {
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
const fireSuppressionSection: CostingFormData = {
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
const flooringSection: CostingFormData = {
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
const hvacSection: CostingFormData = {
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
const storefrontSection: CostingFormData = {
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
const plumbingSection: CostingFormData = {
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
const demolitionSection: CostingFormData = {
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
const ceilingSection: CostingFormData = {
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
const wallsSection: CostingFormData = {
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
const paintSection: CostingFormData = {
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
const fixtureInstallationSection: CostingFormData = {
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
const equipmentSection: CostingFormData = {
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
const cleaningSection: CostingFormData = {
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
const constructionSections: CostingFormData[] = [
  electricalSection,
  fireSuppressionSection,
  flooringSection,
  hvacSection,
  storefrontSection,
  plumbingSection,
  demolitionSection,
  ceilingSection,
  wallsSection,
  paintSection,
  fixtureInstallationSection,
  equipmentSection,
  cleaningSection,
];

function Construction() {
  return (
    <div className="p-6 bg-white">
      {constructionSections.map((section) => (
        <CostingCard key={section.name} data={section} />
      ))}
    </div>
  );
}

export default Construction;