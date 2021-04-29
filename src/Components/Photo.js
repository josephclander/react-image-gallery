import React from 'react';

const Photo = (props) => {
  const photo = props.data;
  const url = `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`;
  return (
    <li>
      <img src={url} alt={photo.title} />
    </li>
  );
};

export default Photo;
