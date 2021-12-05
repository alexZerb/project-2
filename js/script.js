/*
Treehouse Techdegree: Alex Szczerba
FSJS Project 2 - Data Pagination and Filtering
*/
console.log(data);

const itemsPerPage = 10;

/*
    showPage function starts by taking 9 of 42 objects from data.js. each object is then displayed as list item on page. 
*/
function showPage(list, page) {
 let startIndex = page * itemsPerPage - itemsPerPage;
 let endIndex = page * itemsPerPage;
 const studentList = document.querySelector('.student-list');
 studentList.innerHTML = '';
  
 for (let i = 0; i < list.length; i++) {
   let currentStudents = list[i];
  // conditional to make a li for only 9 students 
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
    Add pagination creates required number of buttons for all data to be available. When buttons are clicked, showPage function is called to replace old content with target content.    
*/

function addPagination(list) {
  const numOfPages = Math.ceil(list.length / itemsPerPage);
  const linkList = document.querySelector('.link-list');
 
  linkList.innerHTML = '';
  
  for(let i = 1; i <= numOfPages; i++) {
  
    const button = document.createElement('li');
    button.innerHTML = `
        <li>
          <button type='button'>${i}</button>
        </li>
    `;
  
    linkList.append(button);
  } 
 // this highlights page 1 when page first loads
  const btn1 = document.querySelector('button');
  btn1.className = 'active';
  console.log(btn1);
    
  linkList.addEventListener('click', (e) => {  
    const targetBtn = e.target;
    const previousBtn = document.querySelector('.active') 
  
    if(targetBtn.tagName === 'BUTTON'){
      btn1.className = 'inactive';
      previousBtn.className = 'inactive';
      targetBtn.className = 'active';
      showPage(data, e.target.textContent);
    } 
  })
}   
// Call functions 
showPage(data, 1);
addPagination(data);