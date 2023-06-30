// Sample data for testing
let employees = [];
  
  // Function to display employees in the table
  function displayEmployees() {
    const tableBody = document.querySelector("#EList tbody");
    tableBody.innerHTML = ""; // Clear existing table rows
  
    employees.forEach((employee) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${employee.Code}</td>
        <td>${employee.Name}</td>
        <td>${employee.Designation}</td>
        <td>${employee.Location}</td>
      `;
      tableBody.appendChild(row);
    });
  }
  
  // Function to handle form submission
  function onFormSubmit(event) {
    event.preventDefault(); // Prevent page refresh
  
    // Get form inputs
    const codeInput = document.querySelector("#Code");
    const nameInput = document.querySelector("#Name");
    const designationInput = document.querySelector("#Designation");
    const locationInput = document.querySelector("#Location");
  
    // Create a new employee object
    const newEmployee = {
      Code: codeInput.value,
      Name: nameInput.value,
      Designation: designationInput.value,
      Location: locationInput.value
    };
  
    // Add the new employee to the array
    if(newEmployee!=null){}
    employees.push(newEmployee);
  
    // Reset the form inputs
    codeInput.value = "";
    nameInput.value = "";
    designationInput.value = "";
    locationInput.value = "";
  
    // Display the updated list of employees
    displayEmployees();
  }
  
  // Event listener for form submission
  const form = document.querySelector("form");
  form.addEventListener("submit", onFormSubmit);
  
  // Display the initial list of employees
  displayEmployees();
  
  // Function to display employees in the table
function displayEmployees() {
    const tableBody = document.querySelector("#EList tbody");
    tableBody.innerHTML = ""; // Clear existing table rows
  
    employees.forEach((employee, index) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${employee.Code}</td>
        <td>${employee.Name}</td>
        <td>${employee.Designation}</td>
        <td>${employee.Location}</td>
        <td>
          <button onclick="editEmployee(${index})">Edit</button>
          <button onclick="deleteEmployee(${index})">Delete</button>
        </td>
      `;
      tableBody.appendChild(row);
    });
  }
  

  // Function to edit an employee
function editEmployee(index) {
    // Retrieve the employee object from the array
    const employee = employees[index];
  
    // Set the form inputs to the values of the selected employee
    document.querySelector("#Code").value = employee.Code;
    document.querySelector("#Name").value = employee.Name;
    document.querySelector("#Designation").value = employee.Designation;
    document.querySelector("#Location").value = employee.Location;

     deleteEmployee(index);
  }
  
  // Function to delete an employee
  function deleteEmployee(index) {
    // Remove the employee from the array
    employees.splice(index, 1);
  
    // Display the updated list of employees
    displayEmployees();
  }
  