import React from "react";
import Footer from '../components/Footer';
import './course.css';
import mainImg from '../asset/jianShen_course.png';
import { Helmet } from "react-helmet";

// 健身课
export default class JianShen extends React.Component {
    render() {
        return (
            <div>
                <Helmet>
                    <title>健身课</title>
                </Helmet>
                <img className="img-main" src={mainImg} alt="main" />
                <div className="content">
                    纽宝国际早教中心的健身课程以不同的主题展开，通过具有结构性且丰富多样的环节设置，如：热身、感官探索、体操技巧练习、协调力锻炼与降落伞等环节最大化的调动孩子的主动参与热情，使孩子不仅拥有强健灵活的身体，同时获得自信和勇于挑战的创新精神；通过独立上课的体验，更好地培养了孩子的独立意识和团队合作精神，促进孩子的身心健康发展。
                </div>
                <div className="p-node">
                    阶段1/Infant Milestones (5个月-6个月)
                </div>
                <div className="content">
                    在让宝宝感觉安全和舒适的状态下，通过丰富多彩的游戏活动、肢体伸展动作、乐器探索、优美的歌曲、音乐等锻炼宝宝的视觉、听觉、触觉、平衡、体能等多感官发育，帮助宝宝更好地适应环境，让父母和孩子享受美好而有意义的亲子时光。
                </div>
                <div className="p-node">
                    阶段2/Gym Babies (6个月-12个月)
                </div>
                <div className="content">
                    在让宝宝感觉安全和舒适的状态下，通过丰富多彩的游戏活动、肢体伸展动作、乐器探索、优美的歌曲、音乐等锻炼宝宝的视觉、听觉、触觉、平衡、体能等多感官发育，帮助宝宝更好地适应环境，让父母和孩子享受美好而有意义的亲子时光。
                </div>
                <div className="p-node">
                    阶段3/Gym Toddlers (1岁-1.5岁)
                </div>
                <div className="content">
                    通过丰富多彩的器械活动来调动孩子主动参与游戏和运动的热情，富有挑战性的健身活动训练大大的增强孩子的平衡性、力量和活动的敏感性，在尊重孩子独立性的基础上，帮助孩子建立初步的秩序感和自信心。
                </div>
                <div className="p-node">
                    阶段性4/Gym Tots (1.5岁-2岁)
                </div>
                <div className="content">
                    充分开发孩子的运动潜能，帮助他们发展空间感知，课程中包括楔形垫上的翻滚、增强上肢力量的吊环、平衡木和蹦床等活动，鼓励孩子运用他们身体技能来完成活动，成为良好的问题解决者。同时通过专业设计的游戏活动、歌曲和动作练习，增强概念理解，培养注意力和精细动作。
                </div>
                <div className="p-node">
                    阶段5/Gym Kids（2岁-2.5岁）
                </div>
                <div className="content">
                    形式多样的集体活让孩子感受集体活动的快乐，遵守规则，学会倾听、理解指令，同时有效的培养孩子的想象力和注意力。富有挑战性的准体操训练帮助孩子拥有强健灵活的身体，让他们勇于尝试，增强自信。鼓励他们用自己的视角和语言来表达自己的见解和感受，并逐渐掌握事物之间的逻辑关系。
                </div>
                <div className="p-node">
                    阶段6/Gym Juniors I （2.5岁-3.5岁）
                </div>
                <div className="content">
                    孩子开始独立上课，极具趣味性的课程活动和专业的指导师会帮助孩子克服分离焦虑症，逐渐融入课堂。课程通过精彩的障碍活动，初级平衡木训练，基础体操技能等活动来增强孩子的协调能力、运动的灵活性、锻炼毅力、自信、自控力以及团队合作，让孩子更多感受运动和团队的乐趣。
                </div>
                <div className="p-node">
                    阶段7/Gym Juniors‖ （3.5岁-5岁）
                </div>
                <div className="content">
                    课程内容遵照美国少儿体操指导规范进行实施，尊重小朋友身心发展的阶段特点，通过更富有挑战性的翻滚、高低杠和平衡木，障碍攀爬等活动，指导小朋友积极参与活动，在发展运动技能的同时，让小朋友体验掌控自己身体的快乐和自信，培养小朋友积极的思维、语言沟通和社交技能。
                </div>
                <div className="p-node">
                    阶段8/Gym Juniors lll （5岁-7岁）
                </div>
                <div className="content">
                    课程训练小朋友专业的运动技能和体操技巧，提高自控力和忍耐力，鼓励小朋友努力达成目标。在该阶段，指导教师更多的充当专业教练的角色，依照小朋友自身发展的情况，遵照少儿体操准则对小朋友进行有针对性课程训练。
                </div>
                <Footer />
            </div>
        );
    }
}