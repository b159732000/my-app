import React from "react"
// import { XmjsSwiper } from '../XmjsSwiper'
// import Swiper from 'react-id-swiper'

// 本頁的CSS
import "./Xmjs.css"

const Swiper = window.Swiper;
class Xmjs extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            myName: "这里是about页面",
        }
    }
    componentDidMount() {
        new Swiper(this.swiperID, {
            direction: 'vertical',
            pagination: {
                el: this.paginateID,
                observer: true,
                // preloadImages: false,
                // lazy:true,
            },
            });

    }

    // componentWillUnmount() {
    //     if (this.swiper) { // 销毁swiper
    //         this.swiper.destroy()
    //     }
    // }
    // componentDidUpdate() {
    //     if (this.swiper) {
    //         this.swiper.slideTo(0, 0)
    //         this.swiper.destroy()
    //         this.swiper = null;
    //     }
    //     this.swiper = new Swiper(this.refs.lun, {
    //         loop: true,
    //         pagination: {
    //             el: '.swiper-pagination',
    //             clickable: true,
    //         },
    //     });
    // }
    render() {

        return (
            <div id="XmjsContainer">

                {/*<XmjsSwiper></XmjsSwiper>*/}

                <div className="swiper-container" ref={self => this.swiperID = self}>
                    <div className="swiper-wrapper">
                        {/*<div data-background={require('../../images/xmjs/JS1.png')} className="swiper-slide swiper-lazy"></div>*/}
                        <div className="swiper-slide"></div>
                        <div className="swiper-slide"></div>
                        <div className="swiper-slide"></div>
                        <div className="swiper-slide"></div>
                        <div className="swiper-slide"></div>
                        <div className="swiper-slide"></div>
                        <div className="swiper-slide"></div>
                        <div className="swiper-slide"></div>
                        <div className="swiper-slide"></div>
                        <div className="swiper-slide"></div>
                        <div className="swiper-slide"></div>
                        <div className="swiper-slide"></div>
                        <div className="swiper-slide"></div>
                        <div className="swiper-slide"></div>
                        <div className="swiper-slide"></div>
                        <div className="swiper-slide"></div>
                        {/*<div className="swiper-slide"></div>
                        <div className="swiper-slide"></div>
                        <div className="swiper-slide"></div>
                        <div className="swiper-slide"></div>
                        <div className="swiper-slide"></div>
                        <div className="swiper-slide"></div>
                        <div className="swiper-slide"></div>
                        <div className="swiper-slide"></div>
                        <div className="swiper-slide"></div>
                        <div className="swiper-slide"></div>
                        <div className="swiper-slide"></div>
                        <div className="swiper-slide"></div>
                        <div className="swiper-slide"></div>
                        <div className="swiper-slide"></div>
                        <div className="swiper-slide"></div>
                        <div className="swiper-slide"></div>*/}
                    </div>
                    <div className="swiper-pagination" id='body-left-pagination'></div>

                </div>

            </div>
        )
    }
}

// export { Xmjs };
export default Xmjs;