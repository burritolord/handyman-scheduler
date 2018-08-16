import React from 'react';
import PropTypes from 'prop-types';
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  withStyles,
} from '@material-ui/core';
import { cyan } from '@material-ui/core/colors';
import classNames from 'classnames';
import MyNavLink from './MyNavLink';

const styles = theme => ({
  root: {
    color: theme.palette.secondary.contrastText,
  },
  icon: {
    color: 'inherit',
    fontSize: 24,
    marginRight: 12,
  },
  text: {
    padding: 0,
    textTransform: 'none',
  },
  active: {
    color: cyan.A100,
  },
});

const NavItem = (props) => {
  const {
    button,
    children,
    classes,
    className: classNameProp,
    icon: Icon,
    primary,
    to,
    ...other
  } = props;

  let ComponentProps = { button };
  if (!button) {
    ComponentProps = {
      component: MyNavLink,
      to,
      activeClassName: classes.active,
    };
  }

  const className = classNames(
    classes.root,
    classNameProp,
  );

  return (
    <ListItem
      disableGutters
      className={className}
      {...ComponentProps}
      {...other}
    >
      {Icon
        ? (
          <ListItemIcon>
            <Icon classes={{ root: classes.icon }} />
          </ListItemIcon>
        )
        : null
      }
      <ListItemText
        classes={{ root: classes.text }}
        primary={primary}
        primaryTypographyProps={{
          color: 'inherit',
          variant: 'title',
        }}
      />
      {children}
    </ListItem>
  );
};

NavItem.defaultProps = {
  button: false,
  className: '',
  children: null,
  icon: null,
  to: null,
};

NavItem.propTypes = {
  button: PropTypes.bool,
  children: PropTypes.node,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.object]),
  primary: PropTypes.node.isRequired,
  to: PropTypes.string,
};


export default withStyles(styles)(NavItem);
