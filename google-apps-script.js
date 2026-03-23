function doPost(e) {
  var id = '1KQKXakNLtG2Wh1gA-GQD_Qnhg3a81sLOO2NJINaqUjs';
  var sheet = SpreadsheetApp.openById(id).getActiveSheet();
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(['Timestamp', 'First Name', 'Last Name', 'Email', 'Company', 'AI Maturity']);
  }
  var data = JSON.parse(e.postData.contents);
  sheet.appendRow([data.timestamp, data.firstName, data.lastName, data.email, data.company, data.aiMaturity]);
  return ContentService.createTextOutput('ok');
}
