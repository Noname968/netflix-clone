import React, { useState } from 'react'
import './Landingpage.css'
import netflix from '../netflix.png'
import logintv from '../logintv.png'
import strangert from '../strangert.jpg'
import plus from '../plus.png'
import Loginscreen from './Loginscreen'
function Login() {
  const [login, setlogin] = useState(false);
  return (
    <>
      <div className='login'>
        <div className="loginbackgrnd">
          <img className='imglogin' src={netflix} alt="" />
          <button className='loginbtn' onClick={() => setlogin(true)}>Sign In</button>
        </div>
        <div className="logingrad"></div>
        <div className="loginbody">
          {login ? (
            <Loginscreen/>): (<>
            <h1>Unlimited movies, TV
            < br />
            shows and more.</h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
        <div className="logininput">
          <form action="">
            <input type="email" name="" id="" placeholder='Email address' />
            <button className='getstart'> <span> Get Started</span> </button>
          </form>
        </div>
      </>)}
    </div>
      </div >
      <div className="empty"></div>
      <div className="loginfirst">
        <div className="loginfirstbody">
          <h1>Enjoy on your TV.</h1>
          <h3>Watch on smart TVs, PlayStation, Xbox,  Chromecast, Apple TV, Blu-ray players and more.</h3>
        </div>
        <div className="loginimgcon">
          <img src={logintv} alt="" />
          <video loop playsInline muted autoPlay>
            <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v" type="video/mp4" />
          </video>
        </div>
      </div>
      <div className="empty"></div>
      <div className="loginsecond">
        <div className="loginimgcon1">
          <img src={strangert} alt="" />
          <div className="box">
            <img className='img1' alt="" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png" />
            <p>Stranger Things <br /> <a href="/">Downloading..</a> </p>
            <img className='img2' src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif" alt="" />
          </div>
        </div>
        <div className="loginsecondbody">
          <h1>Download your shows to watch offline.</h1>
          <h3>Save your favourites easily and always have something to watch.</h3>
        </div>
      </div>
      <div className="empty"></div>
      <div className="loginthird">
        <div className="loginthirdbody">
          <h1>Watch everywhere.</h1>
          <h3>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</h3>
        </div>
        <div className="loginimgcon2">
          <img src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png' alt="" />
          <video loop playsInline muted autoPlay>
            <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v" type="video/mp4" />
          </video>
        </div>
      </div>
      <div className="empty"></div>
      <div className="loginfourth">
        <div className="loginimgcon3">
          <img src='https://occ-0-4857-2164.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABVxdX2WnFSp49eXb1do0euaj-F8upNImjofE77XStKhf5kUHG94DPlTiGYqPeYNtiox-82NWEK0Ls3CnLe3WWClGdiJP.png?r=5cf' alt="" />
        </div>
        <div className="loginfourthbody">
          <h1>Create profiles for children.</h1>
          <h3>Send children on adventures with their favourite characters in a space made just for them—free with your membership.</h3>
        </div>
      </div>
      <div className="empty"></div>
      <div className="question-container">
        <h1>Frequently Asked Questions</h1>
        <button id="question1" type="button">
          What is Netflix?
          <img src={plus} alt='' />
        </button>
        <div id="answer1" className="answer1">
          <p>
            Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.
            <br />
            <br />
            You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!
          </p>
        </div>
        <br />
        <button id="question2" type="button">
          How much does Netflix cost?
          <img src={plus} alt='' />
        </button>
        <div id="answer2" className="answer2">
          <p>
            Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from USD7.99 to USD14.99 a month. No extra costs, no contracts.
          </p>
        </div>
        <br />
        <button id="question3" type="button">
          Where can I watch?
          <img src={plus} alt='' />
        </button>
        <div id="answer3" className="answer3">
          <p>
            Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.
            <br />
            <br />
            You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.
          </p>
        </div>
        <br />
        <button id="question4" type="button">
          How do I cancel?
          <img src={plus} alt='' />
        </button>
        <div id="answer4" className="answer4">
          <p>
            Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.
          </p>
        </div>
        <br />
        <button id="question5" type="button">
          What can I watch on Netflix?
          <img src={plus} alt='' />
        </button>
        <div id="answer5" className="answer5">
          <p>
            Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.
          </p>
        </div>
        <br />
        <button id="question6" type="button">
          Is Netflix good for kids?
          <img src={plus} alt='' />
        </button>
        <div id="answer6" className="answer6">
          <p>
            The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.
            <br />
            <br />
            Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.
          </p>
        </div>
      </div>
      <div className="repeat">
      <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
      <div className="logininput1">
        <form action="">
          <input type="email" name="" id="" placeholder='Email address' />
          <button className='getstart1'> <span> Get Started</span> </button>
        </form>
      </div>
      </div>
      <div className="empty"></div>
  {/* <div className="footer">
        <h5>Questions? Call <a href="/">000-800-040-1843</a> </h5>
          <a href="/">FAQ</a>
          <a href="/">Investor Relations</a>
          <a href="/">Privacy</a>
          <a href="/">Speed Test</a>
      </div> */}
    </>

  )
}

export default Login