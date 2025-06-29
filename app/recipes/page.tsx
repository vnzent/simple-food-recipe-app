import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Recipes | Food Recipe App',
  description: 'Browse delicious recipes',
};

export default function RecipesPage() {
  // This would typically fetch data from an API or database
  const recipes = [
    { id: 1, title: 'Pasta Carbonara', category: 'dinner', time: '30 min', difficulty: 'Easy' },
    { id: 2, title: 'Avocado Toast', category: 'breakfast', time: '10 min', difficulty: 'Easy' },
    { id: 3, title: 'Chicken Curry', category: 'dinner', time: '45 min', difficulty: 'Medium' },
    { id: 4, title: 'Chocolate Cake', category: 'dessert', time: '60 min', difficulty: 'Medium' },
    { id: 5, title: 'Caesar Salad', category: 'lunch', time: '15 min', difficulty: 'Easy' },
    { id: 6, title: 'Beef Stir Fry', category: 'dinner', time: '25 min', difficulty: 'Medium' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold mb-6">Recipes</h1>
      
      <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="group relative">
            <div className="w-full h-60 bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden">
              <div className="flex items-center justify-center h-full text-gray-500 dark:text-gray-400">
                [Recipe Image]
              </div>
            </div>
            <div className="mt-4">
              <div className="flex justify-between">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  {recipe.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{recipe.time}</p>
              </div>
              <div className="flex justify-between mt-1">
                <p className="text-sm text-gray-500 dark:text-gray-400 capitalize">{recipe.category}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{recipe.difficulty}</p>
              </div>
              <Link href={`/recipes/${recipe.id}`} className="mt-3 inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                View Recipe
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}