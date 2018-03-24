var DRCharacter = new drCharacter(null, null, null);
function drCharacter(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
}
//let adjustCharacterCreationPoints = () => {
//    let totalCCP = totalCharacterCreationPointsSpent();
//    document.getElementById(" pointsSpent").innerHTML = totalCCP.toString();
//    if (totalCCP > 100) {
//        alert("You have over spent.  Please adjust your point spend.");
//    }
//}
//let totalCharacterCreationPointsSpent = () => {
//    let ccp1 = parseInt(document.getElementById("combatOffense")["value"]);
//    let ccp2 = parseInt(document.getElementById("combatDefense")["value"]);
//    let ccp3 = parseInt(document.getElementById("luck")["value"]);
//    let ccp4 = parseInt(document.getElementById("gamble")[" value"]);
//    let ccp5 = parseInt(document.getElementById("hack")["value"]);
//    let ccp6 = parseInt(document.getElementById("health")[" value"]);
//    return ccp1 + ccp2 + ccp3 + ccp4 + ccp5 + ccp6;
//}
var nameStorage = function () {
    var firstName = document.getElementById("fName")["value"];
    var lastName = document.getElementById("lName")["value"];
    var age = parseInt(document.getElementById("age")["value"]);
    var DRCharacter = new drCharacter(firstName, lastName, age);
    sessionStorage.setItem("Name", JSON.stringify(DRCharacter));
    window.location.href = "../pageOne/pageTwo.html";
};
//# sourceMappingURL=pageOne.js.map