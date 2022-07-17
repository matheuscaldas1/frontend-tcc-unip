import { styled } from "@material-ui/styles";
import {
    Typography
} from "@mui/material";

export const CustomizedTypography = styled(Typography)({
    textDecoration: 'none',
    mr: 2,
    fontFamily: 'monospace',
    fontWeight: 700,
    letterSpacing: '.3rem',
    color: 'inherit',
    display: 'flex',
});