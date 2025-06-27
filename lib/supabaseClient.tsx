import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
const supabase = createClient('https://food-recipe.supabase.co', 'public-anon-key')

export { supabase }