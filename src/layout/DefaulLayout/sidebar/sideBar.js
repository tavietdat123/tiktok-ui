import classNames from 'classnames/bind';
import { Menu, MenuItem } from './Menu';
import style from './sidebarStyle.module.scss';
import config from '../../../config';
import { HomeIcon, FollowIcon, LiveIcon, LiveIconActive, FollowIconActive, HomeIconActive } from '../../Icons';
import SuggestedAccounts from '../../SuggestedAccounts/SuggestedAccounts';
import Discover from '../../Discover';
import { Donors } from '../../Discover';
// import CustomScroll from 'react-custom-scroll';
const cx = classNames.bind(style);
function Sidebar() {
    return (
        <div className={cx('scroll')}>
            <div className={cx('container_sibar')}>
                <Menu>
                    <MenuItem
                        title="For you"
                        to={config.routes.home}
                        icon={<HomeIcon />}
                        ActiveIcon={<HomeIconActive />}
                    />
                    <MenuItem
                        title="Following"
                        to={config.routes.following}
                        icon={<FollowIcon />}
                        ActiveIcon={<FollowIconActive />}
                    />
                    <MenuItem
                        title="LIVE"
                        to={config.routes.live}
                        icon={<LiveIcon />}
                        ActiveIcon={<LiveIconActive />}
                    />
                </Menu>
                <SuggestedAccounts title="Suggested accounts" />
                <SuggestedAccounts title="Suggested accounts" />

                <Discover />
                <Donors />
            </div>
        </div>
    );
}

export default Sidebar;
