function doGet() {
  return HtmlService.createHtmlOutputFromFile('Index')
    .setTitle('Baybayin Master Portal')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
    .addMetaTag('viewport', 'width=device-width, initial-scale=1');
}
