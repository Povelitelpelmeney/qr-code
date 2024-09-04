import { Scanner } from "@yudiel/react-qr-scanner";
import { useState } from "react";
const QrCodeScanner = () => {
  const [scanned, setScanned] = useState(null);
  const scanHandler = (result) => {
    setScanned(result[0].rawValue);
  };
  const settings = {
    audio: false,
    finder: false,
  };
  const stylesSettings = {
    container: { width: 350 },
  };
  return (
    <div>
      <p>{scanned}</p>
      <Scanner
        allowMultiple
        onScan={scanHandler}
        components={settings}
        styles={stylesSettings}
      />
    </div>
  );
};

export default QrCodeScanner;
