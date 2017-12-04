# Channel

Check out a live version of Channel here: [Channel Live](https://channeling.herokuapp.com/#/)

Channel is an open publishing platform where users can share stories and ideas with the world. Channel was inspired by the blogging platform called Medium and built using React.js with Redux on the frontend and Ruby on Rails with a PostgreSQL database on the backend.

## Features

* Create an account as well as login/logout
* Personalized feed based on followings
* View users' profile, their followers/followees, and their posts
* Create and update a post
* Determine reading time base on length of post
* Like/unlike a post
* Comment on a post
* Follow/unfollow users

## Structure

Channel is built using Ruby on Rails with a postgresSQL database. The backend routes are RESTful and they respond to asynchronous requests from the front end with JSON. By utilizing associations to prefetch data in the controller actions, queries to the database were minimalized.

All of front end rendering is done through React, which implements the flex architecture. React's virtual DOM efficiently handles diffing, resulting in fast updates of the DOM. Data in the Redux store is in a normalized form where errors, session, users, comments, and posts get their own slice of state, which makes managing relational data simpler and easier.

## Libraries

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
* [react-sticky](https://github.com/captivationsoftware/react-sticky) to create a sticky for social media links and likes

## Demo

### User Authentication:

![alt text](app/assets/images/channel_login.gif)
* Login/signup is one component that can be rendered by the route or on another page as a modal. For instance, if a user is not logged in but tried to like/comment on a post or follow a user, a modal would pop up, prompting the user to login/signup. While the user's profile page is not private, the edit form is protected via backend and frontend authentication. It's recommended to log in using the demo to experience all the functionalities of the app.

### :

![alt text](app/assets/images/channel_follow.gif)


Post show page where you can like the post and follow/unfollow the author:

![Post show page where you can like the post and follow/unfollow the author](app/assets/images/like_and_follow.png)


Post show page where you can comment on the post:

![Post show page where you can comment on the post](app/assets/images/comments.png)


User profile page where you can update user information:

![Update user profile](app/assets/images/user_profile.png)

## New Features Queue

Some features that are pending for implementation include:
* Add testing
* Allow users to reply to a comment
* Allow users to search for posts or users
* Add categories to the posts
* Make reading recommendations base on posts they have liked
* Allow users to sign up / log in using Facebook or Google accounts
* Allow users to Bookmark posts
