import { DownIcon, ShareIcon } from '../../../Icons';
import ShareSelect from './ShareSelect';
import classNames from 'classnames/bind';
import styles from './MenuShare.module.scss';
import { memo, useState } from 'react';
import { PopperWrapper } from '../../../popper';
import Tippy from '@tippyjs/react/headless';
import PropTypes from 'prop-types';
const cx = classNames.bind(styles);
let state = false;
function MenuShare({ currentMenu, MoreMenu }) {
    const [moreShare, setMoreShare] = useState(currentMenu);

    return (
        <>
            <div className={cx('scroll')}>
                <Tippy
                    zIndex={1}
                    delay={[0, 800]}
                    interactive
                    offset={[88, 10]}
                    hideOnClick={false}
                    render={(attrs) => (
                        <div tabIndex="-1" {...attrs}>
                            <div className={cx('list_share')}>
                                <PopperWrapper className={cx('custom')}>
                                    {moreShare.map((item, index) => {
                                        return <ShareSelect key={index} data={item} />;
                                    })}
                                    <button
                                        onClick={() => {
                                            setMoreShare((prev) => [...prev, ...MoreMenu]);
                                            state = true;
                                        }}
                                        className={cx('btn_down', {
                                            disable: state,
                                        })}
                                    >
                                        <DownIcon />
                                    </button>
                                </PopperWrapper>
                            </div>
                        </div>
                    )}
                    onHidden={() => {
                        setMoreShare(currentMenu);
                        state = false;
                    }}
                >
                    <span className={cx('icon_share')}>
                        <ShareIcon />
                    </span>
                </Tippy>
            </div>
        </>
    );
}
MenuShare.propTypes = {
    currentMenu: PropTypes.array.isRequired,
    MoreMenu: PropTypes.array.isRequired,
};
export default memo(MenuShare);
