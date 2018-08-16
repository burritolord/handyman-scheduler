import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Grid, withStyles } from '@material-ui/core';
import Header from '../components/Header/Header';
import SideDrawer from '../components/Sidedrawer/SideDrawer';

const styles = theme => ({
  root: {},
});

class Layout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mobileOpen: false,
      menusOpen: {},
    };

    this.handleDrawerToggle = this.handleDrawerToggle.bind(this);
    this.handleExpandMenuList = this.handleExpandMenuList.bind(this);
  }

  handleDrawerToggle() {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  }

  handleExpandMenuList(event, menu) {
    this.setState(
      (state) => {
        if (state.menusOpen.hasOwnProperty(menu)) {
          return {
            menusOpen: {
              ...state.menusOpen,
              [menu]: !state.menusOpen[menu],
            },
          };
        }
        return {
          menusOpen: {
            ...state.menusOpen,
            [menu]: true,
          },
        };
      }
    );
  }

  render() {
    const {
      children,
      classes,
    } = this.props;

    const {
      mobileOpen,
      menusOpen,
    } = this.state;

    return (
      <Fragment>
        <Header handleDrawerToggle={this.handleDrawerToggle} />
        <Grid container>
          <Grid item>
            <SideDrawer
              mobileOpen={mobileOpen}
              onClose={this.handleDrawerToggle}
              menusOpen={menusOpen}
              expandMenuList={this.handleExpandMenuList}
            />
          </Grid>
          <Grid item>
            <main>
              {children}
            </main>
          </Grid>
        </Grid>
      </Fragment>
    );
  }
}

Layout.defaultProps = {};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(Layout);
