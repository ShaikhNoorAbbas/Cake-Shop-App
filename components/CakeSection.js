import { Typography, Card, CardMedia, CardContent, Rating } from '@mui/material';
import { Stack } from '@mui/system';
const CakeSection = () => {
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
    ]
    return (
        <>
            <Typography variant='h3' mt={6} mb={6} fontFamily="san-serif">Cakes- </Typography>
            <Stack direction="row" justifyContent="space-evenly" sx={{ flexWrap: 'wrap' }}>
                {
                    cakes.map((cakes) => {
                        return (
                            <Card sx={{ maxWidth: "300px", mb: 5 }} key={cakes.id}>
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={cakes.image}
                                    alt="Out of Stocks"
                                />
                                <CardContent>
                                    <Typography variant="h5" fontFamily="san-serif">{cakes.name}</Typography>
                                    <Rating value={cakes.rating} readOnly />
                                </CardContent>
                            </Card>
                        )
                    })
                }
            </Stack>
        </>
    );
}
export default CakeSection;