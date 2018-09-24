import React from "react";
import './index.css';
import longImg from '../../asset/long.png';

// 感统课
export default class Footer extends React.Component {
    render() {
        return (
            <div className="Footer-space-holder">
                <div className="Footer">
                    <div className="phone-container">
                        <div className="phone">
                            申请免费试听课
                        </div>
                        <div className="phone">
                            咨询电话：40012345678
                        </div>
                    </div>
                    <div className="btn">
                        立即申请
                    </div>
                    <img src={longImg} className="img-long" alt="long" />
                </div>
            </div>
        );
    }
}