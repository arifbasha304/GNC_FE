import { DynamicForm, FormFieldConfig } from "@libs/ui";
import { PROJECT_DETAILS_DEFINITION } from "../../../utils/data/project-details";


function ProjectDetails() {
  return (
    <div className="bg-white rounded-md">
      <DynamicForm fields={PROJECT_DETAILS_DEFINITION} onSubmit={() => console.log("Form submitted")}></DynamicForm>
    </div>
  );
}

export default ProjectDetails;
