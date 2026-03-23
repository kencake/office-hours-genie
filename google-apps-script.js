function doGet(e) {
  var id = '1KQKXakNLtG2Wh1gA-GQD_Qnhg3a81sLOO2NJINaqUjs';
  var sheet = SpreadsheetApp.openById(id).getActiveSheet();
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(['Timestamp', 'First Name', 'Last Name', 'Email', 'Company', 'AI Maturity']);
  }
  sheet.appendRow([
    e.parameter.timestamp,
    e.parameter.firstName,
    e.parameter.lastName,
    e.parameter.email,
    e.parameter.company,
    e.parameter.aiMaturity
  ]);
  return ContentService.createTextOutput('ok');
}
