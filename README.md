# Movie-Search-Challenge
A React-built movie search website that allows users to search for popular movies 



 Run Directions:

	1.	Clone Repository to machine using git clone [repo link]
	2.	Open the movie-search repository either in VSCode or you can directly enter the repoin your terminal [cd movie-search]
	3.	Run 'npm start' in your terminal and open the app in your web browser
 	4. 	Enter in a movie of your choice, press the search button and click a movie to read more about it

  [Discrepancies:]
  	* When you search a movie the movies appear twice this doesn't effect the functionality but gives a poorer user experience

   [Possible Solution:] 
   	*  Review code logic, I might have mixed the logic up b/c there are moments when the search results appear once
    	   but when you go back to the search it appears twice again
-------------------------
	* Clicking a movie result doesn't always hide the search results shown and only show the details page. I wanted to implement the site to wher
 	  showing details hides all search results and only shows the details for the movie the user selected
    
   [Possible Solution:] 
   	* Review the MovieList component I think I implemented the functionality of hiding the search results on the wrong page, it should be
    	  in the movie list component where the search results showing or not are changed.
