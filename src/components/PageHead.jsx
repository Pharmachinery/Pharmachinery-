import React from 'react';

const PageHead = ({img}) => {
  return (
    <div className='page-head lg:h-[250px]'>
      <img src={img} alt="projectsBanner" className='w-full h-full' loading='lazy' />
    </div>
  )
}

export default PageHead;