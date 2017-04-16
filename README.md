e30
================

Testing
-------

I deployed this project into Heroku

`https://e30.herokuapp.com/`

Setup environment and start application
---------------------------------------

### This application requires

- Ruby 2.3.1
- Rails 4.2.7
- Node >=6
- NPM >=3.8
- Postgres >= 9.5

### Build app

##### You need to build the JS file first

```
npm install
```

##### Then build the RoR dependencies

```
bundle install
```

##### Then create the DB

```
rake db:create db:migrate
```

##### This's optional step, you can create sample data by running command below

```
rake e30:generate_data
```

It will create an user with email `admin@e30.com` and password `changeme` as well as list of 9500 articles
 
### Start server

You will need to start the Postgres first

Then start the server

```
rails s
```

Project summary
---------------

### Features which I have done

1. A homepage where users can scroll to see the list of articles infinitely
2. A Search screen, which show the result of search for articles
3. An article detail page, where users can read the detail of each article
4. User could login, after logged in, they will be able to mark one article as their favourite, and could access their favourite articles later from another menu.
5. A CMS page where admin can add new article

**Note**
1. I'm using the free version of Heroku and this version limit the number of records in DB is 10000. So I just created 9500 articles to save 500 records for creating user, favourite articles.
2. The articles have the same title, description, and image. The only different is the prefix `[Title - ]`, `[Subtitle - ]`, `[Content - ]`.
For testing the searching feature, I suggest that you search with the keywords which include the prefix for better result. For example: `Title - 77`
3. To add an article into you favourites, please go to the end of detail page. To show the list of your favourites, you can click on the avatar, then choose `My favourites`.
4. To create new article, you can click on the avatar, then choose `Create article`. For now, only admin can create new article, it mean the new created user create new article.
Please use the admin account with email `admin@e30.com` and password `changeme` to see this option.
5. When creating new article, you will have an option `Publish this article now` to publish the article. Uncheck it will cause the new created article not show in home page.

### Technical decisions

##### 1.Ruby on Rails
I choose it because I familiar with it and it help me quickly create a new site with scalability. For the more reasons why should we choose RoR, I think we can search it on the internet.

##### 2. Postgres
To be honest, I don't have much experience with the different DBs.
I choose Postgres because my previous company (Atlassian) is using for their products. We work with it with no problems from performance to scalability.
And one more reason, Postgres is the default DB in Heroku.

##### 3. Single Page Application
I used a separate font-end dev for this project. It mean you can develop the UI separately from backend. I use `webpack` to build the
HTML, JS, CSS, Images and copy it into the asset folder of Rails.

It bring to me a big advantage that is I can use whatever technologies for front-end (ES6, React, Angular, PostCSS,...) and not depend on Rails framework.
I also can use hot reload to boost the development time.

##### 4. ReactJS
We have a list with at least 9500 articles, so I think rendering a large list will be handled well by ReactJS.

### Achievements

1. Backend code coverage is `93.87%`
2. Authentication and authorization user actions. e.g. only admin can create new article
3. Technical points: service for querying data, decorator for returned JSON, parameters validation, model validation

### Consideration

1. I'm using a rich text editor for inputting the content of article. It work well except the images. I'm not sure about the solution to allow user upload an image inside an article and submit it.
2. I'm searching the articles by using DB queries, I know that it is not a good solution, but for the limitation of time, I must to use it. To improve it, I think we can use the `elasticsearch`
3. Missing the unit for front-end and integration test

### Additional note

1. Database design: https://github.com/thuanmb/e_thirty/blob/master/db/schema.rb
2. Routes design: https://github.com/thuanmb/e_thirty/blob/master/config/routes.rb