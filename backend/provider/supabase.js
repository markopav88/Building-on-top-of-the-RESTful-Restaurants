
// Import `dotenv` package and call the `config()` function to access the environment variables set within the `.env` file. 
require("dotenv").config();
// Abstract the `createClient` functionality from the `supabase` package. 
//To initialize supabase
const { createClient } = require("@supabase/supabase-js");

// Create two const variables `supabaseURL` and `supabaseSecret` with the value of the environment variables you created.
//Storing the the SUPABASE_URL and SUPABASE_SECRET environment variables as const variables.
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseSecret = process.env.SUPABASE_SECRET;

// Create a variable `supabase` and set the value to the execution of the `createClient` function passing in `supabaseUrl` and `supabaseSecret` variables as arguments. 
//  we are going to execute the createClient function and pass in the supabaseUrl and supabaseSecret variables as arguments.
const supabase = createClient(supabaseUrl, supabaseSecret);

// Export the `supabase` variable. 
// It can now be used in backend/routes/restaurants.js and backend/routes/starredRestaurants.js. 
module.exports = supabase;
//Now the supabase provider allows the back-end to interact with supabase for CRUD operations