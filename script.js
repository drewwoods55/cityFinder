const form = document.querySelector("#citipix-form")
const cityType = document.querySelector("#city-type")
const update = document. querySelector("#submit-btn")

update.addEventListener("click", changeBg)

function changeBg(event) {
 
  event.preventDefault();
  
  let cityTypeInput = cityType.value;
  
  let cityTypeLowercase = cityTypeInput.trim().toLowerCase();
  
  let cityTypeSpaceRmv = cityTypeLowercase.split(' ').join('');
  
  document.body.classList = "";
  
  if(cityTypeSpaceRmv === "newyork" || cityTypeSpaceRmv === "nyc" || cityTypeSpaceRmv === "newyorkcity" 
|| cityTypeSpaceRmv === "ny") {
   document.body.classList.add("nyc");
  }
  
  else if(cityTypeSpaceRmv === "sf" || cityTypeSpaceRmv === "sanfrancisco" || cityTypeSpaceRmv === "sanfran") {
   document.body.classList.add("sf");
  }
  
    else if(cityTypeSpaceRmv === "la" || cityTypeSpaceRmv === "losangeles") {
   document.body.classList.add("la");
  }
  
  else if (cityTypeSpaceRmv === "austin" || cityTypeSpaceRmv === "aus") {
   document.body.classList.add("austin");
  }
  
  else if(cityTypeSpaceRmv === "sydney") {
   document.body.classList.add("sydney");
  }
  

else {
  alert("You must be from the suburbs. Try again.")
}
}
