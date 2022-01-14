import {
  Grid,
  Typography,
  Link as MuiLink,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Select,
  MenuItem,
  Button,
  Card,
  List,
  ListItem,
} from '@mui/material';
import React, { useContext } from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';
import { Store } from '../utils/Store';
import Image from 'next/image';

export default function CartScreen() {
  const { state } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;

  const addToCartHandler = () => {};
  return (
    <Layout title="Shopping Cart">
      <Typography component="h1" variant="h1">
        Shopping Cart
      </Typography>
      {cartItems.length === 0 ? (
        <div>
          Cart Is Empty{' '}
          <Link href="/" passHref>
            <MuiLink>
              <Typography>Go Shopping</Typography>
            </MuiLink>
          </Link>
        </div>
      ) : (
        <Grid container spacing={1}>
          <Grid item md={9} xs={12}>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Image</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell align="right">Quantity</TableCell>
                    <TableCell align="right">Price</TableCell>
                    <TableCell align="right">Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {cartItems.map((item) => (
                    <TableRow key={item._id}>
                      <TableCell>
                        <Link href={`/product/${item.slug}`} passHref>
                          <MuiLink>
                            <Image
                              alt={item.name}
                              src={item.image}
                              width={50}
                              height={50}
                            ></Image>
                          </MuiLink>
                        </Link>
                      </TableCell>
                      <TableCell>
                        <Link href={`/product/${item.slug}`} passHref>
                          <MuiLink>
                            <Typography>{item.name}</Typography>
                          </MuiLink>
                        </Link>
                      </TableCell>
                      <TableCell align="right">
                        <Select value={item.quantity}>
                          {[...Array(item.countInStock).keys()].map((x) => (
                            <MenuItem key={x + 1} value={x + 1}>
                              {x + 1}
                            </MenuItem>
                          ))}
                        </Select>
                      </TableCell>
                      <TableCell align="right">${item.price}</TableCell>
                      <TableCell align="right">
                        <Button variant="contained" color="primary">
                          x
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
          <Grid item md={3} xs={12}>
            <Card>
              <List>
                <ListItem>
                  <Typography variant="h2">
                    Subtotal ({cartItems.reduce((a, c) => a + c.quantity, 0)}{' '}
                    Items {'- $'}
                    {cartItems.reduce((a, c) => a + c.quantity * c.price, 0)})
                  </Typography>
                </ListItem>
                <ListItem>
                  <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    onClick={addToCartHandler}
                  >
                    Checkout
                  </Button>
                </ListItem>
              </List>
            </Card>
          </Grid>
        </Grid>
      )}
    </Layout>
  );
}
