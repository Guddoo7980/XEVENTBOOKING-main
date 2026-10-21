// CRIO_SOLUTION_START_MODULE_ONE
import { Link, Stack } from "@mui/material";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

export default function FooterLink({ children }) {
    return (
        <Link underline="none" color='#fff' fontWeight={300} fontSize={14}>
            <Stack direction='row' gap={0.5}>
                <KeyboardArrowRightIcon />
                {children}
            </Stack>
        </Link>
    )
}
// CRIO_SOLUTION_END_MODULE_ONE