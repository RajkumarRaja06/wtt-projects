import "../styles/mrb.css";
import * as React from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { Link } from "react-router-dom";

const Mbr = () => {
  const [state, setState] = React.useState({
    one: true,
    two: true,
    three: true,
    fore: true,
    five: true,
    six: true,
    seven: true,
    eight: true,
    nine: true,
    ten: true,
    eleven: true,
    twelve: true,
    thirteen: true,
  });

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };
  return (
    <div className="mrb">
      <h3>MRB VALVE & LT INTERLOCKS</h3>
      <Link to="/mrbLive">
        <button className="mrb-title-btn"> MRB Live</button>
      </Link>
      <div className="mrb-box1">
        <div className="box">
          <div>
            <p>SMBR 901 AIR Valve</p>
            <FormControlLabel
              className="mrb-btn"
              control={<Switch checked={state.one} onChange={handleChange} name="one" />}
              label="CLOSE"
            />
          </div>
          <div>
            <p>SMBR 901 Dip Valve</p>
            <FormControlLabel
              className="mrb-btn"
              control={<Switch checked={state.two} onChange={handleChange} name="two" />}
              label="CLOSE"
            />
          </div>
        </div>
        <div className="box">
          <div>
            <p>SMBR 902 AIR Valve</p>
            <FormControlLabel
              className="mrb-btn"
              control={<Switch checked={state.three} onChange={handleChange} name="three" />}
              label="CLOSE"
            />
          </div>
          <div>
            <p>SMBR 902 Dip Valve</p>
            <FormControlLabel
              className="mrb-btn"
              control={<Switch checked={state.four} onChange={handleChange} name="four" />}
              label="CLOSE"
            />
          </div>
        </div>
        <div className="box">
          <div>
            <p>SMBR 903 AIR Valve</p>
            <FormControlLabel
              className="mrb-btn"
              control={<Switch checked={state.five} onChange={handleChange} name="five" />}
              label="CLOSE"
            />
          </div>
          <div>
            <p>SMBR 903 Dip Valve</p>
            <FormControlLabel
              className="mrb-btn"
              control={<Switch checked={state.six} onChange={handleChange} name="six" />}
              label="CLOSE"
            />
          </div>
        </div>
        <div className="box">
          <div>
            <p>SMBR 901 P/B Valve</p>
            <FormControlLabel
              className="mrb-btn"
              control={<Switch checked={state.seven} onChange={handleChange} name="seven" />}
              label="CLOSE"
            />
          </div>
          <div>
            <p>SMBR 901 BT Valve</p>
            <FormControlLabel
              className="mrb-btn"
              control={<Switch checked={state.eight} onChange={handleChange} name="eight" />}
              label="CLOSE"
            />
          </div>
        </div>
        <div className="box">
          <div>
            <p>SMBR 902 P/B Valve</p>
            <FormControlLabel
              className="mrb-btn"
              control={<Switch checked={state.ten} onChange={handleChange} name="ten" />}
              label="CLOSE"
            />
          </div>
          <div>
            <p>SMBR 902 BT Valve</p>
            <FormControlLabel
              className="mrb-btn"
              control={<Switch checked={state.eleven} onChange={handleChange} name="eleven" />}
              label="CLOSE"
            />
          </div>
        </div>
        <div className="box">
          <div>
            <p>SMBR 903 P/B Valve</p>
            <FormControlLabel
              className="mrb-btn"
              control={<Switch checked={state.twelve} onChange={handleChange} name="twelve" />}
              label="CLOSE"
            />
          </div>
          <div>
            <p>SMBR 903 BT Valve</p>
            <FormControlLabel
              className="mrb-btn"
              control={<Switch checked={state.thirteen} onChange={handleChange} name="thirteen" />}
              label="CLOSE"
            />
          </div>
        </div>
      </div>
      <div className="mrb-box2">
        <div className="smbr-box">
          <p className="smbr-box-title">SMBR 901 && 902</p>
          <div className="smbr-valve">
            <div className="smbr-set">
              <h5>actual lt</h5>
              <h5>low set point</h5>
              <h5>op set point</h5>
              <h5>hight set point</h5>
            </div>
            <div className="smbr-set-total">
              <p>0.0</p>
              <p>0.0</p>
              <p>0.0</p>
              <p>0.0</p>
            </div>
          </div>
        </div>
        <div className="smbr-box">
          <p className="smbr-box-title">SMBR 903 && 904</p>
          <div className="smbr-valve">
            <div className="smbr-set">
              <h5>actual lt</h5>
              <h5>low set point</h5>
              <h5>op set point</h5>
              <h5>hight set point</h5>
            </div>
            <div className="smbr-set-total">
              <p>0.0</p>
              <p>0.0</p>
              <p>0.0</p>
              <p>0.0</p>
            </div>
          </div>
        </div>
        <div className="smbr-box">
          <p className="smbr-box-title">SMBR 905 && 906</p>
          <div className="smbr-valve">
            <div className="smbr-set">
              <h5>actual lt</h5>
              <h5>low set point</h5>
              <h5>op set point</h5>
              <h5>hight set point</h5>
            </div>
            <div className="smbr-set-total">
              <p>0.0</p>
              <p>0.0</p>
              <p>0.0</p>
              <p>0.0</p>
            </div>
          </div>
        </div>
      </div>
      <h4>Aeration actual time</h4>
      <div className="mrb-box2">
        <div className="smbr-box">
          <p className="smbr-box-title">SMBR 901 && 902</p>
          <div className="smbr-valve">
            <div className="smbr-set">
              <h5>Air Time(sec)</h5>
              <h5>Dip Time(sec)</h5>
            </div>
            <div className="smbr-set-total">
              <p>42.0</p>
              <p>0.0</p>
            </div>
          </div>
        </div>
        <div className="smbr-box">
          <p className="smbr-box-title">SMBR 903 && 904</p>
          <div className="smbr-valve">
            <div className="smbr-set">
              <h5>Air Time(sec)</h5>
              <h5>Dip Time(sec)</h5>
            </div>
            <div className="smbr-set-total">
              <p>42.0</p>
              <p>0.0</p>
            </div>
          </div>
        </div>
        <div className="smbr-box">
          <p className="smbr-box-title">SMBR 905 && 906</p>
          <div className="smbr-valve">
            <div className="smbr-set">
              <h5>Air Time(sec)</h5>
              <h5>Dip Time(sec)</h5>
            </div>
            <div className="smbr-set-total">
              <p>42.0</p>
              <p>0.0</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mrb-box3">
        <div>
          <div className="box">
            <h4>P/B valve(s1-s2-s3)</h4>
            <div>
              <p>S1 P/B</p>
              <FormControlLabel
                className="mrb-btn"
                control={<Switch checked={state.one} onChange={handleChange} name="one" />}
                label="CLOSE"
              />
            </div>
            <div>
              <p>S2 P/B</p>
              <FormControlLabel
                className="mrb-btn"
                control={<Switch checked={state.two} onChange={handleChange} name="two" />}
                label="CLOSE"
              />
            </div>
            <div>
              <p>S3 P/B</p>
              <FormControlLabel
                className="mrb-btn"
                control={<Switch checked={state.two} onChange={handleChange} name="two" />}
                label="CLOSE"
              />
            </div>
          </div>
        </div>
        <div>
          <div className="box">
            <h4>BT valve(s1-s2-s3)</h4>
            <div>
              <p>S1 P/B</p>
              <FormControlLabel
                className="mrb-btn"
                control={<Switch checked={state.one} onChange={handleChange} name="one" />}
                label="CLOSE"
              />
            </div>
            <div>
              <p>S2 P/B</p>
              <FormControlLabel
                className="mrb-btn"
                control={<Switch checked={state.two} onChange={handleChange} name="two" />}
                label="CLOSE"
              />
            </div>
            <div>
              <p>S3 P/B</p>
              <FormControlLabel
                className="mrb-btn"
                control={<Switch checked={state.two} onChange={handleChange} name="two" />}
                label="CLOSE"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mrb-box4">
        <div className="mrb-table1">
          <div className="box4">
            <h4>Lp1</h4>
            <div className="box-on-off">
              <p>OFF</p>
              <div>
                <FormControlLabel
                  // className="mrb-btn"
                  control={<Switch checked={state.one} onChange={handleChange} name="one" />}
                  label="on"
                />
                <FormControlLabel
                  // className="mrb-btn"
                  control={<Switch checked={state.one} onChange={handleChange} name="one" />}
                  label="frd"
                />
                <FormControlLabel
                  // className="mrb-btn"
                  control={<Switch checked={state.one} onChange={handleChange} name="one" />}
                  label="rev"
                />
              </div>
            </div>
          </div>
          <div className="box4">
            <h4>Lp2</h4>
            <div className="box-on-off">
              <p>OFF</p>
              <div>
                <FormControlLabel
                  // className="mrb-btn"
                  control={<Switch checked={state.one} onChange={handleChange} name="one" />}
                  label="on"
                />
                <FormControlLabel
                  // className="mrb-btn"
                  control={<Switch checked={state.one} onChange={handleChange} name="one" />}
                  label="frd"
                />
                <FormControlLabel
                  // className="mrb-btn"
                  control={<Switch checked={state.one} onChange={handleChange} name="one" />}
                  label="rev"
                />
              </div>
            </div>
          </div>
          <div className="box4">
            <h4>Lp3</h4>
            <div className="box-on-off">
              <p>OFF</p>
              <div>
                <FormControlLabel
                  // className="mrb-btn"
                  control={<Switch checked={state.one} onChange={handleChange} name="one" />}
                  label="on"
                />
                <FormControlLabel
                  // className="mrb-btn"
                  control={<Switch checked={state.one} onChange={handleChange} name="one" />}
                  label="frd"
                />
                <FormControlLabel
                  // className="mrb-btn"
                  control={<Switch checked={state.one} onChange={handleChange} name="one" />}
                  label="rev"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mrb-table2">
          <h3>Manual freq set(Hz) : </h3>
          <p>0.0</p>
        </div>
      </div>
    </div>
  );
};

export default Mbr;
