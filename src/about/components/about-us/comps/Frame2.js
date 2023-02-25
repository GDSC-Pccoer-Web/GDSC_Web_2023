import React from 'react'
import loan from "../images/loan.jpg"
import clgimg from '../images/clg-img.jpg'
import frame5_img from '../images/frame5_img.jpg'
import gdsc_img from "../images/gdsc_img.jpg"
import "./style.css"
function Frame2() {
  return (
    <div className="container frame2">
        <div className="row">
            <div className="col-sm-6 col-lg-6 col-md-6">
                <img src={loan} width="480" height="480" alt="loan-img"></img>
            </div>
            <div className="col-sm-6 col-lg-6 col-md-6">
                <button type="button" className="button">
                    <h2>Know More</h2>
                </button>
            </div>
        </div>
        <div className='f3'>
            GDSC PCCOER
        </div>
        <div>
            <img className='clg-img' src={clgimg} alt="clg-img"></img>
        </div>
        <p className='para2'>
            Every year Google selects students 
            from universities around the globe to lead the developer 
            communities at their campus and help students bridge the 
            gap between theory and practice. These students are leaders 
            who are dedicated to helping their mates learn, grow, & connect 
            in a peer-to-peer environment.
        </p>
        <p className='para3'>
            As part of the program, these students referred to as leads work with their 
            colleges to launch a student club at their campus and collaborate with local 
            partners to build solutions for the next billion users, with a little 
            help from Google. I came to know about this program during DevFest’19, 
            Trivandrum.
        </p>
        <div>
            <img className='f5-img' src={frame5_img} alt="clg-img"></img>
        </div>
        <div className="row">
            <div className="col-sm-4 col-lg-4 col-md-4">
                <h1>40+</h1>
                <h4>Members</h4>
            </div>
            <div className="col-sm-4 col-lg-4 col-md-4">
                <h1>30+</h1>
                <h4>Workshops</h4>
            </div>
            <div className="col-sm-4 col-lg-4 col-md-4">
                <h1>1000+</h1>
                <h4>Participants</h4>
            </div>
        </div>
        <div >
            <img src = {gdsc_img} alt = "gdsc img"></img>
        </div>
        <div  className='container' style={{"textAlign" : "justify", "font-size" : "28px"}} >
        <strong>Lorem ipsum dolor sit amet consectetur. Eget purus vehicula ultrices diam in eget. Phasellus sollicitudin cursus neque in magna sed. Luctus at vitae porttitor urna nec. Aliquam faucibus morbi nullam nulla pellentesque rhoncus tortor. Sit dolor convallis tincidunt donec nam sed. Nunc lorem diam ac sed. Vel sit porttitor a nec sit elit. Tellus aliquet egestas a habitant vitae id sodales. Id lectus facilisi facilisis mauris. Vitae arcu lacus sed ac sapien. Lectus aenean semper netus convallis duis massa nec. Nisl neque sem sed aliquam vitae sed ullamcorper mauris. Nulla sit curabitur a eget etiam auctor. Sed nulla urna lectus lacus diam dui.
        </strong>
        </div>
    </div>
  )
}

export default Frame2