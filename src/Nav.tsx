import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import classes from './Style.css';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

export default function Nav() {
    const theme = useTheme().palette;
    const navStyle = {
        background: theme.primary.dark,
        color: theme.primary.contrastText,
        marginBottom: '20px',
        borderRadius: '0px 0px 4px 4px',
        padding: '2em'
    };

    return (
        <Container maxWidth={false} style={navStyle}>
            <Typography variant="h4" align='center'>
                Spacestagram
            </Typography>
            {/* <Button color='secondary'>Liked Media</Button> */}
        </Container>
    );
}

