import { Typography } from "@mui/material";
import { Container } from "@mui/system";
import Box from '@mui/material/Box';
import ImageCollage from "../ImageCollage";
import CustomizedAccordions from "../Components/Accordion";

import Paper from '@mui/material/Paper';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import BasicModal from "../Components/Modal";


function Tour() {
    return ( 
        <>
        <Container 
            sx={{
                width : 900
            }}
        >
           
           <Typography variant="h4" component='h1' marginTop={3}>
                Explore the World in Vegas
           </Typography>

           <Box sx={{marginTop : 3, display : "flex"}}>
                <img src="https://media.timeout.com/images/105124791/750/422/image.jpg" height={275} />
                <ImageCollage />
           </Box>

           <Box>
            <Typography variant="h6" component='h4' marginTop={3}>
                About this ticket
            </Typography>
            <Typography variant="paragraph" component='p' marginTop={3}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam laudantium incidunt animi ex reiciendis dolorem ea perferendis, a optio laborum! Neque, similique. Excepturi officiis adipisci optio. Nulla dolore vero corporis inventore quibusdam consectetur cupiditate quod esse earum? Repellendus, eveniet culpa.
            </Typography>
           </Box>

           <Box>
                <Typography variant="h6" marginTop={3} marginBottom={2}>
                    Frequently Asked Questions
                </Typography>
                <CustomizedAccordions />
           </Box>
    
        </Container>

        <Paper  sx={{ position : 'sticky' , bottom: 0, left: 0, right: 0 }} elevation={3}>
            <BottomNavigation>
                <BasicModal />
            </BottomNavigation>
        </Paper>
    </>
     );
}

export default Tour;