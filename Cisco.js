document.getElementById('courseSearch').addEventListener('input', function() {
    const query = this.Value.toLowerCase();
    const courses = document.querySelectorAll('.courses .course');
    
    courses.forEach(course => {
        const courseTitle = course.querySelector('h3').textContent.toLowerCase();
        if (courseTitle.includes(query)) {
            course.Style.display = 'block';
        }  else {
            course.Style.display = 'none';
        }
    });
});
