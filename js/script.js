/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


/*** 
   Add your global variables that store the DOM elements you will 
   need to reference and/or manipulate. 
   
   But be mindful of which variables should be global and which 
   should be locally scoped to one of the two main functions you're 
   going to create. A good general rule of thumb is if the variable 
   will only be used inside of a function, then it can be locally 
   scoped to that function.
***/
const students = document.querySelectorAll('.student-item');
// console.log(students);
const pageDiv = document.querySelector('.page');




/*** 
   Create the `showPage` function to hide all of the items in the 
   list except for the ten you want to show.

   Pro Tips: 
     - Keep in mind that with a list of 54 students, the last page 
       will only display four.
     - Remember that the first student has an index of 0.
     - Remember that a function `parameter` goes in the parens when 
       you initially define the function, and it acts as a variable 
       or a placeholder to represent the actual function `argument` 
       that will be passed into the parens later when you call or 
       "invoke" the function 
***/

const showPage = (list, page) => {
   // console.log(typeof list);
   // IF JAVASCRIPT WORKS, THAN HIDE HTML MARKUP
   // list.forEach(element => {
   //    element.style.display = 'none'
   // });
   let startIndex = ( page * 10 ) - 10;
   let endIndex = page * 10;
   console.log(startIndex);
   console.log(endIndex);
   
   let pageCount = 1;
   // while( pageCount == page ) {

   // }

   for( let i = startIndex; i < endIndex; i++) {
      console.log(list[i])
   }
}

showPage(students, 1)



/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/

const appendPageLinks = list => {
   let pageNumbers = Math.floor(list.length / 10);
   if (list.length % 10 !== 0) {
      pageNumbers += 1;
   }

   // CREATE PAGINATION DIV
   const pagination = document.createElement('div');
   const ul = document.createElement('ul');
   
   pagination.className = 'pagination';
   pagination.appendChild(ul);
   for( let i = 1; i < pageNumbers; i++) {
      const li = document.createElement('li');
      const a = document.createElement('a');
      ul.appendChild(li);
      li.appendChild(a);
      a.href = "#";
      a.textContent = i;
   }
   pageDiv.appendChild(pagination);

   // console.log(pagination);
   // console.log(pageDiv);

   console.log(pageNumbers)
   // console.log(list.length)
}

appendPageLinks(students)

// Remember to delete the comments that came with this file, and replace them with your own code comments.



// function changeDataAndToggleActive(event, value) {
//    // GET CURRENT ACTIVE CLASS AND REMOVE
//    let current = document.getElementsByClassName("active")[0];
//    current.classList.remove("active");

//    // ADD ACTIVE CLASS TO CLICKED ELEMENT
//    event.classList.add("active");

//    // CHANGE CHART DATA SET WHEN CLICKED
//    trafficChart.data.datasets[0].data = value;
//    trafficChart.update()
// }