"use strict";





const toyCategoryDropdown = document.getElementById("toyCategoryDropdown");
const toyList = document.getElementById("toyList");
const toyManufacturer = document.getElementById("toyManufacturer");
const toyAge = document.getElementById("toyAge");
const toyDetailRow = document.getElementById("toyDetailRow");
const toyName = document.getElementById("toyName");





window.onload = () => {
  console.log("onload");
  toyCategoryDropdown.onchange = onToyCategoryDropdownChange;
  toyList.onchange = onToyListChange;
};




function onToyCategoryDropdownChange() {
  console.log("onToyCategoryDropdownChange");

  //figure out what value was selected (which category)

  let selectedCategory = toyCategoryDropdown.value;
  console.log(selectedCategory);

  if (selectedCategory == null) {
    alert("No toy was selected");
    return;
  }

  //clear out toyList from previous selection
  toyList.options.length = 0;

  //loop through correct array and add value to the toylist one at a time
  let toysInCategory = getToysForCategoryCode(selectedCategory);
  console.log(toysInCategory);

  toysInCategory.forEach(addToyToToyList)

 
}

function addToyToToyList(toy) {
  let newOption = document.createElement("option");
  newOption.value = toy.toyName;
  newOption.innerHTML = toy.toyName;
  toyList.appendChild(newOption);
}

function getToysForCategoryCode(categoryCode) {
  if (categoryCode == "action_figures") {
    return toys.Toys["Action Figures"];
  } else if (categoryCode == "educational_Toys") {
    return toys.Toys["Educational Toys"];
  } else if (categoryCode == "outdoor_Toys") {
    return toys.Toys["Outdoor Toys"];
  } else {
    console.log("unrecognized category");
  }
  return [];
}

function getToyByname(toyName) {
  let selectedCategory = toyCategoryDropdown.value;
  let toys = getToysForCategoryCode(selectedCategory);

  for (let toy of toys) {
    if (toy.name == toyName) return toy;
  }
}

function onToyListChange() {
  console.log("onToyListChange");

  let selectedToyName = toyList.value;
  console.log(selectedToy);

  //look up selected toy

  let selectedToy = getToyByname(selectedToyName);

  //show detail row

showDetailRow()

  //set detail row elemetns to represent this toy
  toyName.innerHTML = selectedToy.name;
  toyManufacturer.innerHTML = selectedToy.manufacturer;
  toyAge.innerHTML = selected.age_range;
}

function showDetailRow() {
  toyDetailRow.style.display = "block";

}

function hideDetailRow(){
    toyDetailRow.style.display = "none"
    toyName.innerHTML = ""
    toyManufacturer.innerHTML = ""
    toyAge.innerHTML = ""
  }
