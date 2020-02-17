import React, { Component } from 'react'

export default class Education extends Component {
    render() {
        return (
            <div>
                <div className="resume-section p-3 p-lg-3 d-flex justfy-content-center education" id="edu">
                    <div className="about w-100">
                        <h2 className="mb-5"><span>Education</span></h2>

                        <div className="resume-item  d-flex flex-column flex-md-row  mb-5">
                            <div className="resume-content">
                                <h3>King Abdulaziz University</h3>
                                <div className="sub mb-3">Major </div>
                                <p>&nbsp;Information Management &nbsp;</p>
                                <p>&nbsp;GPA: 4.66 &nbsp;</p>
                            </div>
                            <div className="resume-date text-md-right">
                                December 2017
                     </div>
                        </div>
                        <div className="resume-item  d-flex flex-column flex-md-row  mb-5">
                            <div className="resume-content">
                                <h3>King Abdulaziz University</h3>
                                <div className="sub mb-3">Bachelor of Science </div>
                                <p>&nbsp;Organization Management &nbsp;</p>
                                <p>&nbsp;GPA: 3.94 &nbsp;</p>
                            </div>
                            <div className="resume-date text-md-right">
                                December 2013
                     </div>
                        </div>
                        <div className="resume-item  d-flex flex-column flex-md-row  mb-5">
                            <div className="resume-content">
                                <h3>College of Telecomm. & Electronics</h3>
                                <div className="sub mb-3">Association Degree </div>
                                <p>&nbsp;Associate Communication  &nbsp;</p>
                                <p>&nbsp;GPA: 4.05 &nbsp;</p>
                            </div>
                            <div className="resume-date text-md-right">
                                January 2004
                     </div>
                        </div>
                        <br />

                    </div>

                </div>

            </div>
        )
    }
}
