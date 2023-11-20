import "../styles/mbrLive.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import { useState } from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { to } from "react-router-dom";
import { Link } from "react-router-dom";

const MbrLive = () => {
  const [one, setOne] = useState(true);
  const [two, setTwo] = useState();
  const [three, setThree] = useState();

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

  const [state, setState] = React.useState({
    one: true,
    two: true,
    three: true,
  });

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };
  const marks = [
    {
      value: 0,
      label: "0",
    },
    {
      value: 30,
      label: "30",
    },
    {
      value: 60,
      label: "60",
    },
    {
      value: 75,
      label: "75",
    },
    {
      value: 100,
      label: "100",
    },
  ];

  function valuetext(value) {
    return `${value}`;
  }

  return (
    <div className="mbrLive">
      <h2>MBR Live</h2>
      <div className="mbrLive-box1">
        <div className="mbrLive-box1-set1">
          <div className="mbrLive-box1-btn">
            <button onClick={eventHandler1}>SMBR 901 & 902</button>
            <button onClick={eventHandler2}>SMBR 903 & 904</button>
            <button onClick={eventHandler3}>SMBR 905 & 906</button>
          </div>
          <div className="mbrLive-box1-arrow">
            <p style={{ visibility: one ? "visible" : "hidden" }}>
              <DoubleArrowIcon />
            </p>
            <p style={{ visibility: two ? "visible" : "hidden" }}>
              <DoubleArrowIcon />
            </p>
            <p style={{ visibility: three ? "visible" : "hidden" }}>
              <DoubleArrowIcon />
            </p>
          </div>
          <div className="mbrLive-box1-output">
            <div>
              <div> Aeration Time set (sec)</div>
              <div>Dip tube value time set(sec)</div>
            </div>
            <div>
              <p>0.0</p>
              <p>0.0</p>
            </div>
          </div>
        </div>
        <div className="mbrLive-box1-set1">
          <div className="mbrLive-box1-set1-btn">
            <p>3 TRAIN</p>
            <FormControlLabel
              className="mrb-btn"
              control={<Switch checked={state.one} onChange={handleChange} name="one" />}
              label="On"
            />
          </div>
          <div className="mbrLive-box1-set1-button">
            <button>skid 1&2</button>
            <button>skid 3&4</button>
            <button>skid 5&6</button>
          </div>
        </div>
      </div>
      <h4>LEVEL (Meters)</h4>
      <div className="mbrLive-box2">
        <div className="mbrLive-box2-level">
          <Box sx={{ width: 300 }}>
            <Slider
              aria-label="Always visible"
              defaultValue={60}
              getAriaValueText={valuetext}
              step={10}
              marks={marks}
              valueLabelDisplay="on"
            />
          </Box>
          <p>SMBR 901 & 902</p>
        </div>
        <div className="mbrLive-box2-level">
          <Box sx={{ width: 300 }}>
            <Slider
              aria-label="Always visible"
              defaultValue={97}
              getAriaValueText={valuetext}
              step={10}
              marks={marks}
              valueLabelDisplay="on"
            />
          </Box>
          <p>SMBR 903 & 904</p>
        </div>
        <div className="mbrLive-box2-level">
          <Box sx={{ width: 300 }}>
            <Slider
              aria-label="Always visible"
              defaultValue={29}
              getAriaValueText={valuetext}
              step={10}
              marks={marks}
              valueLabelDisplay="on"
            />
          </Box>
          <p>SMBR 905 & 906</p>
        </div>
      </div>
      <h4>Volume</h4>
      <div className="mbrLive-box3">
        <div>
          <h5>SMBR 901 & 902</h5>
          <p>0.0</p>
        </div>
        <div>
          <h5>SMBR 903 & 904</h5>
          <p>0.0</p>
        </div>
        <div>
          <h5>SMBR 905 & 906</h5>
          <p>0.0</p>
        </div>
        <div>
          <h5>BLOWER LINE PT(bar)</h5>
          <p>0.0</p>
        </div>
      </div>
      <div className="mbrLive-box4">
        <button>MBR FILTRATION</button>
        <button>MBR VALVE</button>
        <button>MBR RC</button>
        <button>MBR MC</button>
        <Link to="/mbrInterlock">
          <button>MBR INTERLOCK</button>
        </Link>
        <button>ALARM</button>
      </div>
    </div>
  );
};

export default MbrLive;
