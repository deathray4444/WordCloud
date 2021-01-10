import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import Link from "@material-ui/core/Link";
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

const AppShell = (props) => {
  const [toggle, setToggle] = useState(false);

  const handleDrawerToggle = () => {
    setToggle(!toggle);
  };

  const classes = styles();

  return (
    <div>
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
          <MenuItem onClick={handleDrawerToggle}>
            <Link component={RouterLink} to="/">
              Home
            </Link>
          </MenuItem>
          <MenuItem onClick={handleDrawerToggle}>
            <Link component={RouterLink} to="/texts">
              Texts
            </Link>
          </MenuItem>
          <MenuItem onClick={handleDrawerToggle}>
            <Link component={RouterLink} to="/words">
              Words
            </Link>
          </MenuItem>
        </Drawer>
      </div>
      <div id="content" style={{ magrin: "auto", marginTop: "20px" }}>
        {React.cloneElement(props.children)}
      </div>
    </div>
  );
};

export default withStyles(styles)(AppShell);
