import { DynamicForm, FormFieldConfig } from "@libs/ui";

// fieldConfig.ts

export const projectFields: FormFieldConfig[] = [
  {
    name: "siteNumber",
    label: "Site Number",
    placeholder: "",
    required: false,
    type: "text",
    colSpan: 1,
  },
  {
    name: "siteName",
    label: "Site Name*",
    placeholder: "",

    required: true,
    type: "text",
    colSpan: 1,
  },
  {
    name: "city",
    label: "City*",
    required: true,

    type: "text",
  },
  {
    name: "state",
    label: "State*",
    required: true,

    type: "select",
    options: ["California", "Texas", "New York", "Florida"],
  },
  {
    name: "country",
    label: "Country*",
    required: true,

    type: "text",
  },
  {
    name: "projectManager",
    label: "Project Manager*",
    required: true,

    type: "select",
    options: ["Alice", "Bob", "Charlie"],
  },
  {
    name: "location",
    label: "Location*",
    required: true,

    type: "select",
    options: ["North Wing", "South Wing", "East Block", "West Block"],
  },
  {
    name: "category",
    label: "Category*",
    required: true,

    type: "text",
  },
  {
    name: "spaceCondition",
    label: "Space Condition*",
    required: true,

    type: "select",
    options: ["Occupied", "Vacant", "Under Construction"],
  },
  {
    name: "duration",
    label: "Duration*",
    required: true,

    type: "text",
  },
  {
    name: "factor",
    label: "Factor*",
    required: true,

    type: "text",
  },
  {
    name: "footage",
    label: "Footage*",
    required: true,

    type: "text",
  },
  {
    name: "length",
    label: "Length*",
    required: true,

    type: "text",
  },
  {
    name: "width",
    label: "Width*",
    required: true,

    type: "text",
  },
  {
    name: "exitLights",
    label: "Exit Lights*",
    required: true,

    type: "text",
  },
];

function ProjectDetails() {
  return (
    <div className="max-w-8xl mx-auto p-6 bg-white shadow-md rounded-md">
      {/* <div className="text-red-500 text-xl mb-4">Text works ✅</div> */}

      {/* <div className="grid grid-cols-3 gap-4">
        <div className="bg-red-200 p-4 col-span-6">Box 1</div>
        <div className="bg-green-200 p-4 col-span-2">Box 2</div>
        <div className="bg-blue-200 p-4 col-span-2">Box 3</div>
      </div> */}

      <DynamicForm fields={projectFields} onSubmit={() => {}}></DynamicForm>
    </div>
  );
}

export default ProjectDetails;
