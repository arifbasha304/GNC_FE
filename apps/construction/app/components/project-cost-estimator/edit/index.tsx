import React from "react";
import Construction from "./construction";
import DocumentsProvided from "./documents-provided";
import Navbar from "../../common/navbar";
import PreConstruction from "./pre-construction";
import ProjectDetails from "./project-details";
import TotalCostEstimation from "./total-cost-estimation";
import { useForm } from "@tanstack/react-form"; // Make sure it's imported

function ProjectCostEstimatorEdit() {
  // ✅ Initialize form (stub for now; replace with your real config)
  const form = useForm({
    defaultValues: {}, // Set up your actual default values
    onSubmit: async ({ value }) => {
      console.log("Form submitted:", value);
    },
  });

  const submitButtonText = "Save Changes";

  return (
    <div className="p-6 space-y-5">
      <div>
        <Navbar submitButtonText={submitButtonText} form={form} />
      </div>

      <ProjectDetails />

      <div className="flex rounded-lg">
        <div className="flex flex-col w-1/2 mr-5">
          <div className="bg-blue-50 mb-5 rounded-lg">
            <PreConstruction />
          </div>
          <div className="bg-green-50 rounded-lg">
            <DocumentsProvided />
          </div>
        </div>

        <div className="w-1/2 mr-5 bg-blue-50 rounded-lg">
          <Construction />
        </div>
      </div>

      <TotalCostEstimation />
    </div>
  );
}

export default ProjectCostEstimatorEdit;
