import Head from 'next/head';
import React from 'react';
import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  Link as MuiLink,
} from '@mui/material';

import useStyles from '../utils/styles';
import Link from 'next/link';

export default function Layout({ title, description, children }) {
  const classes = useStyles();
  return (
    <div>
      <Head>
        <title>{title ? `${title} - ` : ``} Project Title</title>
        {description && <meta name="description" content={description} />}
      </Head>
      <AppBar position="static" className={classes.navbar}>
        <Toolbar>
          <Link href="/" passHref>
            <MuiLink>
              <Typography className={classes.brand}>Amazona</Typography>
            </MuiLink>
          </Link>
          <div className={classes.grow}></div>
          <div>
            <Link href="/cart" passHref>
              <MuiLink>Cart</MuiLink>
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
    </div>
  );
}
