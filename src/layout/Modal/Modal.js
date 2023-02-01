import { PopperWrapper } from '../popper';
import classNames from 'classnames/bind';
import styles from './Modal.module.scss';
import PropTypes from 'prop-types';
const cx = classNames.bind(styles);
function Modal({ children, className }) {
    return (
        <div>
            <div className={cx('overlay')}></div>
            <div className={cx('wrapper')}>
                <div className={cx('container', className)}>
                    <PopperWrapper className={cx('custom')}>{children}</PopperWrapper>
                </div>
            </div>
        </div>
    );
}
Modal.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};
export default Modal;
