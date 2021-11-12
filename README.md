# Timescale Frontend Interview Assignment

### Completed Features

The main features that are included:
- On the initial visit to the site, the most recent movies are displayed (pulled from Now Playing '/movie/now_playing')
- Search feature allows users to type in a search term and the grid will dynamically update the results as the user begins to type in their search terms
  - Matches come from an API call '/search/movie' query  
- When a user clicks on one of the cards, a modal opens and display more information about the movie

### Planned Features/Enhancements
- Handle edge case where movie.poster_path is null, add a 'No Image' image to be displayed for the movie
- Add 'Load More' option for paginated searches
- Modal design enhancements to match closer to the Figma example
- Add 'close' button, escape key or click away to close modal. Currently closing by scrolling down and then selecting a visible movie thumb
- General code and design clean up to ensure consistency and readability. 


---

### The rules

- Follow the [designs in Figma][figma] as closely as possible
- Use **only** the packages provided in the package.json. You dont have to use all of them, 
  but we ask for you not to add any additional
- Site should have a simple responsive design
- Site should work in the latest Chrome on Mac OS
- Fork the repo to your own account, make it public and send us the repo url when you are completed. We will
  clone and run the site on our local.


[movieDB]: https://developers.themoviedb.org/3/getting-started/introduction
[figma]: https://www.figma.com/file/KKkrDYSUAuRavpqRingRdZ/Movie-Grid?node-id=0%3A1
