import { forwardRef, useState } from 'react';
import images from '../../assets/img';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import style from './image.module.scss';
const Image = forwardRef(
    ({ src = images.noImage, alt, className, fallback: customFallBack = images.noImage, ...props }, ref) => {
        const [fallBack, setFallBack] = useState('');
        const handleImg = () => {
            setFallBack(customFallBack);
        };
        return (
            <img
                className={classNames(style.wrapper, className)}
                {...props}
                alt={alt}
                ref={ref}
                src={fallBack || src}
                onError={handleImg}
            />
        );
    },
);
Image.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    className: PropTypes.string,
    fallback: PropTypes.string,
};
export default Image;
