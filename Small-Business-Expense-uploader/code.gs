var date = Utilities.formatDate(new Date(), "GMT-5", "yyyyMMdd");

function doGet() {
  var html = HtmlService.createHtmlOutputFromFile('frontend');
  return html.setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}


function uploadFiles(data)
{
 var currentPass = "2020"
 var file1 = data.pic;
 var Category = data.Category;
 var subCategory = data.subCategory;
 var Date = data.Date;
 var Note = data.Note;
 var Amount = data.Amount;
 var Password = data.Password
 
 file1.setName(Date+"~"+Category+"~"+subCategory+"~"+Amount);
 
 var folder = DriveApp.getFolderById('FOLDER-ID-HASH-CODE');
 var createFile = folder.createFile(file1);
  // Google Sheet ID
 var spreadsheet = SpreadsheetApp.openById("SHEET ID HASH CODE");
  // Google Sheet Tab ID
 var sheet = spreadsheet.getSheetByName("Sheet1");
 sheet.appendRow([data.Date, data.Category, data.subCategory, data.Amount,data.Note, createFile.getUrl()]);
 
 return createFile.getUrl();
}

