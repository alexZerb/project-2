/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/


console.log(data);
/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/



/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/

function showpage(list, page) {
 // create two variables which will represent the index for the first and last student on the page
 let startIndex = page * 9 - 9;
 let endIndex = page * 9;
  // select the element with a class of `student-list` and assign it to a variable
 const studentList = document.querySelector('ul.student-list');
  // set the innerHTML property of the variable you just created to an empty string
 studentList.innerHtml = '';
 let studentItem = '';
  // loop over the length of the `list` parameter
for(let i = 0; i < list.length; i++) {
   let currentPage = list[i];
  // inside the loop create a conditional to display the proper students
    if(currentPage >= list.indexOf(currentPage) 
      && list.indexOf(currentPage) < endIndex) {  
      // inside the conditional:
        // create the elements needed to display the student information
        // insert the above elements
      
      studentItem += `
      <li class="student-item cf">
      <div class="student-details">
        <img class="avatar" src=${list[i].picture.thumbnail} alt="Profile Picture">
        <h3>${list[i].name.first}</h3>
        <span class="email">${list[i].email}</span>
      </div>
      <div class="joined-details">
        <span class="date">Joined ${list[i].registered.date}</span>
      </div>
    </li>
      `;
      console.log(studentItem);
     return studentList.insertAdjacentHTML("beforeend", studentItem);   
     }
   }    
}

/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/



// Call functions
showpage(data, 1);