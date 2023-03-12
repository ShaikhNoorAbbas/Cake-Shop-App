import { Button, Rating, Typography, Container, Box, Stack, Card, CardMedia, CardContent, CardActions } from '@mui/material';
import ShoppingBagSharpIcon from '@mui/icons-material/ShoppingBagSharp';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import Head from 'next/head';
import { remove } from '../featured/cartSlice';
import { useSelector, useDispatch } from 'react-redux';
import style from '../styles/login.module.css';
import Navbar from '../layouts/Navbar';
const CartPage = () => {
  const data = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const handle = (item) => {
    dispatch(remove(item));
  }
  return (
    <>
      <Head>
        <title>Cart</title>
      </Head>
      <Container>
        <Box sx={{ mt: 10, mb: 6 }} className={style.order}>
          <Typography variant='h4' sx={{ fontFamily: 'san-serif' }}>Cakes in Your Cart <ShoppingBagSharpIcon color='primary' fontSize='large' /> ─ {data.length} </Typography>
        </Box>
        <Stack direction="row" sx={{ flexWrap: 'wrap', justifyContent: 'space-evenly' }}>
          {
            data.map((cake) => {
              return (
                <Card sx={{ maxWidth: '300px', mb: 5 }} key={cake.id}>
                  <CardMedia
                    component="img"
                    height="200px"
                    image={cake.image}
                    alt="Out of Stock"
                  />
                  <CardContent>
                    <Typography>{cake.name}</Typography>
                    <Rating value={cake.rating} readOnly />
                  </CardContent>
                  <CardActions>
                    <Button variant="outlined" onClick={() => handle(cake.id)} fullWidth endIcon={<RemoveShoppingCartIcon />}>Remove from Cart</Button>
                  </CardActions>
                </Card>
              )
            })
          }
        </Stack>
      </Container>
    </>
  )
}

export default CartPage;