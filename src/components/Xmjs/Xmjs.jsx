import React from "react"

// 本頁的CSS
import "./Xmjs.css"


class Xmjs extends React.Component {
    render() {
        return (
            <div>       {/* -------------------- */}


                {/* loading page */}
                {/*<iframe id="childLoadingPage" name="childLoadingPage" className="" src="./childLoadingPage.html"
        frameborder="0"></iframe>*/}

                {/* 底部導行列 */}
                {/*<iframe id="mainNav" src="./navigation.html" frameborder="0"></iframe>

                {/* Swiper */}
                <div className="swiper-container hidden">
                    <div className="swiper-wrapper">
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
                    </div>
                    {/* Add Pagination */}
                    <div className="swiper-pagination"></div>
                </div>


                {/* Swiper JS */}
                <script src="./scripts/lib/swiper.min.js"></script>

                {/* Initialize Swiper */}
                {/*<script>
                    var swiper = new Swiper('.swiper-container', {
                        direction: 'vertical',
            pagination: {
                        el: '.swiper-pagination',
                    clickable: true,
                },
            });
    </script>*/}


                {/* 載入頁 */}
                {/*<script>
                    function pageIsLoad() {
                        document.childLoadingPage.childLoadingIsDone = true;
                    }
                    setTimeout(pageIsLoad, 5000);
        setInterval(function () {
            if (document.childLoadingPage.childLoadingIsDone) {
                        document.getElementById("childLoadingPage").classList.add("hidden");
                    document.getElementsByClassName("swiper-container")[0].classList.remove("hidden");
                }
            }, 500);
    </script>*/}


            </div>
        )
    }
}

export { Xmjs };