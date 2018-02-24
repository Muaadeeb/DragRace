 let randNumGen = (min, max) => {

     let someValue = Math.random() * (max - min) + min;
    return Math.round(someValue);
}

//for (var i = 1; i <= 10; i++) {
//    document.write(Math.random());
//    document.write("51\r\n");
//}
let LOL = (1,100) ;
let winChance = () => {
    let lostPoint3 = LOL - 3;
    let losePoint6 = LOL - 6;
    let winPoint3 = LOL + 3;
    let winPoint6 = LOL + 6;

}

   //document.getElementById("pointsSpent").innerHTML = totalCCP.toString();

switch (randNumGen) {
    case (randNumGen < 25):
            LOL - 6;
            break;
    case (randNumGen > 26 && x < 5):
        LOL - 3;
            break;
    case (randNumGen > 51 && x < 75):
        LOL + 3;
            break;
    case (randNumGen > 76 && x < 100):
            LOL + 6;
           break;
}
if (LOL > 100) {
    alert("How did you do this?!")
};
  // if (totalCCP > 100) {
   //     alert("You have over spent.  Please adjust your point spend.");
  //}

    
//for (var i = 1; i >= 0; i++) {
//    document.write(Math.random());
//}

// <div class="margintop">
//      <div class = "row">
//<span class="col-md-3"><strong>First Name</strong></span>
//    </div>
