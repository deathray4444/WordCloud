import React, { useState } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Drawer from "@material-ui/core/Drawer";
import MenuItem from "@material-ui/core/MenuItem";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const styles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: "auto",
  },
}));

const AppShell = () => {
  const [toggle, setToggle] = useState(false);

  const handleDrawerToggle = () => {
    setToggle(!toggle);
  };

  const classes = styles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <IconButton
          className={classes.menuButton}
          color="inherit"
          onClick={handleDrawerToggle}
        >
          <MenuIcon />
        </IconButton>
      </AppBar>
      <Drawer open={toggle}>
        <MenuItem onClick={handleDrawerToggle}>Home</MenuItem>
        <MenuItem onClick={handleDrawerToggle}>Home2</MenuItem>
      </Drawer>
    </div>
  );
};

export default withStyles(styles)(AppShell);
