$(document).ready(function(){

  var container = document.getElementById('recommendedbox');
  var docFrag = document.createDocumentFragment();
  
  fetch('http://localhost:3000/properties?isHighlight=true')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    myJson.forEach(function(element) {
      var img = document.createElement('img');
      var theDiv = document.createElement('div');
      $(theDiv).addClass("recommendedproperty");
      $(theDiv).prepend(img);
      img.src = element.images[0];
      docFrag.appendChild(theDiv);
  });

  container.appendChild(docFrag);
  });

});
