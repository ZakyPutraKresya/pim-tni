import React from 'react';

const Foreword = ({ data }) => {
  const { title, paragraphs, author } = data[0]
  return (
    <div className="w-3/4 mx-auto"  style={{marginTop: 75}}>
      <h2 className="text-center text-blue-600 text-xl mb-4" dangerouslySetInnerHTML={{ __html: title }}>
      </h2>
        <p className="text-justify mb-4" dangerouslySetInnerHTML={{ __html: paragraphs }}>
        </p>
      <p className="text-left">
        <span dangerouslySetInnerHTML={{ __html: author.name }}></span>
        <span dangerouslySetInnerHTML={{ __html: author.position }}></span>
      </p>
    </div>
  );
};

export default Foreword;
