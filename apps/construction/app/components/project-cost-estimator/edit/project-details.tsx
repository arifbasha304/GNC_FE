import { DynamicForm, FormFieldConfig } from "@libs/ui";
import { PROJECT_DETAILS_DEFINITION } from "../../../utils/data/project-details";

export interface ProjectDetailsData {
  estinamtionNumber: string;
  siteNumber: string;
  siteName: string;
  city: string;
  state: string;
  country: string;
  projectManager: string;
  location: string;
  category: string;
  spaceCondition: string;
  duration: string;
  factor: string;
  footage: string;
  length: string;
  width: string;
  exitLights: string;
}



function ProjectDetails({data}:{data:ProjectDetailsData}) {
  return (
    <div className="bg-white rounded-md">
      <DynamicForm data={data}fields={PROJECT_DETAILS_DEFINITION} onSubmit={() => console.log("Form submitted")}></DynamicForm>
    </div>
  );
}

export default ProjectDetails;
