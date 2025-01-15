import VideoPopup from "../elements/VideoPopup";
import {getYouTubeVideoID} from "@/helpers";
import Image from "next/image";

export default function EffectsAndResults({ title, desc, videoId, image }) {
    return (
        <div className="effects-results section-padding">
            <div className="overlay"></div>
            <Image loading="eager" className="bg-image" src={ image || "https://d329sg0poh8k4h.cloudfront.net/tafakkur-website/about/effects.jpg"} />
            <div className="container custom-container content text-center position-relative">
                <h2>{title}</h2>
                <p dangerouslySetInnerHTML={{__html: desc}}/>
                <div>
                    <VideoPopup color={"fff"} style={3} videoId={getYouTubeVideoID(videoId)} />
                    <p className="d-inline-block ms-3">شاهد الفيديو</p>
                </div>
            </div>
        </div>
    )
}
