/* eslint-disable array-callback-return */
import { FlagIcon } from '../../../Icons';
import classNames from 'classnames/bind';
import styles from './Report.module.scss';
import Modal from '../../../Modal';
import { memo, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faXmark } from '@fortawesome/free-solid-svg-icons';
import Item from './item';
import FinalPage from './FinalPage';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);
function Report({ base }) {
    const [onRp, setOnRp] = useState(false);
    const [item, setItem] = useState([{ data: base }]);
    const [onHeader, setOnHeader] = useState(true);

    const currentItem = item[item.length - 1];
    useEffect(() => {
        if (currentItem.data[0].final) {
            setOnHeader(false);
        } else if (!currentItem.data[0].final && onHeader === false) {
            console.log('re');
            setOnHeader(true);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [item]);

    return (
        <div>
            <div
                className={cx('flag')}
                onClick={() => {
                    setOnRp(true);
                }}
            >
                <FlagIcon className="me-2" />
                <span>Report</span>
            </div>
            {onRp && (
                <Modal className={cx('ps')}>
                    <div className={cx('header')}>
                        {item.length > 1 && (
                            <span className={cx('back_icon')} onClick={() => setItem(item.slice(0, item.length - 1))}>
                                <FontAwesomeIcon icon={faChevronLeft} />
                            </span>
                        )}
                        <h4>Report</h4>

                        <FontAwesomeIcon
                            className={cx('close_icon')}
                            onClick={() => {
                                setItem((prev) => prev.slice(0, 1));
                                setOnRp(false);
                            }}
                            icon={faXmark}
                        />
                    </div>
                    <div className={cx('container')}>
                        {onHeader && <div className={cx('heading')}>Please select a scenario</div>}
                        {currentItem.data.map((el, index) => {
                            // return <FinalPage />;

                            if (el.final) {
                                return <FinalPage key={index} data={el} />;
                            } else {
                                if (el.children) {
                                    return (
                                        <Item
                                            key={index}
                                            data={el}
                                            onClick={() => {
                                                setItem((prev) => [...prev, el.children]);
                                            }}
                                        />
                                    );
                                }
                            }
                        })}
                    </div>
                </Modal>
            )}
        </div>
    );
}
Report.propTypes = {
    base: PropTypes.array.isRequired,
};
export default memo(Report);
