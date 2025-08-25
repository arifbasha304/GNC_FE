
import { CostingFormData } from "@libs/ui";


  // Documents Section
 export const DOCUMENTS_SECTION_DEFINITION: CostingFormData = { 
    label: "Documents",
    name: "documents",
    fields: [
      {
        name: "asBuilts",
        label: "As-Builts",
      },
      {
        name: "constructionExhibit",
        label: "Construction Exhibit",
      },
      {
        name: "constructionResponsibilityMatrix",
        label: "Construction Responsibility Matrix",
      },
      {
        name: "designCriteria",
        label: "Design Criteria",
      },
      {
        name: "electronicMall",
        label: "Electronic Mall",
      },
      {
        name: "photographs",
        label: "Photographs",
      },
      {
        name: "spaceDrawings",
        label: "Space Drawings",
      },
      {
        name: "others",
        label: "Others",
      },
    ],
  };
  
  // Construction Costs Section
 export const CONSTRUCTION_COSTS_SECTION_DEFINITION: CostingFormData = {
    label: "Construction Costs Inclusions",
    name: "constructionCostInclusion",
    fields: [
      {
        name: "ceramicFlooring",
        label: "Ceramic Flooring",
      },
      {
        name: "concrete",
        label: "Concrete",
      },
      {
        name: "demisingWalls",
        label: "Demising Walls",
      },
      {
        name: "demolition",
        label: "Demolition",
      },
      {
        name: "drinkingFountain",
        label: "Drinking Fountain",
      },
      {
        name: "topCeiling",
        label: "Top Ceiling",
      },
    ],
  };