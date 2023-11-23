import Image, { StaticImageData } from 'next/image';

type Props = {
    title: string;
    imgSrc: StaticImageData;
    description: string;
};

const ArticleItem = ({ title, imgSrc, description }: Props) => {
    return (
        <div className="py-8 font-body">
            <h2 className="text-3xl font-semibold font-headers pb-6">{title}</h2>
            <div className='w-full h-full flex flex-col items-center'>

                <Image unoptimized className='rounded-lg' src={imgSrc} alt={title} width={800} height={400} />
            </div>
            <p className='pt-10 text-lg text-gray-300'>{description}</p>
        </div>
    );
};

export default ArticleItem;