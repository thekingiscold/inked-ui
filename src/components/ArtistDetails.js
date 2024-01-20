import {React, useState, useEffect} from 'react'
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Rating from '@mui/material/Rating';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Carousel from "react-bootstrap/Carousel";
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';


export default function ArtistDetails() {
  
  function TabPanel(props) {

    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `vertical-tab-${index}`,
      'aria-controls': `vertical-tabpanel-${index}`,
    };
  }

  const [value, setValue] = useState(1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return (
    <>
    <div className="container d-flex flex-wrap" style={{paddingTop: "20px"}}>
    <Grid container spacing={2}>
      <Grid item xs={4} >
        <Paper elevation={3}>
        <Box sx={{ height: 500 }}>
        <Card style={{height: "500px"}}>
            <CardMedia
              component="img"
             
              image="https://manofmany.com/wp-content/uploads/2022/01/13-Best-Tattoo-Shops-and-Artists-in-Adelaide-Black-Diamond-Tattoo-1200x900.jpeg"
              alt="green iguana"
            />
            <CardContent>
              <Grid item xs={4} spacing={2}>
              <Typography gutterBottom variant="h5" component="div">
                John Doe
              </Typography>
              </Grid>
              <Grid item xs={8} >
              <Typography variant="body1" color="text.secondary" style={{paddingBottom: "10px"}}>
                Frazer Town, Bangalore
              </Typography>
              </Grid>
              <Typography variant="body1" color="text.secondary" style={{paddingBottom: "10px"}}>
                Mon, Tue, Fri
              </Typography>
              <Grid item xs={5} >
              <Rating
                name="customized-color"
                value={4}
                precision={0.5}
                icon={<FavoriteIcon fontSize="inherit" style={{ color: 'red' }} />}
                emptyIcon={<FavoriteBorderIcon fontSize="inherit" style={{ color: 'red' }} />}
                readOnly
              />
              </Grid>
              {/* <Button style={{marginTop: "5px"}} variant="outlined" color='secondary'>Bookmark</Button> */}
            </CardContent>
        </Card>
        </Box>
        </Paper>
      </Grid>
      <Grid item xs={8}>
        <Box sx={{ height: 500, overflowY: 'scroll' }}>
            <ImageList variant="masonry" cols={3} gap={2}>
              {itemData.map((item) => (
                <ImageListItem key={item.img}>
                  <img
                    srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    src={`${item.img}?w=248&fit=crop&auto=format`}
                    alt={item.title}
                    loading="lazy"
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </Box>
      </Grid>
      <Grid item xs={4}>
        <Grid item xs={12}>
          <h2 style={{paddingTop: "10px"}}>
                <span style={{ color: "red" }}>Epic</span> Skin Stories
          </h2> 
        </Grid>
        <Grid item xs={12} style={{height: "400px"}}>
          <Carousel interval={null} style={{width: "100%"}}>
            <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://i.pinimg.com/originals/dd/54/cc/dd54ccd547eaa128d4e24c3b4bbf2ec8.jpg" // Placeholder image URL
              alt="First slide"
              style={{ height: "396px", objectFit: 'cover', paddingBottom: '10px' }}
            />
            </Carousel.Item>
            <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://blog.newoldman.com.br/wp-content/uploads/2020/04/Tatuagem-masculina-no-pescoco-25.jpg" // Placeholder image URL
              alt="First slide"
              style={{ height: "396px", objectFit: 'cover', paddingBottom: '10px' }}
            />
            </Carousel.Item>
            <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://i.pinimg.com/originals/ed/41/eb/ed41eb1bee16221e84bd553484f08259.jpg" // Placeholder image URL
              alt="First slide"
              style={{ height: "396px", objectFit: "cover", paddingBottom: '10px' }}
            />
            </Carousel.Item>
          </Carousel>
        </Grid>           
      </Grid>
      <Grid item xs={8}>
        <Grid item xs={12}>
          <h2 style={{paddingTop: "10px"}}>Know Your <span style={{ color: "red" }}>Artist</span></h2>
        </Grid>
        <Grid item xs={12} style={{ height: '386px' }}>
          <Paper elevation={3} style={{ height: '100%', width: "100%" }}>
          <Box
            sx={{ flexGrow: 1, display: 'flex', height: '100%', width: "100%"}}>
            <Tabs
              orientation="vertical"
              variant="scrollable"
              value={value}
              onChange={handleChange}
              aria-label="Vertical tabs example"
              sx={{ borderRight: 1, borderColor: 'divider' }}
              style={{width: "160px"}}
            >
              <Tab label="Get Inked" {...a11yProps(0)} />
              <Tab label="About" {...a11yProps(1)} />
              <Tab label="Availability" {...a11yProps(2)} />
              <Tab label="Ink Types" {...a11yProps(3)} />
              <Tab label="Reviews" {...a11yProps(4)} />
            </Tabs>
            <TabPanel value={value} index={0} style={{ height: '100%', width: "100%" }}>
              Under Progress
            </TabPanel>
            <TabPanel value={value} index={1} style={{ height: '100%', width: "100%" }}> 
              John Doe is a seasoned tattoo artist with over a decade of experience in the industry. Renowned for his creative prowess and attention to detail, John has been transforming ideas into captivating body art since 2010. His mastery in various tattoo styles reflects a rich tapestry of expertise, making him a sought-after artist for those seeking personalized and exceptional ink experiences.
            </TabPanel>
            <TabPanel value={value} index={2} style={{ height: '100%', width: "100%" }}>
              Under Progress
            </TabPanel>
            <TabPanel value={value} index={3} style={{ height: '100%', width: "100%" }}>
              Under Progress
            </TabPanel>
            <TabPanel value={value} index={4} style={{ height: '100%', width: "100%" }}>
              Under Progress
            </TabPanel>
          </Box>
          </Paper>
        </Grid>
      </Grid>
      
      
      
      
    </Grid>
      
    </div>
    </>
  )
}

const itemData = [
  {
    img: 'https://www.blufashion.com/wp-content/uploads/2023/12/Meanings-of-Back-Tattoos-for-Men-1024x574.jpg',
    title: 'Breakfast',
  },
  {
    img: 'https://www.trendingtattoo.com/wp-content/uploads/2022/08/Portrait-Leg-Tattoo.jpg',
    title: 'Burger',
  },
  {
    img: 'https://www.tattoos.gallery/soringabor.com/images/gallery/chance%20post.jpg',
    title: 'Camera',
  },
  {
    img: 'https://i.pinimg.com/564x/39/e5/c5/39e5c5eaccda979e089dd56ebf3a0386.jpg',
    title: 'Coffee',
    
  },
  {
    img: 'https://i.pinimg.com/1200x/59/33/e7/5933e72efda0583add6dce5ca4239ea8.jpg',
    title: 'Hats',
  },
  {
    img: 'https://alexie.co/wp-content/uploads/2023/05/AnyConv.com__349245593_1160041798728085_5719455593484506392_n.jpg',
    title: 'Hats',
  },
  {
    img: 'https://thai.tattoo/wp-content/uploads/2022/12/2022-06-03-19.55.49-2852470043756156601_723162610.jpg',
    title: 'Hats',
  },
  {
    img: 'https://i.pinimg.com/1200x/74/69/72/74697225840a5e5a9180923224b9cdcf.jpg',
    title: 'Hats',
  },
  {
    img: 'https://static.wixstatic.com/media/9a1813_354425cb720648e282186e93ce15b4f5~mv2.webp',
    title: 'Hats',
  },
  
]