import Construction from "./construction";
import DocumentsProvided from "./documents-provided";
import PreConstruction from "./pre-construction";
import ProjectDetails from "./project-details";
import TotalCostEstimation from "./total-cost-estimation";

function ProjectCostEstimatorEdit() {
  return (
    <div>
      <ProjectDetails />
      {/* <div className="flex">
        <div className="flex flex-col w-1/2">
          <PreConstruction />
          <DocumentsProvided />
        </div>
        <Construction />
      </div> */}

      
      <TotalCostEstimation />
    </div>
  );
}

export default ProjectCostEstimatorEdit;
