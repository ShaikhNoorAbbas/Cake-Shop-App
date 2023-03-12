import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import Link from 'next/link';
import Image from 'next/image';
import cake from '../../Images/cakeLogo.png';
import { useSession, signOut } from 'next-auth/react';
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
import Badge from '@mui/material/Badge';
import { useSelector } from "react-redux";
import style from './nav.module.css';
const Navbar = (props) => {
    const { data } = useSession();
    const cart = useSelector((state) => state.cart)
    return (
        <>
            {props.children}
            <AppBar position="fixed">
                <Toolbar>
                    <Link href="/"><Image src={cake} width={40} height={40} alt="Cake" className={style.img} /></Link>
                    <Typography sx={{ flexGrow: '1', fontFamily: 'san-serif', fontSize: '30px' }} className={style.header}>
                        <Link href='/'>Cake-Shop</Link>
                    </Typography>
                    <Typography variant="h5" component="span" fontFamily="san-serif" className={style.header} sx={{ marginRight: '20px' }}>
                        {data ? `Hii,👋${data.user.name}` : null}
                    </Typography>
                    <Button>
                        <Link href="/cart">
                            <Badge badgeContent={!data ? null : (cart.length > 0 ? cart.length : null)} max={10} anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }} sx={{ color: "white", mr: 2 }}>
                                <ShoppingCartTwoToneIcon className={style.cart} sx={{ color: 'white', mt: 0.6 }} fontSize={'large'} />
                            </Badge>
                        </Link>
                    </Button>
                    {
                        data ?
                            <>
                                <Button onClick={() => signOut()} variant='text' className={style.btn} sx={{ color: 'inherit', fontSize: 'inherit', fontFamily: 'inherit', border: '2px solid white' }}>Sign-Out</Button>
                            </> :
                            <>
                                <Link href='/login'>
                                    <Button variant='text' className={style.btn} sx={{ color: 'inherit', fontSize: 'inherit', fontFamily: 'inherit', border: '2px solid white' }}>Get-Started</Button>
                                </Link>
                            </>
                    }
                </Toolbar>
            </AppBar>
        </>
    );
}

export default Navbar;