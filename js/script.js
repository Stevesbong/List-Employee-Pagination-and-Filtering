// FOR STUDENT LIST DISPLAY PURPOSE
const students = document.querySelectorAll('.student-item');
const listDiv = document.querySelector('.student-list');
const pageDiv = document.querySelector('.page');

// MAKING SEARCH BOX
function searchBox() {
   
   // FOR SEARCH FORM DISPLAY PURPOSE
   const pageHeader = document.querySelector('.page-header');
   const search = document.createElement('div');
   search.className = "student-search";

   // INPUT
   const input = document.createElement('input');
   input.setAttribute('placeholder', "Search for students...");

   // SUBMIT BUTTON
   const button = document.createElement('button');
   button.textContent = "Search";

   // APPENDING TO SEARCH DIV
   search.appendChild(input);
   search.appendChild(button);
   pageHeader.appendChild(search);
   // FOR SEARCH FORM DISPLAY PURPOSE

   input.addEventListener('keyup', searchingInputValue);
   button.addEventListener('click', searchingInputValue);
}


function searchingInputValue() {
   const name = document.getElementsByTagName('h3');
   const inputValue = document.querySelector('input[placeholder]').value.toLowerCase();
   console.log(name, 'name check')
   console.log(inputValue)
   let searchedList = []

   if(!inputValue) {
      pageOnload(students)
      return;
   }

   if(document.querySelector('.message')) {
      document.querySelector('.message').remove()

   }
   students.forEach( (element, i) => {
      // console.log(name[i].innerText.toLowerCase());
      // console.log(element.childNodes[1].childNodes[3].textContent)
      // console.log(name[i].parentNode.parentNode)

      if(name) {
         if(name[i].innerText.toLowerCase().includes(inputValue)){
            // console.log(name[i].parentNode.parentNode)
            name[i].parentNode.parentNode.style.display = ''
            searchedList.push(element);
         } else {
            name[i].parentNode.parentNode.style.display = 'none'
         }

      }
   });

   console.log(searchedList, 'result');
   pageOnload(searchedList)
}


// STUDENT LISTS TO WEBPAGE
const showPage = (list, page) => {
   // 10 LISTS STUDENTS FROM STUDENT LIST ON PAGE'S NUMBER
   let startIndex = ( page * 10 ) - 10;
   let endIndex = page * 10;

   // IF END INDEX IS BIGGER THAN STUDENT'S LIST LENGTH
   if( endIndex > list.length) {
      endIndex = list.length;
   }
   
   // ADD STUDENTS TO UNORDER LIST
   for (let i = 0; i < list.length; i++) {
      if ( !(i >= startIndex && i < endIndex) ) {
         list[i].style.display = 'none';
      } else {
         list[i].style.display = ''
      }
   }
}


// PAGINATION LINKS
const appendPageLinks = list => {

   // REMOVE PREVIOUS PAGINATION LINKS
   if(document.querySelector('.pagination')) {
      document.querySelector('.pagination').remove();
   }

   // MESSAGE BOX
   const noMatchMessage = document.createElement('li');
   noMatchMessage.className = 'message student-item';
   noMatchMessage.innerText = 'There is no matched student.'

   // IF THERE IS NO STUDENT, SHOW THE MESSAGE
   if( list.length === 0 ) {
      return listDiv.appendChild(noMatchMessage);
   }

   // CREATE PAGINATION DIV
   const pagination = document.createElement('div');
   const ul = document.createElement('ul');
   pagination.className = 'pagination';
   pagination.appendChild(ul);
   
   // GET HOW MANY PAGES NEED
   let pageNumbers = Math.ceil(list.length / 10);
   if (list.length % 10 !== 0) {
      pageNumbers += 1;
   }

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
   pageLinksEvent(list);
}


// PAGINATION LINK EVENT LISTENER
const pageLinksEvent = list => {
   // THIS ATTRIBUTE SELECTOR WILL GET FIRST ELEMENT AND SET CLASSNAME ACTIVE
   document.querySelector('a[href="#"]').className = 'active';

   // GET ALL ANCHOR TAG THAT HAS ATTRIBUTE 'href=#'
   document.querySelectorAll('a[href="#"]').forEach( event => {

      // LOOP THROUGH EACH LINK ELEMENT AND WAIT FOR USER CLICK
      event.addEventListener('click', e => {
         console.log(e.target.textContent, 'page number')
         showPage(list, e.target.textContent);
         toggleActive(e.target);
      })
   })
}


// TOGGLE ACTIVE CLASS WHEN USER CLIKED PAGE NUMBER
const toggleActive= event => {
   // GET CURRENT ACTIVE CLASS AND REMOVE
   const current = document.getElementsByClassName("active")[0];
   current.classList.remove("active");

   // ACTIVE CLASS ON CLICKED ELEMENT
   event.classList.add("active");
}


// EXECUTE IT WHEN THE WEBPAGE LOAD.
// GET ALL STUDENTS AND HIDE IN THE HTML MARKUP
const pageOnload = list => {
   console.log(list, 'pageonload list');
   // FIRST HIDE ALL STUDENTS
   students.forEach( e => {
      e.style.display = 'none';
   });

   // SHOW FIRST PAGE WHEN THE WEBPAGE LOAD
   showPage(list, 1);
   appendPageLinks(list);
}


pageOnload(students);
searchBox();