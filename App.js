
import React from 'react'
import'./App.css'
import logo from './image/ZEE5_logo.svg'
import image1 from './image/image1.webp'
import image2 from './image/image2'
import image3 from './image/image3'
import image4 from './image/image4'
import image5 from './image/image5.webp'
import image6 from './image/image6'
import image7 from './image/image7'
import image8 from './image/banner.webp'
import banner2 from './image/banner2'
import banner3 from './image/banner3'
import banner4 from './image/banner4'
import image9 from'./image/image9'
import image10 from'./image/image10'
import image11 from'./image/image11'
import image12 from'./image/image12'
import image13 from'./image/image13'
import image14 from'./image/image14'
import image15 from'./image/image15'
import image16 from'./image/image16'
import image17 from'./image/image17'
import image18 from'./image/image18'
import image19 from'./image/image19'
import image20 from'./image/image20'
import image21 from'./image/image21'
import image22 from'./image/image22'
import image23 from'./image/image23'
import image24 from'./image/image24'
import image25 from'./image/image25'
import image26 from'./image/image26'
import image27 from'./image/image27'
import image28 from'./image/image28'
import image30 from'./image/image30.webp'
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
const App = () => {
  return (
    <div>
       <header>
        <nav>
        
            <ul>
            <div class="items">
      <img src={logo} className="item" alt="..."/>
    </div>
<div className='home'>
                <li><a href="#">Home</a></li>
                <li><a href="#">Shows</a></li>
                <li><a href="#">Movies</a></li>
                <li><a href="#">ILT20</a></li>
                <li><a href="#">Premium</a></li>
</div>
                <div className='change'>
                <div class="search-bar">
                <input type="text" placeholder="Search for Movies, Shows, Channels etc."/>
            </div>
            <button class="login">Login</button>
            <button class="buy-plan">Buy </button></div>            
            </ul>
        </nav>
    </header>
    
    <section class="banner">
        <div class="banner-content">
        <div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={image8} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={banner2} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={banner3} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={banner4} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
        </div>
    </section>

    <section class="trendings">
        <h3>Trending Near You</h3>
        <div class="trendings-containers">
            <div class="card"><img src={image1}alt="image1"/><p>Mrs</p></div>
            <div class="card"><img src={image2} alt="image2"/><p>Hisaab Barabar</p></div>
            <div class="card"><img src={image3} alt="image3"/><p>DESPATCH</p></div>
            <div class="card"><img src={image4} alt="image4"/><p>HIGHLIGHTS</p></div>
            <div class="card"><img src={image5} alt="image5"/><p>Pyaar Testing</p></div>
            <div class="card"><img src={image6} alt="image6"/><p>DIVORCE</p></div>
            <div class="card"><img src={image7} alt="image7"/><p>CHAHATEIN</p></div>

        </div>
    </section>
    <section class="trendings">
        <h3>Loved by the Masses</h3>
        <div class="trendings-containers">
            <div class="card"><img src={image9} alt="Movie 9"/><p>SABARMATI</p></div>
            <div class="card"><img src={image10} alt="Movie 10"/><p>RAROT HOUSE</p></div>
            <div class="card"><img src={image11} alt="Movie 11"/><p>LAL BAZAAR</p></div>
            <div class="card"><img src={image12} alt="Movie 12"/><p>GYAARATI</p></div>
            <div class="card"><img src={image13} alt="Movie 13"/><p>AINDHAM VEDHAM</p></div>
            <div class="card"><img src={image14} alt="Movie 14"/><p>Pyaar</p></div>
            <div class="card"><img src={image15} alt="Movie 15"/><p>KAKUDA</p></div>

        </div>
    </section>
    <section class="trendings">
        <h3>ZEE5 Hall Of Fame</h3>
        <div class="trendings-containers">
            <div class="card"><img src={image16} alt="Movie 1"/><p>YAARA</p></div>
            <div class="card"><img src={image17} alt="Movie 2"/><p>ATTACK</p></div>
            <div class="card"><img src={image18} alt="Movie 3"/><p>DIAL100</p></div>
            <div class="card"><img src={image19} alt="Movie 4"/><p>UUNCHAI</p></div>
            <div class="card"><img src={image20} alt="Movie 5"/><p>DHARMVIR 2</p></div>
            <div class="card"><img src={image21} alt="Movie 6"/><p>VENOM</p></div>
            <div class="card"><img src={image22} alt="Movie 6"/><p>IT ENDS WITH US</p></div>

        </div>
    </section>
    <section class="trendings">
        <h3>Top 10 Movies in India</h3>
        <div class="trendings-containers">
            <div class="card"><img src={image23} alt="Movie 1"/><p>TASHKENT</p></div>
            <div class="card"><img src={image24} alt="Movie 2"/><p>URI</p></div>
            <div class="card"><img src={image25} alt="Movie 3"/><p>TRIPLING</p></div>
            <div class="card"><img src={image26} alt="Movie 4"/><p>THE KASHMIR FILES</p></div>
            <div class="card"><img src={image27} alt="Movie 5"/><p>GADAR 2</p></div>
            <div class="card"><img src={image28} alt="Movie 6"/><p>ATTACK</p></div>
            <div class="card"><img src={image30} alt="Movie 6"/><p>STATE OF SIEGE</p></div>

        </div>
    </section>


    {/* <footer class="footer">
        <div class="download-apps">
            <p>Download Apps</p>
            <button class="app-btn">Google Play</button>
            <button class="app-btn">App Store</button>
        </div>
        <div class="links">
            <a href="#">Channels</a>
            <a href="#">About Us</a>
            <a href="#">Help Center</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Use</a>
        </div>
        <div class="categories">
            <div>
                <h4>Popular TV Shows</h4>
                <ul>
                    <li>Mahabharat</li>
                    <li>Kahan ho Tum</li>
                    <li>Jhansi ki Rani</li>

                </ul>
            </div>
            <div>
                <h4>Premium Movies</h4>
                <ul>
                    <li>Hisab Barabar</li>
                    <li>Vedaa</li>
                    <li>Identity</li>
                </ul>
            </div>
            <div>
                <h4>Popular LIVE TV Channels</h4>
                <ul>
                    <li>Zee News</li>
                    <li>Zee TV HD</li>
                    <li>&TV HD</li>
                </ul>
            </div>
        </div>
        <div class="social-media">
            <p>Connect with us</p>
           <div className='media'>
           <FaFacebook className='m'/>
            <FaTwitter className='n' />
            <FaSquareInstagram className='d'/>
           </div>
            <button>Facebook</button>
            <button>Twitter</button>
            <button>Instagram</button>
        </div>
    </footer> */}
     <footer class="footer">
     <div class="social-media">
            <p>Connect with us</p>
           <div className='media'>
           <FaFacebook className='m'/>
            <FaTwitter className='n' />
            <FaSquareInstagram className='d'/>
           </div>
           </div>
        <div class="footer-column">
            <h3>Popular TV Shows</h3>
            <ul>
                <li><a href="#">Mahabharat</a></li>
                <li><a href="#">Kahan Ho Tum</a></li>
                <li><a href="#">Jhansi Ki Rani</a></li>
                <li><a href="#">Kumkum Bhagya</a></li>
                <li><a href="#">Kasam tere pyaar ki</a></li>
                <li><a href="#">undino ki baat hai</a></li>
                <li><a href="#">ek duje ke vaste</a></li>
                <li><a href="#">kundli bhagya</a></li>
                <li><a href="#">behpanha</a></li>
                <li><a href="#">lal ishq</a></li>
                <li><a href="#">kasam tumhari</a></li>
                <li><a href="#">udariyan</a></li>
            </ul>
        </div>
        <div class="footer-column">
            <h3>Premium Movies</h3>
            <ul>
                <li><a href="#">Hisab Barabar</a></li>
                <li><a href="#">Vedaa</a></li>
                <li><a href="#">Identity</a></li>
                <li><a href="#">Swatantrya Veer Savarkar</a></li>
                <li><a href="#">Hum Tumhare Hai Sanam</a></li>
                <li><a href="#">Pyaar Toh Hona Hin Tha</a></li>
                <li><a href="#">Bhaagwan</a></li>
                <li><a href="#">Tere Naam</a></li>
                <li><a href="#">Phir Se Aayi Haseen Dilruba</a></li>
                <li><a href="#">Intefaaq</a></li>
                <li><a href="#">Judaai</a></li>
                <li><a href="#">Kyo Ki</a></li>
            </ul>
        </div>
        <div class="footer-column">
            <h3>Popular LIVE TV Channels</h3>
            <ul>
                <li><a href="#">Zee News</a></li>
                <li><a href="#">Zee TV HD</a></li>
                <li><a href="#">&TV HD</a></li>
                <li><a href="#">Zee Marathi HD</a></li>
                <li><a href="#">Zee cienema</a></li>
                <li><a href="#">colours</a></li>
                <li><a href="#">M tv</a></li>
                <li><a href="#">Marathi HD</a></li>
                <li><a href="#">RS News</a></li>
                <li><a href="#">Zee TV LIVE HD</a></li>
                <li><a href="#">zee sports</a></li>
                <li><a href="#">Zee Sarthak</a></li>
            </ul>
        </div>
        <div class="footer-column">
            <h3>Popular Web Series</h3>
            <ul>
                <li><a href="#">Murshid</a></li>
                <li><a href="#">Gyaarah Gyaarah</a></li>
                <li><a href="#">Manorathangal</a></li>
                <li><a href="#">Paithani</a></li>
            </ul>
        </div>
        <div class="footer-column">
            <h3>Bollywood Top Celebrities</h3>
            <ul>
                <li><a href="#">R Madhavan</a></li>
                <li><a href="#">Vikrant Massey</a></li>
                <li><a href="#">Deepika Padukone</a></li>
                <li><a href="#">Salman Khan</a></li>
                <li><a href="#">sharuk Khan</a></li>
                <li><a href="#">akshay kumar</a></li>
                <li><a href="#">alia bhat</a></li>
                <li><a href="#">amesha patel</a></li>
                <li><a href="#">tiger shroff</a></li>
                <li><a href="#">katrina kaf</a></li>
                <li><a href="#">ranbir kapoor </a></li>
                <li><a href="#">Karishma kapoor</a></li>
            </ul>
        </div>
        
    </footer>
    </div>
  )
}

export default App