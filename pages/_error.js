function Error({ statusCode, err }) {
  return (
    <p>
      {statusCode
        ? `An error ${statusCode} occurred on server ${JSON.stringify(err)}`
        : "An error occurred on client"}
    </p>
  );
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return {
    statusCode,
    err,
  };
};

export default Error;
