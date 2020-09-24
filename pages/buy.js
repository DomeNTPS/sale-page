import React from 'react'
import NativeSelect from "@material-ui/core/NativeSelect";
import TextField from "@material-ui/core/TextField";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

const useStyles = makeStyles((theme) => ({
  selectEmpty: {
    marginTop: theme.spacing(2),
    backgroundColor: "#EBF4E5",
  },
  root: {
    background: "#EBF4E5",
  },
  input: {
    color: "#1A1B1F",
  },
}));

const ColorInput = withStyles((theme) => ({
  input: {
    borderRadius: 4,
    // position: "relative",
    backgroundColor: "#EBF4E5",
    border: "1px solid #EBF4E5",
    fontSize: 24,
    // padding: "10px 26px 10px 12px",
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


function buy() {
    const classes = useStyles();
    const [ppackage, setPackage] = React.useState({
      package: "",
    });
    const handleChange = (event) => {
      const name = event.target.name;
      setPackage({
        ...ppackage,
        [name]: event.target.value,
      });
    };
    const [value, setValue] = React.useState("female");

    const handleChangee = (event) => {
      setValue(event.target.value);
    };

    return (
      <div>
        <div className="buy-head">ลงทะเบียนเพื่อทำการสั่งซื้อ</div>
        <div className="buy-from">
          <div className="buy-input">
            <div>ชื่อ (Name)</div>
            <TextField
              id="filled-basic"
              placeholder="ชื่อ"
              variant="filled"
              style={{ width: 400, marginTop: 20 }}
              className={classes.root}
            />
          </div>
          <div className="buy-input">
            <div style={{ marginLeft: 270 }}>นามสกุล (Surname)</div>
            <TextField
              id="filled-basic"
              placeholder="นามสกุล"
              variant="filled"
              style={{ marginLeft: 270, width: 400, marginTop: 20 }}
            />
          </div>
        </div>
        <div className="buy-from-sub">
          <div className="buy-input">
            <div>เบอร์โทรศัพท์มือถือ (Phone)</div>
            <TextField
              id="filled-basic"
              placeholder="000-000-0000"
              variant="filled"
              style={{ width: 400, marginTop: 20 }}
            />
          </div>
          <div className="buy-input">
            <div style={{ marginLeft: 270 }}>อีเมล (E-mail)</div>
            <TextField
              id="filled-basic"
              placeholder="อีเมล"
              variant="filled"
              style={{ marginLeft: 270, width: 400, marginTop: 20 }}
            />
          </div>
        </div>
        <div className="buy-from-sub">
          <div className="buy-input">
            <div>แพ็คเกจ (Package)</div>
            <NativeSelect
              value={ppackage.package}
              onChange={handleChange}
              style={{ width: 400, height: 50, marginTop: 20 }}
              name="package"
              className={classes.selectEmpty}
              inputProps={{ "aria-label": "package" }}
              input={<ColorInput />}
            >
              <option value="">None</option>
              <option value={1}>Standard QC</option>
              <option value={2}>Basic QA</option>
              <option value={3}>Standard QA</option>
              <option value={4}>Premium</option>
              <option value={5}>Super Premium</option>
            </NativeSelect>
          </div>
          <div className="buy-input">
            <div style={{ marginLeft: 270 }}>ราคา (Price)</div>
            <TextField
              id="filled-basic"
              placeholder="ราคา"
              variant="filled"
              style={{ marginLeft: 270, width: 400, marginTop: 20 }}
            />
          </div>
        </div>
        <div className="buy-from-sub">
          <div className="buy-input">
            <div>Add Sizing</div>
          </div>
          <div className="buy-input">
            <div style={{ marginLeft: 270 }}>อีเมล (E-mail)</div>
            <TextField
              id="filled-basic"
              placeholder="อีเมล"
              variant="filled"
              style={{ marginLeft: 270, width: 400, marginTop: 20 }}
            />
          </div>
        </div>
      </div>
    );
}

export default buy


