import classNames from 'classnames/bind';
import style from './headerStyle.module.scss';
import images from '../../../assets/img';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../../Button';
import config from '../../../config';
import { PopperMenu } from '../../popper';
import {
    faCircleQuestion,
    faCoins,
    faEarthAsia,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faPlus,
    faSignOut,
    faUser,
    faVideo,
} from '@fortawesome/free-solid-svg-icons';
import { Message, Notification } from '../../Icons';
import Image from '../../Image/Image';
import Search from '../Search/Search';
import { Link } from 'react-router-dom';
const cx = classNames.bind(style);
const MENU_ITEMS = [
    {
        title: 'English',
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        children: {
            title: 'Language',
            data: [
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vn',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        title: 'Feedback and help',
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        to: '/feedback',
    },
    {
        title: 'Keyboard and Shortcut',
        icon: <FontAwesomeIcon icon={faKeyboard} />,
    },
];
const menu_user = [
    {
        title: 'View profile',
        icon: <FontAwesomeIcon icon={faUser} />,
        to: '/feedback',
    },
    {
        title: 'Get coins',
        icon: <FontAwesomeIcon icon={faCoins} />,
        to: '/feedback',
    },
    {
        title: 'LIVE studio',
        icon: <FontAwesomeIcon icon={faVideo} />,
        to: '/feedback',
    },
    {
        title: 'Setting',
        icon: <FontAwesomeIcon icon={faGear} />,
        to: '/feedback',
    },
    ...MENU_ITEMS,
    {
        title: 'Log out',
        icon: <FontAwesomeIcon icon={faSignOut} />,
        to: '/feedback',
        line: true,
    },
];
function Header() {
    const currentUser = true;

    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                <Link to={config.routes.home} className={cx('header_logo')}>
                    <img src={images.logo} alt="logo tiktok" />
                </Link>

                <Search />

                <div className={cx('action', 'd-flex', 'align-items-center')}>
                    {currentUser ? (
                        <>
                            <Button leftIcon={<FontAwesomeIcon icon={faPlus} />}>Tải lên</Button>
                            <div>
                                <Tippy content="Tin nhắn" delay={[0, 200]} placement="bottom">
                                    <button className={cx('icon_user', ' p-0')}>
                                        <Message className="p-0" />
                                        <span className={cx('notify')}>1</span>
                                    </button>
                                </Tippy>
                            </div>

                            <div>
                                <Tippy content="Hộp thư" delay={[0, 200]} placement="bottom">
                                    <button className={cx('icon_user', 'p-0')}>
                                        <Notification />
                                        <span className={cx('notify')}>1</span>
                                    </button>
                                </Tippy>
                            </div>
                        </>
                    ) : (
                        <>
                            <Button leftIcon={<FontAwesomeIcon icon={faPlus} />}>Tải lên</Button>
                            <Button primary>
                                <span>Đăng nhập</span>
                            </Button>
                        </>
                    )}
                    <PopperMenu data={currentUser ? menu_user : MENU_ITEMS}>
                        {currentUser ? (
                            // <>
                            <Image
                                className={cx('avatar_user')}
                                width="20"
                                // src="https://scontent.fhan2-5.fna.fbcdn.net/v/t39.30808-1/315973448_1527773577636397_7081842881960101220_n.jpg?stp=dst-jpg_p320x320&_nc_cat=109&ccb=1-7&_nc_sid=7206a8&_nc_ohc=_LrqNYgxdpoAX8bpUlH&tn=ubyVHlWuW2cSuPKs&_nc_ht=scontent.fhan2-5.fna&oh=00_AfDUWqobMszgfdnTOmnM036bnrwMMVDI8Hdzy6Ne8iqfYA&oe=63B99EED"
                                alt="Tạ Viết Đạt"
                                fallback="https://i.pinimg.com/736x/67/ae/0f/67ae0f0aba533510419c541bf8575c49.jpg"
                            />
                        ) : (
                            // </>
                            <button className={cx('setting')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </PopperMenu>
                </div>
            </div>
        </div>
    );
}

export default Header;
