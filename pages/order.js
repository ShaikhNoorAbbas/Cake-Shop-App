import { Box, Typography, Stack, Card, Button, CardMedia, CardContent, Rating } from "@mui/material";
import { Container } from "@mui/system";
import Head from 'next/head';
import CardActions from '@mui/material/CardActions';
import AddShoppingCartSharpIcon from '@mui/icons-material/AddShoppingCartSharp';
import { useDispatch } from "react-redux";
import { add } from '../featured/cartSlice';
import style from '../styles/login.module.css';
import Navbar from "../layouts/Navbar";
const OrderUs = () => {
    const dispatch = useDispatch();
    const cakes = [
        {
            id: 1, name: "Chocolate", image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1089&q=80",
            rating: 4,
        },
        {
            id: 2, name: "Red Velvet", image: "https://images.unsplash.com/photo-1616541823729-00fe0aacd32c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1114&q=80",
            rating: 3
        },
        {
            id: 3, name: "Rose", image: "https://images.unsplash.com/photo-1519340333755-56e9c1d04579?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            rating: 4
        },
        {
            id: 4, name: "Butter Scotch", image: "https://images.unsplash.com/photo-1542826438-bd32f43d626f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1292&q=80",
            rating: 3
        },
        {
            id: 5, name: "Strawberry", image: "https://images.unsplash.com/photo-1611293388250-580b08c4a145?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1138&q=80",
            rating: 4,
        },
        {
            id: 6, name: "Mix fruit", image: "https://images.unsplash.com/photo-1626803775151-61d756612f97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            rating: 5
        },
        {
            id: 7, name: "Strawberry Delight Cake", image: "https://images.unsplash.com/photo-1556953410-b77c8b035596?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTl8fGNha2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            rating: 5
        },
        {
            id: 8, name: "Apple Pie", image: "https://plus.unsplash.com/premium_photo-1666353534539-32710fad71ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njd8fGNha2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            rating: 4
        },
        {
            id: 9, name: "Chocolate Cup Cake", image: "https://images.unsplash.com/photo-1574085733277-851d9d856a3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nzd8fGNha2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            rating: 3
        },
        {
            id: 10, name: "Russian Honey Cake", image: "https://images.unsplash.com/photo-1571050045617-cbbd5e68d181?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTA2fHxjYWtlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            rating: 4
        },
        {
            id: 11, name: "Mini Cakes", image: "https://images.unsplash.com/photo-1612809077979-c4343e36c423?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTE3fHxjYWtlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            rating: 3
        },
        {
            id: 12, name: "Blossom Cake", image: "https://images.unsplash.com/photo-1619413922783-13d5a4ed3e84?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTQ2fHxjYWtlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            rating: 5
        },

    ]
    const handle = (cake) => {
        console.log(cake);
        dispatch(add(cake));
    }
    return (
        <>
            <Head>
                <title>List of Cakes</title>
            </Head>
            <Container>
                <Box sx={{ mt: 10 }} className={style.order}>
                    <Typography variant='h4' mt={6} mb={6} >Cakes- </Typography>
                    <Stack direction="row-reverse" sx={{ flexWrap: "wrap", justifyContent: "space-evenly" }}>
                        {
                            cakes.map((cake) => {
                                return (
                                    <Card sx={{ maxWidth: '300px', mb: 5 }} key={cake.id}>
                                        <CardMedia
                                            component='img'
                                            height='200px'
                                            image={cake.image}
                                            alt="Out of Stock"
                                        />
                                        <CardContent>
                                            <Typography variant="h5" fontFamily="san-serif">{cake.name}</Typography>
                                            <Rating value={cake.rating} readOnly />
                                        </CardContent>
                                        <CardActions>
                                            <Button onClick={() => handle(cake)} variant="outlined" endIcon={<AddShoppingCartSharpIcon />} fullWidth>Add to Cart</Button>
                                        </CardActions>
                                    </Card>
                                )
                            })
                        }
                    </Stack>
                </Box>
            </Container>
        </>
    )
}

export default OrderUs;