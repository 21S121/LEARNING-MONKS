import React, { useState } from 'react';
import './Courses.css';
import './newPhoto.jpg';
const Courses = () => {
  const [courses, setCourses] = useState([
    { id: 1, name: 'FullStack Development', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC15oCQtp5aqHUbo2qbwm6opxCBzM2rmQsQA&usqp=CAU' },
    { id: 2, name: 'AI', image: 'https://www.hindustantimes.com/ht-img/img/2023/04/11/550x309/The-government-also-wants-to-embed-AI-in-different_1681218265620.jpg' },
    { id: 3, name: 'Designing Algorithms', image: 'https://www.computersciencedegreehub.com/wp-content/uploads/2022/04/algorithm-design.jpg' },
        { id: 6, name: 'SQL', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt3K3wHRMrcEUoVi1VfVXVFIDbVfMKSV8tIkkIsJCegVHWI2E4Dj9hHSeYA1mrdLdAmP4&usqp=CAU' },
  ]);

  const [newCourse, setNewCourse] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);

  const addCourse = () => {
    if (newCourse.trim() !== '') {
      setCourses([...courses, { id: courses.length + 1, name: newCourse, image: 'default_image_url.jpg' }]);
      setNewCourse('');
      setShowForm(false);
    }
  };

  const handleCourseClick = (course) => {
    setSelectedCourse(course);
  };

  return (
    <div>
<h2>MY COURSES</h2>
      <div className="courses-grid">
        {courses.map(course => (
          <div
            key={course.id}
            className="course-card"
            onClick={() => handleCourseClick(course)}
          >
            <img src={course.image} alt={course.name} />
            <p>{course.name}</p>
          </div>
        ))}
      </div>
      {selectedCourse && (
        <div>
          <h2>Course Details</h2>
          <img src={selectedCourse.image} alt={selectedCourse.name} />
          <p>{selectedCourse.name}</p>
          {/* Add more details as needed */}
        </div>
      )}
       <br/>
       <br/>
       <br/>
       <br/>
       <br/>
       <br/>
       <br/>
    
    </div>
  
  );
};

export default Courses;