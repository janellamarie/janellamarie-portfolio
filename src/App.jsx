import './App.css'
import { createTheme, styled, ThemeProvider } from '@mui/material/styles';
import { AppBar, Box, Button, Grid, Typography } from'@mui/material';

const theme = createTheme({
  palette: {
    red: '#9E4A2E',
    orange: '#F2865E',
    brown: '#735D55',
    highlight: '#DDDFE9',
    lighter_highlight: '#F5F7FF'
  },
  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          title: 'h1',
          subtitle: 'h2',
          body1: 'span',
          body2: 'span',
        },
      },
    },
  },
});

const StyledButton = styled(Button)(({ theme }) => (
  {
    color: 'black',
    paddingRight: '1em',
    paddingLeft: '1em',
    borderRadius: 0,
    '&:hover': {
      backgroundColor: theme.palette.lighter_highlight,
    },
    '&.Mui-active': {
      backgroundColor: theme.palette.lighter_highlight,
    }
  }
))

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Grid container>
          <Grid item xs={12}>
            <Navigation />
          </Grid>
          <Grid item xs={12}>
            <Body />
          </Grid>
        </Grid>
      </ThemeProvider>
    </>
   
  )
}

function Navigation() {
  return (
    <AppBar 
      component='nav'
      position='sticky' 
      sx={{backgroundColor:theme.palette.highlight}}
    >
      <Grid 
        container 
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{padding:'1em'}}
      >
        <Grid item>
          <StyledButton fullWidth>About Me</StyledButton>
        </Grid>
        <Grid item>
          <StyledButton fullWidth>Experience</StyledButton>
        </Grid>
        <Grid item>
          <StyledButton fullWidth>Skills</StyledButton>
        </Grid>
      </Grid>
    </AppBar>
  )
}

function Body() {
  return(
    <Box sx={{
        paddingTop:'1em',
        paddingBottom:'2em',
        marginBottom:'2em'}}>
      <Typography variant='title'>
        Hi there! 👋🏻
      </Typography>
      <Typography variant='h6'>
        {`I'm`} <Box component='span' fontWeight='fontWeightBold'>Janella Co</Box>!
      </Typography>
      <Typography variant='body1'>
        A <strong>full-stack software engineer</strong> based in Lutz, FL. I am currently looking for <strong>associate-level</strong> software engineering or web developer opportunities! 
      </Typography>
    </Box>
  )
}

export default App
