import React from "react";
import Footer from '../components/Footer';
import './course.css';
import mainImg from '../asset/ganTong_course.png';
import { Helmet } from "react-helmet";

// 感统课
export default class GanTong extends React.Component {

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div>
                <Helmet>
                    <title>感统课</title>
                </Helmet>
                <img className="img-main" src={mainImg} alt="main" />
                <div className="content">
                    感觉统合是给与儿童前庭、肌肉、关节、皮肤触摸、视、听、嗅等多种刺激，并将这些刺激与运动相结合。它涉及心里、大脑和躯体三者之间的相互关系，而不只是一种生理上的功能训练，儿童在训练过程中获得熟练的感觉，增强自信心和自我控制的能力，并在指导下感觉到自己对躯体的控制，由原来焦虑的情绪变为愉快，在积极积累经验的基础上，敢于对意志想象进行挑战。能有效激发自身的优秀潜能，有效抑制多动行为，提高专注力，平衡情绪，建立安全感和自信，提高学习能力，是一项集运动、游戏、学习、生活、智能发展于一体的全能训练课程。
                </div>
                <Footer />
            </div>
        );
    }
}