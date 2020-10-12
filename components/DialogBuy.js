import React from 'react'
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import { makeStyles, withStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  buy: {
    background: "#339a65",
    color: "#fff",
    borderRadius: 6,
    border: "6px",
    fontFamily: "Prompt",
    fontSize: 18,
    padding: "5px 20px",
    marginLeft: 270,
    width: 400,
    height: 60,
    marginTop: 20,
    [theme.breakpoints.down("md")]: {
      marginLeft: 0,
      width: 300,
    },
  },
  dialog : {
    // width: 500,
  },
}));

function DialogBuy({packagebuy, value}) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [openAddSize, setOpenAddsize] = React.useState(false);
  const [openBasicQA, setOpenBasicQA] = React.useState(false);
  const [openBasicQAAddSize, setOpenBasicQAAddSize] = React.useState(false);
  const [openStardQA, setOpenStardQA] = React.useState(false);
  const [openStardQAAddSize, setOpenStardQAAddsize] = React.useState(false);
  const [openPremium, setOpenPremium] = React.useState(false);
  const [openPremiumAddSize, setOpenPremiumAddSize] = React.useState(false);
  const [openSuperPremium, setSuuperPremium] = React.useState(false);

  const handleClickOpen = () => {
    switch (packagebuy) {
      case "1":
        if (value=="Yes") {
          setOpenAddsize(true);
        } else {
          setOpen(true);
        }
        break;
      case "2":
        if (value == "Yes") {
          setOpenBasicQAAddSize(true);
        } else {
          setOpenBasicQA(true);
        }
        break;
      case "3":
        if (value == "Yes") {
          setOpenStardQAAddsize(true);
        } else {
          setOpenStardQA(true);
        }
        break;
      case "4":
        if (value == "Yes") {
          setOpenPremiumAddSize(true);
        } else {
          setOpenPremium(true);
        }
        break;
      case "5":
        setSuuperPremium(true);
        break;
      default:
        break;
    }
    console.log(packagebuy)
  };

  const handleClose = () => {
    setOpen(false);
    setOpenAddsize(false)
    setOpenBasicQA(false);
    setOpenBasicQAAddSize(false);
    setOpenStardQA(false);
    setOpenStardQAAddsize(false)
    setOpenPremium(false);
    setOpenPremiumAddSize(false)
    setSuuperPremium(false);
  };
    return (
      <div>
        <Button
          variant="outlined"
          color="primary"
          onClick={handleClickOpen}
          className={classes.buy}
        >
          ตรวจสอบฟังก์ชัน
        </Button>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          maxWidth={"xs"}
          fullWidth={true}
        >
          <DialogTitle id="alert-dialog-title">{"Function"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              {/* <div style={{ paddingLeft: 50 }}> */}
                <ul>
                  <li>ข้าวขาว เต็ม</li>
                  <li>ข้าวขาว ต้นข้าว</li>
                  <li>ข้าวขาว หัก</li>
                  <li>ข้าวแดง เต็ม</li>
                  <li>ข้าวแกง หัก</li>
                  <li>ข้าวกล้อง</li>
                  <li>ข้าวแกลบ</li>
                  <li>ข้าวเปลือก</li>
                </ul>
              {/* </div> */}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary" autoFocus>
              ยกเลิก
            </Button>
          </DialogActions>
        </Dialog>
        <Dialog
          open={openAddSize}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          maxWidth={"xs"}
          fullWidth={true}
        >
          <DialogTitle id="alert-dialog-title">{"Function"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              <div style={{ paddingLeft: 50 }}>
                <ul>
                  <li>ข้าวขาว เต็ม</li>
                  <li>ข้าวขาว ต้นข้าว</li>
                  <li>ข้าวขาว หัก</li>
                  <li>ข้าวแดง เต็ม</li>
                  <li>ข้าวแกง หัก</li>
                  <li>ข้าวกล้อง</li>
                  <li>ข้าวแกลบ</li>
                  <li>ข้าวเปลือก</li>
                  <li>ขนาดข้าว (Sizing)</li>
                </ul>
              </div>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary" autoFocus>
              ยกเลิก
            </Button>
          </DialogActions>
        </Dialog>
        {/* --------------------------------------------- */}
        <Dialog
          open={openBasicQA}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          maxWidth={"xs"}
          fullWidth={true}
        >
          <DialogTitle id="alert-dialog-title">{"Function"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              <div style={{ paddingLeft: 50 }}>
                <ul>
                  <li>ตรวจสอบโดยน้ำหนัก</li>
                  <li>ข้าวเหนียว</li>
                  <li>ข้าวเหลือง</li>
                  <li>ข้าวท้องไข่</li>
                  <li>ข้าวเสีย</li>
                </ul>
              </div>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary" autoFocus>
              ยกเลิก
            </Button>
          </DialogActions>
        </Dialog>
        <Dialog
          open={openBasicQAAddSize}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          maxWidth={"xs"}
          fullWidth={true}
        >
          <DialogTitle id="alert-dialog-title">{"Function"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              <div style={{ paddingLeft: 50 }}>
                <ul>
                  <li>ขนาดข้าว (Sizing)</li>
                  <li>ตรวจสอบโดยน้ำหนัก</li>
                  <li>ข้าวเหนียว</li>
                  <li>ข้าวเหลือง</li>
                  <li>ข้าวท้องไข่</li>
                  <li>ข้าวเสีย</li>
                </ul>
              </div>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary" autoFocus>
              ยกเลิก
            </Button>
          </DialogActions>
        </Dialog>

        {/* --------------------------------------------- */}
        <Dialog
          open={openStardQA}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          maxWidth={"xs"}
          fullWidth={true}
        >
          <DialogTitle id="alert-dialog-title">{"Function"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              <div style={{ paddingLeft: 50 }}>
                <ul>
                  <li>ตรวจสอบโดยน้ำหนัก</li>
                  <li>ข้าวเหนียว</li>
                  <li>ข้าวเหลือง</li>
                  <li>ข้าวท้องไข่</li>
                  <li>ข้าวเสีย</li>
                  <li>Milling Degree</li>
                  <li>ข้าวเมล็ดลีบ</li>
                  <li>ข้าวเมล็ดอ่อน</li>
                </ul>
              </div>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary" autoFocus>
              ยกเลิก
            </Button>
          </DialogActions>
        </Dialog>
        <Dialog
          open={openStardQAAddSize}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          maxWidth={"xs"}
          fullWidth={true}
        >
          <DialogTitle id="alert-dialog-title">{"Function"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              <div style={{ paddingLeft: 50 }}>
                <ul>
                  <li>ขนาดข้าว (Sizing)</li>
                  <li>ตรวจสอบโดยน้ำหนัก</li>
                  <li>ข้าวเหนียว</li>
                  <li>ข้าวเหลือง</li>
                  <li>ข้าวท้องไข่</li>
                  <li>ข้าวเสีย</li>
                  <li>Milling Degree</li>
                  <li>ข้าวเมล็ดลีบ</li>
                  <li>ข้าวเมล็ดอ่อน</li>
                </ul>
              </div>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary" autoFocus>
              ยกเลิก
            </Button>
          </DialogActions>
        </Dialog>
        {/* --------------------------------------------- */}
        <Dialog
          open={openPremium}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          maxWidth={"xs"}
          fullWidth={true}
        >
          <DialogTitle id="alert-dialog-title">{"Function"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              <div style={{ paddingLeft: 50 }}>
                <ul>
                  <li>ข้าวขาว เต็ม</li>
                  <li>ข้าวขาว ต้นข้าว</li>
                  <li>ข้าวขาว หัก</li>
                  <li>ข้าวแดง เต็ม</li>
                  <li>ข้าวแกง หัก</li>
                  <li>ข้าวกล้อง</li>
                  <li>ข้าวแกลบ</li>
                  <li>ข้าวเปลือก</li>
                  <li>ตรวจสอบโดยน้ำหนัก</li>
                  <li>ข้าวเหนียว</li>
                  <li>ข้าวเหลือง</li>
                  <li>ข้าวท้องไข่</li>
                  <li>ข้าวเสีย</li>
                </ul>
              </div>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary" autoFocus>
              ยกเลิก
            </Button>
          </DialogActions>
        </Dialog>
        <Dialog
          open={openPremiumAddSize}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          maxWidth={"xs"}
          fullWidth={true}
        >
          <DialogTitle id="alert-dialog-title">{"Function"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              <div style={{ paddingLeft: 50 }}>
                <ul>
                  <li>ข้าวขาว เต็ม</li>
                  <li>ข้าวขาว ต้นข้าว</li>
                  <li>ข้าวขาว หัก</li>
                  <li>ข้าวแดง เต็ม</li>
                  <li>ข้าวแกง หัก</li>
                  <li>ข้าวกล้อง</li>
                  <li>ข้าวแกลบ</li>
                  <li>ข้าวเปลือก</li>
                  <li>ขนาดข้าว (Sizing)</li>
                  <li>ตรวจสอบโดยน้ำหนัก</li>
                  <li>ข้าวเหนียว</li>
                  <li>ข้าวเหลือง</li>
                  <li>ข้าวท้องไข่</li>
                  <li>ข้าวเสีย</li>
                </ul>
              </div>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary" autoFocus>
              ยกเลิก
            </Button>
          </DialogActions>
        </Dialog>
        {/* --------------------------------------------- */}
        <Dialog
          open={openSuperPremium}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title2"
          aria-describedby="alert-dialog-description2"
          maxWidth={"xs"}
          fullWidth={true}
        >
          <DialogTitle id="alert-dialog-title">{"Function"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              <div style={{ paddingLeft: 50 }}>
                <ul>
                  <li>ข้าวขาว เต็ม</li>
                  <li>ข้าวขาว ต้นข้าว</li>
                  <li>ข้าวขาว หัก</li>
                  <li>ข้าวแดง เต็ม</li>
                  <li>ข้าวแกง หัก</li>
                  <li>ข้าวกล้อง</li>
                  <li>ข้าวแกลบ</li>
                  <li>ข้าวเปลือก</li>
                  <li>ขนาดข้าว (Sizing)</li>
                  <li>ตรวจสอบโดยน้ำหนัก</li>
                  <li>ข้าวเหนียว</li>
                  <li>ข้าวเหลือง</li>
                  <li>ข้าวท้องไข่</li>
                  <li>ข้าวเสีย</li>
                  <li>Milling Degree</li>
                  <li>ข้าวเมล็ดลีบ</li>
                  <li>ข้าวเมล็ดอ่อน</li>
                </ul>
              </div>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary" autoFocus>
              ยกเลิก
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
}

export default DialogBuy
