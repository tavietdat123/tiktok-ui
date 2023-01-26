import Videos from '../../../assets/video';
import classNames from 'classnames/bind';
import styles from './Video.module.scss';
import { CommentIcon, HeartIcon, ShareIcon } from '../../Icons';
import { useEffect, useRef, useState } from 'react';
const cx = classNames.bind(styles);
function Video() {
    const videoRef = useRef();
    // const [play, setPlay] = useState(true);
    useEffect(() => {
        videoRef.current.play();
    }, []);

    return (
        <div className="d-flex">
            <div className={cx('wrapper')}>
                <video className={cx('video')} onLoad={() => alert('test')} ref={videoRef} src={Videos.video} />
            </div>
            <div className="d-flex flex-lg-column flex justify-content-end">
                <button className={cx('btn')}>
                    <span className={cx('icon')}>
                        <HeartIcon />
                    </span>
                    <strong className={cx('quantity')}>
                        <p>280.8K</p>
                    </strong>
                </button>
                <button className={cx('btn')}>
                    <span className={cx('icon')}>
                        <CommentIcon />
                    </span>
                    <strong className={cx('quantity')}>222</strong>
                </button>
                <button className={cx('btn')}>
                    <span className={cx('icon')}>
                        <ShareIcon />
                    </span>
                    <strong className={cx('quantity')}>437</strong>
                </button>
            </div>
        </div>
    );
}

export default Video;
