/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/
console.log(data);

const studentPerPage = 8;



/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/
function showPage(page) {
 // create two variables which will represent the index for the first and last student on the page
 let startIndex = page * studentPerPage - studentPerPage;
 let endIndex = page * studentPerPage;
  // select the element with a class of `student-list` and assign it to a variable
  // set the innerHTML property of the variable you just created to an empty string
 const studentList = document.querySelector('.student-list');
 console.log(studentList);
  // loop over the length of the `list` parameter

  // inside the loop create a conditional to display the proper students
   
      // inside the conditional:
        // create the elements needed to display the student information
        // insert the above elements
}

/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/



// Call functions
showPage(1);