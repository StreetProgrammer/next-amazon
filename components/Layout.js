import Head from 'next/head';
import React, { useContext, useEffect } from 'react';
import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  Link as MuiLink,
  CssBaseline,
  Switch,
  Badge,
} from '@mui/material';

import useStyles from '../utils/styles';
import Link from 'next/link';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Store } from '../utils/Store';
import Cookies from 'js-cookie';

export default function Layout({ title, description, children }) {
  const { state, dispatch } = useContext(Store);
  const { darkMode, cart } = state;

  useEffect(() => {
    var isDark = Cookies.get('darkMode') || 'OFF';
    dispatch({ type: isDark === 'ON' ? 'DARK_MODE_ON' : 'DARK_MODE_OFF' });
    // console.log('useEffect => ', isDark, darkMode);
  }, []);

  const theme = createTheme({
    typography: {
      h1: {
        fontSize: '1.6rem',
        fontWeight: '400',
        margin: '1rem 0',
      },
      h2: {
        fontSize: '1.4rem',
        fontWeight: '400',
        margin: '1rem 0',
      },
    },
    palette: {
      mode: darkMode ? 'dark' : 'light',
      // type: darkMode ? 'dark' : 'light',
      primary: {
        main: '#F0C000',
      },
      secondary: {
        main: '#208080',
      },
    },
  });
  const classes = useStyles();
  const darkModeChangeHandler = () => {
    dispatch({ type: darkMode ? 'DARK_MODE_OFF' : 'DARK_MODE_ON' });
    const newDarkMode = !darkMode;
    // console.log('newDarkMode => ', newDarkMode);
    Cookies.set('darkMode', newDarkMode ? 'ON' : 'OFF');
  };
  return (
    <div>
      <Head>
        <title>{title ? `${title} - ` : ``} Project Title</title>
        {description && <meta name="description" content={description} />}
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar position="static" className={classes.navbar}>
          <Toolbar>
            <Link href="/" passHref>
              <MuiLink>
                <Typography className={classes.brand}>Amazona</Typography>
              </MuiLink>
            </Link>
            <div className={classes.grow}></div>

            <div>
              <Switch
                checked={darkMode}
                onChange={darkModeChangeHandler}
              ></Switch>
              <Link href="/cart" passHref>
                <MuiLink>
                  {cart.cartItems.length > 0 ? (
                    <Badge color="primary" badgeContent={cart.cartItems.length}>
                      Cart
                    </Badge>
                  ) : (
                    'Cart'
                  )}
                </MuiLink>
              </Link>
              <Link href="/login" passHref>
                <MuiLink>Login</MuiLink>
              </Link>
            </div>
          </Toolbar>
        </AppBar>
        <Container className={classes.main}>{children}</Container>
        <footer className={classes.footer}>
          <Typography>all right reserved</Typography>
        </footer>
      </ThemeProvider>
    </div>
  );
}
