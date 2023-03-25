import "../initial.css";

import React, { useState } from "react";

import ab from "./logos/abhayrajput.jpg";
import abi from "./logos/abhi.jpg";
import ad from "./logos/android.png";
import cld from "./logos/cloud.png";
import couple from "./couple.png";
import domains from "./domains.png";
import fb from "./logos/firebase.png";
import ft from "./logos/flutter.png";
import ft2 from "./logos/flutter2.png";
import gdsc from "./logos/google.svg";
import gthb from "./logos/gth.svg";
import humans from "./humans.png";
import instm from "./logos/inst.svg";
import llt from "./logos/ll.svg";
import member from "./member.png";
import mkh from "./logos/mukesh.JPG";
import ml from "./logos/mlg.png";
import prt from "./logos/preeti.png";
import question from "./question.png";
import slm from "./logos/sm.png";
import task from "./task.png";
import ts from "./logos/trisha.png";
import wd from "./logos/webdev.png";

// import roadmap from './roadmap.png'






















export default function Initial() {
  const [bar, setBar] = useState("");
  const [event, setevent] = useState("past");
  function set1() {
    setBar("Lead");
    console.log(bar);
  }
  function set2() {
    setBar("technical");
    console.log(bar);
  }
  function set3() {
    setBar("management");
    console.log(bar);
  }
  function set4() {
    setBar("design");
    console.log(bar);
  }
  function set5() {
    setBar("marketing");
    console.log(bar);
  }
  function set6() {
    setBar("members");
    console.log(bar);
  }
  function past() {
    setevent("past");
  }
  function upcoming() {
    setevent("upcoming");
  }
  return (
    <>
      <div className="gdsc">
        <div className="arrow-up"></div>
        <h1
          ClassName="xyz"
          Style="color:red; display:inline; padding-left:5%;font-family: 'Oregano', cursive; font-size:60px;"
        >
          <a href="https://gdsc.community.dev/">Google</a>{" "}
        </h1>
        <h1
          ClassName="xyz"
          Style="color:blue; display:inline; font-family: 'Oregano', cursive; font-size:60px;"
        >
          Developers{" "}
        </h1>
        <h1
          ClassName="xyz"
          Style="color:green; display:inline; font-family: 'Oregano', cursive; font-size:60px;"
        >
          Student{" "}
        </h1>
        <h1
          ClassName="xyz"
          Style="color:yellow; display:inline; font-family: 'Oregano', cursive; font-size:60px;"
        >
          <a href="https://gdsc.community.dev/">Club</a>{" "}
        </h1>
        <h1
          ClassName="des"
          Style="padding-top:20px; font-family: 'Oregano', cursive;"
        >
          PCCOER
        </h1>
        <div className="row">
          <div className="circle col-md-1"></div>
          <div className="col-md-10">
            <img className="humans" src={humans} alt="humans"></img>
            <div className="arrow-up2"></div>
          </div>
        </div>
        <div className="row" id="row-about">
          <div className="col-md-8 abu" Style="padding-left:3%;">
            <h1 Style="color:red;">About Us</h1>
            <p Style="font-size:24px; text-align:center;">
              If you love to code and develop, you are welcome to the world of
              Google Developer Technologies! GDSC provides you a platform to
              enhance your technical skills through our free hands-on workshops,
              study-jams and project building activities. We work together as a
              team to build inspiring solutions to solve real-world problems.
              Not only this, top performers also get a chance to win swags and
              goodies! Join us and let’s begin this journey of learning and
              growing together as a community!
            </p>
          </div>
          <div className="col-md-4" Style="padding-right:8%">
            <img className="couples" src={couple} alt="humans"></img>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div class="why-row">
              <div className="col-md-4 x">
                <img className="logo" src={question} alt="hum"></img>
                <h2>Why dsc ?</h2>
                <p Style="color:white; font-size:22px;">
                  The DSC program is a grassroots channel through which Google
                  provides development, mobile &amp; web development skills for
                  students, towards employability.
                </p>
              </div>
              <div className="col-md-4 y">
                <img className="logo" src={member} alt="hum"></img>
                <h2>Who can apply ?</h2>
                <p Style="color:white; font-size:22px;">
                  The DSC program is a grassroots channel through which Google
                  provides development skills for students, towards
                  employability.
                </p>
              </div>
              <div className="col-md-4 z">
                <img className="logo" src={task} alt="hum"></img>
                <h2>How to apply ?</h2>
                <p Style="color:white; font-size:22px;">
                  The DSC program is a grassroots channel through which Google
                  provides development, mobile & web development skills for
                  students, towards employability.
                </p>
              </div>
            </div>
            <div className="row">
              <img src={domains} className="dom" alt="dom"></img>
            </div>

            {/* events and workshop */}

            <div className="Team">
              <h1 Style="color:green; margin-bottom:5px;">
                Events and Workshop!
              </h1>
              <div className="row">
                <div class="grid-btn">
                  <div className="col-md-6">
                    <button type="button" className="evb ev1" onClick={past}>
                      {" "}
                      Past Events
                    </button>
                  </div>
                  <div className="col-md-6">
                    <button
                      type="button"
                      className="evb ev2"
                      onClick={upcoming}
                    >
                      Upcoming Events
                    </button>
                  </div>
                </div>
                {event === "past" && (
                  <div className="conta">
                    {/* <img src={roadmap} alt="roadmap" className='roadmap' /> */}
                    <div className="row firstr">
                      <div
                        className="col-md-6 evc"
                        id="c1"
                        Style="background-color:#EFAC17;"
                      >
                        <div className="row">
                          <div className="Col-md-6">
                            <img src={fb} alt="" />
                          </div>
                          <div className="Col-md-6">
                            <h5>Firebase</h5>
                            <h4>May 6 2022</h4>
                          </div>
                        </div>
                      </div>
                      <div
                        className="col-md-6 evc"
                        id="c2"
                        Style="background-color:#7239EA;"
                      >
                        <div className="row">
                          <div className="Col-md-6">
                            <img src={ml} alt="" />
                          </div>
                          <div className="Col-md-6">
                            <h5>Machine-leaning</h5>
                            <h4>March 24 2022</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="cal evc"
                      id="c3"
                      Style="background-color:#EA394A;"
                    >
                      <div className="row">
                        <div className="Col-md-6">
                          <img src={ft} alt="" />
                        </div>
                        <div className="Col-md-6">
                          <h5>Flutter</h5>
                          <h4>March 8 2022</h4>
                        </div>
                      </div>
                    </div>
                    <div className="row firstr">
                      <div
                        className="col-lg-6 evc"
                        id="c4"
                        Style="background-color:#0CBC8B;"
                      >
                        <div className="row">
                          <div className="Col-md-6">
                            <img src={ad} alt="" />
                          </div>
                          <div className="Col-md-6">
                            <h5>Android</h5>
                            <h4>Nov 30, 2021</h4>
                          </div>
                        </div>
                      </div>
                      <div
                        className="col-lg-6 evc"
                        id="c5"
                        Style="background-color:#367CFF;"
                      >
                        <div className="row">
                          <div className="Col-md-6">
                            <img src={cld} alt="" />
                          </div>
                          <div className="Col-md-6">
                            <h5>Cloud Computing</h5>
                            <h4>Sept 20 ,2027</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {event === "upcoming" && (
                  <div className="conta2">
                    {/* <img src={roadmap} alt="roadmap" className='roadmap' /> */}
                    <div className="row firstr">
                      <div
                        className="col-md-6 evc" id="c6"
                        Style="background-color:#367CFF;"
                      >
                        <div className="row">
                          <div className="Col-md-6">
                            <img src={ft2} alt="" />
                          </div>
                          <div className="Col-md-6">
                            <h5>Flutter</h5>
                            <h4>27 FEB 2023</h4>
                          </div>
                        </div>
                      </div>
                      <div
                        className="col-md-6 evc"
                        Style="background-color:#0CBC8B;"
                      >
                        <div className="row">
                          <div className="Col-md-6">
                            <img src={wd} alt="" />
                          </div>
                          <div className="Col-md-6">
                            <h5>Web-Dev</h5>
                            <h4>March 7 2023</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="cal evc" Style="background-color:#EA394A;">
                      <div className="row">
                        <div className="Col-md-6">
                          <img
                            src={gdsc}
                            Style="width:60px;height:60px"
                            alt=""
                          />
                        </div>
                        <div className="Col-md-6">
                          <h5>Solution Challenge</h5>
                          <h4>March 10 2023</h4>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div
                        className="col-lg-6 evc"
                        Style="background-color:#7239EA ;"
                      >
                        <div className="row">
                          <div className="Col-md-6">
                            <img src={ml} alt="" />
                          </div>
                          <div className="Col-md-6">
                            <h5>ML</h5>
                            <h4>March 22 2023</h4>
                          </div>
                        </div>
                      </div>
                      <div
                        className="col-lg-6 evc"
                        Style="background-color:#EFAC17;"
                      >
                        <div className="row">
                          <div className="Col-md-6">
                            <img
                              src={gdsc}
                              Style="width:60px;height:60px"
                              alt="gdsc"
                            />
                          </div>
                          <div className="Col-md-6">
                            <h5>GDSC WOW</h5>
                            <h4>1st April</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <h1 Style="color:red;" className="team">
              Meet the Team
            </h1>
            <div className="row cont team-container">
              <div className="col-md-2 yl" Style="color:white">
                <h4 id="btn" type="button" onClick={set1}>
                  Lead
                </h4>
              </div>
              <div className="col-sm-2 yl" Style="color:white">
                <h4 type="button" onClick={set2}>
                  Technical
                </h4>
              </div>
              <div className="col-sm-2 yl" Style="color:white">
                <h4 type="button" onClick={set3}>
                  Management
                </h4>
              </div>
              <div className="col-md-2 yl" Style="color:white">
                <h4 type="button" onClick={set4}>
                  Design
                </h4>
              </div>
              <div className="col-md-2 yl" Style="color:white">
                <h4 type="button" onClick={set5}>
                  Marketing
                </h4>
              </div>
              <div className="col-sm-2 yl" Style="color:white">
                <h4 type="button" onClick={set6}>
                  Mentor
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* HEAD */}
      {bar === "Lead" && (
        <div className="col-md-6 sp">
          <img src={ab} className="circ bigh" alt="circ" />
          <h3>Abhay Rajput</h3>
          <div
            className="row team-member"
            Style="padding-left:15px;padding-top:50px; margin-top:20% margin-right:0%; margin-left:0%;"
          >
            <div className="col-sm-3">
              <a href="https://www.linkedin.com/in/abhay-rajput">
                <img src={llt} className="ico" alt="w" />
              </a>
            </div>
            <div className="col-sm-3 ">
              <a href="https://github.com/abhaysrajput">
                <img src={gthb} className="ico" alt="w" />
              </a>
            </div>
            <div className="col-sm-3">
              <a href="https://instagram.com/abhayrajput____">
                <img src={instm} className="ico" alt="x" />
              </a>
            </div>
          </div>
        </div>
      )}
      {/*Technical  */}
      {bar === "technical" && (
        <div className="col-md-6 sp">
          <img src={mkh} className="circ bigh" alt="circ" />
          <h3>Mukesh Tandale</h3>
          <div
            className="row team-member"
            Style="padding-left:15px;padding-top:50px; margin-top:20% margin-right:0%; margin-left:0%;"
          >
            <div className="col-sm-3">
              <a href="https://www.linkedin.com/in/mukesh-tandale/">
                <img src={llt} className="ico" alt="w" />
              </a>
            </div>
            <div className="col-sm-3 ">
              <a href="https://github.com/d093w1z">
                <img src={gthb} className="ico" alt="w" />
              </a>
            </div>
            <div className="col-sm-3">
              <a href="www.google.com">
                <img src={instm} className="ico" alt="x" />
              </a>
            </div>
          </div>
        </div>
      )}
      {/* management head */}
      {bar === "management" && (
        <div className="col-md-6 sp">
          <img src={abi} className="circ bigh" alt="circ" />
          <h3>Abhishek Jadhav</h3>
          <div
            className="row team-member"
            Style="padding-left:15px;padding-top:50px; margin-top:20% margin-right:0%; margin-left:0%;"
          >
            <div className="col-sm-3">
              <a href="https://www.linkedin.com/in/abhishek-jadhav-142655205">
                <img src={llt} className="ico" alt="w" />
              </a>
            </div>
            <div className="col-sm-3 ">
              <a href="https://github.com/Dark-Alpha-7">
                <img src={gthb} className="ico" alt="w" />
              </a>
            </div>
            <div className="col-sm-3">
              <a href="https://instagram.com/atharva_ghogare">
                <img src={instm} className="ico" alt="x" />
              </a>
            </div>
          </div>
        </div>
      )}
      {/* design */}
      {bar === "design" && (
        <div className="col-md-6 sp">
          <img src={ts} className="circ bigh" alt="circ" />
          <h3>Trisha Thakur</h3>
          <div
            className="row team-member"
            Style="padding-left:15px;padding-top:50px; margin-top:20% margin-right:0%; margin-left:0%;"
          >
            <div className="col-sm-3">
              <a href="https://www.linkedin.com/in/trisha-thakur-09b8aa237/">
                <img src={llt} className="ico" alt="w" />
              </a>
            </div>
            <div className="col-sm-3 ">
              <a href="www.google.com">
                <img src={gthb} className="ico" alt="w" />
              </a>
            </div>
            <div className="col-sm-3">
              <a href="www.google.com">
                <img src={instm} className="ico" alt="x" />
              </a>
            </div>
          </div>
        </div>
      )}
      {/* marketing */}
      {bar === "marketing" && (
        <div className="col-md-6 sp">
          <img src={prt} className="circ bigh" alt="circ" />
          <h3>Preeti Hankare</h3>
          <div
            className="row team-member"
            Style="padding-left:15px;padding-top:50px; margin-top:20% margin-right:0%; margin-left:0%;"
          >
            <div className="col-sm-3">
              <a href="https://www.linkedin.com/in/preeti-hankare-9b7461239/">
                <img src={llt} className="ico" alt="w" />
              </a>
            </div>
            <div className="col-sm-3 ">
              <a href="www.google.com">
                <img src={gthb} className="ico" alt="w" />
              </a>
            </div>
            <div className="col-sm-3">
              <a href="www.google.com">
                <img src={instm} className="ico" alt="x" />
              </a>
            </div>
          </div>
        </div>
      )}

      {/* members */}
      {bar === "members" && (
        <div className="col-md-6 sp">
          <img src={slm} className="circ bigh" alt="circ" />
          <h3>Prof Sonali Lunawat</h3>
          <div
            className="row team-member"
            Style="padding-left:15px;padding-top:50px; margin-top:20% margin-right:0%; margin-left:0%;"
          >
            <div className="col-sm-3">
              <a href="https://www.linkedin.com/in/sonali-lunawat">
                <img src={llt} className="ico" alt="w" />
              </a>
            </div>
            <div className="col-sm-3 ">
              <a href="www.google.com">
                <img src={gthb} className="ico" alt="w" />
              </a>
            </div>
            <div className="col-sm-3">
              <a href="www.google.com">
                <img src={instm} className="ico" alt="x" />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
