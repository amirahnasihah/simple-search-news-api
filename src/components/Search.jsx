export default function Search({ searchButton, handleInput, searchInput }) {
  return (
    <div className="p-12">
      Search <span>🔍</span>
      <form>
        <div className="relative">
          <div className="absolute left-0 flex items-center pl-3 pointer-events-none"></div>
          <input
            type="search"
            id="search"
            className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-100 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Type something..."
            required
            value={searchInput}
            onChange={handleInput}
          />
          {/* <button
            className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={handleInput}
          >
            Search
          </button> */}
        </div>
      </form>
    </div>
  );
}
