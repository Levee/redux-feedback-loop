import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AdminTable from '../AdminTable/AdminTable';

const useStyles = makeStyles(theme => ({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: theme.palette.primary.contrastText,
    height: 48,
    padding: `0, ${theme.spacing(2)}`,
  },
  para: {
    backgroundColor: theme.palette.primary.main,
    borderRadius: 3,
  }
}));

const Admin = () => {
  const classes = useStyles();
  return (
    <>
      <AdminTable />
    </>
  )
}

export default Admin;