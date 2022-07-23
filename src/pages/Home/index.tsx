import React from 'react';
import {
    Box,
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Paper,
    Typography,
} from '@mui/material';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Perguntas from '../../components/Accordion';

import { useStyles } from './styles';

const Home: React.FC = () => {
    const classes = useStyles();

    return (
        <>
            <Header />

            <Card elevation={0} square>
                <CardMedia
                    component='img'
                    height='500'
                    image='https://image.shutterstock.com/image-illustration/cute-robot-hand-hello-gesture-600w-2099998849.jpg'
                    alt='robo1'
                />
                <CardContent className={classes.primaryCardContent}>
                    <Typography
                        gutterBottom
                        variant="h4"
                        component="div"
                        textAlign='center'
                    >
                       IA Detectora de Fake news
                    </Typography>
                    <Typography
                        className={classes.primaryCardText}
                        variant='body2'
                        textAlign='center'
                        paragraph
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit amet condimentum justo, eu dignissim dui. Sed ac mauris eu quam consectetur iaculis. Morbi sed dictum elit. Sed euismod nisl non convallis feugiat. Cras facilisis est vitae risus dictum consectetur. Aenean fringilla augue vel sollicitudin faucibus. Nullam vel molestie mauris, sit amet maximus erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris magna eros, dignissim quis magna ut, feugiat tincidunt urna.

                        Cras nec magna eu ligula mollis cursus. Praesent euismod tincidunt pulvinar. Nulla non lacinia neque. Donec elementum risus vitae hendrerit rutrum. In luctus, nunc ac eleifend sodales, ante velit scelerisque dui, quis malesuada nisi quam quis dui. Aliquam id elit et libero mattis sodales. Mauris eget tortor id libero blandit posuere. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce rutrum justo ut laoreet molestie.
                    </Typography>

                </CardContent>
            </Card>

            <Card  className={classes.secondCard} elevation={0} square>
                <CardMedia
                    component='img'
                    height='600'
                    image='https://image.shutterstock.com/image-illustration/cute-robot-hand-hello-gesture-600w-2099998849.jpg'
                    alt='robo1'
                />
                <CardContent>
                    <Typography variant='body2' paragraph>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit amet condimentum justo, eu dignissim dui. Sed ac mauris eu quam consectetur iaculis. Morbi sed dictum elit. Sed euismod nisl non convallis feugiat. Cras facilisis est vitae risus dictum consectetur. Aenean fringilla augue vel sollicitudin faucibus. Nullam vel molestie mauris, sit amet maximus erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris magna eros, dignissim quis magna ut, feugiat tincidunt urna.

                        Cras nec magna eu ligula mollis cursus. Praesent euismod tincidunt pulvinar. Nulla non lacinia neque. Donec elementum risus vitae hendrerit rutrum. In luctus, nunc ac eleifend sodales, ante velit scelerisque dui, quis malesuada nisi quam quis dui. Aliquam id elit et libero mattis sodales. Mauris eget tortor id libero blandit posuere. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce rutrum justo ut laoreet molestie.
                    </Typography>

                </CardContent>
            </Card>

            <Box>
                <Typography variant='h6'>Perguntas Frequentes</Typography>
                <Perguntas />
            </Box>

            <Footer />
        </>
    )
}

export default Home;