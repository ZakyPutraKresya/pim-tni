import React from 'react';

const Foreword = ({ data }) => {
  const { title, paragraphs, author } = data[0]
  return (
    <div className="w-3/4 mx-auto"  style={{marginTop: 75}}>
      <h2 className="text-center text-blue-600 font-bold text-xl mb-4">
        {title}
      </h2>
        <p className="text-justify mb-4">
          {paragraphs}
        </p>
      <p className="text-left italic">
        <b>{author.name}</b>
        <br />
        {author.position}
      </p>
    </div>
  );
};

export default Foreword;
