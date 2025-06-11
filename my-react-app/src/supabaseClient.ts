import { createClient, SupabaseClient} from '@supabase/supabase-js';

const supabase: SupabaseClient = createClient(
  'https://nujmthfyznertzzkntvc.supabase.co', // Supabase API URL
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im51am10aGZ5em5lcnR6emtudHZjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk1OTgwMzIsImV4cCI6MjA2NTE3NDAzMn0.CvQPkRRHHb3rR4Ro4kXEwCVi0DHqet_jYLQGvAt4_mw' // Supabase Anon Key
);

export default supabase;
