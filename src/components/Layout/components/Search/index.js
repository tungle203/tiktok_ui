import { useEffect, useRef, useState } from 'react';
import HeadlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItems from '~/components/AccountItems';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { SearchIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

function Search() {
  const [searchvalue, setSearchValue] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [showResult, setShowResult] = useState(true);
  const inputRef = useRef();

  const handleClear = () => {
    inputRef.current.focus();
    setSearchValue('');
    setSearchResult([]);
  };
  const handleHideResult = () => {
    setShowResult(false);
  };

  useEffect(() => {
    setTimeout(() => setSearchResult([1, 2]), 0);
  }, []);
  return (
    <HeadlessTippy
      visible={showResult && searchResult.length > 0}
      interactive
      render={(attrs) => (
        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
          <PopperWrapper>
            <h4 className={cx('search-title')}>Account</h4>
            <AccountItems />
            <AccountItems />
            <AccountItems />
            <AccountItems />
          </PopperWrapper>
        </div>
      )}
      onClickOutside={handleHideResult}
    >
      <div className={cx('search')}>
        <input
          value={searchvalue}
          ref={inputRef}
          placeholder="Search accounts and videos"
          spellCheck={false}
          onChange={(e) => setSearchValue(e.target.value)}
          onFocus={() => setShowResult(true)}
        />
        {!!searchvalue && (
          <button className={cx('clear')} onClick={handleClear}>
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
        )}
        {/* <FontAwesomeIcon className={cx('loading')} icon={faSpinner} /> */}

        <button className={cx('search-btn')}>
          <SearchIcon />
        </button>
      </div>
    </HeadlessTippy>
  );
}

export default Search;
