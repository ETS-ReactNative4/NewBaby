import React, { Component } from 'react';
// import logo from './logo.svg';
import mainImg from './asset/main.png';
import infoImg from './asset/info.png';
import ganTongImg from './asset/ganTong.png';
// import yinImg from './asset/yinYue.png';
import sds from './asset/yinYue.png';
import yiShuImg from './asset/yiShu.png';
import chuYiImg from './asset/chuYi.png';
import leGaoImg from './asset/legao.png';
import jianShenImg from './asset/jianShen.png';
import ganTongIcon from './asset/ganTong_icon.png';
import yinYueIcon from './asset/yinYue_icon.png';
import yiShuIcon from './asset/yiShu_icon.png';
import chuYiIcon from './asset/chuYi_icon.png';
import leGaoIcon from './asset/leGao_icon.png';
import jianShenIcon from './asset/jianShen_icon.png';
import './App.css';
import Swiper from './components/Swiper';

import GanTong from './pages/ganTong';
import YinYue from './pages/yinYue';
import YiShu from './pages/yiShu';
import ChuYi from './pages/chuYi';
import LeGao from './pages/leGao';
import JianShen from './pages/jianShen';
import More from './pages/more';
import Footer from './components/Footer';
import { Router, navigate } from '@reach/router';

class App extends Component {
    render() {
        return (
            <div className="App">
                <img src={mainImg} className="Img-main" alt="main" />
                <img src={infoImg} className="Img-info" alt="info" />
                <div className="Course-container">
                    <div className="Course-title">纽宝课程</div>
                    <div className="Course-title-en">Our Classes</div>
                    <div className="Course-cell-row">
                        <div className="Course-cell-container" onClickCapture={() => { navigate("ganTong"); }}>
                            <img src={ganTongImg} className="Img-course" alt="ganTong" />
                            <div className="Course-cell-title">
                                <img src={ganTongIcon} className="Img-course-icon" alt="ganTong" />
                                感统课(2岁-12岁)
                            </div>
                            <div className="Course-content">
                                给与孩子前庭、肌肉、关节、皮肤出没、视听嗅等多种刺激，并将这些刺激与运动相结合，它涉及心理、大脑……
                            </div>
                            <div className="Course-more">
                                了解更多>
                            </div>
                        </div>
                        <div className="Course-cell-container" onClickCapture={() => { navigate("yinYue"); }}>
                            <img src={sds} className="Img-course" alt="ganTong" />
                            <div className="Course-cell-title">
                                <img src={yinYueIcon} className="Img-course-icon" alt="yinYue" />
                                音乐课(6个月-7岁)
                            </div>
                            <div className="Course-content">
                                通过游戏、各取、舞蹈、乐器创造了独一无二的音乐活动，带领小朋友们体验丰富多彩的世界各国的音乐曲风……
                            </div>
                            <div className="Course-more">
                                了解更多>
                            </div>
                        </div>
                    </div>
                    <div className="Course-cell-row">
                        <div className="Course-cell-container" onClickCapture={() => { navigate("yiShu"); }}>
                            <img src={yiShuImg} className="Img-course" alt="ganTong" />
                            <div className="Course-cell-title">
                                <img src={yiShuIcon} className="Img-course-icon" alt="yiShu" />
                                艺术课(6个月-7岁)
                            </div>
                            <div className="Course-content">
                                为小朋友们提供了线索、创作、想想的创作，如雕塑、绘画、拓印、剪贴画、使用颜料印染、制作手工艺品……
                            </div>
                            <div className="Course-more">
                                了解更多>
                            </div>
                        </div>
                        <div className="Course-cell-container" onClickCapture={() => { navigate("chuYi"); }}>
                            <img src={chuYiImg} className="Img-course" alt="ganTong" />
                            <div className="Course-cell-title">
                                <img src={chuYiIcon} className="Img-course-icon" alt="chuYi" />
                                厨艺课(6个月-7岁)
                            </div>
                            <div className="Course-content">
                                儿童在美食制作过程中，了解丰富的美食文化，感受国际餐桌进餐礼仪，不仅促进味觉、触觉、视觉、嗅觉等……
                            </div>
                            <div className="Course-more">
                                了解更多>
                            </div>
                        </div>
                    </div>
                    <div className="Course-cell-row">
                        <div className="Course-cell-container" onClickCapture={() => { navigate("leGao"); }}>
                            <img src={leGaoImg} className="Img-course" alt="ganTong" />
                            <div className="Course-cell-title">
                                <img src={leGaoIcon} className="Img-course-icon" alt="leGao" />
                                乐高课(3岁-7岁)
                            </div>
                            <div className="Course-content">
                                锻炼孩子的动手能力和逻辑思维能力，提高孩子解决问题的能力，还促进孩子表达能力、社交能力……
                            </div>
                            <div className="Course-more">
                                了解更多>
                            </div>
                        </div>
                        <div className="Course-cell-container" onClickCapture={() => { navigate("jianShen"); }}>
                            <img src={jianShenImg} className="Img-course" alt="ganTong" />
                            <div className="Course-cell-title">
                                <img src={jianShenIcon} className="Img-course-icon" alt="jianShen" />
                                健身课(等待开放)
                            </div>
                            <div className="Course-content">
                                热身、感官探索、体操加强练习、协调力锻炼与降落伞等环节最大化的调动孩子的主动参与热情，使孩子不仅拥有……
                            </div>
                            <div className="Course-more">
                                了解更多>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Teaching-environment">
                    <div className="Teaching-title">教学环境</div>
                    <div className="Teaching-title-en">Environment</div>
                    <Swiper />
                </div>
                <div className="About-container">
                    <div className="About-title">关于纽宝池州</div>
                    <div className="About-title-en">About us</div>
                    <div className="About-content-container">
                        <div className="About-content">
                            纽宝国际早教起源于美国纽约，是经过美国权威幼儿教育机构NAEYC（美国幼儿教育协会）认证的儿童早期教育品牌课程，致力于为全球0一7岁儿童提供高品质的早期教育核心课程和教育服务。该套全美式教育模式体系于2012年被引入中国，通过创造非竞争性环境丰富孩子的体验，在游戏中体验式学习，用快乐的氛围传递爱和责任，是国内最具优势的早期教育模式。纽宝国际早教入驻池州，打造健身、音乐、艺术、厨艺、乐高、感统六大系列课程，美式双语的教学环境，带给孩子更好的体能、感官、认知、社交、语音、音乐、情商等全方面成长，释放孩子的天性，让每一个家庭都可以享受到科学早教！
                        </div>
                    </div>
                </div>
                <div className="Address-container">
                    <div className="Address">悦美文化艺术咨询服务有限公司</div>
                    <div className="Address">地址：池州市同晖城市广场三层S6-301</div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default () => (
    <React.Fragment>
        <Router>
            <GanTong path="/ganTong" />
            <YinYue path="/yinYue" />
            <YiShu path="/yiShu" />
            <ChuYi path="/chuYi" />
            <LeGao path="/leGao" />
            <JianShen path="/jianShen" />
            <More path="/more" />
        </Router>
        <Router>
            <App path="/" />
        </Router>
    </React.Fragment>
);
