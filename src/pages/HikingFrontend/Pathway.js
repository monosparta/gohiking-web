import React , {useState} from 'react';
import Slider from "react-slick";
import {makeStyles, ThemeProvider} from '@material-ui/core/styles';
import fontStyle from '../../assets/jss/fontStyle';
import basicStyle from '../../assets/jss/basicStyle';
import { pathwayInfo } from '../../data/pathway';
import darkTheme from '../../config/darkTheme';

import AppBar from '@material-ui/core/AppBar';
import ButtonBase from '@material-ui/core/ButtonBase';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ShareIcon from '@material-ui/icons/Share';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Button from '@material-ui/core/Button';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Divider from '@material-ui/core/Divider';
import Chip from '@material-ui/core/Chip';
import Grid from '@material-ui/core/Grid';

import { Link, useHistory } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AnnouncementCard from "../../components/AnnouncementCard/AnnouncementCard";
import Charts from 'react-apexcharts';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Zmage from 'react-zmage'
import ZoomInIcon from '@material-ui/icons/ZoomIn';

import Snackbar from '@material-ui/core/Snackbar';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import Comment from '../../components/Comment/Comment2';
import Rating from "@material-ui/lab/Rating";

import CommentIcon from '@material-ui/icons/Comment';
import GPSMapLink from '../components/GPSMapLink/GPSMapLink';
import MuiAlert from '@material-ui/lab/Alert';

    const style = {
        ...fontStyle,
        ...basicStyle,
    };
    
    const useStyles = makeStyles(style)
    const bannerCarousel = { //控制react-slick的properties
        dot: true,
        infinite: true,
        speed: 400,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    };
    const pathwayCarousel = { //控制react-slick的properties
        dots: false,
        arrows: false,
        variableWidth: true,
        swipeToSlide: true,
        swipe: true,
        infinite: false,
    };
    const twoRowCarousel = {
        rows: 2,
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
   

      function Alert(props) {
        return <MuiAlert elevation={6} variant="filled" {...props} style={{
          position: 'fixed', bottom: '8vh',
          left: '50%',
          transform: 'translate(-50%, -50%)', width: 379
        }} />;
      }

    const Pathway = () =>{
        const classes = useStyles();
        const history = useHistory();        
        const trail_id = pathwayInfo.trail_id;
        const[value, setValue] = useState('');
        const [open, setOpen] = React.useState(true);
        const handleClose = () => {
            setOpen(false);
          };
      
        const chartSetting={
            series: [{
                name: 'Series 1',
                data: [5, 5, 5, 2, 2],
              }],
            options: {
                chart: {
                  height: 350,
                  type: 'radar',
                },
                xaxis: {
                  categories: ['距離', '難易', '熱門', '景色', '高度'],
                  labels:{
                    style: {
                        colors: [],
                        fontSize: '16px',
                        fontFamily: 'Helvetica, Arial, sans-serif',
                        fontWeight: 600,
                        cssClass: 'apexcharts-xaxis-label',
                    },
                  },
                },
                yaxis:{
                    show: false,
                },
                colors: ['#00d04c'],
                markers: {
                    size: 2,
                    colors: undefined,
                    strokeColors: '#fff',
                    strokeWidth: 1,
                    strokeOpacity: 0.9,
                    fillOpacity: 1,
                    radius: 1,
                },
            }, 
            
        }
                    
            
        return(
            <ThemeProvider theme = {darkTheme}>
                <div className = {classes.root}>

                    <Slider {...bannerCarousel} className={classes.slider}>
                    {pathwayInfo.album.slice(0, 8).map((img, i) => (
                        <div key={i}>
                        <img src={img} alt={'slider img'} className={classes.sliderImg} />
                        </div>
                    ))}
                    </Slider>
                    <AppBar className = {classes.appBarTransparent}>
                        <Toolbar>
                            <IconButton style={{color: 'inherit'}} onClick={()=>{history.push('/nearbypathway')}}>
                                <ArrowBackIcon> </ArrowBackIcon>
                            </IconButton>
                            <span style= {{flexGrow: 1}} /> {/*把剩下的空間全部分配在這個span裡面 */}
                            <IconButton edge="end" color="inherit" aria-label="add to the favorite" onClick={() => {}}>
                                <FavoriteIcon />  {/*這邊要想辦法串收藏 */}
                            </IconButton>        
                            <IconButton edge="end" color="inherit" style = {{marginLeft: '24px',}} aria-label="share article" onClick={() => {}}>
                                <ShareIcon />  {/*這邊要想辦法串第三方分享 */}
                            </IconButton>               
                        </Toolbar>
                    </AppBar>
                    
                    <div style={{display: 'flex',}}>
                        <Typography variant="h6" className={classes.titleXLL} style={{marginLeft: '8px', marginTop: '8px', fontWeight: '900'}} >
                            {pathwayInfo.name}
                        </Typography>
                        <span style= {{flexGrow: 1}} />
                        <Button
                            size="small"
                            variant="outlined"
                            color="secondary"
                            className={classes.locationOnIcon}
                            startIcon={<LocationOnIcon />}
                            style={{marginRight: '16px', marginTop:'16px'}}
                        >
                            {pathwayInfo.distance} km
                        </Button>
                    </div>
                    <Divider style={{height:'8px'}} />
                    <div style={{paddingTop: '8px', paddingBottom: '8px'}}>
                        {pathwayInfo.chips.map((chip,i) =>(
                             <Chip label={chip} key={i} href="#chip" variant="outlined" style={{margin: '8px', marginRight: 0, padding: '6px', fontSize: '14px', fontWeight: '700'}} />
                        ))}
                    </div>
                    <Divider style={{height:'8px'}} />                  
                    <Grid container spacing={0}>
                        <Grid item xs={4} >
                            <div className={classes.hikingInfoLeft}> 海拔 </div>
                        </Grid>
                        <Grid item xs={8} >
                            <div className={classes.hikingInfoRight}> {pathwayInfo.altitude[0]}~{pathwayInfo.altitude[1]} m</div>
                        </Grid>
                        <Grid item xs={12}>
                            <Divider />
                        </Grid>
                        <Grid item xs={4} >
                            <div className={classes.hikingInfoLeft}> 全長 </div>
                        </Grid>
                        <Grid item xs={8} >
                            <div className={classes.hikingInfoRight}> {pathwayInfo.miles} km </div>
                        </Grid>
                        <Grid item xs={12}>
                            <Divider />
                        </Grid>
                        <Grid item xs={4} >
                            <div className={classes.hikingInfoLeft}> 分類 </div>
                        </Grid>
                        <Grid item xs={8} >
                            <div className={classes.hikingInfoRight}> {pathwayInfo.class} </div>
                        </Grid>
                        <Grid item xs={12}>
                            <Divider />
                        </Grid>
                        <Grid item xs={4} >
                            <div className={classes.hikingInfoLeft}> 行程時間 </div>
                        </Grid>
                        <Grid item xs={8} >
                            <div className={classes.hikingInfoRight}> {Math.floor(pathwayInfo.costTime/60)}h {pathwayInfo.costTime % 60} m</div>
                        </Grid>
                        <Grid item xs={12}>
                            <Divider />
                        </Grid>
                        <Grid item xs={4} >
                            <div className={classes.hikingInfoLeft}> 地區 </div>
                        </Grid>
                        <Grid item xs={8} >
                            <div className={classes.hikingInfoRight}> {pathwayInfo.location} </div>
                        </Grid>
                        <Grid item xs={12}>
                            <Divider />
                        </Grid>
                        <Grid item xs={4} >
                            <div className={classes.hikingInfoLeft}> 路面狀況 </div>
                        </Grid>
                        <Grid item xs={8} >
                            <div className={classes.hikingInfoRight}> {pathwayInfo.status.map((condition,i)=>(<span key={i}>{condition}、</span>))} </div>
                        </Grid>
                        <Grid item xs={12} style={{marginBottom: '16px'}}>
                            <Divider />
                        </Grid>
                    </Grid>
                    <Divider style={{height:'8px'}} />                  
                    <div >
                        <Typography variant = "h6" style={{margin:'16px 0 16px 16px', fontSize:'16px', fontWeight:'900', lineHeight: '1.5', letterSpacing:'0.5px'}}>登山口</Typography>
                        <Slider {...pathwayCarousel} >
                            {pathwayInfo.trailhead.map((entry, i) => (
                            <div key={i} >
                                <Button variant={'contained'} style={{ backgroundColor: '#abebdc', }} component={Link} to={'/trailhead'} className={classes.defaultButton} disableElevation>{entry.name}</Button>
                            </div>
                            ))}
                        </Slider>
                    </div>
                    <Divider style={{height:'8px'}} />
                    <div >
                        <div style={{fontSize:'16px', marginTop:'16px', marginLeft:'16px', fontWeight: '700'}}>步道雷達圖</div>
                        <Charts options={chartSetting.options} series={chartSetting.series} type="radar" height={325} />
                    </div>
                    <Divider style={{height:'8px'}} />
                    <div style={{display:'flex'}}>
                        <Typography style={{fontSize:'16px', marginTop:'16px', marginLeft:'16px', fontWeight: '700'}}>步道消息</Typography>
                        <span style= {{flexGrow: 1}} />
                        <Typography style={{fontSize:'14px', color: '#00d04c', marginTop:'16px', fontWeight:'900'}} >顯示更多</Typography>
                        <IconButton edge="end" color="inherit" style = {{color: '#00d04c', marginRight: '6px', marginTop:'16px', padding:'0'}} aria-label="ChevronRightIcon" onClick={() => {history.push('/announcement')}}>
                            <ChevronRightIcon></ChevronRightIcon>
                        </IconButton>                        
                    </div>
                    <div style={{marginLeft:'8px',}}>
                        {pathwayInfo.announcement.slice(0,3).map((news, i) => (
                            <AnnouncementCard
                            pathLink={news.link}
                            coverImage={news.img}
                            title={news.title}
                            date={news.date}
                            source={news.source}
                            key={i}
                            />
                        ))}
                    </div>
                    <Divider style={{height:'8px'}} />
                    <div style={{padding: '16px 16px 0 16px'}}>
                        <Typography style={{marginBottom: '16px', fontSize:'16px', fontWeight: '700'}}>步道介紹</Typography>
                        <Typography style={{marginBottom: '24px', fontSize:'14px'}}>{pathwayInfo.intro}</Typography>

                        {/* <a className={classes.buttonBase} onClick={() => Zmage.browsing({ src: imagePath })}>                
                            <img style={{position:'absolute', width:'100%', height:'224px', objectFit:'cover'}}alt={'map'} src={pathwayInfo.map}/>
                            <div style={{position:'relative', width:'100%', height:'224px',backgroundColor: 'rgba(0,0,0,0.6)', top:'100px', left:'50px'}}></div> 
                            <img alt={'map'} src={pathwayInfo.map} className={classes.map} />
                            <div className={classes.overlay} />
                            <div className={classes.mapIcon}><ZoomInIcon fontSize="large" /></div>                            
                            </a> */}
                        <ButtonBase className={classes.buttonBase} onClick={() => Zmage.browsing({ src: pathwayInfo.map })} >
                            <img alt={'map'} src={pathwayInfo.map} className={classes.map} />
                            <div className={classes.overlay} />
                            <div className={classes.mapIcon}>
                                <ZoomInIcon fontSize="large" />
                            </div>
                        </ButtonBase>
                    </div>
                    <Divider style={{height:'8px'}} />
                    <div>
                        <Typography style={{margin:'16px 0 16px 16px', fontSize:'16px', fontWeight: '700'}}>步道照片</Typography>
                        <Slider {...pathwayCarousel}>
                            {pathwayInfo.album.slice(0, 8).map((img, i) => (
                                <div key={i}>
                                <img src={img} alt={'slider img'} style={{width:'96px', height:'96px', objectFit:'cover', marginLeft:'16px', marginBottom:'16px'}} />
                                </div>
                            ))}
                        </Slider>
                    </div>
                    <Divider style={{height:'8px'}} />
                    <div>
                        <Typography style={{margin:'16px 0 16px 16px', fontSize:'16px', fontWeight: '700'}}>鄰近景點</Typography>
                        <Slider {...pathwayCarousel}>
                        {pathwayInfo.attraction.map((item, i) => (
                            <div key={i}>
                                <Button variant={'contained'} style={{ backgroundColor: '#abddeb', minWidth:'83px', margin:'0 0 16px 16px' }}
                                component={Link} to={'/attraction'}
                                disableElevation>{item.category}</Button>
                            </div>
                        ))}

                        </Slider>
                    </div>
                    <Divider style={{height:'8px'}} />
                    <div style={{padding:'16px 0 0 16px', marginBottom:'16px', display:'flex'}}>
                    <Typography style={{fontSize:'16px', fontWeight: '700'}}>步道紀錄與評價</Typography>
                        <span style= {{flexGrow: 1}} />
                        <Typography style={{fontSize:'14px', color: '#00d04c', fontWeight:'900'}} >顯示更多</Typography>
                        <IconButton edge="end" color="inherit" style = {{color: '#00d04c', marginRight: '6px', padding:'0'}} aria-label="ChevronRightIcon" onClick={() => {history.push('/trailComment')}}>
                            <ChevronRightIcon></ChevronRightIcon>
                        </IconButton>                                            
                    </div>
                    <Rating defaultValue={4} style={{fontSize:'28px', marginBottom:'16px', marginLeft:'16px',}}></Rating>
                    <Divider />
                    <div>
                        <Comment data={pathwayInfo.comments}></Comment>
                    </div>
                    <Divider style={{height:'8px'}} />
                    <div>
                        <Typography style={{margin:'16px 0 16px 16px', fontSize:'16px', fontWeight: '700'}}>相關文章</Typography>
                            <Slider {...pathwayCarousel}>
                                {pathwayInfo.article.map((item, i) => (
                                    <div key={i}>
                                        <img src={item.img} style={{width:'174px', height:'96px', objectFit:'cover', margin:'0 0 8px 16px'}}></img>
                                        <Typography style={{fontSize:'14px', fontWeight:'900', marginBottom:'1px', marginLeft:'16px',}}>{item.title}</Typography>
                                        <Typography style={{fontSize:'10px', color:'979797', marginBottom:'16px',marginLeft:'16px',}}>{item.date}</Typography>
                                    </div>
                                ))}
                            </Slider>                       
                    </div>
                    <Divider style={{height:'8px'}} />
                    <div>
                        <Typography style={{margin:'16px 0 16px 16px', fontSize:'16px', fontWeight: '700'}}>相似步道</Typography>
                            <Slider {...twoRowCarousel}>

                                {pathwayInfo.similar.map((item, i) => (
                                    <div key={i}>
                                        <Grid container spacing={0}>
                                            <Grid item xs={4}>
                                                <img src={item.img} style={{width:'104px', height:'72px', objectFit:'cover', margin:'0 0 8px 16px'}}></img>
                                            </Grid>
                                            <Grid item xs={8}>
                                                <Typography style={{fontSize:'16px', fontWeight:'900', marginBottom:'1px', marginLeft:'16px',}}>{item.pathTitle}</Typography>
                                                <Typography style={{fontSize:'14px', color:'979797',marginLeft:'16px', color: '#979797', textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden',}}>{item.pathLocation}</Typography>
                                                <Typography style={{fontSize:'12px', color:'979797', marginBottom:'16px',marginLeft:'16px', color: '#979797'}}>全程約 {item.pathMiles} km</Typography>
                                            </Grid>
                                        </Grid>
                                    </div>
                                ))}
                            </Slider>                       
                    </div>       
                    <br /><br /><br /><br />
                    <Snackbar open={open} onClose={handleClose}>
                    <Alert severity="info" onClose={handleClose}>目前全線封閉，暫停開放。</Alert>
                    </Snackbar>
                    <BottomNavigation
                    showLabels
                    className={classes.bottomNavigation}
                    >
                    <BottomNavigationAction onClick={() => (history.push({pathname:'/commentPage'}))} label={<Typography className={`${classes.descText} ${classes.noWrap}`} color={'textPrimary'}>評論步道</Typography>} icon={<CommentIcon color={'secondary'} />} className={classes.leftNavigation} />
                    <BottomNavigationAction label={
                        <GPSMapLink
                        text={
                            <Typography className={`${classes.mainText} ${classes.boldFont}`} >
                            打開GPS路線
                            </Typography>
                        }
                        destination={pathwayInfo.name + pathwayInfo.trailhead[1].name}
                        />
                    } className={classes.rightNavigation} />
                    </BottomNavigation>

                        {/* <BottomNavigation
                            value={value}
                            onChange={(event, newValue) => {
                                setValue(newValue);
                            }}
                            showLabels
                            className={classes.bottomNavigation}
                            >                            
                            <BottomNavigationAction  className={classes.leftNavigation} label="評論步道" icon={<RestoreIcon />} />                            
                            <BottomNavigationAction  className={classes.rightNavigation}  label="打開GPS"/>

                        </BottomNavigation> */}
                </div>
            </ThemeProvider>
        )



    };


    export default Pathway;
