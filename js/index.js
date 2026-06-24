//Fetch Data
async function getData() 
{
  try 
  {
    const response = await fetch("../js/index.json");
    if(!response.ok)
    {
      throw new Error(`HTTP ERROR status: ${response.status}`);
    }
    const data = await response.json();
    renderHTML(data);
  }
  catch(error) 
  {
    console.error("ERROR", error);
  }
}


//Dropmenu
const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger= document.querySelector(".hamburger");
const closeIcon= document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

function toggleMenu() 
{
  if (menu.classList.contains("showMenu")) 
  {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  }
  else 
  {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

hamburger.addEventListener("click", toggleMenu);

menuItems.forEach
( 
  function(menuItem)
  { 
    menuItem.addEventListener("click", toggleMenu);
  }
);

//Render data to HTML
function renderHTML(data)
{
  //Trim data from JSON
  const about = data.about[0]; 
  const wducation = data.education[1];
  const work = data.work[2];
  const experience = data.experience[3];
  const projects = data.projects[4];
  const profilePicture = about.profilePicture;
  const myName = `${about.firstName} ${about.lastName}`;
  const projectStatus = about.projects

  //Identify url location 
  const currentUrl = window.location.pathname;
  const homePage = "/pages/home.html";
  const indexPage = "/index.html";
  const landingPage = "/";
  const aboutPage = "/pages/about.html";
  const technologiesPage = "/pages/technologies.html"; 
  const projectsPage = "/pages/projects.html"; 
  const contactPage = "/pages/contact.html";

  //HTML content
  if (currentUrl === homePage)
  {  
    document.getElementById("name").innerHTML = myName;
    document.getElementById("profile_picture").setAttribute("src", profilePicture);
    document.getElementById("occupation").innerHTML = `${about.currentOccupation}`;
  } 
  else if (currentUrl === aboutPage) 
  {
    document.getElementById("autobiography").innerHTML = `${about.autobiography}`;
    const workSector = document.querySelector("#workList"); //WORKLIST
    const workList = data.work
      .map(work =>
        `
        <div class="work">
                    <div>
                        <div class="worktitle"><p>${work.role}</p></div>
                        <p class="work_description">${work.description}</p>
                        <p><img class="company_icon" src="../images/company.svg" alt="Company Icon"> ${work.place}</p>
                        <p><img class="location_icon" src="../images/location.svg" alt="Location Icon"> ${work.location}</p>
                    </div>
                    <div>
                        <p class="worktime">${work.duration}</p>
                        <p><span class="break">${work.period}</span></p>
                    </div>
                </div>
                <div class="line"></div>
        `
      ).join("");
    workSector.innerHTML = workList;
    const educationSector = document.querySelector("#educationList"); //EDUCATION
    const educationList = data.education
      .map(education =>
        `
        <div class="work">
                    <div>
                        <div class="worktitle"><p>${education.title}</p></div>
                        <p class="work_description">${education.description}</p>
                        <p><img class="company_icon" src="../images/company.svg" alt="Company Icon"> ${education.school}</p>
                        <p><img class="location_icon" src="../images/location.svg" alt="Location Icon"> ${education.location}</p>
                    </div>
                    <div class="time">
                        <p class="worktime">${education.duration}</p>
                        <p><span class="break">${education.period}</span></p>
                    </div>
                </div>
                <div class="line"></div>
        `
      ).join("");
    educationSector.innerHTML = educationList;
    const experienceSector = document.querySelector("#experienceList"); //EXPERIENCE
    const experienceList = data.experience
      .map(experience =>
        `
        <div class="work">
                    <div>
                        <div class="worktitle"><p>${experience.type}</p></div>
                        <p class="work_description">${experience.description}</p>
                        <p><img class="company_icon" src="../images/role.svg" alt="Role Icon"> ${experience.role}</p>
                        <p><img class="location_icon" src="../images/location.svg" alt="Location Icon"> ${experience.place}</p>
                    </div>
                    <div class="time">
                        <p class="worktime">${experience.duration}</p>
                        <p><span class="break">${experience.period}</span></p>
                    </div>
                </div>
                <div class="line"></div>
        `
      ).join("");
      experienceSector.innerHTML = experienceList;
  }
  else if (currentUrl === indexPage)
  {
    document.getElementById("name").innerHTML = myName;
    document.getElementById("profile_picture").setAttribute("src", profilePicture);
    document.getElementById("occupation").innerHTML = `${about.currentOccupation}`;
  }
  else if (currentUrl === landingPage) 
  {
    document.getElementById("name").innerHTML = myName;
    document.getElementById("profile_picture").setAttribute("src", "../images/profile_picture.JPG");
    document.getElementById("occupation").innerHTML = `${about.currentOccupation}`;
  } 
  else if (currentUrl === contactPage) 
  {
    document.getElementById("email").href = `mailto:${about.email}`;
    document.getElementById("email").innerHTML = about.email;
    document.getElementById("phone").href = `tel:${about.phoneNumber}`;
    document.getElementById("phone").innerHTML = about.phoneNumber;
  } 
  else if (currentUrl === projectsPage) 
  {
    const projectSector = document.querySelector("#projectList");
    const projectList = data.projects
      .map(projects =>
        `
          <section>
            <img class ="section_img" src="${projects.logo}" alt="${projects.name}">
            <div class="article">
              <h2>${projects.name}</h2>
              <p>${projects.description}</p>
              <p class="tech"><span class="tech_stack">Year & Place: </span>${projects.year} at ${projects.place}</p>
              <div class="link_section">
                <div class="link">
                  <img src="../images/link.svg" alt="Live Preview Icon">
                  <a href="${projects.link}">Live Preview</a>
                </div>
                <div class="github_icon">
                  <img src="../images/github_black.svg" alt="Github">
                  <a href="${projects.github}">View Code</a>
                </div>
              </div>
            </div>
          </section>
        `
      ).join("");
    projectSector.innerHTML = projectList;
  };
  
  document.getElementById("footerName").innerHTML = myName;
  
};

getData();


  // // Accessing the 'about' section
  // const about = data.about[0]; // Assuming you want the first item
  // console.log('About:', about);

  // // Example: Displaying "firstName" and "lastName" on the page
  // const name = `${about.firstName} ${about.lastName}`;
  // document.getElementById('name').textContent = name;

  // // Accessing the 'education' section
  // const education = data.education;
  // console.log('Education:', education);

  // // Loop through all education entries
  // education.forEach((edu) => {
  //   const educationInfo = `${edu.school}, ${edu.type} in ${edu.location} from ${edu.start} to ${edu.end}`;
  //   console.log(educationInfo);
  //   // You can append this to an HTML element as well, for example:
  //   const eduElement = document.createElement('p');
  //   eduElement.textContent = educationInfo;
  //   document.getElementById('education-section').appendChild(eduElement);
  // });

  // // Accessing the 'work' section
  // const work = data.work;
  // console.log('Work Experience:', work);

  // // Loop through all work experiences
  // work.forEach((job) => {
  //   const workInfo = `${job.role} at ${job.place} in ${job.location} (${job.period})`;
  //   console.log(workInfo);
  //   // Similarly, you can display this in HTML
  //   const workElement = document.createElement('p');
  //   workElement.textContent = workInfo;
  //   document.getElementById('work-section').appendChild(workElement);
  // });

  // // Accessing the 'projects' section
  // const projects = data.projects;
  // console.log('Projects:', projects);

  // // Loop through all projects
  // projects.forEach((project) => {
  //   const projectInfo = `${project.name} - ${project.year}: ${project.description}`;
  //   console.log(projectInfo);
  //   // You can also display each project link in HTML
  //   const projectElement = document.createElement('div');
  //   projectElement.innerHTML = `
  //     <h3>${project.name} (${project.year})</h3>
  //     <p>${project.description}</p>
  //     <a href="${project.link}" target="_blank">Live Demo</a> | 
  //     <a href="${project.github}" target="_blank">GitHub</a>
  //   `;
  //   document.getElementById('projects-section').appendChild(projectElement);
  // });



// function renderHTML(data) {
//       const currentUrl = window.location.pathname;
//       const home = "/pages/home.html";
//       const index = "/index.html";
//       const landing = "/";
//       const about = "/pages/about.html";
//       const technologies = "/pages/technologies.html"; 
//       const projects = "/pages/projects.html"; 
//       const contact = "/pages/contact.html";
//       const myName = `${about.firstNaem} ${about.lastName}`;
//       const projectStatus = about.projects

  

//       document.getElementById("footerName").innerHTML = myName;

//             if (currentUrl === home) {  
//       document.getElementById("name").innerHTML = myName;
//       document.getElementById("profile_picture").setAttribute("src", "../images/profile_picture.JPG");
//       document.getElementById("occupation").innerHTML = info.occupation;
//       } else if (currentUrl === index) {
//       document.getElementById("name").innerHTML = myName;
//       document.getElementById("profile_picture").setAttribute("src", "../images/profile_picture.JPG");
//       } else if (currentUrl === landing) {
//       document.getElementById("name").innerHTML = myName;
//       document.getElementById("profile_picture").setAttribute("src", "../images/profile_picture.JPG");
//       } else if (currentUrl === contact) {
//       document.getElementById("email").innerHTML = info.email;
//       document.getElementById("phoneNumber").innerHTML = info.phoneNumber;
//       } else if (currentUrl === projects && projectStatus === "null") {
//         document.getElementById("projects").classList.add("collapsed");
//         document.getElementById("noProjects").innerHTML = "There is no active projects yet. Stay tuned!";
//         };
// }




