import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5, faCss3Alt, faJs, faReact, faBootstrap } from '@fortawesome/free-brands-svg-icons'
import { DiRuby, DiRor, DiJqueryLogo, DiPostgresql, DiMongodb, DiNodejsSmall } from "react-icons/di";

export default class Skills extends Component {
    render() {
        return (
            <div>
                <div className="resume-section p-3 p-lg-3 d-flex justfy-content-center Skills" id="skills">
                    <div className="about w-100">
                        <h2 className="mb-5"><span>Skills</span></h2>

                        <div className="resume-item  d-flex flex-column flex-md-row  mb-5">
                            <div className="resume-content">
                                <div className="sub mb-3">Programming Languages & Tools </div>
                                <ul className="dev-icons" >
                                    <li className="icon" >
                                        <FontAwesomeIcon icon={faHtml5} />
                                    </li>
                                    <li className="icon" >
                                        <FontAwesomeIcon icon={faCss3Alt} />
                                    </li>
                                    <li className="icon" >
                                        <FontAwesomeIcon icon={faJs} />
                                    </li>
                                    <li className="icon" >
                                        <FontAwesomeIcon icon={faReact} />
                                    </li>
                                    <li className="icon" >
                                        <DiRuby />
                                    </li>

                                    <li className="icon" >
                                        <i><FontAwesomeIcon icon={faBootstrap} /></i>
                                    </li>
                                    <li className="icon" >
                                        <i><DiJqueryLogo /></i>
                                    </li>
                                </ul>
                                <ul className="dev-icons" >
                                    <li className="icon" >
                                        <DiPostgresql />
                                    </li>
                                    <li className="icon" >
                                        <DiMongodb />
                                    </li>
                                    <li className="icon" >
                                        <DiNodejsSmall />
                                    </li>
                                    <li className="icon" >
                                        <i><DiRor /></i>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <br />
                    </div>
                </div>
            </div>
        )
    }
}
