const $employeeCardsWrapper = document.querySelector(".employee-cards-wrapper");

const employees = [
  {
    picture: "./user.jpg",
    firstName: "Marc",
    lastName: "Strong",
    email: "mstrong@email.com",
    city: "London",
  },
  {
    picture: "./user.jpg",
    firstName: "Marc",
    lastName: "Strong",
    email: "mstrong@email.com",
    city: "London",
  },
  {
    picture: "./user.jpg",
    firstName: "Marc",
    lastName: "Strong",
    email: "mstrong@email.com",
    city: "London",
  },
  {
    picture: "./user.jpg",
    firstName: "Marc",
    lastName: "Strong",
    email: "mstrong@email.com",
    city: "London",
  },
  {
    picture: "./user.jpg",
    firstName: "Marc",
    lastName: "Strong",
    email: "mstrong@email.com",
    city: "London",
  },
  {
    picture: "./user.jpg",
    firstName: "Marc",
    lastName: "Strong",
    email: "mstrong@email.com",
    city: "London",
  },
  {
    picture: "./user.jpg",
    firstName: "Marc",
    lastName: "Strong",
    email: "mstrong@email.com",
    city: "London",
  },
  {
    picture: "./user.jpg",
    firstName: "Marc",
    lastName: "Strong",
    email: "mstrong@email.com",
    city: "London",
  },
  {
    picture: "./user.jpg",
    firstName: "Marc",
    lastName: "Strong",
    email: "mstrong@email.com",
    city: "London",
  },
  {
    picture: "./user.jpg",
    firstName: "Marc",
    lastName: "Strong",
    email: "mstrong@email.com",
    city: "London",
  },
  {
    picture: "./user.jpg",
    firstName: "Marc",
    lastName: "Strong",
    email: "mstrong@email.com",
    city: "London",
  },
  {
    picture: "./user.jpg",
    firstName: "Marc",
    lastName: "Strong",
    email: "mstrong@email.com",
    city: "London",
  },
];

employees.forEach(function (employee) {
  const $newEmployeeCard = document.createElement("div");
  $newEmployeeCard.classList.add("employee-card");

  const $newPicture = document.createElement("img");
  $newPicture.classList.add("employee-card-picture");
  $newPicture.setAttribute("src", employee.picture);

  const $newEmployeeInfo = document.createElement("ul");
  $newEmployeeInfo.classList.add("employee-info-list");

  const $newName = document.createElement("li");
  $newName.classList.add("name");

  const $newFirstName = document.createElement("span");
  $newFirstName.classList.add("first-name");
  $newFirstName.textContent = employee.firstName;

  const $newLastName = document.createElement("span");
  $newLastName.classList.add("last-name");
  $newLastName.textContent = employee.lastName;

  const $newEmail = document.createElement("li");
  $newEmail.classList.add("email");
  $newEmail.textContent = employee.email;

  const $newCity = document.createElement("li");
  $newCity.classList.add("city");
  $newCity.textContent = employee.city;

  $newEmployeeCard.appendChild($newPicture);
  $newEmployeeCard.appendChild($newEmployeeInfo);
  $newEmployeeInfo.appendChild($newName);
  $newName.appendChild($newFirstName);
  $newName.appendChild($newLastName);
  $newEmployeeInfo.appendChild($newEmail);
  $newEmployeeInfo.appendChild($newCity);
  $employeeCardsWrapper.appendChild($newEmployeeCard);
});
