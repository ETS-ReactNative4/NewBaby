import React from "react";
import Footer from '../components/Footer';
import './course.css';
import mainImg from '../asset/chuYi_course.jpg';
import { Helmet } from "react-helmet";

// 厨艺课
export default class ChuYi extends React.Component {

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div>
                <Helmet>
                    <title>厨艺课</title>
                </Helmet>
                <img className="img-main" src={mainImg} alt="main" />
                <div className="content">
                    厨艺也是一种膳食艺术，我们将带领孩子走进世界各地欣赏多元文化，学习传统美食配方，亲手制作出色香味俱全的精致美食。通过味觉、触觉、视觉、嗅觉等感官体验来培养孩子的动手能力，创造力和想象力，鼓励孩子们勇于尝试新鲜事物。对于年龄稍大的儿童，老师将引导孩子们学习科学及营养知识。厨房、餐厅实景课堂有助于孩子们培养良好的餐桌礼仪和加强厨房安全意识。经过全体小厨师们的一同努力，美味佳肴就要出炉啦，大家快来一起品尝吧！
                </div>
                <div className="p-node">
                    阶段1/Toddler Chefs (2岁-3岁)
                </div>
                <div className="content">
                    每周介绍一个国家有代表性的食物，让宝宝了解世界不同地区的饮食文化以及相关知识,食物的制作过程，开发孩子的创造力，培养孩子的耐心、专注力、观察能力、思考能力、以及动手能力。家长陪同孩子一起上课，有助于建立良好的亲子关系，并让家长更多的观察孩子、引导孩子。
                </div>
                <div className="p-node">
                    阶段2/Preschool Chefs (3岁-7岁)
                </div>
                <div className="content">
                    孩子在该阶段已经开始独立上课，在指导老师的引导下，自己亲手创作世界美食，从原材料一步一步制作出美味的食物，小朋友将会获得满足的成就感。食物创作的过程，培养了孩子积极乐观、勇于尝试、善于动手的性格品质和自信心，所有这些收获，对于小朋友以后的学习和工作，提高竞争力，都将打好坚实的准备。
                </div>
                <Footer />
            </div>
        );
    }
}