const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      <div className="text-6xl text-gray-400 mb-4">🔍</div>
      <h2 className="text-2xl font-semibold text-gray-700 mb-2">
        No Results Found
      </h2>
      <p className="text-gray-500 text-center max-w-md">
        We couldn't find any contacts matching your search. Try adjusting your
        search terms.
      </p>
    </div>
  );
};

export default NotFound;
