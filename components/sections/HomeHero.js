import HomeHeroSlider from "../slider/HomeHeroSlider";

export default function HomeHero({data}) {
    return (
        <section className="hero-section fix hero-1 bg-cover home-hero-wrapper pb-0">
            <div className="overlay"></div>
            <div className="container custom-container">
                {data && <HomeHeroSlider data={data} />}
            </div>
            <div className="wave-wrapper">
                <svg className="w-full h-auto scale-[2.0] origin-top" viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                </svg>
            </div>
        </section>
    )
}
