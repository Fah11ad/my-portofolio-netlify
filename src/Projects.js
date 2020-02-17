import React, { Component } from 'react'
import { AiFillCalculator } from 'react-icons/ai'
import { IoIosFootball } from 'react-icons/io'
import { GiVillage } from 'react-icons/gi'
import { FaComments } from 'react-icons/fa'


export default class Projects extends Component {
    render() {
        return (
            <div>
                <div className="resume-section p-3 p-lg-3 d-flex justfy-content-center Projects" id="projects">
                    <div className="about w-100">
                        <h2 className="mb-5"><span>Projects</span></h2>
                        <div className="resume-item  d-flex flex-column flex-md-row  mb-5">
                            <div className="resume-content">
                                <div className="project-container ftco-animate ftco-animated">
                                <a className="speed-math-icon project-icons" href="https://fah11ad.github.io/Project-1---Speed-Math-Game/" target="_blank">
                                <span className="icon" ><AiFillCalculator /> </span>
                                <h3>Speed Math Game</h3>
                                <div className="sub mb-3">Individual Work </div>
                                <p>&nbsp;challenge game so the user have to answer as mush as possible the math questions before the time is end and without any mistake.&nbsp;</p>
                                </a>
                                </div>
                                <div className="project-container ftco-animate ftco-animated">
                                <a className="speed-math-icon project-icons" href="https://football-react-app.herokuapp.com/" target="_blank">
                                <span className="icon" ><IoIosFootball /> </span>
                                <h3>Football News</h3>
                                <div className="sub mb-3">Individual Work </div>
                                <p>&nbsp;This app is covering football news, such as up to date Scheduled matches, results of matches and Standings Tables of top five leagues.&nbsp;</p>
                                </a>
                                </div>
                                <div className="project-container ftco-animate ftco-animated">
                                <a className="speed-math-icon project-icons" href="https://project3-shalihat.herokuapp.com/" target="_blank">
                                <span className="icon" ><GiVillage  /> </span>
                                <h3>Shalihat</h3>
                                <div className="sub mb-3">Team Work </div>
                                <p>&nbsp;Shalihat is a web application that allows a customer to search for a villa for daily reservations.&nbsp;</p>
                                </a>
                                </div>
                                <div className="project-container ftco-animate ftco-animated">
                                <a className="speed-math-icon project-icons" href="#" target="_blank">
                                <span className="icon" ><FaComments /> </span>
                                <h3>Sport Relay</h3>
                                <div className="sub mb-3">Team Work</div>
                                <p>&nbsp;SportRelay is a web application with two main features, the first one allows the user to communicate with others by creating or watching sport posts and adding a comment to these posts. Second one allows the user to see football news, such as scheduled matches, results of matches and Standings Tables of the top five leagues. In addition, the user can choose his favorite team and see all related results and upcoming matches.&nbsp;</p>
                                </a>
                                </div>

                            </div>
                        </div>
                        <br />
                    </div>
                </div>
            </div>
        )
    }
}
