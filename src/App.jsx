import './App.css'
import { createTheme, styled, ThemeProvider } from '@mui/material/styles';
import { AppBar, Box, Button, Grid, Typography } from'@mui/material';
import {  Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator } from '@mui/lab';
import { Routes, Route, Link } from "react-router-dom";

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
          heading: 'h1',
          subheading: 'h2',
          short_text: 'h3',
          body: 'span',
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
            <Routes>
              <Route path="/"  element={<Home />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/experience" element={<Experience />} />
            </Routes>
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
          <StyledButton fullWidth>
            <Link to='/'>
              About Me
            </Link>
          </StyledButton>
        </Grid>
        <Grid item>
          <StyledButton fullWidth>
            <Link to='/experience'>
              Experience
            </Link>
          </StyledButton>
        </Grid>
        <Grid item>
          <StyledButton fullWidth>
            <Link to='/skills'>
              Skills
            </Link>
          </StyledButton>
        </Grid>
      </Grid>
    </AppBar>
  )
}

function Home() {
  return(
    <Box sx={{
        paddingTop:'1em',
        paddingBottom:'2em',
        marginBottom:'2em'}}>
      <Typography variant='heading'>
        Hi there! 👋🏻
      </Typography>
      <Typography variant='subheading'>
        {`I'm`} <Box component='span' fontWeight='fontWeightStrong'>Janella Co</Box>!
      </Typography>
      <Typography variant='short_text'>
        A <Box component='span' fontWeight='fontWeightBold'>full-stack software engineer</Box> based in Lutz, FL. I am currently looking for <Box component='span' fontWeight='fontWeightStrong'>associate-level</Box> software engineering or web developer opportunities! 
      </Typography>
      <Typography variant='body'>
        I am originally from the Philippines and moved to the United States in 2018. I studied at De La Salle Unviversity in 
        Manila for a bit, before transferring to Hillsborough Community College (HCC) for my Associates degree.
        After completing my Associates, I transferred to University of South Florida (USF) for my {`Bachelor's`} degree in Computer Science.
        I graduated from USF in May 2020.         
      </Typography>
      <Typography variant='body'>
        My first exposure to web development was in sixth grade–where we were taught HTML and CSS. Since then 
      </Typography>
    </Box>
  )
}

function Skills() {
  return (
    <>
      <Grid>
        <p>My skills will go here!</p>
      </Grid>
    </>
  )
}

function Experience() {
  return (
    <>
      <Grid>
        <Grid item>
          <Typography variant='h4'>Experience</Typography>
        </Grid>
        <Grid item>
          <Timeline position='alternate'>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>GitHub</TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot />
              </TimelineSeparator>
              <TimelineContent>Bashpole Software, Inc.</TimelineContent>
            </TimelineItem>
          </Timeline>
        </Grid>
      </Grid>
    </>
  )
}
export default App
