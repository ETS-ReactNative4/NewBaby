import React from "react";
import Footer from '../components/Footer';
import './course.css';
import mainImg from '../asset/leGao_course.jpg';
import { Helmet } from "react-helmet";

// 乐高课
export default class LeGao extends React.Component {

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div>
                <Helmet>
                    <title>乐高课</title>
                </Helmet>
                <img className="img-main" src={mainImg} alt="main" />
                <div className="content">
                    锻炼孩子的动手能力和逻辑思维能力，提高孩子解决问题的能力，还促进孩子表达能力、社交能力，关注孩子的态度、情感和价值观！发展孩子们的实践技能和科学知识运用能力。培养基本构造性，创造性思维和团队合作。培养孩子的认知，情感以及动作技能，以孩子为主题，重在体验过程而不是结果。
                </div>
                <Footer />
            </div>
        );
    }
}