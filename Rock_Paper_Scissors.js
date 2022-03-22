//only works in google spreadsheets//
var knakker = SpreadsheetApp.getActiveSheet().getRange(1000,26).getValue();
function Play() {
console.warn ("Started script")
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];
var cell = sheet.getRange(1, 1);
  var user_input = Browser.inputBox ("Rock, Paper or Scissors?")
  var computer_input = Math.round(Math.random()*2)
  if (user_input == "Paper") {
    user_input = 1
  } else {
  if (user_input == "Scissors") {
    user_input = 2
  } else {
  if (user_input == "Rock"){
    user_input = 0
  } else {
    Browser.msgBox ("::ERROR:: INPUT INVALID ::ERROR::")
  }}}
if (user_input == computer_input) {
  Browser.msgBox ("Computer chose the same.")
  Browser.msgBox ("That's a tie!")
  console.log ('Player tied!')
}
if (user_input == 0) {
  if (computer_input == 1) {
  Browser.msgBox ("Computer chose paper.")
  Browser.msgBox ("Paper covers rock. You lose")
  console.log ('Player lost!')
}
if (computer_input == 2) {
  Browser.msgBox ("Computer chose scissors.")
  Browser.msgBox ("Rock smashes scissors. You win!")
  var knakker = SpreadsheetApp.getActiveSheet().getRange(1000, 26).getValue()
  SpreadsheetApp.getActiveSheet().getRange(1000, 26).setValue(knakker + 1);
  cell.setValue('Won ' + knakker + ' times')
  console.log ('Player won!')
}
}
if (user_input == 1) {
  if (computer_input ==  0) {
    Browser.msgBox ("Computer chose rock.")
    Browser.msgBox ("Paper covers rock. You win!")
    var knakker = SpreadsheetApp.getActiveSheet().getRange(1000, 26).getValue()
    SpreadsheetApp.getActiveSheet().getRange(1000, 26).setValue(knakker + 1);
    cell.setValue('Won ' + knakker + ' times')
    console.log ('Player won!')
  }
  if (computer_input == 2) {
    Browser.msgBox ("Computer chose scissors.")
    Browser.msgBox ("Scissors cuts paper. You lose.")
    console.log ('Player lost!')
  }
}
if (user_input == 2) {
  if (computer_input == 0) {
    Browser.msgBox ("Computer chose rock.")
    Browser.msgBox ("Rock smashes scissors. You lose")
    console.log ('Player lost!')
  }
  if (computer_input == 1) {
    Browser.msgBox ("Computer chose paper.")
    Browser.msgBox ("Scissors cuts paper. You win!")
    var knakker = SpreadsheetApp.getActiveSheet().getRange(1000, 26).getValue()
    SpreadsheetApp.getActiveSheet().getRange(1000, 26).setValue(knakker + 1);
    cell.setValue('Won ' + knakker + ' times')
    console.log ('Player won!')
  }
}
var kaas = Browser.msgBox ("Do you want to play again?", Browser.Buttons.YES_NO)
if (kaas == "yes") {
  console.log ('Player wants to play again!')
  Function.call (Play())
} else {
Browser.msgBox ("Ok see you later!")
}
}

function resetscore () {
  var jaofnee = Browser.msgBox ("Are you sure you want to start over with your score?", Browser.Buttons.YES_NO)
  if (jaofnee == "yes") {
    SpreadsheetApp.getActiveSheet().getRange(1000, 26).setValue(1)
    SpreadsheetApp.getActiveSheet().getRange(1, 1).setValue("Won 0 times")
  }
}


function onOpen () {
var running = true
var count = 0
var knakker  = 0
SpreadsheetApp.getUi().createMenu ("Rock Paper Scissors")
.addSeparator()
.addItem ("Play game", "Play")
.addSeparator()
.addItem ("Reset score", "resetscore")
.addSeparator()
.addToUi();
var kaas = DocumentApp.create ("watermeloen").getBody()
  while (running == true) {
    kaas.insertParagraph(knakker, "Kaas is lekker").setHeading(DocumentApp.ParagraphHeading.TITLE)
    console.log (count)
    knakker = knakker + 1
    count = count + 1
    if (count >= 18) {
      running = false
      console.log ("klaar")
    }
  }
}

function rq () {
  var knakker = SpreadsheetApp.getActiveSheet().getRange(1000, 26).getValue()
  SpreadsheetApp.getActiveSheet().getRange(1, 1).setValue("Won " + knakker + " times")
}
