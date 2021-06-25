import React from 'react';
import PropTypes from 'prop-types';

Album.propTypes = {};

function Album({ album }) {
   return (
      <li className="album-item" key={album.id}>
         <div className="album-img">
            <img src={album.thumbnail} alt={album.title} />
         </div>
         <p>{album.title}</p>
      </li>
   );
}

export default Album;
