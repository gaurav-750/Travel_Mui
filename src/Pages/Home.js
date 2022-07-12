import '../App.css';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import TourCard from '../Components/TourCard';

import cities from '../data.json';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';


function Home() {
    return ( 
        <div className='App'>
            
            <Container 
                sx={{
                marginY : 5
                }}
            >

                {cities.map((city) => {
                return(
                    <>
                    <Typography 
                        variant='h4'
                        component='h2'
                        marginTop={5}
                        marginBottom={3}
                    >
                        Top {city.name} tours
                    </Typography>

                    <Grid container spacing={2}>
                        {city.tours.map((tour) => {
                        return(
                            <Link to={`${tour.id}`} style={{textDecoration:"none"}}>
                                <TourCard 
                                key={tour.id}
                                tour={tour}
                                />
                            </Link>
                        )
                        })}
                    </Grid>
                    </>
                )
                })}
            
                

            </Container>
        </div> 
     );
}

export default Home;