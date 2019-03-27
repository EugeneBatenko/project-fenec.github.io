import React, {Component} from 'react';
// import {Link} from "react-router-dom";
//Images
import beetroot from '../../img/beetroot.jpg';
import mogo from '../../img/mogo.jpg';
import appstarter from '../../img/appstarter.jpg';


class Projects extends Component {
    render() {
        return (
            <section className="l-projects pt-3 pb-3">

                <div className="m-section-header container text-center mb-2">
                    <h2>Projects</h2>
                    <h3>few projects in portfolio</h3>
                </div>

                <div className="d-flex flex-wrap around">
                    <figure className="card-img">
                        <img src={beetroot} alt="beetroot"/>

                        <figcaption>
                            <h4>Exam project</h4>
                            <p>Front-end semester exam task</p>
                            <ul className="links">
                                <li><a href="https://github.com/EugeneBatenko/beetroot-exam.github.io">Repository</a></li>
                                <li><a href="https://eugenebatenko.github.io/beetroot-exam.github.io/app/">Demo</a></li>
                                <li><a href="https://drive.google.com/file/d/1uiNhR_D7pPvHmZ5KmFodDmc-Qf5MdKmk/view">Certificate</a></li>
                            </ul>
                        </figcaption>
                    </figure>

                    <figure className="card-img hover">
                        <img src={mogo} alt="mogo"/>

                        <figcaption>
                            <h4>Mogo</h4>
                            <p>Summer 2018 practise project</p>
                            <ul className="links">
                                <li><a href="https://github.com/EugeneBatenko/ukietech-practice.github.io">Repository</a></li>
                                <li><a href="https://eugenebatenko.github.io/ukietech-practice.github.io/app/">Demo</a></li>
                            </ul>
                        </figcaption>
                    </figure>

                    <figure className="card-img">
                        <img src={appstarter} alt="appstarter"/>
                        <figcaption>
                            <h4>AppStarter</h4>
                            <p>Test-task. Bootstrap 4</p>
                            <ul className="links">
                                <li><a href="https://github.com/EugeneBatenko/test-task-tonti-laguna.github.io">Repository</a></li>
                                <li><a href="https://eugenebatenko.github.io/test-task-tonti-laguna.github.io/app/">Demo</a></li>
                            </ul>
                        </figcaption>
                    </figure>
                </div>
            </section>
        );
    }
}

export default Projects;