import "../styles/alarm.css";
import { BiRadioCircle } from "react-icons/bi";

const Alarm = () => {
  return (
    <div className="alarm">
      <div className="alarm-main">
        <h4>TPM ALARM</h4>
        <ul>
          <li>
            <span>
              <BiRadioCircle />
            </span>
            high tpm :[filtration]
          </li>
          <li>
            <div>
              <span>
                <BiRadioCircle />
              </span>
              max tmp:[filtration]
            </div>
            <button>active safe mode</button>
          </li>
          <li>
            <span>
              <BiRadioCircle />
            </span>
            high tpm :[backwash]
          </li>
          <li>
            <div>
              <span>
                <BiRadioCircle />
              </span>
              max tmp:[backwash]
            </div>
            <button>active safe mode</button>
          </li>
        </ul>
      </div>
      <div className="alarm-main">
        <h4>TPM ALARM</h4>
        <ul>
          <li>
            <span>
              <BiRadioCircle />
            </span>
            high tpm :[filtration]
          </li>
          <li>
            <div>
              <span>
                <BiRadioCircle />
              </span>
              max tmp:[filtration]
            </div>
            <button>active safe mode</button>
          </li>
          <li>
            <span>
              <BiRadioCircle />
            </span>
            high tpm :[backwash]
          </li>
          <li>
            <div>
              <span>
                <BiRadioCircle />
              </span>
              max tmp:[backwash]
            </div>
            <button>active safe mode</button>
          </li>
        </ul>
      </div>
      <div className="alarm-main">
        <h4>TPM ALARM</h4>
        <ul>
          <li>
            <span>
              <BiRadioCircle />
            </span>
            high tpm :[filtration]
          </li>
          <li>
            <div>
              <span>
                <BiRadioCircle />
              </span>
              max tmp:[filtration]
            </div>
            <button>active safe mode</button>
          </li>
          <li>
            <span>
              <BiRadioCircle />
            </span>
            high tpm :[backwash]
          </li>
          <li>
            <div>
              <span>
                <BiRadioCircle />
              </span>
              max tmp:[backwash]
            </div>
            <button>active safe mode</button>
          </li>
        </ul>
        <button type="button" className="tmp-btn">
          TMP RST
        </button>
      </div>
      <div className="alarm-main">
        <h4>TANK LEVEL ALARM</h4>
        <ul>
          <li>
            <span>
              <BiRadioCircle />
            </span>
            Tank:[901]
            <button>active safe mode</button>
          </li>
          <li>
            <span>
              <BiRadioCircle />
            </span>
            Tank:[902]
            <button>active safe mode</button>
          </li>
          <li>
            <span>
              <BiRadioCircle />
            </span>
            Tank:[903]
            <button>active safe mode</button>
          </li>
        </ul>
        <button type="button" className="tmp-btn">
          LT RST
        </button>
      </div>
      <div className="alarm-main">
        <h4>PUMP Alarm</h4>
        <ul>
          <li>
            <span>
              <BiRadioCircle />
            </span>
            MBR Blower1
          </li>
          <li>
            <span>
              <BiRadioCircle />
            </span>
            MBR Blower2
          </li>
        </ul>
      </div>
      <div className="alarm-main">
        <h4>BIO ALARM</h4>
      </div>
    </div>
  );
};

export default Alarm;
