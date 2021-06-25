import React from 'react';
import AlbumList from './components/AlbumList';

const AlbumFeature = () => {
   const albumList = [
      {
         id: 1,
         title: '100 Hit K-pop ',
         thumbnail:
            'https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/3/0/5/4/3054142743e7126f44a54ba61a72a68a.jpg',
      },
      {
         id: 2,
         title: '100 Hit Young Music ',
         thumbnail:
            'https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/d/c/e/7/dce7d09905fd4a7a281125ca2a34fa3a.jpg',
      },
      {
         id: 3,
         title: '100 Hit EDM ',
         thumbnail:
            'https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/c/5/f/c/c5fc615c43215c6b72676f42767855ee.jpg',
      },
      {
         id: 4,
         title: '100 Hit POP U.S. UK ',
         thumbnail:
            'https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/3/0/5/4/3054142743e7126f44a54ba61a72a68a.jpg',
      },
      {
         id: 5,
         title: '100 Hit Vietnamese Rap ',
         thumbnail:
            'https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/7/1/7/2/7172e5eef050a364accf3109a0f7477a.jpg',
      },
   ];
   return (
      <div className="album">
         <h4>List Music HOT Jun 2021</h4>
         <AlbumList albumList={albumList} />
      </div>
   );
};

export default AlbumFeature;
