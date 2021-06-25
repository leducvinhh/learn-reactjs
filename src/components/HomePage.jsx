import React from 'react';
import AlbumFeature from '../features/Song';
import TodoFeature from '../features/Todo';

HomePage.propTypes = {};

function HomePage(props) {
   return (
      <div>
         <TodoFeature />
         <AlbumFeature />
      </div>
   );
}

export default HomePage;
