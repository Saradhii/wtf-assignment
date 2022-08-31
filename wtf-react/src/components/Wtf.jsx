import React from 'react';
import "./Wtf.css";
import { useState,useEffect } from 'react';
import CallIcon from '@mui/icons-material/Call';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import OfflineBoltIcon from '@mui/icons-material/OfflineBolt';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import DraftsIcon from '@mui/icons-material/Drafts';
import CleanHandsIcon from '@mui/icons-material/CleanHands';
import Nearestgym from "./Nearestgym.json";
import StarIcon from '@mui/icons-material/Star';
import TelegramIcon from '@mui/icons-material/Telegram';

const Wtf = () => {


    const [data1,setData1] = useState([]);
    const [data,setData]=useState(Nearestgym.data);
    const [open,setOpen]=useState(true);

    // 4 seconds time out for intro gif
    // useEffect(() => {
    //     const timer = setTimeout(() =>document.querySelector(".wtfhomeintro").style.display = "none", 4000);
    //     return () => clearTimeout(timer);
    //   }, []);

    //Find gym by place api
    useEffect(() => {
      const getdata= async()=>{
         let res = await fetch(`https://devapi.wtfup.me/gym/places`,{
             method:"GET",
           });
           let data = await res.json();
           setData1(data.data);
      }
      getdata();
      }, []);
      console.log(data1);
  return ( 
    <>
    {/* <div open={open} className='wtfhomeintro'>
    <img src="https://wtfup.me/assets/loader.gif" alt="" />
    </div> */}
    <div className='navhome'>
    <div className='nav'>
      <img src="data:image/png;base64,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" alt="" />
      <div className='navdiv'>
        <span>Fitness</span>
        <span>Nutrition</span>
        <span>Gyms</span>
        <span>Become WTF Partner</span>
        <span>About Us</span>
        <button>Login</button>
      </div>
    </div>
    {/* <img src="https://pbs.twimg.com/media/FMcvN8JWQBcAMkC.jpg" alt="" /> */}
    </div>
    <div className='mid1'>
        <div className='mid12'>
           <div className='filters'>
            <h2>Filters</h2>
            <form>
              <lable>Location</lable><br></br>
              <input className='ninput' type="text" placeholder='Enter location...'/>
              <lable>Price</lable><br></br>
              <input className='pin' type="text" placeholder='Min..'/><input className='pin' type="text" placeholder='Max..'/><br></br>
              <lable>Cities</lable><br></br>
              <select name="cities" id="cities">
              <option value="volvo">Select City</option>
              {data1&&data1.map((e)=>{
                return(
                  <option>{e.city}</option>
                )
              })}
              </select>
            </form>
           </div>
           <div className='ngymdata'>
           {data && data.map((e)=>{
            return(
                <div>
                    <h1>{e.gym_name}</h1>
                    <h2><StarIcon></StarIcon><StarIcon></StarIcon><StarIcon></StarIcon><StarIcon></StarIcon></h2>
                    <h2>{e.address2},{e.address1}</h2>
                    <h2><TelegramIcon></TelegramIcon>{e.duration_text} | {e.distance_text}</h2>
                    <button className='button'>Book now</button>
                </div>
            )
           })}
           </div>
        </div>
    </div>
    <div className='mid2'>
      <div className='mid21'>
         <div>
            <span>WTF Fitness<br></br>&nbsp;&nbsp;Experience?</span>
            <div className='vertbar'>
                <div className='pinkbar'></div>
                <div className='costad'><span>@ your regular <br></br>gym cost?</span></div>
            </div>
         </div>
         <div className='mid22'>
            <div className='firstmid22'><span><OfflineBoltIcon></OfflineBoltIcon></span><br></br>Modern Equipments</div>
            <div><span><HowToRegIcon></HowToRegIcon></span><br></br>Skilled<br></br>Trainer</div>
            <div><span><DraftsIcon></DraftsIcon></span><br></br>Top class Ambiance</div>
            <div><span><CleanHandsIcon></CleanHandsIcon></span><br></br>Sanitized<br></br>GYMS</div>
         </div>
      </div>
    </div>
    <div className='footer'>
      <div className='footer1'>
       <div className='social'>
          <div><img src="data:image/png;base64,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" alt="" /></div>
          <div className='sicons'>
            <img src="https://www.svgrepo.com/show/13642/facebook.svg" alt="" />
            <img src="https://www.svgrepo.com/show/303145/instagram-2-1-logo.svg" alt="" />
            <img src="https://www.svgrepo.com/show/28145/linkedin.svg" alt="" />
          </div>
       </div>
       <div>
        <h1>Quick Links</h1>
        <h2>About</h2>
        <h2>FAQs</h2>
        <h2>Privacy Policy</h2>
        <h2>WTF in News</h2>
        <h2>Terms & Conditions</h2>
        <h2>Refund & Cancellation</h2>
       </div>
       <div>
       <h1>Explore</h1>
        <h2>Arenas</h2>
        <h2>Studios</h2>
        <h2>Nutition</h2>
       </div>
       <div>
        <h1> Contact</h1>
        <h2><LocationOnIcon></LocationOnIcon> Ro :S 1502, Amrapali Silicon city,Sector 76,Noida,Utter Pradesh,India</h2>
        <h2><LocationOnIcon></LocationOnIcon> Ho :C-86 B, Ground Floor, Sector 8,Noida,Uttar Pradesh,India</h2>
        <h2><CallIcon></CallIcon> +919090639005</h2>
        <h2><EmailIcon></EmailIcon> support@wtfup.me</h2>
      </div>
      </div>
    </div>
    </>
  )
}

export default Wtf