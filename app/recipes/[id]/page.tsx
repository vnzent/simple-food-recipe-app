import { Metadata } from 'next';
import Link from 'next/link';

type Props = {
  params: { id: string }
};

// This would typically be dynamically generated based on the recipe ID
export const generateMetadata = ({ params }: Props): Metadata => {
  // This would fetch the recipe data based on the ID
  return {
    title: `Recipe Details | Food Recipe App`,
    description: 'View recipe details',
  };
};

export default function RecipeDetailPage({ params }: Props) {
  const { id } = params;
  
  // This would typically fetch data from an API or database based on the ID
  // For now, we'll use mock data
  const recipe = {
    id: parseInt(id),
    title: id === '1' ? 'Pasta Carbonara' : 
           id === '2' ? 'Avocado Toast' : 
           id === '3' ? 'Chicken Curry' : 
           id === '4' ? 'Chocolate Cake' : 
           id === '5' ? 'Caesar Salad' : 'Beef Stir Fry',
    category: id === '1' || id === '3' || id === '6' ? 'dinner' : 
              id === '2' ? 'breakfast' : 
              id === '4' ? 'dessert' : 'lunch',
    time: id === '1' ? '30 min' : 
          id === '2' ? '10 min' : 
          id === '3' ? '45 min' : 
          id === '4' ? '60 min' : 
          id === '5' ? '15 min' : '25 min',
    difficulty: id === '2' || id === '5' || id === '1' ? 'Easy' : 'Medium',
    ingredients: [
      'Ingredient 1',
      'Ingredient 2',
      'Ingredient 3',
      'Ingredient 4',
      'Ingredient 5',
    ],
    instructions: [
      'Step 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      'Step 2: Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      'Step 3: Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
      'Step 4: Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.',
    ],
    nutritionFacts: {
      calories: '350 kcal',
      protein: '15g',
      carbs: '40g',
      fat: '12g',
    },
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-6">
        <Link href="/recipes" className="text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300">
          ← Back to Recipes
        </Link>
      </div>
      
      <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
        {/* Recipe image */}
        <div className="aspect-w-1 aspect-h-1 rounded-lg bg-gray-200 dark:bg-gray-700 overflow-hidden">
          <div className="h-96 flex items-center justify-center text-gray-500 dark:text-gray-400">
            [Recipe Image]
          </div>
        </div>

        {/* Recipe info */}
        <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">{recipe.title}</h1>
          
          <div className="mt-3">
            <div className="flex items-center">
              <p className="text-sm text-gray-500 dark:text-gray-400 capitalize">{recipe.category}</p>
              <span className="mx-2 text-gray-500 dark:text-gray-400">•</span>
              <p className="text-sm text-gray-500 dark:text-gray-400">{recipe.time}</p>
              <span className="mx-2 text-gray-500 dark:text-gray-400">•</span>
              <p className="text-sm text-gray-500 dark:text-gray-400">{recipe.difficulty}</p>
            </div>
          </div>

          <div className="mt-6">
            <h2 className="text-xl font-medium text-gray-900 dark:text-white">Ingredients</h2>
            <ul className="mt-2 space-y-2">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index} className="text-gray-500 dark:text-gray-400">
                  • {ingredient}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 border-t border-gray-200 dark:border-gray-700 pt-8">
            <h2 className="text-xl font-medium text-gray-900 dark:text-white">Instructions</h2>
            <ol className="mt-2 space-y-4">
              {recipe.instructions.map((instruction, index) => (
                <li key={index} className="text-gray-500 dark:text-gray-400">
                  {instruction}
                </li>
              ))}
            </ol>
          </div>

          <div className="mt-8 border-t border-gray-200 dark:border-gray-700 pt-8">
            <h2 className="text-xl font-medium text-gray-900 dark:text-white">Nutrition Facts</h2>
            <div className="mt-2 grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Calories</p>
                <p className="text-lg font-medium text-gray-900 dark:text-white">{recipe.nutritionFacts.calories}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Protein</p>
                <p className="text-lg font-medium text-gray-900 dark:text-white">{recipe.nutritionFacts.protein}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Carbs</p>
                <p className="text-lg font-medium text-gray-900 dark:text-white">{recipe.nutritionFacts.carbs}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Fat</p>
                <p className="text-lg font-medium text-gray-900 dark:text-white">{recipe.nutritionFacts.fat}</p>
              </div>
            </div>
          </div>

          <div className="mt-8 flex">
            <button
              type="button"
              className="flex-1 bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Save Recipe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}