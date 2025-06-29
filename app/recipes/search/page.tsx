'use client'

import { useSearchParams } from 'next/navigation'
import Link from 'next/link'

export default function SearchResultsPage() {
  const searchParams = useSearchParams()
  const keyword = searchParams.get('query')?.trim().toLowerCase() || ''

  const recipes = [
    { id: 1, title: 'Pasta Carbonara', category: 'dinner', time: '30 min', difficulty: 'Easy' },
    { id: 2, title: 'Avocado Toast', category: 'breakfast', time: '10 min', difficulty: 'Easy' },
    { id: 3, title: 'Chicken Curry', category: 'dinner', time: '45 min', difficulty: 'Medium' },
    { id: 4, title: 'Chocolate Cake', category: 'dessert', time: '60 min', difficulty: 'Medium' },
    { id: 5, title: 'Caesar Salad', category: 'lunch', time: '15 min', difficulty: 'Easy' },
    { id: 6, title: 'Beef Stir Fry', category: 'dinner', time: '25 min', difficulty: 'Medium' },
  ]

  const filteredRecipes = keyword
    ? recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(keyword)
      )
    : []

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Search Results</h1>
      {keyword && <p className="mb-4">Hasil untuk: <strong>{keyword}</strong></p>}

      {filteredRecipes.length === 0 ? (
        <p className="text-gray-500">Tidak ditemukan resep dengan kata: {keyword}</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRecipes.map((recipe) => (
            <div key={recipe.id} className="p-4 border rounded-md">
              <h2 className="text-lg font-semibold">{recipe.title}</h2>
              <p className="text-sm text-gray-500">{recipe.time} • {recipe.difficulty}</p>
              <Link href={`/recipes/${recipe.id}`} className="text-indigo-600 underline mt-2 block">
                View Recipe
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
