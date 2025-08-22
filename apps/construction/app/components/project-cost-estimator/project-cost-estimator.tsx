import {Ui} from '@libs/ui';
import { Auth } from '@libs/auth';

const ProjectCostEstimator = () => {
  return (
     <div>
      <h1 className='text-2xl'>Project Cost Estimator</h1>
      <Ui />
      <Auth />
    </div>
  );
};

export default ProjectCostEstimator;