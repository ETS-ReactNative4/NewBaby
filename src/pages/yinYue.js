import React from "react";
import Footer from '../components/Footer';
import './course.css';
import mainImg from '../asset/yinYue_course.png';
import mainImg2 from '../asset/yinyue1.jpg';
import mainImg3 from '../asset/yinyue2.jpg';
import mainImg4 from '../asset/yinyue3.jpg';
import mainImg5 from '../asset/erweima.png';
import { Helmet } from "react-helmet";

// 音乐课
export default class YinYue extends React.Component {

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div>
                <Helmet>
                    <title>音乐课</title>
                </Helmet>
                <img className="img-main" src={mainImg} alt="main"/>
                <div className="content">
                    纽宝国际早教中心的音乐课程将“小型演唱会”作为教师与小朋友交流音乐的纽带，通过游戏、歌曲、舞蹈、乐器结合创造了独一无二的音乐活动，带领小朋友们体验丰富多彩的世界各国的音乐曲风及音乐文化，感受韵律、节奏、节拍，培养小朋友的乐感、语言能力、记忆力、运动协调以及情商能力等。
                </div>
                <div className="p-node">
                    阶段1/Music Babies（6个月-1.5岁）
                </div>
                <div className="content">
                    6-18个月的小朋友对音乐以“吸收”为主，每一次凝视、观察、触摸、聆听都是学习，通过家长的辅助和引导，为小朋友打开音乐世界的一扇窗户。指导老师在 每一节课堂会为小朋友展示丰富多彩的音乐乐器，让小朋友通过小手抓握来锻炼精细肌肉，同时探索、聆听不同乐器发出的不同声音，课堂还设计了让家长与宝宝充 分互动的活动环节，这些活动不仅丰富了小朋友的早期音乐体验，在玩耍中感知音乐的魅力，更使小朋友和家长的亲子关系更加融洽。
                </div>
                <img className="img2" src={mainImg2} alt="main" />
                <div className="p-node">
                    阶段2/Music Tots（1.5岁-3岁）
                </div>
                <div className="content">
                    18-36个月的小朋友处于语言学习的敏感期，课程选取了各个语种的音乐，让小朋友聆听不同语言的发音，如西班牙语、德语、英语等，加深语言记忆能力。多彩鲜明的图片环节，会向小朋友和家长介绍该地区的风土人情、特色乐器和代表性的艺术家，并在每个地区主题中提供该地区乐器供小朋友充分演奏、探索、识别、 聆听，丰富小朋友对“音乐世界”的认知。
                </div>
                <img className="img2" src={mainImg3} alt="main" />
                <div className="p-node">
                    阶段3/Music Tots（1.5岁-3岁）
                </div>
                <div className="content">
                    3--5岁的小朋友有了充分的想象力和理解力，他们会跟老师一起哼着童谣，运用手偶做角色扮演游戏，也会跟随音乐模拟一个个有趣的故事，用唱歌来表达情感 并学习更为复杂的音乐知识，如节奏、音高、节拍及音乐形式。课程精心挑选世界各国的经典歌曲，让小朋友和老师一起舞动。充满想象力和具有民族元素的动作设计，充分锻炼小朋友的肢体协调性、社交能力和动作音乐的配合能力。
                </div>
                <img className="img2" src={mainImg4} alt="main" />
                <img className="img2" src={mainImg5} alt="main" />
                <Footer />
            </div>
        );
    }
}