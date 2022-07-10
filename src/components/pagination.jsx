import { ChevronLeft, ChevronRight } from 'heroicons-react'


const Pagination = ({ exercisePerPage, totalExercise, paginate, defaultPage }) => {
  const pageNumbers = [];

  for(let i = 1; i <= Math.ceil(totalExercise / exercisePerPage); i++) {
    pageNumbers.push(i);
  }
    return ( 
   
      <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700">
            Showing <span className="font-medium">{ defaultPage }</span> to <span className="font-medium">{exercisePerPage}</span> of{' Exercises '}
            <span className="font-medium">{ totalExercise }</span> results
          </p>
        </div>
        <div>
          <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
            <a
              href="#"
              className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
            >
              <span className="sr-only">Previous</span>
              <ChevronLeft className="h-5 w-5" aria-hidden="true" />
            </a>

                {pageNumbers.map(number => {
                  return(
                    <button key={number} onClick={() => paginate(number)}
                    aria-current="page"
                    className="z-10 bg-indigo-50 border-indigo-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                  >
                    {number}
                  </button>
                  )
                })}
            
              
           
          
     
            <a
              href="#"
              className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
            >
              <span className="sr-only">Next</span>
              <ChevronRight className="h-5 w-5" aria-hidden="true" />
            </a>
          </nav>
        </div>
      </div>
  )
}

export default Pagination;