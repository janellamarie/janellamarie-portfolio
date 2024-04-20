import './App.css'
import { createTheme, styled, ThemeProvider } from '@mui/material/styles';
import { AppBar, Box, Button, Grid, Typography } from'@mui/material';
import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator } from '@mui/lab';
import { Routes, Route, Link } from "react-router-dom";
import photo from './assets/20230218_170648 icon.jpg';

// icons
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import DownloadIcon from '@mui/icons-material/Download';

const theme = createTheme({
  palette: {
    red: '#9E4A2E',
    orange: '#F2865E',
    brown: '#735D55',
    highlight: '#DDDFE9',
    lighter_highlight: '#F5F7FF'
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
      color: theme.palette.lighter_highlight.red,
    },
    '&.Mui-active': {
      backgroundColor: theme.palette.lighter_highlight,
    }
  }
))

const SkillButton = styled(Button)(({ theme }) => (
  {
    color: 'white',
    paddingRight: '1em',
    paddingLeft: '1em',
    borderRadius: 20,
    backgroundColor: theme.palette.brown,
    pointerEvents: 'none',
    textTransform: 'none',
    width: '13em'
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
                Home
              </Link>
            </StyledButton>
        </Grid>
        <Grid item>
          <StyledButton fullWidth>
            <Link to='/'>
              About Me
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
        <Grid item>
          <StyledButton fullWidth>
            <Link to='/experience'>
              Experience
            </Link>
          </StyledButton>
        </Grid>
      </Grid>
    </AppBar>
  )
}

function Home() {
  return(
    <Grid container 
      direction="row"
      justifyContent="center"
      alignItems="flex-star"
      sx={{margin:"1em", paddingTop:"3em"}}
    >
      <Grid item xs={2} md={1.5}>
        <img src={photo} style={{height: "10em", width: "10em"}} />
      </Grid>
      <Grid item xs={5}>
        <Box>
          <Typography variant='h4'>Hi there! 👋🏻</Typography>
          <Typography variant='h3'>
            {`I'm`} <Box component='span' fontWeight='fontWeightBold'>Janella Marie Co</Box>.
          </Typography>
          <Typography>
            A <Box component='span' fontWeight='fontWeightBold'>full-stack software engineer</Box> based in Lutz, FL. I am currently looking for <Box component='span' fontWeight='fontWeightMedium'>associate-level</Box> software engineering or web developer opportunities! 
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={6}>
        <Contact />
      </Grid>
    </Grid>
  )
}

function Contact() {
  return( 
    <Grid container
      direction="row"
      justifyContent="center"
      alignItems="center"
      sx={{paddingTop:"2em"}}
      spacing={3}
    >
      <Grid item>
        <Button>
          <GitHubIcon sx={{paddingRight:"5px"}} />
          GitHub
        </Button>
      </Grid>
      <Grid item>
        <Button>
          <LinkedInIcon sx={{paddingRight:"5px"}} />
          LinkedIn
        </Button>
      </Grid>
      <Grid item>
        <Button>
          <EmailIcon  sx={{paddingRight:"5px"}}/>
          Email
        </Button>
      </Grid>
      <Grid item>
        <Button>
          <DownloadIcon sx={{paddingRight:"5px"}} />
          Resume
        </Button>
      </Grid>
    </Grid>
  )
  
}

function Skills() {
  return (
    <>
      <Typography variant='h4'>Skills</Typography>
      <Grid container sx={{width:'80em', height:'80em'}}>
        <Grid item>
          <Typography variant='h5'>
            Languages
          </Typography>
          <Grid container 
            spacing={1}
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
          >
            {createLanguagesButtons()}
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}

function createLanguagesButtons() {
  var languages = ['JavaScript', 'TypeScript', 'Java', 'Go', 'Ruby', 'HTML', 'Python', 'C++'] 
  const buttons = []
  for (const l of languages) {
    buttons.push(
      <Grid item>
        <SkillButton fullWidth>
          {l}
        </SkillButton>
      </Grid>
    )
  }
  return (buttons)
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
