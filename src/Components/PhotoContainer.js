import React from 'react';
import Photo from './Photo';

const PhotoContainer = (props) => {
  let output = props.data.map((photo) => <Photo data={photo} key={photo.id} />);
  let hasPhotos = props.data.length > 0;
  return (
    <div className='photo-container'>
      <h2
        style={
          hasPhotos && !props.loading
            ? { color: '#A7EF4A' }
            : { color: '#F94E5E' }
        }>
        {props.title}
      </h2>
      <ul>
        {hasPhotos && !props.loading ? (
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
