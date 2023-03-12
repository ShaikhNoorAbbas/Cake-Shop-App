import { Typography, Grid, Button } from '@mui/material';
import Link from 'next/link';
import CakeIcon from '@mui/icons-material/Cake';
import Cake from '../Images/good.png';
import Image from 'next/image';
const Intro = () => {
    return (
        <Grid container direction="row" alignItems="center">
            <Grid item xs={12} sm={6} md={6} order={{ xs: 2, sm: 1 }}>
                <Typography variant='h3' fontFamily="san-serif">Welcome to Our Cake-Shop</Typography>
                <Typography variant='h5' fontFamily="san-serif">We Have Best Cakes!!!</Typography>
                <Link href='/order'>
                    <Button startIcon={<CakeIcon />} variant="contained" sx={{ borderRadius: '20px', fontFamily: 'san-serif' }}>Order Now</Button>
                </Link>
            </Grid>
            <Grid item xs={12} sm={6} md={6} order={{ xs: 1, sm: 2 }}  >
                <Image style={{ marginTop: '90px' }} src={Cake} width={500} height={500} alt="No Cake Found" />
            </Grid>
        </Grid >
    );
}

export default Intro;
