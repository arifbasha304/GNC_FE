import React from "react";
import Construction from "./construction";
import DocumentsProvided from "./documents-provided";
import Navbar from "../../common/navbar";
import PreConstruction from "./pre-construction";
import ProjectDetails from "./project-details";
import TotalCostEstimation from "./total-cost-estimation";
import { useForm } from "@tanstack/react-form";
import {formMockData } from '../../mock-data'


function ProjectCostEstimatorEdit() {
  const form = useForm({
    defaultValues: {},
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

      <ProjectDetails data={formMockData.projectDetails} />

      <div className="flex rounded-lg">
        <div className="flex flex-col w-1/2 mr-5">
          <div className="bg-blue-50 mb-5 rounded-lg">
            <PreConstruction data={formMockData.preConstruction}/>
          </div>
          <div className="bg-green-50 rounded-lg">
            <DocumentsProvided data={formMockData.documentsProvided}/>
          </div>
        </div>

        <div className="w-1/2 mr-5 bg-blue-50 rounded-lg">
          <Construction data={formMockData.construction}/>
        </div>
      </div>

      <TotalCostEstimation />
    </div>
  );
}

export default ProjectCostEstimatorEdit;
