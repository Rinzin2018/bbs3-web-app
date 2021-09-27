import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {makeStyles} from '@material-ui/core/styles';
import {Input, Paper} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles(theme => ({
  root: {
    borderRadius: '4px',
    alignItems: 'center',
    padding: theme.spacing(1),
    display: 'flex',
    flexBasis: 420
  },
  icon: {
    marginRight: theme.spacing(1),
    color: theme.palette.text.secondary
  },
  input: {
    flexGrow: 1,
    fontSize: '14px',
    lineHeight: '16px',
    letterSpacing: '-0.05px'
  }
}));

const Search = props => {
  const {className, onChange, onKeyDown, style, ...rest} = props;
  const classes = useStyles();

  return (
    <Paper
      {...rest}
      className={clsx(classes.root, className)}
      style={{boxShadow: 'none', border: '1px solid #c4c4c4', borderRadius: 25}}
    >
      <SearchIcon className={classes.icon}/>
      <Input
        {...rest}
        className={classes.input}
        disableUnderline
        onKeyDown={(e) => onKeyDown(e)}
        onChange={(e) => onChange(e)}
      />
    </Paper>
  );
};

Search.propTypes = {
  className: PropTypes.string,
  onChange: PropTypes.func,
  style: PropTypes.object
};
export default Search;
