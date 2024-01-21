import { Course } from '@models/course.model';

export type TCourse = React.FC<CourseProps>;

export interface CourseProps {
  course: Course;
}
