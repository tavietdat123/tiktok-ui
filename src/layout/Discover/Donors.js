import images from '../../assets/img';
import WrapperDiscover from './WrapperDiscover';
import classNames from 'classnames/bind';
import styles from './Discover.module.scss';
import { CreateEffectIcon } from '../Icons';
import FooterSideBar from './FooterSideBar';
const cx = classNames.bind(styles);

function Donors() {
    return (
        <WrapperDiscover title="">
            <div className="wapper">
                <a
                    href="/"
                    className={cx(
                        'hover_ef',
                        'position-relative',
                        'd-flex',
                        'justify-content-center',
                        'align-items-center',
                        'mb-5',
                    )}
                    target="_blank"
                >
                    <img src={images.createEffectImg} className={cx('img')} alt="screateEffectImg" />
                    <div className={cx('text')}>
                        <CreateEffectIcon className="me-3" />
                        <h4 className={cx('title_ef')}>Create effects</h4>
                    </div>
                </a>
                <FooterSideBar />
                <FooterSideBar />
                <FooterSideBar />
                <div className={cx('ft')}>© 2023 TikTok</div>
            </div>
        </WrapperDiscover>
    );
}

export default Donors;
