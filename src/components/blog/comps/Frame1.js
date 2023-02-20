import React from 'react'
import bag1 from "../images/1.jpg"
import bag2 from "../images/2.png"
import bag3 from "../images/3.jpg"
import bag4 from "../images/4.webp"
import gdsc_img from "../images/gdsc_img.jpg"
import "./style.css"
function Frame1() {
  return (
    <div className='Frame1'>
      <div>
      <h1 className='h11' style={{"color" : "#FF0000"}}>
            Blogs
      </h1>
      <div className='border1'>
      <img src={bag1} alt="blog image" height={400} width={800}/>
        <div className='container'>
            <div className='container marg'>
              <center>
              <p className='para'>Lorem ipsum dolor sit amet consectetur. Justo morbi ornare sodales tortor iaculis venenatis sed quis risus.
                </p>
              </center>
                
            </div>
        </div>
      </div>
<div className="container frame2 xyz" style={{"padding-right":"10%"}}>
<div className='row'>
  <div className='column'>
    <div className='border2'>
    <img src={bag2} alt="blog image" height={300} width={350}/>
    <div className='container'>
            <div className='container marg'>
              <center>
              <p className='para2'>Lorem ipsum dolor sit amet consectetur.
            adipiscing neque fames tincident aliquam id.
                </p>
              </center>
                
            </div>
        </div>
        </div>
  </div>
  <div className='column'>
    <div className='border2'>
    <img src={bag3} alt="blog image" height={300} width={350} />
    <div className='container'>
            <div className='container marg'>
              <center>
              <p className='para2'>Lorem ipsum dolor sit amet consectetur.
            adipiscing neque fames tincident aliquam id.
                </p>
              </center>
                
            </div>
        </div>
    </div>
    
  </div>
</div>
</div>
<div className="container frame2">
<div className='border3' >
      <img src={bag4} alt="blog image" height={400} width={800}/>
        <div className='container'>
            <div className='container marg'>
              <center>
              </center>
                
            </div>
        </div>
      </div>
      </div>
      <div >
            <img src = {gdsc_img} alt = "gdsc img" height={200} ></img>
        </div>
    </div>
    </div>
  )
}
export default Frame1