import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import Image from '../Image';
import Preview from './Preview';
import styles from './SuggestedAccounts.module.scss';
const cx = classNames.bind(styles);
function AccoutItem() {
    return (
        <div>
            <Tippy
                offset={[-22, 0]}
                interactive
                delay={[1000, 900]}
                placement="bottom"
                render={(attrs) => (
                    <div className="box" tabIndex="-1" {...attrs}>
                        <Preview />
                    </div>
                )}
            >
                <div className={cx('container')}>
                    <Image
                        src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1673888400&x-signature=9K%2Bpts1VEDGUzEMZKbnjhHzrp8w%3D"
                        alt="avatar"
                        className={cx('avatar')}
                    />
                    <div className="d-flex flex-column ">
                        <div className="d-flex">
                            <h4 className={cx('title_item')}>theanh28entertainment</h4>
                            <FontAwesomeIcon className={cx('icon_check')} icon={faCheckCircle} />
                        </div>
                        <span className={cx('nickname', '')}>Theanh28 Entertainment</span>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}

export default AccoutItem;
