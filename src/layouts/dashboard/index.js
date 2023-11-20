import ReactSpeedometer from "react-d3-speedometer";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
// and just use it

// @mui material components
import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

import "../../styles/home.css";
import * as React from "react";
import { Link } from "react-router-dom";

import Stack from "@mui/material/Stack";
import Slider from "@mui/material/Slider";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormHelperText from "@mui/material/FormHelperText";
import Switch from "@mui/material/Switch";
import ButtonGroup from "@mui/material/ButtonGroup";

function valuetext(value) {
  return `${value}`;
}

const marks = [
  {
    value: 0,
    label: "0.5",
  },
  {
    value: 20,
    label: "2.5",
  },
  {
    value: 37,
    label: "3.5",
  },
  {
    value: 100,
    label: "6.5",
  },
];

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";
import ReportsLineChart from "examples/Charts/LineCharts/ReportsLineChart";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";

// Data
import reportsBarChartData from "layouts/dashboard/data/reportsBarChartData";
import reportsLineChartData from "layouts/dashboard/data/reportsLineChartData";

// Dashboard components
import Projects from "layouts/dashboard/components/Projects";
import OrdersOverview from "layouts/dashboard/components/OrdersOverview";

function Dashboard() {
  const { sales, tasks } = reportsLineChartData;

  const [state, setState] = React.useState({
    gilad: true,
    jason: false,
    antoine: true,
  });

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  return (
    <DashboardLayout>
      <MDBox py={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={3}>
            {/* <h1>MRB LIVE</h1> */}
          </Grid>
        </Grid>
        <MDBox mt={4.5}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <Card className="home-cart">
                  <ReactSpeedometer
                    maxValue={100}
                    value={20}
                    needleColor="red"
                    startColor="green"
                    segments={10}
                    endColor="blue"
                    textColor="black"
                    className="speedometer"
                  />
                  <p>SMBR 901 & 902</p>
                </Card>
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <Card className="home-cart">
                  <ReactSpeedometer
                    maxValue={100}
                    value={20}
                    needleColor="red"
                    startColor="green"
                    segments={10}
                    endColor="blue"
                    textColor="black"
                    className="speedometer"
                  />
                  <p>SMBR 903 & 904</p>
                </Card>
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <Card className="home-cart">
                <ReactSpeedometer
                  maxValue={100}
                  value={20}
                  needleColor="red"
                  startColor="green"
                  segments={10}
                  endColor="blue"
                  textColor="black"
                  className="speedometer"
                />
                <p>SMBR 905 & 906</p>
              </Card>
            </Grid>
          </Grid>
        </MDBox>
        <MDBox>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={8}>
              <h2>Level Meter</h2>
              <div className="level-meter">
                <div className="level-meter-1">
                  <Stack className="slider-row" spacing={1} direction="row">
                    <Slider
                      getAriaLabel={() => "Temperature"}
                      orientation="vertical"
                      getAriaValueText={valuetext}
                      defaultValue={[0.5, 6.5]}
                      valueLabelDisplay="auto"
                      marks={marks}
                    />
                  </Stack>
                  <p>SMBR 901 & 902</p>
                </div>
                <div className="level-meter-1">
                  <Stack className="slider-row" spacing={1} direction="row">
                    <Slider
                      getAriaLabel={() => "Temperature"}
                      orientation="vertical"
                      getAriaValueText={valuetext}
                      defaultValue={[6.5, 0.5]}
                      valueLabelDisplay="auto"
                      marks={marks}
                    />
                  </Stack>
                  <p>SMBR 903 & 904</p>
                </div>
                <div className="level-meter-1">
                  <Stack className="slider-row" spacing={1} direction="row">
                    <Slider
                      getAriaLabel={() => "Temperature"}
                      orientation="vertical"
                      getAriaValueText={valuetext}
                      defaultValue={[0.5, 6.5]}
                      valueLabelDisplay="auto"
                      marks={marks}
                    />
                  </Stack>
                  <p>SMBR 905 & 906</p>
                </div>
              </div>
            </Grid>

            <Grid item xs={12} md={6} lg={4}>
              <div className="home-btn">
                <FormGroup>
                  <FormControlLabel
                    control={<Switch checked={state.gilad} onChange={handleChange} name="gilad" />}
                    label="OFF"
                  />
                </FormGroup>
                <div className="stack-btn">
                  <button className="stack-btn1">ACK</button>
                  <button className="stack-btn2">RESET</button>
                </div>
                <div className="stack-btn-time1">
                  <h5>REACTION TIME SET</h5>
                  <div>0.00</div>
                </div>
                <div className="stack-btn-time1">
                  <h5>REACTION TIME SET</h5>
                  <div>0.00</div>
                </div>
                <div className="stack-btn-time1">
                  <h5>REACTION TIME SET</h5>
                  <div>0.00</div>
                </div>
              </div>
            </Grid>
          </Grid>
        </MDBox>
      </MDBox>
      <div className="footerBtn">
        <button>MBR-FILTRATION</button>
        <button>MBC-RC</button>
        <button>MBC-MC</button>
        <Link to="/alarm">
          <button>ALARM</button>
        </Link>

        <Link to="/mbrInterlock">
          <button>MBR INTERLOCK</button>
        </Link>
        <button>MBC-VALVE</button>
      </div>
    </DashboardLayout>
  );
}

export default Dashboard;
