const $employeeCardsWrapper = document.querySelector(".employee-cards-wrapper");

const $mainWrapper = document.querySelector(".main-wrapper");

// const employees = [
//   {
//     picture: "./user.jpg",
//     firstName: "Marc",
//     lastName: "Strong",
//     email: "mstrong@email.com",
//     city: "London",
//   },
//   {
//     picture: "./user.jpg",
//     firstName: "Marc",
//     lastName: "Strong",
//     email: "mstrong@email.com",
//     city: "London",
//   },
//   {
//     picture: "./user.jpg",
//     firstName: "Marc",
//     lastName: "Strong",
//     email: "mstrong@email.com",
//     city: "London",
//   },
//   {
//     picture: "./user.jpg",
//     firstName: "Marc",
//     lastName: "Strong",
//     email: "mstrong@email.com",
//     city: "London",
//   },
//   {
//     picture: "./user.jpg",
//     firstName: "Marc",
//     lastName: "Strong",
//     email: "mstrong@email.com",
//     city: "London",
//   },
//   {
//     picture: "./user.jpg",
//     firstName: "Marc",
//     lastName: "Strong",
//     email: "mstrong@email.com",
//     city: "London",
//   },
//   {
//     picture: "./user.jpg",
//     firstName: "Marc",
//     lastName: "Strong",
//     email: "mstrong@email.com",
//     city: "London",
//   },
//   {
//     picture: "./user.jpg",
//     firstName: "Marc",
//     lastName: "Strong",
//     email: "mstrong@email.com",
//     city: "London",
//   },
//   {
//     picture: "./user.jpg",
//     firstName: "Marc",
//     lastName: "Strong",
//     email: "mstrong@email.com",
//     city: "London",
//   },
//   {
//     picture: "./user.jpg",
//     firstName: "Marc",
//     lastName: "Strong",
//     email: "mstrong@email.com",
//     city: "London",
//   },
//   {
//     picture: "./user.jpg",
//     firstName: "Marc",
//     lastName: "Strong",
//     email: "mstrong@email.com",
//     city: "London",
//   },
//   {
//     picture: "./user.jpg",
//     firstName: "Marc",
//     lastName: "Strong",
//     email: "mstrong@email.com",
//     city: "London",
//   },
// ];

let employees;

fetch("https://randomuser.me/api/?results=12&inc=picture,name,email,location")
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    employees = data.results;

    employees.forEach(function (employee) {
      const $newEmployeeCard = document.createElement("div");
      $newEmployeeCard.classList.add("employee-card");

      const $newPicture = document.createElement("img");
      $newPicture.classList.add("employee-card-picture");
      $newPicture.setAttribute("src", employee.picture.large);

      const $newEmployeeInfo = document.createElement("ul");
      $newEmployeeInfo.classList.add("employee-info-list");

      const $newName = document.createElement("li");
      $newName.classList.add("name");

      const $newFirstName = document.createElement("span");
      $newFirstName.classList.add("first-name");
      $newFirstName.textContent = employee.name.first;

      const $newLastName = document.createElement("span");
      $newLastName.classList.add("last-name");
      $newLastName.textContent = employee.name.last;

      const $newEmail = document.createElement("li");
      $newEmail.classList.add("email");
      $newEmail.textContent = employee.email;

      const $newCity = document.createElement("li");
      $newCity.classList.add("city");
      $newCity.textContent = employee.location.city;

      $newEmployeeCard.appendChild($newPicture);
      $newEmployeeCard.appendChild($newEmployeeInfo);
      $newEmployeeInfo.appendChild($newName);
      $newName.appendChild($newFirstName);
      $newName.appendChild($newLastName);
      $newEmployeeInfo.appendChild($newEmail);
      $newEmployeeInfo.appendChild($newCity);
      $employeeCardsWrapper.appendChild($newEmployeeCard);

      // Full info
      function fullInfoModal(picture, firstName, lastName) {
        const $fullInfoWrapper = document.createElement("div");
        $fullInfoWrapper.classList.add("full-info-wrapper");
        // $fullInfoWrapper.classList.add("hidden");

        const $fullInfoCard = document.createElement("div");
        $fullInfoCard.classList.add("full-info-card");

        const $fullInfoPicture = document.createElement("img");
        $fullInfoPicture.classList.add("employee-card-picture");
        $fullInfoPicture.setAttribute("src", picture);

        const $fullInfoList = document.createElement("ul");
        $fullInfoList.classList.add("employee-info-list");

        const $fullInfoName = document.createElement("li");
        $fullInfoName.classList.add("name");

        const $fullInfoFirstName = document.createElement("span");
        $fullInfoFirstName.classList.add("first-name");
        $fullInfoFirstName.textContent = firstName;

        const $fullInfoLastName = document.createElement("span")
        $fullInfoLastName.classList.add("last-name")
        $fullInfoLastName.textContent = lastName

        $fullInfoWrapper.appendChild($fullInfoCard);
        $fullInfoCard.appendChild($fullInfoPicture);
        $fullInfoCard.appendChild($fullInfoList);
        $fullInfoList.appendChild($fullInfoName)
        $fullInfoName.appendChild($fullInfoFirstName)
        $fullInfoName.appendChild($fullInfoLastName)
        $mainWrapper.appendChild($fullInfoWrapper);
      }

      $newEmployeeCard.addEventListener("click", () => {
        console.log(employee);

        fullInfoModal(employee.picture.large, employee.name.first, employee.name.last)
      });
    });
  })
  .catch(function (err) {
    console.log("Une erreure est survenue", err);
  });
