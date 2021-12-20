# Optimum

## Table of contents
* [Description](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)
* [Design](#design)

<a name="live-link"/>

## Live Link

https://optimum-project.herokuapp.com/

<a name="general-info"/>

## Description

Health & fitness app in which users analyze personalized data according to their logged fitness activity 

* Modeled custom database schema and REST API with Active Record, PostgreSQL, and Ruby on Rails
* Utilized DiceBear API to allow users to customize their avatars
* Authenticated users at login by encrypting identifying account information via BCrypt

<a name="technologies"/>

## Technologies

- Ruby 2.7.4
- NodeJS (v16), and npm
- Heroku CLI
- Postgresql

<a name="setup"/>

## Setup

Start by **forking** the project template repository and then clone the project:

```console
$ git clone git@github.com:samlee1097/optimum.git
$ cd socialize
$ npm install --prefix client
$ sudo service postgresql start
$ rails s
// new terminal
$ npm start --prefix client
```

## Design

<a name="design"/>

### Data Structure

![image](https://user-images.githubusercontent.com/87099910/146798717-55e2b748-4d7a-42fb-8011-621e2149497d.png)

### User Stories

**MVP:**
User will be able to:
* Log into the site 
* View a list of all the posts from all the users on the home page 
* * Create a new post once logged on 
* Modify/delete a post a user has created 
* Look at user’s profiles w/ all their posts 
* A user can like a post once 
* Creating a new user 

**Stretch goals:**
* Get a followers button working that allows users to see a list of followers
* Allow users to comment on other posts & share them onto their own profile


