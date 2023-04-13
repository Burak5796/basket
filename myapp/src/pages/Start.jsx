import '../styles/start.css'
import NavScrollExample from './main-components/Navbar.jsx';
import Iframe from 'react-iframe'


const Start = () => {
  
    return(
        <>
        <NavScrollExample />
        <img className='nba-logo' src='https://www.edigitalagency.com.au/wp-content/uploads/NBA-logo-png.png' alt='logo'></img>
        <h3 className='hgl-head'>NBA Highlights 2022</h3>
        <Iframe className='hgl-2022'
        url="https://www.youtube.com/embed/2hdHUID8C6w"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen
        display="block"
        />
        <h4 className='get-tickets'>Get the tickets</h4>
        </>
    )
}

export default Start;