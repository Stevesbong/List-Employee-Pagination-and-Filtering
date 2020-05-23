// FOR STUDENT LIST DISPLAY PURPOSE
const students = document.querySelectorAll('.student-item');
const listDiv = document.querySelector('.student-list');
const pageDiv = document.querySelector('.page');

// get all students
let allStudents = students;
// FOR SEARCH FORM DISPLAY PURPOSE
const pageHeader = document.querySelector('.page-header');
const search = document.createElement('div');
search.className = "student-search";
const input = document.createElement('input');
input.setAttribute('placeholder', "Search for students...");
const button = document.createElement('button');
button.textContent = "Search";
search.appendChild(input);
search.appendChild(button);
pageHeader.appendChild(search);

document.querySelector('input[placeholder]').addEventListener('input', (e) => {
   // console.log(e.target.value, 'hi')

   const name = document.getElementsByTagName('h3');
   // console.log(name)
   const inputValue = e.target.value;
    // LOOPING THROUGH EACH ANCHOR TAG 'DATA-TITLE' ATTRIBUTE IN GALLERY DIV
    allStudents.forEach( (element, i) => {

      console.log(name[i].innerText);

      // console.log(element.children[0].childNodes[3])
        // PARAMETER ELEMENT IS WHOLE ANCHOR TAG IN HTML
        // GET DATA TITLE( CAPTION )  FROM ANCHOR TAG
      //   let name = element.getElementsByTagName('h3').toLowerCase();
        
      //   // IF TITLE DOES NOT INCLUDE INPUT VALUE SET DISPLAY NONE
      //   if( !title.includes(inputValue.toLowerCase()) ) {
      //       element.parentElement.style.display = "none"
            
      //       // UNSET GROUP OF IMAGES FROM LIGHTBOX PLUGIN
      //       // THIS MAKES ONLY INCLUDE INPUT VALUE IMAGES TO VISIBLE ON THE LIGHTBOX 
      //       element.setAttribute('data-lightbox', "")
      //   }
      //   else { // IF TITLE DOES INCLUDE INPUT VALUE   
      //       element.parentElement.style.display = "block"
      //   }
    });
})


// STUDENT LISTS TO WEBPAGE
const showPage = (list, page) => {

   // IF JAVASCRIPT WORKS, THAN HIDE HTML MARKUP
   listDiv.innerHTML = "";

   // 10 LISTS STUDENTS FROM STUDENT LIST ON PAGE'S NUMBER
   let startIndex = ( page * 10 ) - 10;
   let endIndex = page * 10;

   // IF END INDEX IS BIGGER THAN STUDENT'S LIST LENGTH
   if( endIndex > list.length) {
      endIndex = list.length;
   }

   // ADD STUDENTS TO UNORDER LIST
   for( let i = startIndex; i < endIndex; i++) {
      listDiv.appendChild(list[i]);
   }
}

// PAGINATION LINKS
const appendPageLinks = list => {

   // IF THERE IS NO STUDENT, SHOW THE MESSAGE
   if( list.length === 0 ) {
      return listDiv.innerHTML = `
         <li class="student-item cf">There is no student</li>
      `;
   }

   // GET HOW MANY PAGES NEED
   let pageNumbers = Math.ceil(list.length / 10);
   if (list.length % 10 !== 0) {
      pageNumbers += 1;
   }

   // CREATE PAGINATION DIV
   const pagination = document.createElement('div');
   const ul = document.createElement('ul');
   pagination.className = 'pagination';
   pagination.appendChild(ul);

   // CREATE PAGINATION LINKS TO ul
   for( let i = 1; i < pageNumbers; i++) {
      const li = document.createElement('li');
      const a = document.createElement('a');
      ul.appendChild(li);
      li.appendChild(a);
      a.href = "#";
      a.textContent = i;
   }

   // APPEND PAGINATION LINKS TO BOTTOM OF THE WEBPAGE
   pageDiv.appendChild(pagination);
   showPage(students, 1)


   // THIS ATTRIBUTE SELECTOR WILL GET FIRST ELEMENT 
   // AND SET CLASSNAME ACTIVE
   document.querySelector('a[href="#"]').className = 'active';

   // PAGINATION LINK EVENT LISTENER
   // LOOP THROUGH EACH LINK ELEMENT AND WAIT FOR USER CLICK
   document.querySelectorAll('a[href="#"]').forEach( (event, i) => {
      event.addEventListener('click', e => {
         console.log(e.target.textContent, 'page number')
         showPage(students, e.target.textContent)
         toggleActive(e.target);
      })
   })
}

appendPageLinks(students);

// TOGGLE ACTIVE CLASS WHEN USER CLIKED PAGE NUMBER
function toggleActive(event) {
   // GET CURRENT ACTIVE CLASS AND REMOVE
   // console.log(event)
   let current = document.getElementsByClassName("active")[0];
   current.classList.remove("active");

   // ACTIVE CLASS ON CLICKED ELEMENT
   event.classList.add("active");
}