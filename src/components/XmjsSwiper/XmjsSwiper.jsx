import React, { useEffect } from 'react'
import Swiper from 'react-id-swiper'
// import 'https://unpkg.com/react-id-swiper@2.1.2/lib/react-id-swiper.js'
// import 'https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.0/css/swiper.css'
import './XmjsSwiper.css'

// const XmjsSwiper = () => (
//     <Swiper>
//       <div>Slide 1</div>
//       <div>Slide 2</div>
//       <div>Slide 3</div>
//       <div>Slide 4</div>
//       <div>Slide 5</div>
//     </Swiper>
//   )


class XmjsSwiper extends React.Component {
    render() {
        return (
            <Swiper>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </Swiper>
        )
    }
}
export { XmjsSwiper }