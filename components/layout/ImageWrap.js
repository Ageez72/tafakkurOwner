import Image from 'next/image'

const imageStyle = {
    width: '100%',
    height: '100%',
}

export default function Page({ src, alt, w, h }) {
    return (
        <Image
            src={`${src}`}
            alt={`${alt}`}
            width={w ? w : 500}
            height={h ? h : 500}
            style={imageStyle}
        />
    )
}