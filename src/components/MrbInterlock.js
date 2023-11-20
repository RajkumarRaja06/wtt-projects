import "../styles/mbrInterlock.css";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import { useState } from "react";
import KeyboardDoubleArrowDownRoundedIcon from "@mui/icons-material/KeyboardDoubleArrowDownRounded";
import ReactSpeedometer from "react-d3-speedometer";
import { Link } from "react-router-dom";

const MrbInterlock = () => {
  const [one, setOne] = useState(true);
  const [two, setTwo] = useState(false);
  const [three, setThree] = useState(false);

  const eventHandler1 = () => {
    setOne(!one);
    setTwo(false);
    setThree(false);
  };
  const eventHandler2 = () => {
    setOne(false);
    setTwo(!two);
    setThree(false);
  };
  const eventHandler3 = () => {
    setOne(false);
    setTwo(false);
    setThree(!three);
  };
  return (
    <div className="mbrInterlock">
      <h2>MBR-INTERLOCK</h2>
      <div className="mbrInterlock-title">
        <h3>Actual TMP</h3>
        <Link to="/mrbLive">
          <button className="mbrInterlock-mrb-btn"> MRB Live</button>
        </Link>
      </div>
      <div className="mbrInterlock-box1">
        <div className="mbrInterlock-box1-btn">
          <button onClick={eventHandler1}>SMBR 901 & 902</button>
          <button onClick={eventHandler2}>SMBR 903 & 904</button>
          <button onClick={eventHandler3}>SMBR 905 & 906</button>
        </div>
        <div className="mbrInterlock-box1-arrow">
          <p style={{ visibility: one ? "visible" : "hidden" }}>
            <KeyboardDoubleArrowDownRoundedIcon />
          </p>
          <p style={{ visibility: two ? "visible" : "hidden" }}>
            <KeyboardDoubleArrowDownRoundedIcon />
          </p>
          <p style={{ visibility: three ? "visible" : "hidden" }}>
            <KeyboardDoubleArrowDownRoundedIcon />
          </p>
        </div>
      </div>
      <div className="mbrInterlock-box2">
        <div className="mbrInterlock-box2-set1">
          <ReactSpeedometer
            needleHeightRatio={0.7}
            maxSegmentLabels={5}
            segments={500}
            value={400}
            textColor="blank"
          />
          <div>
            <div>Actual PT(bar)</div>
            <p>0.0</p>
          </div>
        </div>
        <div className="mbrInterlock-box2-set2">
          <div className="mbrInterlock-box2-set2-h5">
            <h5>Operating TMP Filtration</h5>
            <h5>MAX TMP Filtration</h5>
            <h5>Operating TMP BW</h5>
            <h5>MAx TMP BW</h5>
          </div>
          <div className="mbrInterlock-box2-set2-p">
            <p>: 0.0</p>
            <p>: 0.0</p>
            <p>: 0.0</p>
            <p>: 0.0</p>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default MrbInterlock;
