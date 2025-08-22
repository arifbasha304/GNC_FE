// documents provided form  data types

export interface DocumentItem {
    id: string;
    label: string;
    checked: boolean;
  }
  
  export interface ConstructionCostItem {
    id: string;
    label: string;
    checked: boolean;
    comment: string;
  }
  
  export  interface DocumentsProvidedData {
    documents: DocumentItem[];
    constructionCosts: ConstructionCostItem[];
    generalComments: string;
  }


  // costing form data types 

  export type CostingFieldType = {
      name: string;
      label: string;
    };
    
    export type CostingFormData = {
      name: string;
      label: string;
      fields: CostingFieldType[];
    };