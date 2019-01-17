var createPolitician = function(name, partyColor) {

  var politician = {};

  politician.name = name;

  politician.electionResults = null;

  politician.totalVotes = 0;

  politician.partyColor = partyColor;

  politician.tallyUpTotalVotes = function(){

    this.totalVotes = 0;

    for (var i = 0; i < this.electionResults.length; i++)
    {
        this.totalVotes = this.totalVotes + this.electionResults[i];
    }
  }

  return politician;

};


var liam = createPolitician("Liam Doesitall",[245, 141, 136]);

var aidan = createPolitician("Aidan Rocks", [132, 17, 11]);

liam.electionResults = [4, 2, 4, 4, 22, 3, 3, 1, 2, 15, 8, 1, 3, 9, 0, 6, 1, 5, 5, 1, 3, 7, 8, 1, 3, 3, 1, 3, 2, 2, 6, 2, 14, 0, 1, 6, 7, 3, 7, 3, 6, 1, 3, 17, 3, 1, 2, 11, 2, 3, 1];

aidan.electionResults = [5, 1, 7, 2, 33, 6, 4, 2, 1, 14, 8, 3, 1, 11, 11, 0, 5, 3, 3, 3, 7, 4, 8, 9, 3, 7, 2, 2, 4, 2, 8, 3, 15, 15, 2, 12, 0, 4, 13, 1, 3, 2, 8, 21, 3, 2, 11, 1, 3, 7, 2];

liam.electionResults[9] = 1;
aidan.electionResults[9] = 28;

liam.electionResults[4] = 17;
aidan.electionResults[4] = 38;

liam.electionResults[43] = 11;
aidan.electionResults[43] = 27;

/*Determine the results/winner for each state*/
var setStateResults = function(state){

    theStates[state].winner = null;

    if (aidan.electionResults[state] > liam.electionResults[state]) {

        theStates[state].winner = aidan; //set winner to the candidate object, not the candidate's name this time

    } else if (aidan.electionResults[state] < liam.electionResults[state]) {

        theStates[state].winner = liam;
    }


/*Set the color for the winner for each state*/
var stateWinner = theStates[state].winner;

if (stateWinner !== null)
{
    theStates[state].rgbColor = stateWinner.partyColor;
} else {
    theStates[state].rgbColor = [11,32,57];
}

/*This section populates the state & abbreviation at the bottom*/

var stateInfoTable = document.getElementById('stateResults');
var header = stateInfoTable.children[0];
var body = stateInfoTable.children[1];
var stateName = header.children[0].children[0];
var abbrev = header.children[0].children[1];
 //table.body.row.td/td
//table.children[1].children[0].children[0];
var candidate1Name = body.children[0].children[0];
var candidate2Name = body.children[1].children[0];
var candidate1Results = body.children[0].children[1];
var candidate2Results = body.children[1].children[1];
var winnersName = body.children[2].children[1];

  stateName.innerText = theStates[state].nameFull;
  abbrev.innerText = "("+ theStates[state].nameAbbrev +")";

  candidate1Name.innerText = liam.name;
  candidate2Name.innerText = aidan.name;

  candidate1Results.innerText = liam.electionResults[state];
  candidate2Results.innerText = aidan.electionResults[state];

  if (liam.electionResults[state] > aidan.electionResults[state])
    {
      winnersName.innerText = liam.name;
    }
  else if (liam.electionResults[state] < aidan.electionResults[state])
    {
      winnersName.innerText = aidan.name;
    }
  else
   {
     winnersName.innerText = "Tie";
   }
  };

  liam.tallyUpTotalVotes();
  aidan.tallyUpTotalVotes();

/*Declare the winner*/

  var winner = "???";

  if (liam.totalVotes > aidan.totalVotes){
    winner = liam.name;
  }
  else if (liam.totalVotes < aidan.totalVotes){
    winner = aidan.name;
  }
      else{
    winner = "DRAW";
  }


   console.log("And the winner is..." + winner +"!");

  /*This section populates the table at top of map:*/
  var countryInfoTable = document.getElementById('countryResults');
  var row = countryInfoTable.children[0].children[0];

 //table.body.row.td/th
row.children[0].innerText = aidan.name;
row.children[1].innerText = aidan.totalVotes;
row.children[2].innerText = liam.name;
row.children[3].innerText = liam.totalVotes;
row.children[5].innerText = winner;




console.log(liam.name);

//console log total votes
console.log(liam.totalVotes);
console.log(aidan.totalVotes);

console.log("Aidan's color is: " + aidan.partyColor);
console.log("Liam's color is: " + liam.partyColor);
