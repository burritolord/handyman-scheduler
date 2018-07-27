import React from 'react';
import PropTypes from 'prop-types';
import {
  AppBar,
  Button,
  Grid,
  Hidden,
  Toolbar,
  IconButton,
  Typography,
  withStyles,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import BrandingImage from '../UI/BrandingImage';

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  appWidth: {
    ...theme.appWidth,
  },
  leftMargin: {
    marginLeft: '10px',
  },
});

const brandingImage = 'https://lh3.google.com/u/0/d/1hSjs9EtZegdzt_WYPjttKfOCNlziBwtZ=w932-h765-iv1';


const Header = (props) => {
  const { classes } = props;

  return (
    <AppBar
      position="static"
    >
      <Grid container justify="center">
        <Grid item className={classes.appWidth}>
          <Toolbar disableGutters>
            <Grid container direction="row" justify="space-between" alignItems="center">
              <Grid item>
                <BrandingImage brandingImage={brandingImage} />
              </Grid>
              <Grid item>
                <Hidden smDown>
                  <Grid container alignItems="center">
                    <Link to="/link1">
                      <Typography variant="subheading" color="primary">
                        Link 1
                      </Typography>
                    </Link>
                    <Link to="/link2">
                      <Typography
                        className={classes.leftMargin}
                        variant="subheading"
                        color="primary"
                      >
                        Link 2
                      </Typography>
                    </Link>
                    <Button
                      variant="contained"
                      className={classes.leftMargin}
                      component={Link}
                      to="/login"
                    >
                      Log In
                    </Button>
                    <Button
                      variant="contained"
                      className={classes.leftMargin}
                      component={Link}
                      to="/signup"
                    >
                      Sign Up
                    </Button>
                  </Grid>
                </Hidden>
                <Hidden mdUp>
                  <IconButton color="inherit" aria-label="Menu">
                    <MenuIcon />
                  </IconButton>
                </Hidden>
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
};


export default withStyles(styles)(Header);
