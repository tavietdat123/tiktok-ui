import classNames from 'classnames/bind';
import style from './Search.module.scss';
import HeadlessTippy from '@tippyjs/react/headless';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useRef, useState } from 'react';
import { PopperWrapper } from '../../popper';
import { SearchIcon } from '../../Icons';
import { useDebounce } from '../../../Hooks';
import * as searchService from '../../../service/searchService';
import SearchItem from './SearchItem';
// import axios from 'axios';
const cx = classNames.bind(style);

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [result, setResult] = useState([]);
    const [hideResult, setHideResult] = useState(true);
    const [loading, setLoading] = useState(false);
    const Debounce = useDebounce(searchValue, 500);
    const inputRef = useRef();
    const handleClear = () => {
        setSearchValue('');
        inputRef.current.focus();
        setResult([]);
    };
    const handleHide = () => {
        setHideResult(false);
    };
    const handleChange = (e) => {
        const value = e.target.value;
        if (!value.startsWith(' ')) {
            // console.log(value);
            setSearchValue(value);
        }
    };
    useEffect(() => {
        if (!Debounce.trim()) {
            setResult([]);
            return;
        }

        //! async
        const fetchApi = async () => {
            setLoading(true);

            const res = await searchService.search(Debounce);

            setResult(res);

            setLoading(false);
        };
        fetchApi();

        //! promise
        // request
        //     .get(`users/search`, {
        //         params: {
        //             q: Debounce,
        //             type: 'less',
        //         },
        //     })
        //     .then((res) => {
        //         // console.log(res)
        //         setResult(res.data);
        //         setLoading(false);
        //     })
        //     .catch(() => {
        //         setLoading(false);
        //     });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [Debounce]);
    return (
        <div>
            <HeadlessTippy
                visible={hideResult && result.length > 0}
                interactive={true}
                render={(attrs) => (
                    <div className={cx('search_result')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <div className={cx('rs_title')}>Account</div>
                            <SearchItem result={result} />
                        </PopperWrapper>
                    </div>
                )}
                onClickOutside={handleHide}
            >
                <div className={cx('header_search')}>
                    <input
                        // onMouseDown={(e) => e.preventDefault()}
                        ref={inputRef}
                        value={searchValue}
                        type="text"
                        placeholder="Search Accounts and videos"
                        onChange={handleChange}
                        onFocus={() => setHideResult(true)}
                    />
                    {searchValue && !loading && (
                        <button className={cx('delete')} onClick={handleClear}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    )}
                    {loading && <FontAwesomeIcon className={cx('delete', 'loading')} icon={faSpinner} />}
                    <span className={cx('line')}></span>
                    <button className={cx('search')} onMouseDown={(e) => e.preventDefault()}>
                        <SearchIcon />
                    </button>
                </div>
            </HeadlessTippy>
        </div>
    );
}

export default Search;
