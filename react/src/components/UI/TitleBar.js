import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Typography,
  withStyles,
} from '@material-ui/core';
import { cyan } from '@material-ui/core/colors';

const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: theme.spacing.unit * 2,
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
  },
  button: {
    color: theme.palette.secondary.contrastText,
    backgroundColor: cyan['500'],
  },
  icon: {
    marginLeft: theme.spacing.unit,
  },
});

const TitleBar = (props) => {
  const {
    classes,
    clickHandler,
    icon: Icon,
    title,
    action,
  } = props;

  return (
    <div className={classes.root}>
      <Typography color="primary" variant="display1">
        {title}
      </Typography>
      <Button
        className={classes.button}
        variant="contained"
        size="medium"
        onClick={clickHandler}
      >
        {action}
        <Icon className={classes.icon} />
      </Button>
    </div>
  );
};

TitleBar.defaultProps = {
  icon: null,
};

TitleBar.propTypes = {
  action: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
  clickHandler: PropTypes.func.isRequired,
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.object]),
  title: PropTypes.string.isRequired,
};


export default withStyles(styles)(TitleBar);
