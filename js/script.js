/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/
console.log(data);

const itemsPerPage = 9;

/*
Create the `showPage` function
This function creatse and inserts/appends the elements needed to display a "page" of nine students
*/
function showPage(list, page) {
 let startIndex = page * itemsPerPage - itemsPerPage;
 let endIndex = page * itemsPerPage;
 const studentList = document.querySelector('.student-list');
 studentList.innerHTML = '';
  
 for (let i = 0; i < list.length; i++) {
   let currentStudents = list[i];
    
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
   } 
 }
}

/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/

function addPagination(list) {

 // create a variable to calculate the number of pages needed

  const numOfPages = Math.ceil(list.length / itemsPerPage);

  // select the element with a class of `link-list` and assign it to a variable
 
  const linkList = document.querySelector('.link-list');
 
  // set the innerHTML property of the variable you just created to an empty string
 
  linkList.innerHTML = '';
 
  // loop over the number of pages needed
  
  for(let i = 1; i <= numOfPages; i++) {
  
    // create the elements needed to display the pagination button
  
    const button = document.createElement('li');
    button.innerHTML = `
        <li>
          <button type='button'>${i}</button>
        </li>
    `;
  
    // insert the above elements
  
    linkList.append(button);
  } 
  
  // give the first pagination button a class of "active"
 
  const btn1 = document.querySelector('button');
  btn1.className = 'active';
  console.log(btn1);
 
  // create an event listener on the `link-list` element
    
  linkList.addEventListener('click', (e) => {  
    const targetBtn = e.target;
      // if the click target is a button: 
     if(targetBtn.tagName === 'BUTTON'){
      // remove the "active" class from the previous button
      btn1.className = 'inactive';
      // add the active class to the clicked button
      targetBtn.className = 'active';
      // call the showPage function passing the `list` parameter and page to display as arguments
    } 
  })
}   


// Call functions
showPage(data, 1);
addPagination(data);