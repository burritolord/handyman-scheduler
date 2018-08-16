import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import {
  Collapse,
  List,
  withStyles,
} from '@material-ui/core';
import { ExpandMore, ExpandLess } from '@material-ui/icons';
import classNames from 'classnames';
import NavItem from './NavItem';

const styles = theme => ({
  root: {
    color: theme.palette.secondary.contrastText,
    paddingLeft: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit * 2,
  },
});

const CollapsibleNavItem = (props) => {
  const {
    children,
    classes,
    className: classNameProp,
    expandIcon: ExpandIcon,
    collapseIcon: CollapseIcon,
    expanded,
    ...other
  } = props;

  const className = classNames(
    classes.root,
    classNameProp,
  );

  return (
    <Fragment>
      <NavItem
        className={className}
        button
        {...other}
      >
        { expanded ? <CollapseIcon /> : <ExpandIcon />}
      </NavItem>
      <Collapse
        in={expanded}
        timeout="auto"
        unmountOnExit
      >
        <List component="div" disablePadding>
          {children}
        </List>
      </Collapse>
    </Fragment>
  );
};

CollapsibleNavItem.defaultProps = {
  className: '',
  expandIcon: ExpandMore,
  collapseIcon: ExpandLess,
};

CollapsibleNavItem.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  expanded: PropTypes.bool.isRequired,
  expandIcon: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.object]),
  collapseIcon: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.object]),
};


export default withStyles(styles)(CollapsibleNavItem);
