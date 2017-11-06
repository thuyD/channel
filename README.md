# Channel

Check out a live version of Channel here: [Channel Live](https://channeling.herokuapp.com/#/)

Channel is single page web application inspired by the blogging platform called Medium. Channel allows users to:
* Create an account
* Log in / Log out
* Update profile information, including adding a profile photo
* Look at other users' profile
* Create and update a post
* Read posts by other users
* Like and unlike a post
* Comment on a post
* Follow and unfollow users

#Structure

Channel is built using Ruby on Rails with a postgresSQL database. The backend routes are RESTful and they respond to asynchronous requests from the front end with JSON. By utilizing associations to prefetch data in the controller actions, queries to the database were minimalized.

All of front end rendering is done through React, which implements the flex architecture. React's virtual DOM efficiently handles diffing, resulting in fast updates of the DOM. Data in the Redux store is in a normalized form where errors, session, users, comments, and posts get their own slice of state, which makes managing relational data simpler and easier.

###Libraries

Channel uses:

* [React.js](https://reactjs.org/)
* [BCrypt](https://github.com/codahale/bcrypt-ruby) for authentication
* [Paperclip](https://github.com/thoughtbot/paperclip) to store user profile and post images using Amazon Web Services
* [Figaro](https://github.com/laserlemon/figaro) to securely store important information
* [React-Quill](https://github.com/zenoamaro/react-quill) to allow users to use a rich text editor when creating a post
* [striptags](https://github.com/ericnorris/striptags) to strip html tags from the rich text for post summaries
* [Faker](https://github.com/stympy/faker) to seed the database with comments and users
* [Moment](https://momentjs.com/) to style dates
* [react-modal](https://github.com/reactjs/react-modal) to create modals
* [react-sticky](https://github.com/captivationsoftware/react-sticky) to allow the nav bar to stick to the page when scrolling

#Screen Shots

![Home page](assets/images/home_page)
Format: ![Alt Text](url)

![Sign up page](assets/images/signup)
Format: ![Alt Text](url)

![Post show page where you can like the post and follow/unfollow the author](assets/images/like_and_follow)
Format: ![Alt Text](url)

![Post show page where you can comment on the post](assets/images/comments)
Format: ![Alt Text](url)

![Update user profile](assets/images/user_profile)
Format: ![Alt Text](url)

##New Features Queue

Some features that are pending for implementation include:
* Allow users to reply to a comment
* Allow users to search for posts or users
* Accurately determine the reading time for a post
* Add categories to the posts
* Make reading recommendations base on who the users follow and posts they have liked
* Allow users to sign up / log in using Facebook or Google accounts
* Allow users to Bookmark posts
