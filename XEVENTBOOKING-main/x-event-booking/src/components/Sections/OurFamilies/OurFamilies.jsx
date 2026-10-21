
import { Box, Container, Grid, Typography } from "@mui/material";
import banner from '../../../assets/eventteam.png' //to be changed

export default function OurFamilies() {
    return (
        <Box pt={3} sx={{ background: 'linear-gradient(#E7F0FF, #E8F1FF)' }}>
            <Container>
                <Grid container alignItems='center' spacing={{xs:2,md:10}}>

                    <Grid item xs={12} md={6}>
                        <Typography
                            fontWeight={600}
                            color="primary.main"
                        >
                            TRACKING EVENTS FOR YOU AND YOUR TEAM.
                        </Typography>
                        <Typography variant="h2">
                            Event Tracker
                        </Typography>
                        <Typography color='#77829D' lineHeight={1.8}>
                            We provide comprehensive tools to help you track and manage your events efficiently. Whether it's a small meeting or a large conference, our platform ensures that you stay organized and informed. All your event details are handled with the utmost care and confidentiality.
                        </Typography>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Box
                            component='img'
                            src={banner}
                            width={1}
                            height='auto'
                        />
                    </Grid>

                </Grid>
            </Container>
        </Box>
    )
}
