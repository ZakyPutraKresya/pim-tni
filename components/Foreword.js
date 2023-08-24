import React from 'react';

const Foreword = ({ title, paragraphs, author }) => {
  return (
    <div className="w-3/4 mx-auto"  style={{marginTop: 75}}>
      <h2 className="text-center text-blue-600 font-bold text-xl mb-4">
        {title}
      </h2>
      {paragraphs.map((paragraph, index) => (
        <p key={index} className="text-justify mb-4">
          {paragraph}
        </p>
      ))}
      <p className="text-left italic">
        <b>{author.name}</b>
        <br />
        {author.position}
      </p>
    </div>
  );
};

export default Foreword;
