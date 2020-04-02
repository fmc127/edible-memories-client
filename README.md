# Edible Memories

Client Repo: [Edible Memories Client Repo](https://github.com/fmc127/edible-memories-client)\
API Repo: [Edible Memories API Repo](https://github.com/fmc127/edible-memories-api)\
Deployed Client: [Edible Memories Deployed Client](https://t-hatsquad.github.io/bucket-list-client/)\
Deployed API: [Edible Memories Deployed API](https://salty-gorge-11112.herokuapp.com/)

# Technologies Used
 - JavaScript
 - jQuery
 - AJAX
 - HTML
 - CSS
 - Handlebars
 - Git

## Set Up
Browser template: [browser template](https://git.generalassemb.ly/ga-wdi-boston/browser-template)\
To install dependencies: `npm install`\
To run locally: `grunt serve`\

## User Stories
- As an unregistered user, I would like to sign up with email and password.
- As a registered user, I would like to sign in with email and password.
- As a signed in user, I would like to change password.
- As a signed in user, I would like to sign out.
- As a signed in user, I would like to create a post with a title, description, recipe, and rating.
- As a signed in user, I would like to update my post's title, description, recipe, and rating.
- As a signed in user, I would like to delete only my own posts.


## Wireframes
[Wireframes]
https://imgur.com/mHRVyGH
https://imgur.com/jpXjOLh

## Planning
1. Wireframes and user Stories.
2. Set up the [browser template](https://git.generalassemb.ly/ga-wdi-boston/browser-template).
3. Add authentication forms to html and test CRUD actions with Postman.
4. Add resource forms for Update and Create, then test CRUD actions for resources with Postman.
5. Implement Handlebars for post listing and deleting.
6. Added an enabler to limit users from seeing the delete button on posts created by other uses.

### Initial Set up and MVP
After setting up the [browser template](https://git.generalassemb.ly/ga-wdi-boston/browser-template),
I continued to follow the original planning process of using CRUD for authentication and resources. Once CRUD was working, I was able to quickly implement handlebars for listing and deleting posts. MVP was reached shortly after fixing some a couple small bugs with handlebars.


## Future Goals
I plan to create a version 2 of Edible Memories using React. I was able learn and accomplish more styling with this project than previous ones, but I'd still like to do more. I plan to make it look like a high quality, user friendly application that a user would be thrilled to use. My version 2 will also include images attached to each post, if the user choses to upload one.
