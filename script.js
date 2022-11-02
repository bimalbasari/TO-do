// Create a function when clicking on the "Add" button
function adNote() {
  //  Varible for insert new li tag
  var li = document.createElement("li");
  // Variable for taken input from user
  var myTodo = document.getElementById("myInput").value;
  var val = document.createTextNode(myTodo);
  li.appendChild(val);
  if (myTodo === "") {
    alert("Please write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  // add Delete button

  var span = document.createElement("span");
  var del = document.createTextNode("Delete");
  span.className = "close";
  li.appendChild(span);
  span.appendChild(del);
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    };
  }
}

// Click on a delete button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
  };
}
//  Add a "checked" symbol when clicking on a list item
 var list = document.querySelector('ul');
 list.addEventListener('click',
 function a(ev) {
   if (ev.target.tagName === 'LI') {
     ev.target.classList.toggle('checked');
   }
 }, false);

