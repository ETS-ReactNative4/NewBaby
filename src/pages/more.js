import React from "react";
import './course.css';
import mainImg from '../asset/more_1.jpg';
import mainImg2 from '../asset/more_2.jpg';
import mainImg5 from '../asset/erweima.png';
import { Helmet } from "react-helmet";

import { navigate } from '@reach/router';

// 感统课
export default class GanTong extends React.Component {

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div>
                <Helmet>
                    <title>更多课程</title>
                </Helmet>
                <img className="img-main" src={mainImg} alt="main" />
                <div className="more-btn" onClickCapture={() => { navigate("ganTong"); }}>
                    查看课程详情
                </div>
                <img className="img2" src={mainImg2} alt="main" />
                <div className="more-btn more-btn-1" onClickCapture={() => { navigate("jianShen"); }}>
                    查看课程详情
                </div>
                <img className="img2" src={mainImg5} alt="main" />
            </div>
        );
    }
}