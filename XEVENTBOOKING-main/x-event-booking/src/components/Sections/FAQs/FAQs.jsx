
import { Box, Container, Grid, Typography } from "@mui/material";
import faqBanner from '../../../assets/eventfaq.jpg'
import CustomizedAccordions from "../../Accordion/Accordion";

export default function FAQs() {

    const faqs = [
        {
            question: 'Why choose our event tracking platform?',
            answer: 'Our platform offers comprehensive tools to help you track and manage your events efficiently, ensuring you stay organized and informed.'
        },
        {
            question: 'What makes us different from others?',
            answer: 'We provide a user-friendly interface, real-time updates, and customizable features to meet your specific event tracking needs.'
        },
        {
            question: 'How do we ensure data security?',
            answer: 'We use advanced security measures to protect your event data, ensuring it is handled with the utmost care and confidentiality.'
        },
        {
            question: 'How can I get support for my events?',
            answer: 'Our support team is available 24/7 to assist you with any questions or issues you may have regarding your events.'
        }
    ]

    return (
        <Box py={4}>
            <Container maxWidth='xl'>
                <Typography color='primary.main' fontWeight={600} textAlign='center'>
                    Get Your Answer
                </Typography>
                <Typography textAlign='center' variant='h2' mb={2}>
                    Frequently Asked Questions
                </Typography>
                <Grid container alignItems='center' spacing={5}>

                    <Grid item xs={12} md={6}>
                        <Box
                            src={faqBanner}
                            component='img'
                            width={1}
                            height='auto'
                        />
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Box maxWidth={450}>
                            <CustomizedAccordions data={faqs} />
                        </Box>
                    </Grid>

                </Grid>
            </Container>
        </Box>
    )
}
