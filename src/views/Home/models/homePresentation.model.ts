import { Guitar, Course, Entry } from '@models/index';

export type THomePresentation = React.FC<HomePresentationProps>;

export interface HomePresentationProps {
  courses: Course[];
  entries: Entry[];
  guitars: Guitar[];
}
