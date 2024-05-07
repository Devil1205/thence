import HeaderPrimary from "../layout/Header/HeaderPrimary";
import "./Home.css";
import home2 from "../../images/home2.svg";
import arrowRight from "../../images/arrowRight.svg";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Footer from "../layout/Footer/Footer";
import Title from "../layout/Title";

function Home() {
  return (
    <>
      <HeaderPrimary />
      <Title title={"Thence - Home"} />
      <div className="home space-y-20 p-4">
        <div></div>
        <div className="home-1 flex flex-col items-center max-w-[588px] mx-auto">
          <p className="text-[#2DA950]">Success Stories</p>
          <div className="text-[#1C1C1C]">Every success journey we’ve encountered.</div>
        </div>
        <div className="home-2">
          <div className="flex flex-col items-center min-[1200px]:flex-row justify-center gap-40">
            <div className="homeImageContainer py-14 min-[575px]:px-[80px] px-4">
              <div className="homeImage w-96 max-w-full h-[400px] rounded-[50px] space-y-6 min-[575px]:space-y-0">
                <div className="homeImage-1 rounded-3xl p-3 max-w-[220px] bg-white min-[575px]:relative top-[40px] right-[80px]">
                  <h3 className="font-bold text-[64px]">40%</h3>
                  <p className="text-[#828282]">Achieved reduction in project execution time by optimising team availability</p>
                </div>
                <div className="homeImage-2 flex items-center space-x-3 bg-white rounded-full p-3 w-fit min-[575px]:relative top-[80px] right-[80px]">
                  <div className="cursor-pointer bg-[#DDEFE0] p-2 h-fit rounded-full"><img src={home2} alt="" /></div>
                  <div>
                    <h3 className="text-[24px]">10 DAYS</h3>
                    <p className="text-[#828282]">Staff Deployement</p>
                  </div>
                </div>
                <div className="homeImage-3 space-y-4 w-fit p-3 rounded-xl bg-[#002E18] min-[575px]:relative top-[-20px] left-[210px]">
                  <div className="flex mt-2">
                    <h3 className="text-5xl text-white">$0.5 </h3>
                    <span className="text-[#A6A3A0] self-end">MILLION</span>
                  </div>
                  <p className="max-w-[224px] text-[#CCCCCC]">Reduced client expenses by saving on hiring and employee costs.</p>
                </div>
              </div>
            </div>
            <div className="homeCarousel">
              <Carousel
                autoPlay
                infiniteLoop
                showArrows={false}
                showStatus={false}
                className="max-w-[398px]"
              >
                <div className="content max-w-[398px]" key={1}>
                  <p>Enhance fortune 50 company’s insights teams research capabilities</p>
                </div>
                <div className="content max-w-[398px]" key={2}>
                  <p>Enhance fortune 50 company’s insights teams research capabilities</p>
                </div>
                <div className="content max-w-[398px]" key={2}>
                  <p>Enhance fortune 50 company’s insights teams research capabilities</p>
                </div>
              </Carousel>
              <button className="thenceBtn thenceBtnSecondary flex items-center py-4 mt-10">Expore Now <img src={arrowRight} alt="" /></button>
            </div>
          </div>
        </div>
        <div className="home-3 flex flex-col min-[950px]:flex-row bg-[#E8EEE7] p-12 gap-8 rounded-3xl">
          <div className="home-3-1">
            <div className="text-[#9E9D9D]">What's on your mind</div>
            <h2>Ask Questions</h2>
          </div>
          <div className="home-3-2">
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                Do you offer freelancers?
              </AccordionSummary>
              <AccordionDetails>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
              >
                What’s the guarantee that I will be satisfied
                with the hired talent?
              </AccordionSummary>
              <AccordionDetails>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
              </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3-content"
                id="panel3-header"
              >
                Can I hire multiple talents at once?
              </AccordionSummary>
              <AccordionDetails>
                If unhappy with a project, communicate with the freelancer, allow for revisions, and refer to the agreement. Escalate to platform support if needed, considering mediation. Review policies, seek collaborative solutions for resolution.
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel4-content"
                id="panel4-header"
              >
                Why should I not go to an agency directly?
              </AccordionSummary>
              <AccordionDetails>
                If unhappy with a project, communicate with the freelancer, allow for revisions, and refer to the agreement. Escalate to platform support if needed, considering mediation. Review policies, seek collaborative solutions for resolution.
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel5-content"
                id="panel5-header"
              >
                Who can help me pick a right skillset
                and duration for me?
              </AccordionSummary>
              <AccordionDetails>
                If unhappy with a project, communicate with the freelancer, allow for revisions, and refer to the agreement. Escalate to platform support if needed, considering mediation. Review policies, seek collaborative solutions for resolution.
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Home