import React from 'react';
import PropTypes from 'prop-types';
import {
  AppBar,
  Button,
  Grid,
  Toolbar,
  IconButton,
  withStyles,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import BrandingImage from '../UI/BrandingImage';

const styles = theme => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  appWidth: theme.appWidth,
  flex: {
    display: 'flex',
    alignItems: 'center',
  },
  navIconHide: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
});

const Header = (props) => {
  const { classes, handleDrawerToggle } = props;

  return (
    <AppBar
      position="static"
      className={classes.appBar}
    >
      <Grid container justify="center">
        <Grid item className={classes.appWidth}>
          <Toolbar disableGutters>
            <Grid container direction="row" justify="space-between" alignItems="center">
              <Grid item>
                <div className={classes.flex}>
                  <IconButton
                    className={classes.navIconHide}
                    color="inherit"
                    aria-label="Menu"
                    onClick={handleDrawerToggle}
                  >
                    <MenuIcon />
                  </IconButton>
                  <BrandingImage />
                </div>
              </Grid>
              <Grid item>
                <Grid container alignItems="center">
                  <Button
                    variant="contained"
                    component={Link}
                    to="/login"
                  >
                    Log In
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Toolbar>
        </Grid>
      </Grid>
    </AppBar>
  );
};

Header.defaultProps = {

};

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  handleDrawerToggle: PropTypes.func.isRequired,
};


export default withStyles(styles)(Header);
