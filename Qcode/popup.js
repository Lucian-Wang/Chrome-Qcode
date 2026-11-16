document.addEventListener('DOMContentLoaded', function() {
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    const currentTab = tabs[0];
    const url = currentTab.url;
    const urlDisplay = document.getElementById('url-display');
    const qrcodeContainer = document.getElementById('qrcode');
    
    urlDisplay.textContent = url;
    
    qrcodeContainer.innerHTML = '';
    
    new QRCode(qrcodeContainer, {
      text: url,
      width: 256,
      height: 256,
      colorDark: '#000000',
      colorLight: '#ffffff',
      correctLevel: QRCode.CorrectLevel.H
    });
  });
});
