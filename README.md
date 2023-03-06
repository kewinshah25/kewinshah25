# Personal Portfolio Website

A website to record blogs and maybe some old projects.

- Project 1 (in progress): [**Basic website wide user log in**](#basic-website-wide-user-login)
- Project 2 (in progress): [**To do list**](#to-do-list)
- Project 3 (planning to do): [**Blogging Website**](#blogs)
- Project 4 (planning to do): [**Fantasy Soccer App**](#fantasy-app)
- Project 5 (planning to do): [**E-commerce Website**](#ecommerce)
- Project 6 (planning to do):

> To build the project locally, do npm

> To build the angular project for website deployment, do `ng build --output-path docs --base-href /portfolio/ `
> followed by committing your changes

## Basic Website Wide User Login

As a first step to project development I'll need to ensure that there is proper authorization/authentication projects wide.

Features:

1. User can freely login/logout preferably in a modal such that they can access it from anywhere within the website.
1. This should be highly available, so put it in the nav bar
1. Unique user ids
1. Provide support for login via google/github etc.

Goals:

1. Be able to log-in once with a set expiration date in the token such that users will be able to use all the website functionalities (successful future projects) once they log-in.
1. Find a perfect strategy to store data in a free and secure way in an always available database.

## To do list

A simple to do list in Angular. (Want to do it in react so maybe will create one in React and then build a similar one here or vice versa). First project because it shouldn't be difficult for me in any way.

Features:

1. Ability to add and remove tasks
1. Tasks are basic, set amount of chars texts
1. Users can check a task off

Goal:

1. Learn and understanding the basics of app workings

## Blogs

Simple blogging app similar to most available online.

Features:

1. Login/sign up
1. Basic blog functionality like writing editing and deleting blogs
1. Create specific link of each blog
1. Make profile public/private
1. View blogs in a post-it fashion sorted by newest/oldest/most liked/most commented on
1. Follow people thus able to view private profiles
1. Ability to view likes/comments
1. View blogs as guests but cannot like/comment

Goals:

1. I always felt like creating a blog post is a milestone to successful fullstack web development. I think it has a lot of basic functionalities used in day to day web applications that needs to be worked upon.

## Fantasy App

In this app, I am planning to follow the principles (and potentially rules) of the Fantasy Premier League (soccer) website. Fetch live data from free soccer scoring APIs and maybe create my own rules but try to clone the working and add more and more features of the app as I move forward within the app. [To be continued...]
