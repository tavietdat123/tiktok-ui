import classNames from 'classnames/bind';
import styles from './preview.module.scss';
import { PopperWrapper } from '../../popper';
import Button from '../../Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Image from '../../Image';
const cx = classNames.bind(styles);

function Preview() {
    return (
        <PopperWrapper className={cx('wapper')}>
            <div className="d-flex justify-content-between mb-4">
                <Image
                    src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1673888400&x-signature=9K%2Bpts1VEDGUzEMZKbnjhHzrp8w%3D"
                    alt="tiktok"
                    className={cx('avatar')}
                />
                <div className="d-flex align-items-center">
                    <Button className={cx('custom_btn')} primary>
                        Follow
                    </Button>
                </div>
            </div>
            <div className="d-flex flex-column mt-2">
                <div className="d-flex">
                    <h4 className={cx('title_item')}>theanh28entertainment</h4>
                    <FontAwesomeIcon className={cx('icon_check')} icon={faCheckCircle} />
                </div>
                <span className={cx('nickname')}>Theanh28 Entertainment</span>
            </div>
            <div className="d-flex mt-3">
                <p className="me-4">
                    <span className={cx('value')}>8.5M</span>
                    <span className={cx('behind')}>Followers</span>
                </p>
                <p>
                    <span className={cx('value')}>653.4M</span>
                    <span className={cx('behind')}>Likes</span>
                </p>
            </div>
        </PopperWrapper>
    );
}

export default Preview;
