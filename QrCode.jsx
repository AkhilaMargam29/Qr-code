import React, { useState } from 'react';
 
function QrCode() {
  const [inputText, setInputText] = useState('');
  const [qrCodeUrl, setQRCodeUrl] = useState('');

  const handleChange = (event) => {
    setInputText(event.target.value);
    generateQRCode(event.target.value);
  };
  const generateQRCode = (text) => {
    const apiUrl = `https:api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(text)}&size=200x200`;
    setQRCodeUrl(apiUrl);
  };
  return (
    <div>
      <input type="text" value={inputText} onChange={handleChange}/>
      <br />
      {qrCodeUrl && <img src={qrCodeUrl} alt="QR Code" />}
    </div>
  );
}

export default QrCode;