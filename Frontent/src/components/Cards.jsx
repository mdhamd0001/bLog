import React from 'react';
import { Link } from 'react-router-dom';

function Cards({ blogs }) {
  if (!Array.isArray(blogs)) {
    console.error("Expected an array but received:", blogs);
    return <p>Invalid data</p>;
  }
  return (
    <>
      {blogs.map((e, index) => {
        return (
          <div
            key={index}
            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:shadow-2xl"
          >
            <Link to="#" className="rounded-lg">
              <img
                className="p-3 rounded-lg"
                src={`http://localhost:8469/${e.Thumbnail}`}
                alt="img"
              />
            </Link>
            <div className="p-5">
              <Link to="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {e.title}
                </h5>
              </Link>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 h-20 overflow-hidden text-ellipsis">
                {e.Description}
              </p>
              <Link
                to={`/OneCard/${e._id}`}
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Read more
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ml-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </Link>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Cards;
