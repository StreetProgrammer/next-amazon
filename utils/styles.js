import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  navbar: {
    backgroundColor: '#203040 !important',
    '& a': {
      color: '#FFF',
      marginLeft: 10,
      textDecoration: 'none',
    },
  },
  brand: {
    // fontWeight: '500 !important',
    fontSize: '1.5rem !important',
  },
  grow: {
    flexGrow: 1,
  },
  main: {
    minHeight: '80vh',
  },
  footer: {
    marginTop: '10px',
    textAlign: 'center',
  },
  section: {
    marginTop: '10px',
    marginBottom: '10px',
  },
  auth_form: {
    maxWidth: 800,
    margin: '0 auto',
  },
});

export default useStyles;
