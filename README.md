# vocab-YOU-lary

In this student assessment, you will be creating an application that allows users to CRUD vocabulary cards, authenticate with Google, and filter.

## Learning Objectives
- Single Responsibility Principle (each component/function should have one job)
- Import/Export modules
- DOM manipulation with Vanilla JS
- DOM querying with Vanilla JS
- Representing data as HTML
- Usage of semantic HTML5 tags
- Asynchronous Programming
- Promises 

## REMINDER
We are not looking for completion of all stretch goals, but are focused on you hitting MVP, although if you can make it work completely, then wahoo!

What we are looking for is MVP, time management, critical thinking about the concepts, creative thinking to bind the concepts together for a solution, and collaboration with your teammates and instruction team.

If you only get MVP complete, but display the above Core Skills and can demonstrate understanding of the fundamental code concepts, then you are learning and growing - which is what we care about.

## Tools To Use:
- Postman for API testing
- Firebase for database, rules, and authentication
- Webpack template setup steps (Located in your cohort repo)
- dbdiagram.io for creating your ERD
- Figma, google slides, or paper for flow charting your application
- Axios for requests
- Github projects/milestones for planning out work
- Bootstrap 5 for styling

Make sure your Developer Tools are open at all times while working on this project. Use the messages provided in the Console to determine what code needs to be fixed or implemented, and use breakpoints in the Sources tab to step through your code as you debug.

## Get Started
Create issue tickets from the items below to help you get started. 
- [ ] Setup your firebase project and create the `.env` file with your keys. (Reference the [Firebase videos](https://vimeo.com/showcase/codetracker-firebase) if you need help getting started)
- [ ] Plan your project. Take no more than an hour to plan (ERD, Flow Chart, Postman)
- [ ] Use this template (webpack) to create the project on your github account
- [ ] Make sure you are in your `workspace/foundations/exercises` directory
- [ ] `git clone YOUR_GITHUB_REPO_LINK`
- [ ] `cd` into the directory
- [ ] Run `npm install` to install your dependencies
- [ ] Type `code .` to open the project in VS Code
- [ ] `npm start` to start your server
- [ ] Plan your project by creating the tickets you will work through using Github Projects
- [ ] START CODING!

# MVP Requirements
[MVP Wireframe](https://www.figma.com/file/IW4jF3GnzCFLYbEXlgFNIZ/MVP)
- [ ] An ERD of your data
- [ ] Use Firebase for DB and authentication
- [ ] Technical Flow chart (timebox this)
- [ ] The app has a navigation bar
  - [ ] A logo
  - [ ] Logout button
  - [ ] Create Entry
  - [ ] Any other options you would like to add

**The most basic requirement for this project is that a user can:**
- [ ] Login and Logout of the application using Firebase Google Authentication
- [ ] only see the vocabulary entries that they created
- [ ] CREATE a vocabulary entry:
  - [ ] Title
  - [ ] Definition
  - [ ] Language/Tech
  - [ ] Time submitted - Not on form. Handle in your JS
  - [ ] user ID - Not on form. Pull from User object.
- [ ] READ THIER entries
- [ ] UPDATE THEIR entries
- [ ] DELETE THEIR entries
- [ ] Filter by language/tech
- [ ] Style your application using your own creativity!
- [ ] No errors - linters should be clean

## Stretch 1
[Stretch 1 Wireframe](https://www.figma.com/file/yZE38QzpoUWELA22gGZJve/Stretch-1)
- [ ] Allow users to order entries alphabetically, newest, oldest

## Stretch 2
[Stretch 2 Wireframe](https://www.figma.com/file/UC3Gi8HFRkZY8OIMOAUgL4/Stretch-2)
- [ ] Users can search vocabulary entries
- [ ] Users can add Language/Tech to the database and refrerence it on their vocabulary entries
- [ ] Users can only see the Languages/Tech categories that they created

## Stretch 3
[Stretch 3 Wireframe](https://www.figma.com/file/KgbkfaoRd5F8Q4qZ3G2Bg2/Stretch-3)
- [ ] Users can mark an entry as public or private
- [ ] Create a new navigation item called "Community" and on click of this item, users can see all the public entries
- [ ] If an entry is public, anyone can READ it. If it is private, only the user who created it can see it.
- [ ] If an entry is public, only the user who created it can CRUD on it
- [ ] If an entry is public, any user can copy the entry to their own set of entries and then CRUD on the new/copied entry

<img width="1269" alt="Screen Shot 2022-06-12 at 10 13 16 PM" src="https://user-images.githubusercontent.com/67666661/173273331-c9e7efa9-5ba6-4877-9392-0a6f259cbbaa.png">
<img width="885" alt="Screen Shot 2022-06-12 at 10 13 30 PM" src="https://user-images.githubusercontent.com/67666661/173273353-752ebceb-724c-4a75-8015-c77aa1eb2356.png">
<img width="1264" alt="Screen Shot 2022-06-12 at 10 13 56 PM" src="https://user-images.githubusercontent.com/67666661/173273368-8732e9f9-b908-4550-89b2-e0fb0c76dc6f.png">


![Screen Shot 2022-06-04 at 12 40 42 PM](https://user-images.githubusercontent.com/67666661/172019435-4573dbf5-1c08-4ea2-9543-49fca0c00221.png)
![Screenshot_20220604-124354_Samsung Notes](https://user-images.githubusercontent.com/67666661/172019479-b765601d-a439-4777-a7ff-08280e3204fb.jpg)


