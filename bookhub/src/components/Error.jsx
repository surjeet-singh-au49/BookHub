const Error = ({ message }) => {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="text-red-600 text-2xl">Error: {message}</div>
      </div>
    );
  };
  
  export default Error;