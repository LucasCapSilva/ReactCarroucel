import React from 'react';
import { Typography, Box, Grid, Button } from '@material-ui/core';
import './Home.css';
import CarouselComponent from '../../components/carousel/CarouselComponent';

function Home() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" className='caixa'>
                <Grid item xs={12}>

                    <Box display="flex" alignItems="center"
                        justifyContent="center" paddingX={20} height={300}>
                        <Box>
                            <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className='titulo'>Seja bem vindo(a)!</Typography>
                            <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className='titulo'>expresse aqui os seus pensamentos e opiniões!</Typography>
                            <Box display="flex" justifyContent="center" marginTop={5}>
                                <Box marginRight={1} >
                                </Box>
                                <Button variant="outlined" className='botao'>Ver Postagens</Button>
                            </Box>
                        </Box>

                    </Box>

                </Grid>

                <Grid xs={12} className='postagens'>
                    <Box marginTop={5} padding={2}>
                        <CarouselComponent />
                    </Box>

                </Grid>
            </Grid>
        </>
    );
}

export default Home;