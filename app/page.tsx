import Link from "next/link";
import SearchBar from '../components/searchBar'

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center">
        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
          Discover and Share Your Recipes 
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-300">
        </p>
        <div className="mt-8 flex justify-center">
          {/* <Link
            href="/recipes"
            className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
          >
            Browse Recipes
          </Link> */}
          <SearchBar />
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white">Popular Categories</h2>
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4">
          {['Breakfast', 'Lunch', 'Dinner', 'Dessert'].map((category) => (
            <div key={category} className="group relative">
              <div className="w-full h-60 bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden">
                <div className="flex items-center justify-center h-full text-gray-500 dark:text-gray-400">
                  [Category Image]
                </div>
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900 dark:text-white">
                <Link href={`/recipes?category=${category.toLowerCase()}`}>
                  <span aria-hidden="true" className="absolute inset-0" />
                  {category}
                </Link>
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
