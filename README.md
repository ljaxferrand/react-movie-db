<div  id="top"></div>

# Viewport Movie Database - React App
<img width="321" alt="Viewport app logo" src="https://user-images.githubusercontent.com/87734454/154987096-3e30bafc-804f-4345-9746-9ef4be6e066a.png">


### Table of Contents
* [Overview](#overview)
	* [Demo](#demo)
	* [Tools Used](#tools-used)
	* [Features](#features)
* [Setup](#setup)
* [Summary](#summary)
	* [Key Takeaways](#key-takeaways)
	* [Roadmap](#roadmap)
	
## Overview

Viewport Movie Database is a React web app that pulls from [The Movie Database (TMDB) API](https://developers.themoviedb.org/3/getting-started/introduction). Users are able to browse popular categories, search for specific movies, watch trailers, and curate a favourites list all in one place. Built remotely with a team of four developers.

### Demo

Check out the live demo here:

[![Link to the live site](https://img.shields.io/static/v1?label=View%20Live%20Site&message=%40%20LJFerrand%2Ecom&color=c13535&style=for-the-badge&logoWidth=20&logo=react&logoColor=blue&labelColor=c2c2c2)](https://viewport.ljferrand.com/)

<img width="539" alt="Movie App homepage" src="https://user-images.githubusercontent.com/87734454/154986736-0b067c44-607c-4c14-bcfb-afa266578574.png">

### Tools Used

- [React.js](https://reactjs.org/)
- [Sass (SCSS syntax)](https://sass-lang.com/)
- [REST API](https://developers.themoviedb.org/3/getting-started/introduction)

### Features

-	Page routing via React Router	
-	Dynamic style rendering based on returned api values
-	Responsive sliders via `react-slick`
-	Favourites list management via `use-global-hook`
-	Light/dark mode user preference state via local storage
	
<p  align="right">(<a  href="#top">back to top</a>)</p>

## Setup

1. Run `npm install` to install needed dependencies after you've cloned this repo and entered its root directory.
2. Run `npm start` to start the application.
3. Open [http://localhost:3000](http://localhost:3000/) to view it in the browser.

<p  align="right">(<a  href="#top">back to top</a>)</p>

## Summary

### Key Takeaways

React is a fast and powerful library that makes it simple to integrate data pulled from an API. Rendering components via JSX with dynamic data, handling interactions, and state changes can be a lot more efficient than doing so with HTML and vanilla JS.  While we styled this project using SCSS, I would try something like CSS-in-JS in the future.

### Roadmap
If I were to continue iterating on this project, I would add some of the following features/optimizations based on feedback received during testing: 

 - [ ] DRYer implementation of the 4 sliders
	 - [ ] UI/UX improvement for navigation to the category pages
- [ ] Sharing favourites list or single movie listing
- [ ] Results filtering


<p  align="right">(<a  href="#top">back to top</a>)</p>
