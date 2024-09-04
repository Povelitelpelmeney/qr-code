import QRCodeSVG from "qrcode.react";
import { useState } from "react";
import s from "../styles/QrCodeGenerator.module.css";
const QrCodeGenerator = () => {
  const [value, setValue] = useState("hello");
  const [result, setResult] = useState("");
  const onCLickHandler = (event) => {
    setResult(value);
    setValue("");
  };
  const onChangeHandler = (event) => {
    setValue(event.target.value);
    setResult("");
  };
  console.log(result);
  return (
    <div>
      {result !== "" && <QRCodeSVG value={result} />}
      <input
        type="text"
        value={value}
        onChange={onChangeHandler}
        className={s.input}
      />
      <button type="button" onClick={onCLickHandler}>
        Gen
      </button>
    </div>
  );
};

export default QrCodeGenerator;
