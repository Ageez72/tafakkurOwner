import { getYouTubeVideoID } from "@/helpers";
import VideoPopup from "../elements/VideoPopup";
import Image from "next/image";

export default function LevelVideo({ data, level }) {
    return (
        <section className="level-video-wrapper">
            <div className="effects-results level-video section-padding">
                <div className="overlay"></div>
                <Image loading="eager" className="bg-image" src={data?.info_video_image} />
                <div className="container custom-container content text-center position-relative">
                    <h2>تعرف إلى ما سيدرسه طفلك في المستوى <span>{level}</span></h2>
                    <p>شاهد الفيديو</p>
                    <div>
                        <VideoPopup color={"fff"} style={3} videoId={data?.info_video && getYouTubeVideoID(data?.info_video)}  />
                    </div>
                </div>
            </div>
            <div className="section-padding">
                <div className="container custom-container">
                    <h2 className="head-blue mb-5">ما سيستفيده طفلك عند تسجيله في المستوى <span>{level}</span>:</h2>
                    <div className="row">
                        <ul className="list level-bullet arrow-bullet m-0">
                            {
                                data?.benefits.map((item,i) => (
                                    <li key={i} className="test">
                                        <i className="fa-solid fa-caret-left"></i>
                                        <span>{item}</span>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
