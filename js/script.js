/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/
console.log(data);

const studentPerPage = 9;



/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/
function showPage(list, page) {
 // create two variables which will represent the index for the first and last student on the page
 let startIndex = page * studentPerPage - studentPerPage;
 let endIndex = page * studentPerPage;
  // select the element with a class of `student-list` and assign it to a variable
  // set the innerHTML property of the variable you just created to an empty string
 const studentList = document.querySelector('.student-list');
 studentList.innerHTML = '';
  // loop over the length of the `list` parameter
 for (let i = 0; i < list.length; i++) {
   let currentStudents = list[i];
    
 // inside the loop create a conditional to display the proper students
   if (list.indexOf(currentStudents) >= startIndex && list.indexOf(currentStudents) < endIndex) {
      const li = document.createElement('li'); 
      li.className = 'student-item cf'
      li.innerHTML = `
        <div class="student-details">
          <img class="avatar" src=${currentStudents.picture.large} alt="Profile Picture">
          <h3>${currentStudents.name.title} ${currentStudents.name.first} ${currentStudents.name.last}</h3>
          <span class="email">${currentStudents.email}</span>
        </div>
        <div class="joined-details">
          <span class="date">Joined ${currentStudents.registered.date}</span>
        </div>
      `;
      studentList.append(li);
      // inside the conditional:
        // create the elements needed to display the student information
        // insert the above elements
   } 
 }
}

/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/



// Call functions
showPage(data, 1);