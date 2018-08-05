import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import Logo from '../../assets/images/Contact.png';
import Name from '../../assets/images/Servicepad.png';

const styles = {
  images: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    height: '30px',
    width: 'auto',
  },
  text: {
    height: '15px',
  },
  spacing: {
    paddingLeft: 5,
  },
};

const BrandingImage = (props) => {
  const { classes } = props;

  return (
    <Link to="/">
      <div className={classes.images}>
        <img className={classes.logo} alt="Logo" src={Logo} />
        <img className={classNames(classes.text, classes.spacing)} alt="Logo" src={Name} />
      </div>
    </Link>
  );
};

BrandingImage.defaultProps = {};

BrandingImage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BrandingImage);
