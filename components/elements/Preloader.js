import Image from "next/image"
export default function Preloader() {
    return (
        <>
            <div id="preloader" className="preloader">
                <div className="loader">
                    <Image fill={true} src="/assets/img/home/Logo1.png" alt="Logo 4" className="fade-img" />
                    <Image fill={true} src="/assets/img/home/Logo2.png" alt="Logo 1" className="fade-img" />
                    <Image fill={true} src="/assets/img/home/Logo3.png" alt="Logo 2" className="fade-img" />
                    <Image fill={true} src="/assets/img/home/Logo4.png" alt="Logo 3" className="fade-img" />
                </div>
            </div>
        </>
    )
}

