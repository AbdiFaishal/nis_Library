import React from 'react';
import MainIcon from '../components/MainIcon';
import {
  // EpubView,
  // EpubViewStyle,
  ReactReader,
  // ReactReaderStyle,
} from 'react-reader';

// import alice from '../epub/alice.epub';
import prince from '../epub/the_little_prince.epub';

const ReadBook = () => {
  return (
    <div className="container">
      <MainIcon />
      <div style={{ position: 'relative', height: '90vh' }}>
        {' '}
        <ReactReader
          url={prince}
          title={'The Little Prince'}
          location={'epubcfi(/6/2[cover]!/6)'}
          locationChanged={(epubcifi) => console.log(epubcifi)}
        />
      </div>
    </div>
  );
};

export default ReadBook;
