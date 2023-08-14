document.addEventListener("DOMContentLoaded", function () {
  const dropdowns = document.querySelectorAll(".dropdown");
  const submitButton = document.getElementById("submitBtn");
  const coursesList = document.getElementById("coursesList");
  
  const courses = [
    { name: 'Engineering Physics', college: 'medicaps', year: '1', semester: '1', type: 'notes', link: 'https://drive.google.com/drive/folders/1YGdPKZAaLqRCO6O8k6jxV710sxeG-MoO' },
    { name: 'Engineering Chemistry', college: 'medicaps', year: '1', semester: '1', type: 'notes', link: 'https://drive.google.com/drive/folders/1YGdPKZAaLqRCO6O8k6jxV710sxeG-MoO' },
    { name: 'Engineering Mathematics I', college: 'medicaps', year: '1', semester: '1', type: 'notes', link: 'https://drive.google.com/file/d/1dJX2MzzcWEj83pcnKYWVKTKb5_aXNPy8/view?usp=drivesdk' },
    { name: 'Engineering Mathematics II', college: 'medicaps', year: '1', semester: '1', type: 'notes', link: 'https://drive.google.com/file/d/1hP7ABZI0MG3cl_WLSaWEnQOhQhS5dZwg/view?usp=drivesdk' },
    { name: 'Communication skills', college: 'medicaps', year: '1', semester: '1', type: 'notes', link: 'https://drive.google.com/file/d/1bNEHxbg1Xe7nWahWShPuX6l7q_xRBshz/view?usp=drivesdk' },
    { name: 'Engineering Graphics', college: 'medicaps', year: '1', semester: '1', type: 'notes', link: 'https://drive.google.com/drive/folders/1iuBRSvNLuYv4FQjiJLaXs6vnJkbY4HTF' },
    { name: 'Basic Mechanical Engineering', college: 'medicaps', year: '1', semester: '1', type: 'notes', link: 'https://drive.google.com/drive/folders/1awE1WQNGUDlLIvFUaWMBq4vnO4kwBGaN' },
    { name: 'Basic Electronics Engineering', college: 'medicaps', year: '1', semester: '1', type: 'notes', link: 'https://drive.google.com/file/d/1bQOZB6EZsOEcdfRy2yhTWJbqHCQaOC1w/view?usp=drivesdk' },
    { name: 'Basic Electrical Engineering', college: 'medicaps', year: '1', semester: '1', type: 'notes', link: 'https://drive.google.com/file/d/1aXD60JboCPXuy7_t7FSzZ_cUgnKMorCD/view?usp=drivesdk' },
    { name: 'Basic Civil Engineering', college: 'medicaps', year: '1', semester: '1', type: 'notes', link: 'https://drive.google.com/file/d/1dx8bs8-ht9KHjvSBtbwFXgaIuJIyVGLI/view?usp=drivesdk' },
    { name: 'Computer programming I', college: 'medicaps', year: '1', semester: '1', type: 'notes', link: 'https://drive.google.com/drive/folders/1Yttp6jdzLvAdm7ASi-nwvc50hD5eyjAN' },
    { name: 'Computer programming II', college: 'medicaps', year: '1', semester: '1', type: 'notes', link: 'https://drive.google.com/drive/folders/1Yttp6jdzLvAdm7ASi-nwvc50hD5eyjAN' },
    { name: 'History of Science and Technology', college: 'medicaps', year: '1', semester: '1', type: 'notes', link: 'https://drive.google.com/file/d/1aJcKs2j4xESEzPLvq6TH0G2IxLsJdngr/view?usp=drivesdk' },
    { name: 'Environmental Science', college: 'medicaps', year: '1', semester: '1', type: 'notes', link: 'https://drive.google.com/file/d/1dN3rIs1UUaQ2__WreTv4FKftrpEGtsd6/view?usp=drivesdk' },
    { name: 'Engineering Workshop', college: 'medicaps', year: '1', semester: '1', type: 'notes', link: 'https://drive.google.com/file/d/1dNTnRqAmlPbRpzrcDpMPGz5uXK3XQMou/view?usp=drivesdk' },
    // ... (other courses with links)
  ];
  

  dropdowns.forEach((dropdown) => {
    const select = dropdown.querySelector(".select");
    const menu = dropdown.querySelector(".menu");

    select.addEventListener("click", () => {
      menu.classList.toggle("menu-open");
      select.querySelector(".caret").classList.toggle("caret-rotate");
      select.classList.toggle("select-clicked");
    });

    const options = menu.querySelectorAll("li");
    options.forEach((option) => {
      option.addEventListener("click", () => {
        select.querySelector(".selected").textContent = option.textContent;
        menu.classList.remove("menu-open");
        select.querySelector(".caret").classList.remove("caret-rotate");
        select.classList.remove("select-clicked");
      });
    });
  });

  submitButton.addEventListener("click", () => {
    const college = document.querySelector(".dropdown:nth-child(1) .selected").textContent;
    const year = document.querySelector(".dropdown:nth-child(2) .selected").textContent;
    const type = document.querySelector(".dropdown:nth-child(3) .selected").textContent;

    const matchingCourses = courses.filter(course => 
      course.college.toLowerCase() === college.toLowerCase() &&
      course.year === year &&
      course.type.toLowerCase() === type.toLowerCase()
    );

    if (matchingCourses.length === 0) {
      coursesList.textContent = "No matching data found.";
    } else {
      coursesList.innerHTML = "";
      matchingCourses.forEach(course => {
        coursesList.innerHTML += `
          <div class="course-card">
            <h2>${course.name}</h2>
            <p><a href="${course.link}" target="_blank" class="card-link" >View Details</a></p>
          </div>
        `;
      });
    }
  });
});