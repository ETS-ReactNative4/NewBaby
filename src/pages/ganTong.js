import React from "react";
import Footer from '../components/Footer';
import './course.css';
import mainImg from '../asset/ganTong_course.png';
import mainImg2 from '../asset/gantongjiaoshi.png';
import mainImg4 from '../asset/gantong3.png';
import mainImg5 from '../asset/erweima.png';
import mainImg6 from '../asset/gantong0.png';
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
                <div className="p-node">
                    什么是感统
                </div>
                <div className="content">
                    可能爸爸妈妈们不自觉的会给它穿上神秘的外衣，总觉得感统是一个很高深莫测的东西，其实，我们所说的感统是感觉统合的简称，是大脑对于身体感觉的信息统合整理，大脑将身体传入的视、听、嗅、味、触及平衡感官讯息整合后再通过神经组织指挥身体感官。感觉统合出现障碍时，会产生知觉、语言、认知障碍、情绪及行为控制不良等问题，也就是无法正常与外界事物反应。3岁前是儿童感觉能力发展的关键期，可以预防感觉统合失调。
                </div>
                <img className="img2" src={mainImg6} alt="main" />
                <div className="p-node">
                    课程介绍
                </div>
                <div className="content">
                    纽宝国际的感统课程针对对婴幼儿的感觉信息输入和整合失调开发出来的促进婴幼儿整个神经系统的成熟的早期教育课程。通过丰富多彩的专业感统器械活动来调动孩子主动参与游戏和运动的热情，富有挑战性的健身活动训练大大的增强孩子的平衡性、力量和活动的敏捷性，促进感觉统合协调发展，培养健康快乐自信的高能儿童。
                </div>
                <img className="img2" src={mainImg2} alt="main" />
                <div className="p-node">
                    课程目的
                </div>
                <div className="content paragraph">
                    <span className="bold-txt">• 持续开发大脑</span>  帮助孩子建立优质脑网络，开发身体智能，促进大脑发育。
                </div>
                <div className="content paragraph">
                    <span className="bold-txt">• 感统训练≠游乐场</span>  它以运动和游戏的方式给孩子提供足量、丰富、多元的身体感官刺激，强调足量的刺激以保证突触的分支与连结，涉及身体、大脑和心理三方面的内容，而不只是一种生理上的功能训练。
                </div>
                <div className="content paragraph">
                    <span className="bold-txt">• 五感进阶锻炼</span>  孩子通过感统训练，全面完善视、听、嗅、味、触、前庭、本体等感觉神经系统，促进大脑功能成熟，提升大脑对身体的管控能力。
                </div>
                <div className="content paragraph">
                    <span className="bold-txt">• 感觉处理优化</span>  感觉统合是训练孩子的基本能力，而不是你们看到的运动技巧。它不是让你的孩子学会跳、会跑、会运动，而是让你的孩子感觉处理资讯变好。
                </div>
                <div className="content paragraph">
                    <span className="bold-txt">• 举一反三</span>  身体变成一个轻松的学习工具，让宝宝对新事物一看就懂，一学就会，一做就成，具备举一反三，触类旁通的学习能力。
                </div>
                <img className="img2" src={mainImg4} alt="main" />
                <img className="img2" src={mainImg5} alt="main" />
                <Footer />
            </div>
        );
    }
}