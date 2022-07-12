import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Rating from '@mui/material/Rating';

//for custom themes:
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

const theme = createTheme({
    //specify the components we want to customize:
    components : {
        MuiTypography : {
            variants : [
                // { //1 object
                //     props : {
                //         variant : "body2"
                //     },
                //     style : {
                //         fontSize : 11,
                //     }
                // },
                { //1 object
                    props : {
                        variant : "body3"
                    },
                    style : {
                        fontSize : 11
                    }
                },
            ]
        }
    }
})

const TourCard = (props) => {
    
    const {tour} = props;
    
    return (  
        <Grid item xs={3}>
            <ThemeProvider theme={theme}>
            <Paper elevation={2} 
                sx={{
                    width : "270px",
                    margin : 1
                }}
            >
                <img className='img' src={tour.image} />

                <Box paddingX={1}>
                    <Typography variant='subtitle1' component='h2'>
                        {tour.name}
                    </Typography>

                    <Box
                        sx={{
                            display : 'flex',
                            alignItems : 'center'
                        }}
                    >
                        <AccessTimeIcon 
                            sx={{
                                width : 15.5,
                            }}
                        />
                        <Typography variant='body2' component='p' marginLeft={.5}>
                            {tour.duration} hours
                        </Typography>
                    </Box>
                    
                    <Box
                        sx={{
                            marginTop : 2,
                            display : 'flex',
                            alignItems : 'center'
                        }}
                    >
                        <Rating name="read-only" size="small" value={4.5} precision={0.5} readOnly />
                        <Typography variant='body2' component='p' marginLeft={.5}>
                            {tour.rating}
                        </Typography>
                        <Typography variant='body3' component='p' marginLeft={1.5}>
                            ({tour.numberOfReviews} reviews)
                        </Typography>
                    </Box>

                    <Box marginTop={1.5}>
                        <Typography variant='h6'>
                            From ${tour.price}
                        </Typography>
                    </Box>
                </Box>
            </Paper>
            </ThemeProvider> 
        </Grid>
    );
}

export default TourCard;