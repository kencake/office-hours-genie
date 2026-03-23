// GOOGLE APPS SCRIPT — Colle ce code sur script.google.com
// 1. Va sur script.google.com → Nouveau projet
// 2. Colle ce code
// 3. Clique sur "Déployer" → "Nouveau déploiement" → Type: Web App
//    - Execute as: Me
//    - Who has access: Anyone
// 4. Copie l'URL générée et remplace REPLACE_WITH_YOUR_APPS_SCRIPT_URL dans index.html

function doPost(e) {
  const sheet = SpreadsheetApp.openById('REPLACE_WITH_YOUR_SPREADSHEET_ID').getActiveSheet();

  // Add headers if sheet is empty
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(['Timestamp', 'First Name', 'Last Name', 'Email', 'Company', 'AI Maturity']);
  }

  const data = JSON.parse(e.postData.contents);

  sheet.appendRow([
    data.timestamp,
    data.firstName,
    data.lastName,
    data.email,
    data.company,
    data.aiMaturity
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ status: 'success' }))
    .setMimeType(ContentService.MimeType.JSON);
}
