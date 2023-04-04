import "./Teams.css";

import { Component, React } from "react";

import Header from "../component/Header";
import HeroImage from "../component/HeroImage";
import TeamCard from "../component/TeamCard";

class Teams extends Component {
  render() {
    return (
      <div className="container">
        <Header text="Meet the Team" />
        <HeroImage source="/assets/team.png" />
        <Header text="Our Mentor" />
        <div className="teams-container">
          <TeamCard
            name="Sonali Lunawat"
            position="Facilty Coordinator"
            source="/assets/sonali_maam.jpg"
          />
        </div>
        <Header text="Core Team" />
        <div className="teams-container">
          <TeamCard
            name="Abhay Rajput"
            position="Lead"
            source="/assets/abhay_rajput.jpg"
          />
          <TeamCard
            name="Vibha Rao"
            position="Co-Lead"
            source="/assets/vibha_rao.jpeg"
          />
          <TeamCard
            name="Mukesh Tandale"
            position="Technical Head"
            source="/assets/mukesh_tandale.jpg"
          />
          <TeamCard
            name="Jay Firke"
            position="Flutter Head"
            source="/assets/jay_firke.jpeg"
          />
          <TeamCard
            name="Aditi Hambarde"
            position="Design Head"
            source="/assets/aditi_hambarde.jpg"
          />
          <TeamCard
            name="Manvi Gawande"
            position="ML Head"
            source="/assets/manvi_gawande.jpg"
          />

          <TeamCard
            name="Pritam Patil"
            position="Android head"
            source="/assets/pritam_patil.jpg"
          />
          <TeamCard
            name="Vedant Mule"
            position="Frontend Head"
            source="/assets/vedant_mule.jpeg"
          />
          <TeamCard
            name="Abhishek Gawade"
            position="Backend Head"
            source="/assets/abhishek_gawade.jpeg"
          />
          <TeamCard
            name="Rajat Deore"
            position="Web Head"
            source="/assets/rajat_deore.jpg"
          />
          <TeamCard
            name="Sahil Shahane"
            position="Cloud Head"
            source="/assets/sahil_shahane.png"
          />
          <TeamCard
            name="Dheeraj salunkhe"
            position="Cyber security Head"
            source="/assets/dheeraj_salunkhe.jpg"
          />
          <TeamCard
            name="Neeraj Kulkarni "
            position="Blockchain Head"
            source="/assets/neeraj_kulkarni.png"
          />
          <TeamCard
            name="Darshan Nerkar"
            position="Member"
            source="/assets/darshan_nerkar.jpg"
          />
          <TeamCard
            name="Abhishek Jadhav"
            position="Management Head"
            source="/assets/abhishek_jadhav.jpg"
          />
          <TeamCard
            name="Preeti Hankare"
            position="Marketing Head"
            source="/assets/preeti_hankare.jpg"
          />
          <TeamCard
            name="Jeevika Sirwani"
            position="Editorial head"
            source="/assets/jeevika_sirwani.jpg"
          />
          <TeamCard
            name="Atharva Yadav"
            position="Cloud Team Member"
            source="/assets/atharva_yadav.jpg"
          />
        </div>
        x
        <Header text="Technical Team" />
        <div className="teams-container">
          <TeamCard
            name="Tanmay Kulkarni"
            position="Technical Team Member"
            source="/assets/tanmay_kulkarni.jpg"
          />
          <TeamCard
            name="Yash Kadam"
            position="Technical Team Member"
            source="/assets/yash_kadam.jpg"
          />
          <TeamCard
            name="Darshan Rathod"
            position="Technical Team Member"
            source="/assets/darshan_rathod.jpg"
          />
        </div>
        <Header text="Design Team" />
        <div className="teams-container">
          <TeamCard
            name="Trisha Thakur"
            position="Design Team Member"
            source="/assets/trisha_thakur.jpeg"
          />
          <TeamCard
            name="Dnyaneshwari Jadhav"
            position="Design Team Member"
            source="/assets/dyaneshwari_jadhav.jpg"
          />
        </div>
        <Header text="Marketing Team" />
        <div className="teams-container">
          <TeamCard
            name="Piyush Bhone"
            position="Marketing Team Member"
            source="/assets/piyush_bhone.jpg"
          />
          <TeamCard
            name="Prem Bambori"
            position="Marketing Team Member"
            source="/assets/prem_bambori.jpg"
          />
        </div>
        <Header text="Management Team" />
        <div className="teams-container">
          <TeamCard
            name="Gayatri Kakad"
            position="Management Team Member"
            source="/assets/gayatri_kakad.png"
          />
          <TeamCard
            name="Yash Yadwadkar"
            position="Management Team Member"
            source="/assets/yash_yadwadkar.jpeg"
          />
          <TeamCard
            name="Siddhant Jadhav"
            position="Management Team Member"
            source="/assets/siddhant_jadhav.jpg"
          />
          <TeamCard
            name="Trapti Gorbade"
            position="Management Team Member"
            source="/assets/trapti_gorbade.jpg"
          />
          <TeamCard
            name="Aman Kocharekar"
            position="Management Team Member"
            source="/assets/aman_kocharekar.jpg"
          />
          <TeamCard
            name="Pushkar Sarda"
            position="Management Team Member"
            source="/assets/pushkar_sarda.jpg"
          />
          <TeamCard
            name="Varenyam Nikam"
            position="Management Team Member"
            source="/assets/varenyam_nikam.jpg"
          />
        </div>
      </div>
    );
  }
}

export default Teams;
