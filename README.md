# WDI-GROUP-PROJECT

MEAN Stack app planned and built in a week by Patrick Kelly, Charlotte Davies and Evelina Kuusinen.

## Description

An app to plan ski holidays focusing particular on After Ski activities

On our app you can:
- Browse popular European ski destinations
- Create a forum to:
    - Discuss and plan your holiday with your friends
    - Discuss après opportunities at your resort
    - Get to know your travel companions

![APPrès Ski Landing Page](https://user-images.githubusercontent.com/13580512/37454021-5ac34022-2831-11e8-8840-13c198fb007c.png)

## The Process
We started by brainstorming ideas and chose to build a ski and snowboard holiday planning app. We drew our initial wireframes collaboratively on the whiteboard.

- We drew them on the whiteboard first and then as a group made a presentation of them
- We experimented with a few formats but mutually decided on a minimalist design
- Originally our hero image was a ski jumper but in practise we didn’t like how the snowboarder took over from our content, so we changed to a gondola
- We each took an element of styling, background image, font, colour scheme
- We set these up in variables and set up a basic style sheet for headings, paragraphs, buttons and anchor tags


![Whiteboard Wireframes](https://user-images.githubusercontent.com/33250285/37465792-0a6e9702-2854-11e8-9d5a-6e75f321d125.png)

![Trello Board](https://user-images.githubusercontent.com/33250285/37466599-0e287e7e-2856-11e8-9d5d-b9c7db092f0c.png)

For planning we used a Trello board which we continued using throughout the process, dividing tasks and informing each other about the process. We wanted to ensure that we didn’t miss anything and all aspects of our project would be covered by someone. Our detailed planning really helped us to prioritise MVP, communicate on what was going on and avoid conflicts on git - it really helped that we had 3 models and 3 people. We had standups every morning and after lunch and we also used Slack to keep each other updated during the weekend and overnight.

Our goal was to divide the back and front end coding so that every team member would have the chance of practicing on both. All three of us wrote tests and did styling as well. In three days we hit MVP.

The biggest struggle was that the main API we planned on using only output in XML and could only be used by one IP address. We decided to build the API from scratch giving us the ski destinations with the information we wanted to display on the app.
After hitting MVP we added the Google Places API and functionality to favourite places, styled menus to drop down menus and added autocomplete to forms.

Our team worked well because we put a lot of effort into communicating and we had a mutual respect of each other’s abilities and value within the team.

## Technologies Used
* JavaScript
* Angular
* Express
* NodeJS
* MongoDB
* HTML5
* CSS
* SCSS
* Mocha
* Chai
* NYC

### Dependencies and other tools:
* Babel
* Bcrypt
* Bluebird
* Body-Parser
* Bower
* Browser-Sync
* Canva
* Event Stream
* Google Maps API
* Google Places API
* Filestack API
* Gulp
* Git
* Istanbul
* JSON Web Token
* Mongoose
* Morgan
* Trello
* Heroku


## Wins and Blockers
#### Charlotte's Wins:

1. Practising the google map and google places API -  I’d never really had a chance to experiment with either before so I enjoyed the opportunity and can see lots of scope to use it in the future.
2. Practising testing - this consumed all of my first weekend on the project and I found it complex to get my head around to start with but I am glad I have worked it out now as I can definitely see the value of good testing for future projects.
3. Great teamwork - Patrick and Evelina were so easy to work with. We made decisions quickly and collaboratively and everyone was supportive with bug fixing.

#### Charlotte's Blockers:

1. Our schemas got quite complex in referencing each other
2. We couldn’t use our original API - the Google Places API wasn’t so good.


#### Patrick’s Wins:

1. I like the site - the styling looks great and I’m pleased with the functionality that we have been able to create.
2. Dropdown menu functionality is a win for me! It took a while to work out but I am really happy we took the time to include it in our app.
3. Date formatting was a pain but it was worth the struggle because it’s an important element of our event planning app.

#### Patrick’s Blockers:

1. Testing - it was difficult and time consuming but a good learning opportunity
2. Authentication - I found it complicated to get my head around

#### Evelina’s Wins:

1. Great team - we were very decisive, we shared the tasks equally, there was a lot of respect for each other’s work and we communicated well on this. Our project relied on trusting our team.
2. The grid - I got a lot of practise in styling forms. I really had to wrap my head around the individual components of the HTML and SCSS.
3. I think our idea is great and I think I would actually use this app! It fixes the pain point that group holidays often aren’t that well planned because no-one takes responsibility for it.  With our app you can share the load.


#### Evelina’s Blockers:
1. It was the first time styling code that others have written. Creating the layout was a bit harder this way, compared if you've written it yourself and would be familiar with the code.
2. Testing was new for me and I the learning curve was quite steep.

## Future Functionality

1. Build a more detailed API
2. Add weather and ski conditions
3. Add a youtube playlist so groups can plan their party music, pre trip
4. Add filters to destination index and favourites on destination and holiday show - we ran out of time for this. We would have filtered by country for the destinations and type of place (bar, restaurant etc) for favourites.


## Links
* Project on [GitHub](https://github.com/P-atrick/WDI-GROUP-PROJECT)
* Project deployed with [Heroku](http://appresski.herokuapp.com/)




## Diary

### Friday

🚡 We spent a lot of time planning, on trello, on the whiteboard, collaboratively and individually.  We wanted to ensure that we didnt miss anything and all aspects of our project would be covered by someone.

🚡 We came up with our idea relatively quickly and found a lot of APIs that we wanted to use.

🚡 We split up the tasks so that everyone knew what we aimed to have completed by Monday.

🚡 We built the basic set up to our app, downloading dependencies and creating files. We wrote a basic style sheet.

🚡 We did some pair programming to get the more complicated tasks done quicker and also worked well individually. Our team worked well because we communicated well and had a mutual respect of each other's abilities and value within the team.


### The weekend

🗻 By Monday morning we had an almost working basic app. The big bug of the weekend was that, in testing we had an extra instruction to the port which was blocking the app being able to open in gulp.

🗻 Charlotte worked on test set up and authentication testing.

🗻 Patrick built the user routes.

🗻 Evelina did the user tests.


### Monday

❄️ Our main API was the big blocker - we couldn’t use the one we had planned because was only in XML and we could only use it on one IP address. Patrick built the API from scratch.

❄️ We found working in a team a little challenging as we found that lots of things were half done - you couldn’t see through a whole project. We communicated a lot through slack and also took more time to explain to each other what code they had written so we could all have a better overview of where the project was and which bits of code we could build on.

❄️ Our detailed planning really helped us to prioritise MVP and communicate on what was going on and to help avoid conflicts on git - really helped that we had 3 models and 3 people


### Tuesday

🏂 We reached MVP!

🏂 We had a few issues with embedding and referencing schemas. Our schemas became quite complex as different fields were needed by other schemas.  

🏂 We are proud of our auto complete function that we added to holiday index. We also used the same function in our create holiday form for attendees and destinations.

🏂 We fixed lots of smaller problems, mainly styling.  We decided to change our main hero image from a snowboarder to a gondola as we felt the snowboarder was too distracting on the page.


### Wednesday

🎿 Patrick fixed yesterdays bug relating to drop down menus and embedding and referencing schemas.

🎿 Charlotte added the Google Places API.

🎿 Evelina restyled forms and battled with radio buttons. There were lots of little elements to get right here and it was important to all of us that our site looked uniform across all forms so Evelina spent some time getting this right across all form pages.

🎿 We struggled a little with having a great MVP and wanting to add too many extra features all at once. We discussed pairing back some of our plans a little.  
Extra features that we have added since MVP:

    🌨 Google Places API
    🌨 Button to favourite places
    🌨 Drop down menus
    🌨 Autocomplete forms

🎿 Designed and added favicon logo


### Thursday

⛷ Patrick completed the testing phase and is delighted that everything works!

⛷ Charlotte added destination favourites to the holiday show page.

⛷ Evelina added flash messages.

⛷ We prioritised really well based on what was essential to fix and improve on and what would be a nice extra. This was much easier in a team as it was easier to stay focussed on what had to be done right away.

⛷ We had a lot of small fixes to complete.

⛷ We worked on our group presentation collaboratively.


### Friday

☃️ Today was mostly tidying up small details and having to resist the urge to work on big changes.

☃️ We worked on our presentation and readme.
