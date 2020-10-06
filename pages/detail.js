import React from 'react'
import Button from "@material-ui/core/Button";
import {
  createMuiTheme,
  ThemeProvider,
  makeStyles,
  withStyles,
  styled,
} from "@material-ui/core/styles";
import Buybutton from '../components/BuyButton'
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import PropTypes from "prop-types";
import Link from "next/link";

const ImgTabs = withStyles({
  root: {
    borderBottom: "1px solid #339A65",
  },
  indicator: {
    backgroundColor: "#339A65",
  },
})(Tabs);
const ImgTab = withStyles((theme) => ({
  root: {
    textTransform: "none",
    minWidth: 72,
    fontWeight: theme.typography.fontWeightRegular,
    // marginRight: theme.spacing(4),
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:hover": {
      color: "##339A65",
      opacity: 1,
    },
    "&$selected": {
      color: "#339A65",
      fontWeight: theme.typography.fontWeightMedium,
    },
    "&:focus": {
      color: "#339A65",
    },
  },
  selected: {},
}))((props) => <Tab disableRipple {...props} />);

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={2}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function detail() {

   const useStyles = makeStyles((theme) => ({
     contactbutton: {
       background: "#fff",
       color: "#339a65",
       borderRadius: "6px",
       border: "2px solid #339a65",
       fontFamily: "Prompt",
       fontSize: 20,
       padding: "10px 55px",
       [theme.breakpoints.down("md")]: {
         marginTop: 10,
         width: 200,
         margin: "auto",
         justifySelf: "center",
       },
     },
     root: {
       //  flexGrow: 1,
       backgroundColor: "#fff",
     },
   }));

   const classes = useStyles();

   const [value, setValue] = React.useState(0);

   const handleChange = (event, newValue) => {
     setValue(newValue);
   };
    return (
      <div className="detailall">
        <div className="detail-head">รายละเอียด</div>
        <div className="detail-subhead">M0 series</div>
        <div className="detail-detail">
          เครื่องตรวจสอบคุณภาพข้าวด้วยเทคโนโลยีปัญญาประดิษฐ์ (AI)
        </div>
        <div className="detail-size">
          ขนาดเครื่อง &nbsp; &nbsp; &nbsp;{" "}
          <div style={{ color: "#339A65", fontSize: "24px" }}>28x52.9x24</div>{" "}
          &nbsp; &nbsp; &nbsp; เซนติเมตร
        </div>
        <div className="detail-weight">
          น้ำหนักเครื่อง &nbsp; &nbsp; &nbsp; &nbsp;{" "}
          <div
            style={{
              color: "#339A65",
              fontSize: "24px",
              marginLeft: 30,
              marginRight: 30,
            }}
          >
            2
          </div>{" "}
          &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp; กิโลกรัม
        </div>
        <div className="detail-tab">
          <div className="detail-box">
            <div className={classes.root}>
              <AppBar position="static" color="default">
                <ImgTabs
                  value={value}
                  onChange={handleChange}
                  aria-label="simple tabs example"
                >
                  <ImgTab label="ตารางที่ 1" {...a11yProps(0)} />
                  <ImgTab label="ตารางที่ 2" {...a11yProps(1)} />
                </ImgTabs>
              </AppBar>
              <TabPanel value={value} index={0}>
                <img
                  src="/Table_1.png"
                  className="detail-img-responsive"
                  width={1200}
                />
              </TabPanel>
              <TabPanel value={value} index={1}>
                <img
                  src="/Table_2.png"
                  className="detail-img-responsive"
                  width={1200}
                />
              </TabPanel>
            </div>
          </div>
        </div>
        <div className="detail-button-group">
          <div className="detail-buybutton">
            <Buybutton />
          </div>
          <div className="detail-contactbutton">
            <Button className={classes.contactbutton}>ติดต่อเรา</Button>
          </div>
        </div>
      </div>
    );
}

export default detail
