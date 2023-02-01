import classNames from 'classnames/bind';
import styles from './Report.module.scss';
import PropTypes from 'prop-types';
const cx = classNames.bind(styles);

function FinalPage({ data }) {
    return (
        <div>
            <div className={cx('header_final')}>{data.title}</div>
            <div className={cx('title_final')}>We don't allow:</div>
            <ul className={cx('list_rp')}>
                {data.text.map((el, index) => (
                    <li className={cx('item_rp')} key={index}>
                        {el.text}
                    </li>
                ))}
            </ul>
            <div className={cx('footer')}>
                <button className={cx('btn_final')}>Submit</button>
            </div>
        </div>
    );
}
FinalPage.propTypes = {
    data: PropTypes.object.isRequired,
};
export default FinalPage;
