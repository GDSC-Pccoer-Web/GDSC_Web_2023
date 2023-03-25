import AboutCommunity from "../component/About-community";
import AboutGdscPccoer from "../component/About-gdsc-pccoer";
import AboutPageEnd from "../component/About-page-end";
import AboutPageMid from "../component/About-page-mid";
import Paragraph from "../component/Paragraph";
import "./About.css";
import HeaderImage from "./../component/HeaderImage";

const About = () => {
  return (
    <div className="about">
      <AboutCommunity />
      <AboutPageMid />
      <AboutGdscPccoer />
      <Paragraph
        text="Every year Google selects students from universities around the globe to lead the developer communities at their campus and help students bridge the gap between theory and practice. These students are leaders who are dedicated to helping their mates learn, grow, &amp; connect in a peer-to-peer environment.
As part of the program, these students referred to as leads work with their colleges to launch a student club at their campus and collaborate with local partners to build solutions for the next billion users, with a little help from Google. I came to know about this program during DevFest'19, Trivandrum."
      />
      <AboutPageEnd />
      <HeaderImage src="/c50b4cb4ca7a4bb999459ade658c4c18-2@2x.png" />
      <Paragraph
        text="
        Lorem ipsum dolor sit amet consectetur. Eget purus vehicula ultrices
        diam in eget. Phasellus sollicitudin cursus neque in magna sed. Luctus
        at vitae porttitor urna nec. Aliquam faucibus morbi nullam nulla
        pellentesque rhoncus tortor. Sit dolor convallis tincidunt donec nam
        sed. Nunc lorem diam ac sed. Vel sit porttitor a nec sit elit. Tellus
        aliquet egestas a habitant vitae id sodales. Id lectus facilisi
        facilisis mauris. Vitae arcu lacus sed ac sapien. Lectus aenean semper
        netus convallis duis massa nec. Nisl neque sem sed aliquam vitae sed
        ullamcorper mauris. Nulla sit curabitur a eget etiam auctor. Sed nulla
        urna lectus lacus diam dui."
      />
    </div>
  );
};

export default About;
