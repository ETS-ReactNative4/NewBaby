import React from "react";
import './course.css';
import Footer from '../components/Footer';
import mainImg from '../asset/yiShu_course.png';
import mainImg2 from '../asset/yishu1.jpg';
import mainImg3 from '../asset/yishu2.jpg';
import mainImg4 from '../asset/yishu3.jpg';
import mainImg5 from '../asset/yishu4.jpg';
import mainImg6 from '../asset/yishu5.jpg';
import mainImg7 from '../asset/yishu6.jpg';
import mainImg8 from '../asset/erweima.png';
import { Helmet } from "react-helmet";

// 艺术课
export default class YiShu extends React.Component {

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div>
                <Helmet>
                    <title>艺术课</title>
                </Helmet>
                <img className="img-main" src={mainImg} alt="main" />
                <div className="content">
                    纽宝国际早教中心的艺术课程为小朋友们提供了探索、想象、创作的场所，鼓励他们以自己独特的方式表现自我。专业的指导师指导家长和小朋友使用不同的工具来进行艺术创作，如雕塑、绘画、拓印、剪贴画、使用颜料印染、制作手工艺品等，在最大程度上培养小朋友的艺术灵感，锻炼动手能力、专注力、想象力和创造能力。
                </div>
                <img className="img2" src={mainImg2} alt="main" />
                <div className="p-node">
                    阶段1/Paint n′Glue Ⅰ (1.5岁-2岁)
                </div>
                <div className="content">
                    家长陪同小朋友一起上课，通过雕塑、粘贴、拓印、绘画等艺术形式，开发小朋友在艺术创作方面的想象力和创造力，在活动中逐渐培养孩子的专注能力，以及动手能力，同时促进小朋友腕部小肌肉的发展。
                </div>
                <img className="img2" src={mainImg3} alt="main" />
                <div className="p-node">
                    阶段2/Paint n′Glue II (2岁-3岁)
                </div>
                <div className="content">
                    小朋友用各种绘画工具画出他们心中的大树、白云、轮船……利用丰富多样的材料创作手工艺品，给妈妈的项链，给奶奶做的衣服，自己的小火车……在尊重小朋友生长发展规律的前提下，让小朋友在艺术实践中探索、发现、学习、表现自我，培养孩子的自信心，养成爱思考和爱创新的习惯。
                </div>
                <img className="img2" src={mainImg4} alt="main" />
                <div className="p-node">
                    阶段3/Music Kids（2.5岁-3.5岁）
                </div>
                <div className="content">
                    小朋友开始独立上课，课堂中完全没有了对家长的依赖，一切艺术创作都是自己的“思想”体现，小朋友们将通过使用各种颜料、粘土、画笔、模具、印章等创作材料，去探索和创作他们自己的艺术，并从中寻找到乐趣。与其他小朋友交流，交换工具，促进小朋友相互学习和社交能力的发展。
                </div>
                <img className="img2" src={mainImg5} alt="main" />
                <div className="p-node">
                    阶段4/Famous Artists (3.5岁-5岁)
                </div>
                <div className="content">
                    引导孩子探索、赏析世界各国知名艺术家的作品，如莫奈的印象派艺术，杰克逊•保罗克斯的行为绘画，安妮•雷布维兹摄影艺术……鼓励小朋友们充分发挥自己的创造力和想象力，创作属于自己的艺术作品，同时培养孩子的欣赏和表达能力。
                </div>
                <img className="img2" src={mainImg6} alt="main" />
                <div className="p-node">
                    阶段4-2/World Art   (3.5-5years)
                </div>
                <div className="content">
                    带领小朋友们每周认识不同的国家或地区，多角度的了解这个国家或地区的艺术，强烈的地理文化差异激发孩子们创作出美丽多样的艺术作品，在艺术创作的同时，更帮助小朋友们领略来自世界各地的不同文化和风土人情。
                </div>
                <img className="img2" src={mainImg7} alt="main" />
                <img className="img2" src={mainImg8} alt="main" />
                <Footer />
            </div>
        );
    }
}
