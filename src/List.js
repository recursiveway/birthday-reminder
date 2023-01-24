import React from 'react';

const List = ({ datas }) => {
  const renderedList = datas.map((data) => {
    return (<article key={data.id} className='person'>
      <img src={data.image} alt={data.name} />
      <div>
        <h4>{data.name}</h4>
        <p>{data.age}</p>
      </div>
    </article>)
  })
  return (
    <ul>
      {renderedList}
    </ul>
  );
};

export default List;
