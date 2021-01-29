import React from "react";
import Lottie from "react-lottie";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import ButtonArrow from "../components/ui/ButtonArrow";
import Typography from "@material-ui/core/Typography";
import customSoftwareIcon from "../assets/Custom Software Icon.svg";
import mobileAppsIcon from "../assets/mobileIcon.svg";
import websitesIcon from "../assets/websiteIcon.svg";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import revolutionBackground from '../assets/repeatingBackground.svg'

import animationData from "../animations/landinganimation/data.js";

const useStyles = makeStyles((theme) => ({
  animation: {
    maxWidth: "50em",
    minWidth: "21em",
    marginTop: "2em",
    marginLeft: "20%",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "30em",
    },
  },
  estimateButton: {
    ...theme.typography.estimate,
    borderRadius: 50,
    marginRight: 40,
    height: 45,
    width: 145,
    backgroundColor: theme.palette.common.orange,
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  buttonContainer: {
    marginTop: "1em",
  },
  learnButtonHero: {
    ...theme.typography.learnButton,
    fontSize: "0.9rem",
    height: 45,
    width: 145,
  },
  learnButton: {
    ...theme.typography.learnButton,
    height: 35,
    fontSize: "0.75rem",
    padding: 5,
    [theme.breakpoints.down("sm")]: {
      marginBottom: "2em",
    },
  },
  mainContainer: {
    marginTop: "5em",
    [theme.breakpoints.down("md")]: {
      marginTop: "3em",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "2em",
    },
  },
  specialText: {
    fontFamily: "Pacifico",
    color: theme.palette.common.orange,
  },
  subtitle: {
    marginBottom: "1em",
  },
  heroTextContainer: {
    minWidth: "21.5em",
    marginLeft: "1em",
    [theme.breakpoints.down("xs")]: {
      marginLeft: "0",
    },
  },
  icon: {
    marginLeft: "2em",
    [theme.breakpoints.down("xs")]: {
      marginLeft: "0",
    },
  },
  serviceContainer: {
    marginTop: "12em",
    [theme.breakpoints.down("sm")]: {
      padding: 25,
    },
  },
  revolutionBackground :{
    backgroundImage: `url(${revolutionBackground})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100%',
    width: '100%'
  },
  revolutionCard:{
    position: 'absolute',
    boxShadow: theme.shadows[10],
    borderRadius: 15,
    padding: '10em',
    [theme.breakpoints.down("xs")]: {
      paddingTop: "8em",
      paddingLeft: 0,
      paddingRight: 0,
      paddingBottom : '8em',
      borderRadius: 0,
      width: '100%'
    },
  }
}));

export default function LandingPage() {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Grid container direction="column" className={classes.mainContainer}>
      <Grid item>
        {" "}
        {/*********Hero block **********/}
        <Grid container justify="flex-end" alignItems="center" direction="row">
          <Grid sm item className={classes.heroTextContainer}>
            <Typography
              variant="h2"
              align="center"
              className={classes.subtitle}
            >
              Bringing west coastTecnology <br /> to the midwest
            </Typography>
            <Grid
              justify="center"
              className={classes.buttonContainer}
              container
            >
              <Grid item>
                <Button className={classes.estimateButton} variant="contained">
                  Free Estimate
                </Button>
              </Grid>
              <Grid item>
                <Button variant="outlined" className={classes.learnButtonHero}>
                  <span style={{ marginRight: 10 }}>Learn More</span>
                  <ButtonArrow
                    width={15}
                    height={15}
                    fill={theme.palette.common.blue}
                  ></ButtonArrow>
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid sm className={classes.animation} item>
            <Lottie options={defaultOptions} height={"100%"} width={"100%"} />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        {" "}
        {/*********Services *********/}
        <Grid
          container
          direction="row"
          justify={matchesSM ? "center" : undefined}
          className={classes.serviceContainer}
        >
          <Grid
            item
            style={{
              marginLeft: matchesSM ? 0 : "5em",
              textAlign: matchesSM ? "center" : undefined,
            }}
          >
            <Typography variant="h4">Custom Software Development</Typography>
            <Typography variant="subtitle1">
              Save Energy. Save Time. Save money.
            </Typography>
            <Typography variant="subtitle1">
              Complete igital solutions, from investigation to{" "}
              <span className={classes.specialText}>celebration.</span>
            </Typography>
            <Button variant="outlined" className={classes.learnButton}>
              <span style={{ marginRight: 10 }}>Learn More</span>
              <ButtonArrow
                width={10}
                height={10}
                fill={theme.palette.common.blue}
              ></ButtonArrow>
            </Button>
          </Grid>

          <Grid item>
            <img
              className={classes.icon}
              alt="custom software icon"
              src={customSoftwareIcon}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        {" "}
        {/*********Mobile App *********/}
        <Grid
          container
          direction="row"
          justify={matchesSM ? "center" : "flex-end"}
          className={classes.serviceContainer}
        >
          <Grid
            item
            style={{
              textAlign: matchesSM ? "center" : undefined,
            }}
          >
            <Typography variant="h4">IOS/Android development</Typography>
            <Typography variant="subtitle1">
              Extend Functionlity. Extend Access. Increase Engagement,
            </Typography>
            <Typography variant="subtitle1">
              Integrate your web experience or create a standalone app{" "}
              {matchesSM ? null : <br />} with either mobile platform.
            </Typography>
            <Button variant="outlined" className={classes.learnButton}>
              <span style={{ marginRight: 10 }}>Learn More</span>
              <ButtonArrow
                width={10}
                height={10}
                fill={theme.palette.common.blue}
              ></ButtonArrow>
            </Button>
          </Grid>

          <Grid item style={{ marginRight: matchesSM ? 0 : "5em" }}>
            <img
              className={classes.icon}
              alt="mobile apps icon"
              src={mobileAppsIcon}
            />
          </Grid>
        </Grid>
      </Grid>

      <Grid item>
        {" "}
        {/********* web *********/}
        <Grid
          container
          direction="row"
          justify={matchesSM ? "center" : undefined}
          className={classes.serviceContainer}
        >
          <Grid
            item
            style={{
              marginLeft: matchesSM ? 0 : "5em",
              textAlign: matchesSM ? "center" : undefined,
            }}
          >
            <Typography variant="h4">Websites Development</Typography>
            <Typography variant="subtitle1">
              Reach More.Discover More. Sell More.
            </Typography>
            <Typography variant="subtitle1">
              Optimized for search engines. built for speed.
            </Typography>
            <Button variant="outlined" className={classes.learnButton}>
              <span style={{ marginRight: 10 }}>Learn More</span>
              <ButtonArrow
                width={10}
                height={10}
                fill={theme.palette.common.blue}
              ></ButtonArrow>
            </Button>
          </Grid>

          <Grid item>
            <img className={classes.icon} alt="web icon" src={websitesIcon} />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
      <Grid container style={{height: '100em', marginTop:'12em'}} alignItems='center' justify="center">
        <Card className={classes.revolutionCard}>
          <CardContent>
            <Grid container direction="column" style={{ textAlign: "center" }}>
              <Grid item>
                <Typography variant="h3" gutterBottom>The Revolution</Typography>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1">
                  Visionary insights coupled with cutting edge technology is a
                  recipe for revolution.
                </Typography>
                <Button variant="outlined" className={classes.learnButtonHero}>
                  <span style={{ marginRight: 10 }}>Learn More</span>
                  <ButtonArrow
                    width={15}
                    height={15}
                    fill={theme.palette.common.blue}
                  ></ButtonArrow>
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
        <div className={classes.revolutionBackground}/>
        </Grid>
      </Grid>
    </Grid>
    //
  );
}
