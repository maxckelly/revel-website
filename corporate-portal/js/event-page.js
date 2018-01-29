function openEventDetails(evt, eventDetails){
  //declare all variables
  var i, tabcontent, tablinks;

// Get all elements with class="tabcontent" and hidethem
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
//
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", " ");
  }
  document.getElementById(eventDetails).style.display = "block";
  evt.currentTarget.className += " active";
}
  document.getElementById("defaultOpen").click();
