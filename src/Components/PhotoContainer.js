import React from 'react';
import Photo from './Photo';

const PhotoContainer = (props) => {
  let output = props.data.map((photo) => <Photo data={photo} key={photo.id} />);
  return (
    <div className='photo-container'>
      <h2>{props.title}</h2>
      <ul>
        {props.data.length > 0 ? (
          output
        ) : (
          <li className='not-found'>
            <h3>No Results Found</h3>
            <p>You search did not return any results. Please try again.</p>
          </li>
        )}
      </ul>
    </div>
  );
};

export default PhotoContainer;
