import React from "react";
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";

// The number of columns change by resizing the window
class HomeMasonry extends React.Component {
    render() {
        return (
            <ResponsiveMasonry columnsCountBreakPoints={{350: 2,900: 3}} >
                <Masonry spacing={10}>
                    <img src='assets/img/home/attachments/Eng-guitar.png' alt="Eng guitar"/>
                    <img src='assets/img/home/attachments/podcast.png' alt="podcast"/>
                    <img src='assets/img/home/attachments/Dance.png' alt="Dance"/>
                    <img src='assets/img/home/attachments/Singing.png' alt="Singing"/>
                    <img src='assets/img/home/attachments/Ukulele.png' alt="ukulele"/>
                    <img src='assets/img/home/attachments/Reels.png' alt="Reels"/>
                    <img src= 'assets/img/home/attachments/Cajon.png' alt="Cajon" />
                    <img src='assets/img/home/attachments/Piano.png' alt="Piano"/>
                    <img src='assets/img/home/attachments/Darbuka.png'alt="Darbuka"/>
                    <img src='assets/img/home/attachments/Home-studio.png' alt="Home studio"/>
                    <img src='assets/img/home/attachments/Guitar-hindi.png' alt="Guitar Hindi"/>
                    <img src='assets/img/home/attachments/Monopod.png' alt="Monopod"/>
                </Masonry>
            </ResponsiveMasonry>
        )
    }
}
export default HomeMasonry;