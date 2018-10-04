import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import './index.css';
import img1 from '../../asset/huanJing1.png';
import img2 from '../../asset/huanJing2.png';
import img3 from '../../asset/huanJing3.png';
import img4 from '../../asset/huanJing4.png';
import img5 from '../../asset/huanJing5.png';
import img6 from '../../asset/huanJing6.png';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

export default class Swiper extends React.Component {
    render() {
        return (
            <AutoPlaySwipeableViews
                className="swiper"
                slideStyle={{ width: '11.17rem', padding: '0 0.5rem' }}
                containerStyle={{ width: '11.17rem' }}
            >
                <img className="img" src={img1} alt="img1" />
                <img className="img" src={img2} alt="img2" />
                <img className="img" src={img3} alt="img3" />
                <img className="img" src={img4} alt="img4" />
                <img className="img" src={img5} alt="img3" />
                <img className="img" src={img6} alt="img4" />
            </AutoPlaySwipeableViews>
        );
    }
}
