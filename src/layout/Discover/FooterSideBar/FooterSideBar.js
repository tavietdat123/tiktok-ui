import classNames from 'classnames/bind';
import styles from './FooterSideBar.module.scss';
const cx = classNames.bind(styles);
function FooterSideBar() {
    return (
        <div className={cx('wrapper')}>
            <a href="/" className={cx('item')}>
                TikTok for Good
            </a>
            <a href="/" className={cx('item')}>
                Advertise
            </a>
            <a href="/" className={cx('item')}>
                Developers
            </a>
            <a href="/" className={cx('item')}>
                Transparency
            </a>
            <a href="/" className={cx('item')}>
                TikTok
            </a>
            <a href="/" className={cx('item')}>
                RewardsTikTok
            </a>
            <a href="/" className={cx('item')}>
                BrowseTikTok
            </a>
            <a href="/" className={cx('item')}>
                Embeds
            </a>
        </div>
    );
}

export default FooterSideBar;
