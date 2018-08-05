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
    };

    this.handleDrawerToggle = this.handleDrawerToggle.bind(this);
  }

  handleDrawerToggle() {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  }

  render() {
    const {
      children,
      classes,
    } = this.props;

    const {
      mobileOpen,
    } = this.state;

    return (
      <Fragment>
        <Header handleDrawerToggle={this.handleDrawerToggle} />
        <Grid container>
          <Grid item>
            <SideDrawer
              mobileOpen={mobileOpen}
              onClose={this.handleDrawerToggle}
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
