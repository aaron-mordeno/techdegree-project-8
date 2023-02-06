let employees = [];
const urlAPI = `https://randomuser.me/api/?results=12&inc=name,picture,email,location,phone,dob&noinfo&nat=US`;
const gridContainer = document.querySelector(".grid-container");
const overlay = document.getElementsByClassName("overlay")[0];
const modalContainer = document.querySelector(".modal-content");
const modalClose = document.querySelector(".modal-close");

function fetchData() {
  fetch(urlAPI)
    .then((res) => res.json())
    .then((res) => res.results)
    .then((res) => console.log(res))
    // .then(displayEmployees)
    .catch((err) => console.log(err));
}

function displayEmployees(employeeData) {
  employees = employeeData;
  let employeeHTML = "";
  employees.forEach((employee, index) => {
    let name = employee.name;
    let email = employee.email;
    let city = employee.location.city;
    let picture = employee.picture;

    employeeHTML += `
    <div class="card" data-index="${index}">
    <img class="avatar" src="${picture.large}" />
    <div class="text-container">
    <h2 class="name">${name.first} ${name.last}</h2>
    <p class="email">${email}</p>
    <p class="address">${city}</p>
    </div>
    </div>
    `;
  });
  gridContainer.innerHTML = employeeHTML;
  console.log(employees);
}

function displayModal(index) {
  let name = index.name;
  let email = index.email;
  let city = index.location.city;
  let picture = index.picture;
  let date = new Date(dob.date);
  const modalHTML = `
  <img class="avatar" src="${picture.large}" />
  <div class="text-container">
  <h2 class="name">${name.first} ${name.last}</h2>
  <p class="email">${email}</p>
  <p class="address">${city}</p>
  <hr />
  <p>${phone}</p>
  <p class="address">${street}, ${state} ${postcode}</p>
  <p>Birthday:
  ${date.getMonth()}/${date.getDate()}/${date.getFullYear()}</p>
  </div>
  `;
  console.log(`clicked ${index}`);
  modalContainer.innerHTML = modalHTML;
}

gridContainer.addEventListener("click", (e) => {
  if (e.target !== gridContainer) {
    const card = e.target.closest(".card");
    // const index = card.getAttribute("data-index");
    // displayModal(index);
    overlay.style.display = "block";
  }
});

modalClose.addEventListener("click", () => {
  console.log("close button clicked");
  overlay.style.display = "none";
});

// const modalTest = document.querySelector(".modal-test");

// modalTest.addEventListener("click", () => {
//   overlay.classList.remove("hidden");
// });
