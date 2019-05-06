window.onload = function (){
    var form = document.getElementById("form");
 
    var name = document.getElementById("name");
 
    var type = document.getElementById("type");
 
    var legs = document.getElementById("legs");
 
    var abilitiyArray = document.getElementsByClassName ("abil");
 
    var email = document.getElementById("email");
 
    var pass = document.getElementById("pass");
 
    var des = document.getElementById ("des");
 
 }
 
 var submit = document.getElementById ("submitbtn");
 
 var pet = {
    petName: "",
    petType: "",
    petlegs: "",
    petAbility: "",
    petEmail: "",
    petPassword: "",
    petDescription: "",
 }
 
 submit.addEventListener("click",function(){
    pet.name = petName.value;
    pet.type = petType.value;
    pet.email = petEmail.value;
    pet.password = petDescription.value;
 
    for(let i = 0; i < abilitiyArray.length; i ++ ){
        if(abilityArray[i].checked == true){
            pet.abilities = abilitiyArray[i].value;
        }
    }
 
 for(let i = 0; i < legsArray.length; i ++){
    if(legsArray[i].checked === true){
        pet.legs = legsArray[i].value;
    }
 }
 console.log(pet);
 
 
 }
 )
 
 
 
 
 