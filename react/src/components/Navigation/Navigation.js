import React from 'react';
import PropTypes from 'prop-types';
import {
  List,
  withStyles,
} from '@material-ui/core';
import {
  CalendarToday,
  Dashboard,
  People,
  Work,
} from '@material-ui/icons';
import CollapsableNavItem from './CollapsibleNavItem';
import NavItem from './NavItem';

const styles = theme => ({
  root: {
    width: '100%',
  },
  nested: {
    paddingLeft: theme.spacing.unit * 6.5,
  },
});

const Navigation = (props) => {
  const { classes, menusOpen, expandMenuList } = props;

  return (
    <div className={classes.root}>
      <List
        component="nav"
      >
        <NavItem
          to="/dashboard"
          primary="Dashboard"
          icon={Dashboard}
        />
        <CollapsableNavItem
          icon={People}
          primary="Clients"
          expanded={menusOpen.hasOwnProperty('clients') && menusOpen.clients}
          onClick={e => (expandMenuList(e, 'clients'))}
        >
          <NavItem
            to="/clients/people"
            primary="People"
            className={classes.nested}
          />
          <NavItem
            to="/clients/properties"
            primary="Properties"
            className={classes.nested}
          />
        </CollapsableNavItem>
        <CollapsableNavItem
          icon={Work}
          primary="Work"
          expanded={menusOpen.hasOwnProperty('work') && menusOpen.work}
          onClick={e => (expandMenuList(e, 'work'))}
        >
          <NavItem
            to="/work/quotes"
            primary="Quotes"
            className={classes.nested}
          />
          <NavItem
            to="/work/jobs"
            primary="Jobs"
            className={classes.nested}
          />
          <NavItem
            to="/work/invoices"
            primary="Invoices"
            className={classes.nested}
          />
        </CollapsableNavItem>
        <NavItem
          to="/calendar"
          primary="Calendar"
          icon={CalendarToday}
        />
      </List>
    </div>
  );
};

Navigation.defaultProps = {

};

Navigation.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(Navigation);
