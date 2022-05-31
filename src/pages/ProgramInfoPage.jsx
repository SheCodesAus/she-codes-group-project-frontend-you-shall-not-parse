import React from "react";
// import { useParams, Link, useNavigate, useLocation} from "react-router?-dom";
import "./../App.css"


function Programs() {
    return( 
    // <ProgramSummaries />

    <div className="pscard">
        <h1 className="pshead">
            One Day Workshop
        </h1>
        <h3>
        We offer programming newcomers a taste of HTML & CSS, and Django & Python over the span of one day workshops. Mentors support participants as they work to complete step-by-step tutorials in a self-paced environment over the course of the day. This is a fantastic opportunity for you to share you skills, experience and passion as an industry mentor, whilst also connecting with like-minded industry professionals who are committed to engaging more women with STEM. 
        Did we mention that we also offer lunch, cupcakes and a quick dance break in the afternoon?! 
        <br/>
        Mentors of all levels are encouraged to sign-up and no prior teaching experience is necessary.
        <br/><br/>This is a great way to get involved, make a difference and begin your journey as part of our SheCodes Mentor family! 
        </h3>
        <h1 className="pshead">
            Flash
        </h1>
        <h3>
        <strong>FLASH:</strong> A program covering some of the key fields in tech. We currently focus on front-end development in HTML/CSS, back-end development in Flask, Python fundamentals, processing data, and working with hardware in MicroPython.
        <br/><br/>
        <strong>FLASH NEXT:</strong> This tech taster program designed for young women or non-binary, aged between 13 – 17.  Mentors will support students in building their understanding of the basics of HTML/CSS, JavaScript and hardware.
        <br/><br/>
        <strong>FLASH DATA:</strong> Flash Data is designed for women with a STEM background who are looking to deepen their knowledge in analytics. In this program, Mentors will support participants in learning the fundamentals of Python, statistics, machine learning, data and algorithms.
        </h3>
        <h1 className="pshead">
            Plus
        </h1>
        <h3>
            Description
        </h3>
    </div>

    );
}

export default Programs;