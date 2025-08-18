import {Ui} from '@libs/ui';
import { Auth } from '@libs/auth';

const dashboard = () => {
  return (
     <div>
      <h1>Dashboard component works</h1>
      <Ui />
      <Auth />
    </div>
  );
};

export default dashboard;