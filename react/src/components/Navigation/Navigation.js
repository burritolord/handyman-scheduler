import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Collapse,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  withStyles,
} from '@material-ui/core';
import {
  Calendar,
  ExpandLess,
  ExpandMore,
  People,
  Work,
} from '@material-ui/icons';
import { cyan } from '@material-ui/core/colors';
import { NavLink } from 'react-router-dom';

const styles = theme => ({
  root: {
    width: '100%',
  },
  menuExpand: {
    color: 'white',
    paddingLeft: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit * 2,
  },
  menuLink: {
  },
  activeItem: {
    color: cyan.A100,
  },
  nested: {
    paddingLeft: theme.spacing.unit * 6.5,
  },
  icon: {
    color: 'white',
    fontSize: 24,
    marginRight: 12,
  },
  text: {
    padding: '0px',
  },
});

const MyLink = ({to, ...props}) => <NavLink to={to} {...props} />;
const MyListItem = props => <Button component={MyLink} {...props} />;

const Navigation = (props) => {
  const { classes, menusOpen, expandMenuList } = props;

  return (
    <div className={classes.root}>
      <List
        component="nav"
      >
        <ListItem
          button
          disableGutters
          className={classes.menuExpand}
          onClick={e => (expandMenuList(e, 'clients'))}
        >
          <ListItemIcon
            classes={{root: classes.icon}}
          >
            <People fontSize="inherit" />
          </ListItemIcon>
          <ListItemText
            primary="Clients"
            classes={{root: classes.text}}
            primaryTypographyProps={{color: 'inherit', variant: 'title'}}
          />
          {menusOpen.hasOwnProperty('clients') && menusOpen.clients ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse
          in={menusOpen.hasOwnProperty('clients') && menusOpen.clients}
          timeout="auto"
          unmountOnExit
        >
          <List component="div" disablePadding>
            <ListItem
              component={MyListItem}
              to="/clients/people"
              className={classes.nested}
            >
              <ListItemText primary="People" />
            </ListItem>
            <List component="div" disablePadding>
              <ListItem
                component={MyListItem}
                to="/clients/properties"
                className={classes.nested}
              >
                <ListItemText primary="Properties" />
              </ListItem>
            </List>
          </List>
        </Collapse>
        <ListItem button>
          <ListItemIcon className={classes.icon}>
            <Work />
          </ListItemIcon>
          <NavLink
            to="/invoices"
            className={classes.drawerItem}
            activeClassName={classes.activeItem}
          >
            Invoices
          </NavLink>
        </ListItem>
        <ListItem button>
          <NavLink
            to="/quotes"
            className={classes.drawerItem}
            activeClassName={classes.activeItem}
          >
            Quotes
          </NavLink>
        </ListItem>
        <ListItem button>
          <NavLink
            to="/calendar"
            className={classes.drawerItem}
            activeClassName={classes.activeItem}
          >
            Calendar
          </NavLink>
        </ListItem>
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
