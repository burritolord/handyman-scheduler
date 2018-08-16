import React from 'react';
import PropTypes from 'prop-types';
import {
  Drawer,
  Hidden,
  withStyles,
} from '@material-ui/core';
import Navigation from '../Navigation/Navigation';

const drawerWidth = 220;

const styles = theme => ({
  root: {
    flexGrow: 1,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    width: '100%',
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: theme.palette.primary.dark,
    [theme.breakpoints.up('md')]: {
      position: 'relative',
    },
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
  },
});

const SideDrawer = (props) => {
  const {
    classes,
    mobileOpen,
    onClose,
    menusOpen,
    expandMenuList,
  } = props;

  return (
    <div className={classes.root}>
      <Hidden mdUp>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={onClose}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          <Navigation
            menusOpen={menusOpen}
            expandMenuList={expandMenuList}
          />
        </Drawer>
      </Hidden>
      <Hidden smDown implementation="css">
        <Drawer
          variant="permanent"
          open
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <Navigation
            menusOpen={menusOpen}
            expandMenuList={expandMenuList}
          />
        </Drawer>
      </Hidden>
    </div>
  );
};

SideDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  mobileOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default withStyles(styles)(SideDrawer);
