import React, {PropTypes} from 'react';
import CourseListRow from './CourseListRow';

const CourseList = ({courses}) => {
  return (
    <div>
      <h1>Courses</h1>
      <table className="table">
        <thead>
        <tr>
          <th>&nbsp;</th>
          <th>Title</th>
          <th>Author</th>
          <th>Category</th>
          <th>Length</th>
        </tr>
        </thead>
        <tbody>
        {courses.map(course =>
          <CourseListRow key={course.id} course={course}/>
        )}
        </tbody>
      </table>
    </div>
  );
};

CourseList.propTypes = {
  courses: PropTypes.array.isRequired
};

export default CourseList;
