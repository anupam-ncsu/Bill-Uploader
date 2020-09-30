var date = Utilities.formatDate(new Date(), "GMT-5", "yyyyMMdd");

function doGet() {
  var html = HtmlService.createHtmlOutputFromFile('index');
  return html.setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}


function uploadFiles(data)
{
 var file = data.myFile;
 var Category = data.Category;
 var subCategory = data.subCategory;
 var Date = data.Date;
 var Note = data.Note;
 var Amount = data.Amount;
 file.setName(Date+"~"+Category+"~"+subCategory+"~"+Amount);
  
  # Fill out the google drive hash code ID
 var folder = DriveApp.getFolderById('------------------------');
 var createFile = folder.createFile(file);
 
 # Fill out the google sheet hash code ID
 var spreadsheet = SpreadsheetApp.openById("----------------------------");
 var sheet = spreadsheet.getSheetByName("Sheet1");
 sheet.appendRow([data.Date, data.Category, data.subCategory, data.Amount,data.Note, createFile.getUrl()]);
 
 return createFile.getUrl();
}

