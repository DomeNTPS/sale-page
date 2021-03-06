import React from 'react'
import NativeSelect from "@material-ui/core/NativeSelect";
import TextField from "@material-ui/core/TextField";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import NumberFormat from "react-number-format";
import MaskedInput from "react-text-mask";
import PropTypes from "prop-types";
import Buybutton from "../components/BuyButton";
import DialogBuy from '../components/DialogBuy'

const useStyles = makeStyles((theme) => ({
  selectEmpty: {
    marginTop: theme.spacing(2),
    backgroundColor: "#EBF4E5",
    width: 400,
    height: 60,
    marginTop: 20,
    borderRadius: 20,
    [theme.breakpoints.down("md")]: {
      width: 300,
    },
  },
  numberinput: {
    background: "#EBF4E5",
    borderRadius: 20,
    width: 400,
    marginTop: 20,
    height: 60,
    paddingTop: 17,
    paddingLeft: 30,
    [theme.breakpoints.down("md")]: {
      paddingLeft: 0,
      width: 300,
      paddingLeft: 20,
    },
  },
  root: {
    background: "#EBF4E5",
    borderRadius: 20,
    width: 400,
    marginTop: 20,
    height: 60,
    paddingLeft: 30,
    [theme.breakpoints.down("md")]: {
      paddingLeft: 0,
      width: 300,
      paddingLeft: 20,
    },
  },
  inputcolumn2: {
    background: "#EBF4E5",
    borderRadius: 20,
    width: 400,
    marginTop: 20,
    height: 60,
    paddingLeft: 30,
    marginLeft: 270,
    [theme.breakpoints.down("md")]: {
      marginLeft: 0,
      width: 300,
    },
  },
  input: {
    color: "#1A1B1F",
  },
  buy: {
    background: "#339a65",
    color: "#fff",
    borderRadius: 20,
    border: "6px",
    fontSize: 18,
    padding: "5px 20px",
  },
  radio: {
    width: 400,
    [theme.breakpoints.down("md")]: {
      marginLeft: 0,
      width: 300,
    },
  },
}));

const ColorInput = withStyles((theme) => ({
  input: {
    borderRadius: 20,
    backgroundColor: "#EBF4E5",
    border: "1px solid #EBF4E5",
    fontSize: 18,
    padding: "10px 26px 10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    // Use the system font instead of the default Roboto font.
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
    "&:focus": {
      borderRadius: 4,
      borderColor: "#EBF4E5",
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
    },
  },
}))(InputBase);

function TextMaskCustom(props) {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={(ref) => {
        inputRef(ref ? ref.inputElement : null);
      }}
      mask={[
        /[1-9]/,
        /\d/,
        /\d/,
        " ",
        /\d/,
        /\d/,
        /\d/,
        "-",
        /\d/,
        /\d/,
        /\d/,
        /\d/,
      ]}
      placeholderChar={"\u2000"}
      showMask
    />
  );
}

function NumberFormatCustom(props) {
  const { inputRef, onChange, ...other } = props;

  return (
    <NumberFormat
      {...other}
      getInputRef={inputRef}
      onValueChange={(values) => {
        onChange({
          target: {
            name: props.name,
            value: values.value,
          },
        });
      }}
      isNumericString
      format="###-###-####"
    />
  );
}

NumberFormatCustom.propTypes = {
  inputRef: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

TextMaskCustom.propTypes = {
  inputRef: PropTypes.func.isRequired,
};

function buy() {
    const classes = useStyles();
    const [ppackage, setPackage] = React.useState({
      package: 0,
    });
    const handleChangePackage = (event) => {
      const name = event.target.name;
      setPackage({
        ...ppackage,
        [name]: event.target.value,
      });
      console.log(ppackage)
    };
    const [value, setValue] = React.useState("");


    let price = ('-')

    const handleChange = (event) => {
      setValue(event.target.value);
      console.log(value)
    };

    switch (ppackage.package) {
      case "0":
        price = "";
        break;
      case "1":
        if (value=="Yes") {
          price = "70,000"
        }
        else{
          price = "60,000";
        }
        break;
      case "2":
        if (value == "Yes") {
          price = "88,000";
        } else {
          price = "80,000";
        }
        break;
      case "3":
        if (value == "Yes") {
          price = "97,000";
        } else {
          price = "90,000";
        }
        break;
      case "4":
        if (value == "Yes") {
          price = "130,000";
        } else {
          price = "125,000";
        }
        break;
      case "5":
        price = "140,000";
        break;

      default:
        break;
    }

    return (
      <div className="buy-container">
        <div className="buy-head">ลงทะเบียนเพื่อทำการสั่งซื้อ</div>
        <div className="buy-from">
          <div className="buy-input">
            <div>ชื่อ (Name)</div>
            <InputBase
              id="filled-name"
              placeholder="ชื่อ"
              variant="filled"
              className={classes.root}
            />
          </div>
          <div className="buy-input">
            <div className="buy-column2">นามสกุล (Surname)</div>
            <InputBase
              id="filled-surname"
              placeholder="นามสกุล"
              variant="filled"
              className={classes.inputcolumn2}
            />
          </div>
        </div>
        <div className="buy-from-sub">
          <div className="buy-input">
            <div>เบอร์โทรศัพท์มือถือ (Phone)</div>
            <TextField
              id="filled-phone"
              placeholder="000-000-0000"
              className={classes.numberinput}
              name="phonenumber"
              InputProps={{
                inputComponent: NumberFormatCustom,
                disableUnderline: true,
              }}
            />
          </div>
          <div className="buy-input">
            <div className="buy-column2">อีเมล (E-mail)</div>
            <InputBase
              id="filled-email"
              placeholder="อีเมล"
              variant="filled"
              className={classes.inputcolumn2}
            />
          </div>
        </div>
        <div className="buy-from-sub">
          <div className="buy-input">
            <div>แพ็คเกจ (Package)</div>
            <NativeSelect
              value={ppackage.package}
              onChange={handleChangePackage}
              name="package"
              className={classes.selectEmpty}
              inputProps={{ "aria-label": "package" }}
              input={<ColorInput />}
            >
              <option value={0}>None</option>
              <option value={1}>Standard QC</option>
              <option value={2}>Basic QA</option>
              <option value={3}>Standard QA</option>
              <option value={4}>Premium</option>
              <option value={5}>Super Premium</option>
            </NativeSelect>
          </div>
          <div className="buy-input">
            <div className="buy-column2">ราคา (Price)</div>
            <InputBase
              id="filled-price"
              placeholder="ราคา"
              value={price}
              variant="filled"
              className={classes.inputcolumn2}
              disabled={true}
            />
          </div>
        </div>
        <div className="buy-from-sub">
          <div className="buy-input">
            <div >Add Sizing</div>
            <RadioGroup
              aria-label="gender"
              name="gender1"
              value={value}
              onChange={handleChange}
              className={classes.radio}
            >
              <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="No" control={<Radio />} label="No" />
            </RadioGroup>
          </div>
          <div className="buy-input">
            <div className="buy-column2">ฟังก์ชั่น (Function)</div>
            <DialogBuy packagebuy={ppackage.package} value={value} />
          </div>
        </div>
        <div className="buy-result">
          ราคารวม &nbsp;&nbsp;&nbsp; <div className="buy-price">{price}</div>{" "}
          &nbsp;&nbsp;&nbsp; บาท
        </div>
        <div className="buy-button">
          <Buybutton />
        </div>
        <div className="buy-warning">
          *เมื่อทำรายการเสร็จเจ้าหน้าที่จะติดต่อกลับไปตามข้อมูลที่ให้ไว้
        </div>
      </div>
    );
}

export default buy


