import React from "react"

// 本頁的CSS
import "./Xmjs.css"

let Swiper = window.Swiper
class Xmjs extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            myName: "这里是about页面",
        }
    }

    componentWillUnmount() {
        if (this.swiper) { // 销毁swiper
            this.swiper.destroy()
        }
    }
    componentDidUpdate() {
        if (this.swiper) {
            this.swiper.slideTo(0, 0)
            this.swiper.destroy()
            this.swiper = null;
        }
        this.swiper = new Swiper(this.refs.lun, {
            loop: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        });
    }
    render() {

        return (
            <div id="XmjsContainer">

                <div className="swiper-container" ref="lun">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide" data-id="0"></div>
                        <div className="swiper-slide" data-id="1"></div>
                        <div className="swiper-slide" data-id="2"></div>
                        <div className="swiper-slide" data-id="3"></div>
                        <div className="swiper-slide" data-id="4"></div>
                        <div className="swiper-slide" data-id="5"></div>
                        <div className="swiper-slide" data-id="6"></div>
                        <div className="swiper-slide" data-id="7"></div>
                        <div className="swiper-slide" data-id="8"></div>
                        <div className="swiper-slide" data-id="9"></div>
                        <div class="swiper-slide"></div>
                        <div class="swiper-slide"></div>
                        <div class="swiper-slide"></div>
                        <div class="swiper-slide"></div>
                        <div class="swiper-slide"></div>
                        <div class="swiper-slide"></div>
                        <div class="swiper-slide"></div>
                        <div class="swiper-slide"></div>
                        <div class="swiper-slide"></div>
                        <div class="swiper-slide"></div>
                        <div class="swiper-slide"></div>
                        <div class="swiper-slide"></div>
                        <div class="swiper-slide"></div>
                        <div class="swiper-slide"></div>
                        <div class="swiper-slide"></div>
                        <div class="swiper-slide"></div>
                        <div class="swiper-slide"></div>
                        <div class="swiper-slide"></div>
                        <div class="swiper-slide"></div>
                        <div class="swiper-slide"></div>
                        <div class="swiper-slide"></div>
                        <div class="swiper-slide"></div>
                    </div>
                        <div className="swiper-pagination" id='body-left-pagination'></div>

                </div>

            </div>
        )
    }
}

export { Xmjs };