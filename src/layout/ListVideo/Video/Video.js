import classNames from 'classnames/bind';
import styles from './Video.module.scss';

import { CommentIcon, ShareFriend } from '../../Icons';
import MenuShare from './MenuShare/MenuShare';
import HeartActive from './HeartActive';
import VideoControl from './VideoControl';

const cx = classNames.bind(styles);
const LIST_SHARE = [
    {
        icon: <ShareFriend />,
        title: 'Nhúng',
    },
    {
        icon: <ShareFriend />,
        title: 'Gửi đến bạn bè',
    },
    {
        icon: <ShareFriend />,
        title: 'Chia sẻ với Facebook',
        href: 'facebook.com',
    },
    {
        icon: <ShareFriend />,
        title: 'Chia sẻ với WhatsApp',
        href: 'facebook.com',
    },
    {
        icon: <ShareFriend />,
        title: 'Sao chép liên kết',
        href: 'facebook.com',
    },
];
const LIST_SHARE_MORE = [
    {
        icon: <ShareFriend />,
        title: 'Sao chép liên kết',
        href: 'facebook.com',
    },
    {
        icon: <ShareFriend />,
        title: 'Sao chép liên kết',
        href: 'facebook.com',
    },
    {
        icon: <ShareFriend />,
        title: 'Sao chép liên kết',
        href: 'facebook.com',
    },
    {
        icon: <ShareFriend />,
        title: 'Sao chép liên kết',
        href: 'facebook.com',
    },
    {
        icon: <ShareFriend />,
        title: 'Sao chép liên kết',
        href: 'facebook.com',
    },
    {
        icon: <ShareFriend />,
        title: 'Sao chép liên kết',
        href: 'facebook.com',
    },
];

const report = [
    {
        title: 'Minor safety',
        children: {
            title: 'Nudity or sexual activity of minors1',
            data: [
                {
                    title: 'Nudity or sexual activity of minors2',
                    children: {
                        data: [
                            {
                                title: 'Nudity or sexual activity of minors1',
                                final: true,
                                text: [
                                    {
                                        text: 'Content exposing minors genitals, buttocks, or pubic region, or nipples of female minors',
                                    },
                                    {
                                        text: 'Content exposing minors genitals, buttocks, or pubic region, or nipples of female minors',
                                    },
                                    {
                                        text: 'Content exposing minors genitals, buttocks, or pubic region, or nipples of female minors',
                                    },
                                ],
                            },
                        ],
                    },
                },
                {
                    title: 'Abuse or crimes against minors',
                    children: {
                        data: [
                            {
                                title: 'Nudity or sexual activity of minors2',
                                final: true,
                                text: [
                                    {
                                        text: 'Content exposing minors genitals, buttocks, or pubic region, or nipples of female minors',
                                    },
                                    {
                                        text: 'Content exposing minors genitals, buttocks, or pubic region, or nipples of female minors',
                                    },
                                    {
                                        text: 'Content exposing minors genitals, buttocks, or pubic region, or nipples of female minors',
                                    },
                                ],
                            },
                        ],
                    },
                },
                {
                    title: 'Dangerous or illegal behaviors by minors',
                    children: {
                        data: [
                            {
                                title: 'Nudity or sexual activity of minors3',
                                final: true,
                                text: [
                                    {
                                        text: 'Content exposing minors genitals, buttocks, or pubic region, or nipples of female minors',
                                    },
                                    {
                                        text: 'Content exposing minors genitals, buttocks, or pubic region, or nipples of female minors',
                                    },
                                    {
                                        text: 'Content exposing minors genitals, buttocks, or pubic region, or nipples of female minors',
                                    },
                                ],
                            },
                        ],
                    },
                },
            ],
        },
    },
];
function Video() {
    return (
        <div className="d-flex">
            <VideoControl dataReport={report} />
            <div className="d-flex flex-lg-column flex justify-content-end ">
                <button className={cx('btn')}>
                    <HeartActive />
                </button>
                <button className={cx('btn')}>
                    <span className={cx('icon')}>
                        <CommentIcon />
                    </span>
                    <strong className={cx('quantity')}>222</strong>
                </button>
                <button className={cx('btn')}>
                    <MenuShare currentMenu={LIST_SHARE} MoreMenu={LIST_SHARE_MORE} />
                    <strong className={cx('quantity')}>437</strong>
                </button>
            </div>
        </div>
    );
}

export default Video;
