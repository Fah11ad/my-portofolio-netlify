import React, { Component } from 'react'

export default class Experience extends Component {
    render() {
        return (
            <div>
                <div className="resume-section p-3 p-lg-3 d-flex justfy-content-center experience" id="exp">
               <div className="about w-100">
                <h2 className="mb-5"><span>Experience</span></h2>

                <div className="resume-item  d-flex flex-column flex-md-row  mb-5">
                    <div className="resume-content">
                    <h3>Junior Web Devloper</h3>
                    <div className="sub mb-3">SEI Misk - General Assembly</div>
                    <p>&nbsp;Requirements included the attendance of 480 hours of face to face interaction and projects completion as well as building full stack apps. &nbsp;</p>
                    </div>
                    <div className="resume-date text-md-right">
                         September 2019 - December 2019
                     </div>
                </div>

                <div className="resume-item  d-flex flex-column flex-md-row  mb-5">
                    <div className="resume-content">
                    <h3>IT Specialist</h3>
                    <div className="sub mb-3">Saudia Airlines</div>
                    <p>Perform data backups and disaster recovery operations. Diagnose, troubleshoot, and resolve hardware, software, or other network and system problems, and replace defective components when necessary. 
 </p>
                    <p>&nbsp;<span style={{textDecoration: 'underline', fontWeight: 'bold'}}>Achievements</span> : As a project leader of DC operations insourcing project in 2018, I help my company to reduce around 97,000 SAR from the outsource contract. This project starts from the second half of 2018 for six months 
 &nbsp;</p>
                    </div>
                    <div className="resume-date text-md-right">
                         April 2010 - Present
                     </div>
                </div>
            
                 

                 <br />
                
                </div> 
                
                </div> 
            </div>
        )
    }
}
