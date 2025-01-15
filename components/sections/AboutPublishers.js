
import Image from "next/image"
export default function AboutPublishers() {
    return (
        <div className="about-publishers">
            <div className="container custom-container">
                <div className="row align-items-center about-publishers-content">
                    <div className="col-12 col-md-2 text-center mb-lg-0 mb-4">
                        <Image width={145} height={85} className="w-100 max-150" src="https://d329sg0poh8k4h.cloudfront.net/tafakkur-website/versions/logo-color.png" alt="logo-color" />
                    </div>
                    <div className="col-12 col-md-10 ps-5 text-side">
                        <h3 className="mb-3">عن تفكر ناشرون</h3>
                        <p>يقدم تفكر ناشرون أكثر من <span className="en-txt">60</span> إصدار لمساعدة الأطفال واليافعين في بناء شخصيتهم ليكونوا مفكرين ومبدعين، يشعرون بقيمتهم ومتوازنين، مؤمنين محبين لله، إيجابيين وأخلاقيين، جميع الإصدارات ترتكز إلى أحدث نظريات وأبحاث الدماغ.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
