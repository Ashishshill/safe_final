import React from "react";
import "./About.css";
import aboutImg from "../img/Home1.JPG";
function About() {
  //  Up To Top Btn
   
  return (
    <div className="about component__space" id="About">
      <div className="container">
        <div className="row">
          <div className="col__2">
            <img src={aboutImg} alt=" logo" className="about__img" />
          </div>
          <div className="col__2">
            <h1 className="about__heading">Brief overview of our expertise</h1>
            <div className="about__meta">
              <p className="about__text p__color">The firm undertakes a wide range of service and research provisions in the donor supported development projects. SAFE meanwhile has provided services to different organizations in the field of monitoring, project mid-term (MTR) and final evaluation, management consultancy, baseline survey, market research, administrative and logistics Services for national reviews, gender and social inclusion, public health, agri-business development support services and agricultural technical consultancy. Disaster risk reduction (DRR) and Climate Change impact adaptation strategies. The assignments includes quantitative & qualitative research and Participatory Rural Appraisal (PRA) exercise for community needs assessment, farmers’ field school (FFS) establishment, conducting ToT (training of trainers), capacity building, participatory monitoring and evaluation (PME) system development, project proposal writing, , impact evaluation/assessment, need assessment, participatory action research (PAR), different Learning curriculum development, participatory technology development (PTD) and evaluation) and logistical support for organizing workshop/ and seminar. </p>
              <p className="about__text p__color">
                
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* UP TO TOP BTN */}
      <div className="up__to__top__btn">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-chevron-up white"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
          />
        </svg>
      </div>
    </div>
  );
}

export default About;
