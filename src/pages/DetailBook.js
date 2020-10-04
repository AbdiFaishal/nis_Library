import React from 'react';
import { useHistory } from 'react-router-dom';
import Ruler from '../components/common/Ruler';
import SideMenu from '../components/SideMenu';

import bookOne from '../img/book-details/book-detail-1.png';

const DetailBook = () => {
  // const { id } = useParams();
  const history = useHistory();

  const moveToReadBook = () => {
    history.push('/read-book');
  };
  return (
    <div className="container detail-book">
      <SideMenu />
      <div className="detail-book-main">
        <div className="book-desc">
          <div className="book-cover">
            <img src={bookOne} alt="" />
          </div>
          <div className="book-info">
            <div className="book-title-author">
              <h1>Tess on the Road</h1>
              <p>Rachel Hartman</p>
            </div>
            <div className="book-date">
              <p className="book-header">Publication date</p>
              <p className="book-header-content">April 2020</p>
            </div>
            <div className="book-category">
              <p className="book-header">Category</p>
              <p className="book-header-content">Sci-Fi</p>
            </div>
            <div className="book-page-info">
              <p className="book-header">Pages</p>
              <p className="book-header-content">436</p>
            </div>
            <div className="book-isbn">
              <p className="book-header">ISBN</p>
              <p className="book-header-content">9781789807554</p>
            </div>
          </div>
        </div>
        <Ruler addClass="ruler-book-detail" />
        <div className="book-synopsis">
          <div>
            <p>
              In the medieval kingdom of Goredd, women are expected to be
              ladies, men are their protectors, and dragons get to be whomever
              they want. Tess, stubbornly, is a troublemaker. You can’t make a
              scene at your sister’s wedding and break a relative’s nose with
              one punch (no matter how pompous he is) and not suffer the
              consequences. As her family plans to send her to a nunnery, Tess
              yanks on her boots and sets out on a journey across the
              Southlands, alone and pretending to be a boy.
            </p>
            <p>
              Where Tess is headed is a mystery, even to her. So when she runs
              into an old friend, it’s a stroke of luck. This friend is a
              quigutl—a subspecies of dragon—who gives her both a purpose and
              protection on the road. But Tess is guarding a troubling secret.
              Her tumultuous past is a heavy burden to carry, and the memories
              she’s tried to forget threaten to expose her to the world in more
              ways than one.
            </p>
            <p>
              Returning to the fascinating world she created in the
              award-winning and New York Times bestselling Seraphina, Rachel
              Hartman introduces readers to a new character and a new quest,
              pushing the boundaries of genre once again in this wholly original
              fantasy.
            </p>
          </div>
          <div className="btn-detail-group">
            <button className="btn btn-detail-book">Add Library</button>
            <button className="btn btn-detail-book" onClick={moveToReadBook}>
              Read Book
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailBook;
