import React from 'react';

interface Props {
    src: string;
    alt: string;
    movieOnClick?: (movieId: number) => void;
    id?: number;
}

const ImgWithErrorHandling: React.FC<Props> = ({ src, alt, movieOnClick, id }) => {
    if (movieOnClick && id) {
        return (
            <img
                src={src}
                alt={alt}
                onClick={() => movieOnClick(id)}
                onError={(e: any) => {
                    e.target.onerror = null;
                    e.target.src = '/img/no_image_found.jpeg';
                }}
            />
        );
    } else {
        return (
            <img
                src={src}
                alt={alt}
                onError={(e: any) => {
                    e.target.onerror = null;
                    e.target.src = '/img/no_image_found.jpeg';
                }}
            />
        );
    }
};

export default ImgWithErrorHandling;
