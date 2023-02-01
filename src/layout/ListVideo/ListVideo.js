import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './ListVideo.module.scss';
import Button from '../Button';
import { MusicIcon } from '../Icons';
import Image from '../Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import Video from './Video';

const cx = classNames.bind(styles);
function ListVideo() {
    return (
        <div className={cx('container')}>
            <div>
                <Link to="/@datxz">
                    <Image alt="avatar" className={cx('img')} />
                </Link>
            </div>
            <div className={cx('content')}>
                <div className={cx('mr114')}>
                    <Link to="/@datxz" className="d-flex pb-1">
                        <h3 className={cx('nickName', 'd-flex', 'align-items-center')}>
                            <span className={cx('hovernn')}>huyseoul_idol</span>
                            <FontAwesomeIcon className={cx('iconCheck')} icon={faCircleCheck} />
                        </h3>
                        <h4 className={cx('fullName')}>Oppa Huy IDol</h4>
                    </Link>
                    <Button small outline className={cx('btn_fl')}>
                        Follow
                    </Button>
                    <div className="lh22">
                        <span> Mua cái máy cho con học mà học xong nó bảo Bố Tiếng Anh là DOG 🤣🤣🤣</span>
                        <Link to="/search" className={cx('hashtag')}>
                            <strong>#huyseoul</strong>
                        </Link>

                        <Link to="/search" className={cx('hashtag')}>
                            <strong>#huyseoul</strong>
                        </Link>
                        <Link to="/search" className={cx('hashtag')}>
                            <strong>#huyseoul</strong>
                        </Link>
                        <Link to="/search" className={cx('hashtag')}>
                            <strong>#huyseoul</strong>
                        </Link>
                        <Link to="/search" className={cx('hashtag')}>
                            <strong>#huyseoul</strong>
                        </Link>
                        <Link to="/search" className={cx('hashtag')}>
                            <strong>#huyseoul</strong>
                        </Link>
                    </div>

                    <Link to="/sound" className={cx('sound')}>
                        <MusicIcon className="me-2" />
                        <span>nhạc nền - Oppa Huy IDol</span>
                    </Link>
                </div>
                <div>
                    <Video />
                </div>
            </div>
        </div>
    );
}

export default ListVideo;
