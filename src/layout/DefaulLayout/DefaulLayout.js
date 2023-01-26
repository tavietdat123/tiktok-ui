import Sidebar from './sidebar/sideBar';
import Header from '../components/header';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import style from './stydefaul.module.scss';
const cx = classNames.bind(style);

function DefaulLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container-c')}>
                <div className={cx('content', 'd-flex', 'justify-content-between')}>
                    <div style={{ width: 356 }}>
                        <Sidebar />
                    </div>
                    <div className={cx('container_content')}>{children}</div>
                </div>
            </div>
        </div>
    );
}
DefaulLayout.propTypes = {
    children: PropTypes.node.isRequired,
};
export default DefaulLayout;
