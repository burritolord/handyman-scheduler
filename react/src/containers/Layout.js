import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Grid, withStyles } from '@material-ui/core';
import Header from '../components/Header/Header';

const styles = theme => ({
  root: {},
  content: {
    ...theme.appWidth,
  }
});

class Layout extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    const { children, classes } = this.props;

    return (
      <Fragment>
        <Header />
        <main>
          <Grid container justify="center">
            <Grid item className={classes.content}>
              {children}
            </Grid>
          </Grid>
        </main>
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
