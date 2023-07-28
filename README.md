# GAxTOP Group 3

## TOP 2023

![image](https://opportunity.census.gov/assets/img/TOP-logo.png)

---

## **_Description_**

---

#### This README will be a catchall source of info for our team. It includes our contact information, tech stack, and schedule

---

## Our Dev Team

---

- Ben Savary

  - email: rbsavary88@gmail.com
  - github: rbsavary

- Anna Druzhinina

  - email: anna@rbcd.org
  - github: annadruzhinina

- Anchi Chen

  - email: anchichenusa@gmail.com
  - github: chenannchi

- Kayisha Ulysse

  - email: ulyssekayisha@gmail.com
  - github: kayishau

- Avi Patel

  - email: avipatel95@gmail.com
  - github: patel-avi

- Sarven Ornekian

  - email: sarvornek@gmail.com
  - github: sornekian

- Alex Grimes

  - email: alexgrimes23@gmail.com
  - github: agrimes23

- Jeremy Harrell

  - email: jeremy.d.harrell@gmail.com
  - github: wolfy1313

- Stephan D Ramalho
  - email: stephanramalho@gmail.com
  - github: sramalho94

---

## Tech Stack

---

- Front-End

  - React-Native cli
  - TypeScript
  - Nativewindcss

- Back-End
  - node.js
  - express.js
  - Sequelize
  - PostgreSQL

---

## Meeting Times

---

- Mondays, Wednesdays, and Fridays

  - 10:00 AM EST

- Thursdays (interview prep)

  - 11:30 AM EST

### Please reach out at least a day ahead of time if you have a scheduling conflict, I'm always willing to accomodate scheduling changes

---

## Sprints

---

### 1. Mini Project

#### A mini project to improve our skills with the tech stach

#### [Github](https://github.com/sramalho94/TopGroup3-ReactNative)

#### Due Date : Wed May 24th EOD

#### Please reach out if you can't make the deadline

---

### 2. Research Sprint

### For this project we will be working in pairs to research what it will take to implement the features in our project.

### Due Date: Wed June 28th we will be presenting

### Deliverables:

- We will be doing presentations on Wed June 28th during our regularly scheduled meeting
- You should be able to discuss:

  - specific steps that need to be taken with implementing a feature/package

    - workflow for what files need to be created etc

  - potential blockers that the team will face

- We should be able to take what you tell us and use that as a guide to start coding the feature

### Breakdown of Assignments:

- Task 1: Implementing taking photos into fronted

  - Sarven and Alex
  - Find a package that will work with our project, both ios and android
  - Come up with workflow for implementation
  - List of potential blockers

- Task 2: Storing images on our backend

  - Ben and Anna
  - we need to learn how to store images within our postgres sequelize database

  - research alternative third party db’s to make this happen
  - how do we set up keys within models that are images

- Task 3: jira/ trello

  - Kayisha and Anchi
  - Analyze the pros and cons of both jira and trello
  - If jira is too much work, make sure trello is able to handle all our requirements

    - Clearly be able to delegate deliverables
    - Be able to clearly set deadlines
    - Be able to set up a backlog of tickets
    - Organize blockers, organize extra help

- Task 4: React-Native-Keychain

  - Jeremy and Avi
  - Look into the features of the React-Native-Keychain package
  - Is there anything else it can do that will be useful for us?
  - maybe we can incorporate ios keychain and android keychain

---

## Sprint 3 - Backend

### During this sprint we will be building out our backend

- Team 1: User

  - Alex
  - Jeremy
  - Kai
  - Anchi

- Team 2: Test

  - Ben
  - Anna
  - Sarven
  - Avi

## Milestones and deliverables

- ✅ Milestone 1: Model completion - EOD Mon July 3rd

  - you should have a completed model and migration file for the entity you're working on
  - the following keys should be encrypted using Crypto:

    - firstName, gender, race, ethnicity, state, zip
    - password should be encrypted using the Bcrypt package

  - associations between the models must be completed

- ✅ Milestone 2: Controllers and Routes - EOD Wed July 5th

  - full CRUD operations on your model with associated routes

    - create, getAll, getById, update, delete
    - make sure that the data we are returning is not encrypted and usable

  - we'll discuss best practice for route syntax on Monday

- ✅ Milestone 3: Jest Test - EOD Fri July 7th

  - complete the tests for the controllers/routes you've created
  - refer to the Jest_Auth testing repo/code along if you need a refresher on Jest
  - all tests should pass

### I'll make myself as available as possible throughtout the week so please do not hesitate to reach out if you can't overcome a blocker

### Our first Office Hours day will be on Sun July 2nd. The zoom will open at 10 AM EST

### If you'd like the zoom any other time let me know and I'll make you cohost

### I know we're gonna crush this Sprint, excited to get cracking!! 💪

---

## Sprint 4 - frontend

---

### For this Sprint we'll be building out our frontend

### Teams:

- 1: Jeremy, Alex, Kayisha
- 2: Avi, Ben
- 3: Anchi, Sarven
- 4: Anna, Stephan

### Workflow and PR Guidelines

### Git Workflow

- Please reach out to me if you need to install a dependency
- Always work on your own branch
- Download OhmyZsh if you haven’t
- Regularly go back to main and pull from the code base, to ensure you are up to date
- If a new dependency has been added on main and you don’t have it on the branch you’re working on, using the following workflow:
  - Commit or stash any changes
  - Switch to the main branch
  - Pull the newest code from GitHub
  - Switch back to your branch
  - Run `git merge main`
  - Handle any conflicts
  - Run `yarn install` to install the new dependencies
  - If you used `git stash` on the first step run `git stash pop`
- After pulling from main, go back to the branch you’re working on and run `git merge`
  - If you get a merge conflict, solve it locally on your branch before pushing the code
  - Reach out if you’re uncertain how to fix the merge
- Please also regularly push your branch to GitHub to ensure it is available to the rest of the team
- Once you have completed your milestone you can open a pull request

### Pull Request Guidelines

- All pull requests should be made to the dev branch
- Before you open your pull request make sure:

  - Someone else besides you has reviewed your code
  - Your work has comments that explain the code
  - There is no erroneous commented out code
  - Your branch does not have a package-lock file

- Pull Request Comment
  - Include in the comment for the pull request the following information:
    1. Any new files you created and a general overview of their purpose (1-2 sentences max per file/dir)
    2. Any new dependencies that were installed
    3. Your team and milestone

### Milestones:

### 1: Screen Wireframes

- Deadline: Wed July 12th EOD

  - complete a basic wireframe of your assigned screens
  - they don't have to be functional
  - try your best to recreate the wireframs as accurately as possible

### 2: Components

- Deadline: Mon July 17th EOD

  - complete your assigned component
  - import your component into the screen its used on
  - refactor the screen so that it works with the component
  - [CriteriaBreakdown](https://docs.google.com/document/d/1fDOilplcYZ1oeh9IoSM2ym4mA61UOcDo9VGAW90ScUc/edit)

---

## Sprint 5 - Bug Fix Mini Sprint

---

During this Sprint, we'll be fixing frontend bugs before we move on to the Functionality Milestone

Please see the Trello for assigned deliverables

#### Deadline: Tues July 25th EOD

---

## Sprint 6 - Functionality Sprint

---

### Teams

1. [ 'Ben', 'Anna' ],
2. [ 'Anchi', 'Kayisha' ],
3. [ 'Alex', 'Sarven' ],
4. [ 'Avi', 'Jeremy' ]

---

## Meeting Summaries

---

- Mon May 22th

  - Extension of deadline for mini project
  - [MiniProjectRepo](https://github.com/sramalho94/TopGroup3-ReactNative)
  - Set up Meeting times:
    - Mon: 11:30 AM
    - Wed & Fri: 10 AM

- Wed May 24th

  - Nativewind TypeScript Move DB code along
  - If you know any devs experience with React-Native, let me know
  - Friday will be another recap/presentation meeting
  - We have until next Friday, June 2nd to get in as much practice as we can
  - Next steps will include, learning how to incorporate JWT and Bcrypt
  - We will also be doing a code along for our back-end, including a Jest lesson next week
  - If you haven't presented your mini project or sent me a link to your github repo, please do so
  - Reach out if you have any issues or concerns, we all learn at our own pace and have outside obligations
  - [OMDTypeScriptRepo](https://github.com/sramalho94/TypeScript_OMBD)
  - Test Change

- Fri May 26th

  - This meeting marked the end of our mini project sprint. I hope everyone feels more comfortable with out frontend stack, please reach out if you have any questions or concerns.
  - Starting next week we will be moving on to reviewing our backend stack.
  - Thank you to everyone who presented their mini projects!

- Wed May 31st

  - We began our dive into postgres,sequelize, and Jest with a code along that illustrates the basic concepts of unit testing.
  - The link to the repository is:
    - [JestCodeAlong](https://github.com/sramalho94/top3backtest)
  - If you have the time feel free to play around with the test file, or build out your own models and controllers and make tests for those.

- Fri June 9th

  - During this meeting we did a step by step tutorial for getting a model, controllers, routes, and tests built out. You can find the recording on the google drive.
  - Here is the link to the Auth Jest Repo
    - [Auth_Jest](https://github.com/sramalho94/Auth_Jest_Test)
  - We will be using this exact workflow to accomplish deliverables for the backend of our project.
  - Next week will be another review week

- Mon June 12th

  - For this meeting we discussed how comfortable the team was with the tech stack. This week will be another review week, so please come with questions if you need clarification about anything.

- Wed June 14th

  - For this meeting we did a code along that incorporates JWT and React-Native-Keychain
  - We will be using these technologies for our project, so please familiarize yourself wit using them
  - [Auth_React-N_Repo](https://github.com/sramalho94/ReactNativeAUTH)
  - We created Auth methods that allow users to register, login, and logout
  - This project was designed be used along with our Auth_Jest Backend Project

    - [Auth_Jest_Backend](https://github.com/sramalho94/Auth_Jest_Test)

  - Please review the code for the frontend, and make sure you are able to register, login, and logout
  - Feel free to reach out if you have any questions

  - [RecordingPart1](https://drive.google.com/drive/u/2/folders/1p-dxb0lSyd0BJQB-uSrrx4rHg0U2M2EQ)

  - [RecordingPart2](https://drive.google.com/drive/u/2/folders/1tKTA-wpkCkMtU8wDOv686Sry6nfY3j0s)

- Thurs June 15th Leetcode Meeting

  - [Recording](https://drive.google.com/drive/u/2/folders/15npjNdGeC6AApsdBz4jbUhFHbOBrWm02)

  - During this meeting we learned about the Exclusive Or Bitwise Operator, here is some helpful documentation:

    - [ExclusiveOrDocs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_XOR)

  - We practiced balancing trying to get the most efficient solution possible while also ensuring we don't overcomplicate things and still get a correct answer

  - We also learned about initializing number variables using `Infinity` and `Number.MAX_NUMBER`

  - We briefly touched upon `Binary Search` and the `Binary Search Tree` data structure

  - The leetcodes we completed were:

    - [1365](https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/description/)

    - [1913](https://leetcode.com/problems/maximum-product-difference-between-two-pairs/description/)

    - [136](https://leetcode.com/problems/single-number/)

- Fri June 16th

  - This meeting marks the end of our mini sprints/learning period 🎉
  - Moving forward we will be working on completing the product
  - We went over the final parts of the React-Native Auth lesson
  - We scheduled a meeting with our Mentor Jeremy for Wed June 21st at 5:00 PM EST
  - We discussed using the Harvard CS50 course as a resource for improving our Computer Science fundamentals

    - [CS50_Data_Structures](https://www.youtube.com/watch?v=X8h4dq9Hzq8)
    - [CS50_Algorithms](https://www.youtube.com/watch?v=4oqjcKenCH8)

  - [Recording](https://drive.google.com/drive/u/2/folders/1oTKoW1Xvyc-RU_x86boOC4cKV34C85_z)

- Mon June 19th

  - Day off, Happy Juneteenth!

- Wed June 21st

  - Congrats for making it through onboarding, time to start coding!
  - Next steps will be ERD and CHD

    - we will be collaborating with the Data team to make ERD and use the UX/UI's wireframe for CHD

  - I have created a Google calendar for the team, if you know you will be unavailable during a certain time period, add in a block in the calendar

    - [calendar](https://calendar.google.com/calendar/u/2?cid=ZTE1MTgxZTg5YmJhNDhjZWJhYTkyYjAyN2JiYWQ1MzY3MDBhZTlhMDdlMjY3YmQzMzkzNzZiYmEwYjlhYjhkY0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t)

  - communication is key, make sure you are in regular contact with the team
  - We also went over the `Crypto` node package, which we will be using to encrypt user's personnal information
  - We also had our first meeting with our Dev mentor Jeremy

    - [MentorRecording](https://drive.google.com/drive/u/2/folders/18mxpAqN7R4SBIZ8y_8BSynzVDm3Kg6kA)

  - [Recording](https://drive.google.com/drive/u/2/folders/1kspbJybrOJuRRziKxssh3crOhQOM3iOX)

- Thurs June 22nd

  - During this meeting, we practiced using hashTables to solve problems
  - We went over a recent algorithm challenge I had to do as part of a take home assessment
  - Lastly we went over this leetcode:

    - [Leetcode_599](https://leetcode.com/problems/minimum-index-sum-of-two-lists/description/)

  - [Recording](https://drive.google.com/drive/u/2/folders/1GuC2QG15Kl70eHmkMi0st0F85vpU0_L8)

- Fri June 23rd

  - We went over the UX/UI team's User Flow and presentation slides
  - We assigned tasks for our initial research initiative, see above for details
  - [Recording](https://drive.google.com/drive/u/2/folders/18Wl-FbG-jU0On-bCL5ohl9foApj4lvvT)

- Mon June 26th

  - During this meeting we discussed our progress with the Research sprint
  - [Recording](https://drive.google.com/drive/u/2/folders/1i3H-f45VpBSiArZbxNJJ8k7qLPWWI6jZ)

- Wed June 28th

  - During this meeting we presented our findings from our Research Sprint
  - We created the ERD for our back-end
    - [ERD](https://drive.google.com/file/d/1S4W7f9k0XQPsz0ESAuJQpppJdNAu8yoX/view?usp=sharing)
  - Groups 3 and 4 will continue their research, and do an additional presentation on Friday
    - Anna will be joining group 4
  - Additionally, on Friday we will be discussing our first backend sprint
  - [Recording](https://drive.google.com/drive/u/2/folders/1vofqJzBZnUuI3-BwCetJTgW4ELDKD4e4)

- Fri June 30th

  - During this meeting, Groups 3 and 4 presented on their extended research
  - We discussed our Backend Sprint, the details of which cant be found under the 'Sprints' section of this file
  - [Recording](https://drive.google.com/drive/u/2/folders/1uDUgtemV6KjojjSMrWcpFlfdqC9uC5ad)

- Sun July 2nd

  - This was our first open zoom for our backend sprint
  - we discussed initial setup to ensure you can run the project locally
  - We reached our first sprint milestone a day ahead of schedule!!! 🎆
  - [Recording](https://drive.google.com/drive/u/2/folders/1kGerKoB23RMwSdNEJqPvQrEWRTGr17Bb)

- Mon July 3rd

  - We continued our backend sprint
  - we reached our second sprint milestone
  - [Recording](https://drive.google.com/drive/u/2/folders/1ohVXer0Ya_SC_obMnzT-Zf3OmDEaXc0V)

- Wed July 5th

  - We reached our final milestone 2 days ahead of time!
  - Come prepared on Friday to discuss what you like/didn't like about our sprint
  - [Recording](https://drive.google.com/drive/u/2/folders/1_G846NKrzw2nUfIkiM09Kkug7FOwy7NU)

- Thurs July 7th

  - We tackled a medium level leetcode

    - [318](https://leetcode.com/problems/maximum-product-of-word-lengths/description/)

  - We discussed using Chat GPT for sending job applications
  - [Recording](https://drive.google.com/drive/u/2/folders/143l0Pf6Ly9ohYvuo0rbIdx_XnRNV_Rgq)

- Fri July 8th

  - Today was our retrospective meeting for our backend sprint
  - We discussed what worked/what needs to be improved for our next sprint
  - We went over the workflow for Github actions

    - [ChatGPT_Transcript](https://docs.google.com/document/d/1YaR5p7O8NdLifb0hW328KZg4RkIZODTfvOLuM3kB61I/edit?usp=sharing)

  - [Recording](https://drive.google.com/drive/u/2/folders/1ED-01YLfsjhzy_rGE5WiBFdU8owp_Hjh)

- Mon July 10th

  - During this meeting we discussed our frontend sprint
  - the criteria for the first milestone was discussed
  - [Recording](https://drive.google.com/drive/u/2/folders/1mxNx1eHYlbvVPu6IDFRTPqKuXBsfFNNF)

- Wed July 12th

  - During this meeting we discussed how the team is doing for the first milestone
  - We discussed the criteria for the second milestone
  - [MilestoneCriteria](https://docs.google.com/document/d/1fDOilplcYZ1oeh9IoSM2ym4mA61UOcDo9VGAW90ScUc/edit)
  - [Recording](https://drive.google.com/drive/u/2/folders/1AkOaK9sPgYnSz4yxc9zgUCpzvfieacCI)

- Fri July 14th

  - During this meeting we discussed changes to workflow and PR guidelines
  - See the Workflow and PR Guideline section for the Frontend Sprint for more info
  - [WordDocWorkflowPR](https://docs.google.com/document/d/1OlAgF0Sq6xMK_7qLxnLWClOqLYc5OgWPbczYbdpOy-I/edit?usp=sharing)
  - We discussed resetting the ios pods and android build

    - [ChatGPTConvo](https://chat.openai.com/share/82c56f1c-bd0a-45a2-8bf6-d7b1473d47ba)

  - [Recording](https://drive.google.com/drive/u/2/folders/1rU9e_zqwNahRPKcxMYdFrdjNJre5Er3e)

- Mon July 17th

  - During this meeting we discussed the next round of tasks for our next sprint
  - We discussed using the Dev branch as a buffer between our branches and main
  - [Recording1](https://drive.google.com/drive/u/1/folders/1bkmlNNfSzwYXp4Kfdac-WXj9DlIfEmuq)
  - [Recording2](https://drive.google.com/drive/u/1/folders/1cY6C-dEm6oTjyxhZAGHZ65QLgV_jZtwd)

- Wed July 19th

  - We discussed changes to the code base, specifically the github actions file that will check to see there's a package-lock file in your branch
  - We assigned new tasks for our next Sprint
  - [Recording](https://drive.google.com/drive/u/1/folders/1cmbGq6iXQ7lpRD8-l1e1RKiR7zm_izPp)

- Fri July 21st

  - During this retrospective meeting we reviewed all the screens that have been created
  - Based on the bugs that we noticed, we assigned deliverables for our Bug Fix mini sprint
  - the deadline for the deliverables for this sprint will be Tuesday july 25th EOD
  - [Recording](https://drive.google.com/drive/u/1/folders/1gx6xwiU3sjjoq0wiGAzqEP_DsaXdin_5)

- Mon July 24rd

  - During this meeting we discussed the next deliverables
  - we went over the questions for the UX/UI team
  - [Recording](https://drive.google.com/drive/u/1/folders/1r04hys3CJ8yeoHZOam6QBtp5o-uXtkuR)

- Wed July 26th

  - During this meeting we gave assigned the next round of deliverables
  - We decided to start our functionality sprint on friday, to finish working on our
    current deliverables
  - we went over some of the UX/UI team's answers to our questions and discussed the new questions for the UX/UI team
  - [Recording](https://drive.google.com/drive/u/1/folders/1NXLRpFd0ia46ROljwpLf2mgISVDBIvoi)

- Fri July 28th

  - Friday means Retrospection, so we caught a few bugs that need to be fixed on backend
  - We went over everything that needs to be fixed about CreateAccount, please refer to the trello card for details
  - There are some cards that need to be finished but don't have anyone assigned to them, please visit the trello and take one of the cards if you're available over the weekend but don't have a task

    - just post on the slack channel that you're taking the card and add your name to it on trello

  - [Recording](https://drive.google.com/drive/u/1/folders/1m03lgo17sBMF3OMxbCGA9LJGjLnWYKR-)
  - [ChatGptMigrationsConvo](https://chat.openai.com/share/a44a4476-a1a8-4d4e-b9e3-f1bdfb091140)

---

# Resources

---

### [Trello](https://trello.com/b/7hCA531E/top)

### [Userflow_Figma](<https://www.figma.com/file/OsPvAtlsGrYf41PnFVRetS/User-Flows-(Copy)?type=whiteboard&node-id=0%3A1&t=cm9jTGqZlfFkWgSz-1>)

### [Calendar](https://calendar.google.com/calendar/u/2?cid=ZTE1MTgxZTg5YmJhNDhjZWJhYTkyYjAyN2JiYWQ1MzY3MDBhZTlhMDdlMjY3YmQzMzkzNzZiYmEwYjlhYjhkY0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t)

### [ZoomLink](https://us06web.zoom.us/j/4886078487)

### [GoogleDrive](https://drive.google.com/drive/u/2/folders/1oOvbXnX3dCFWz1Pp1WQVKUIwu13IHtgs)

### [SettingUptheDevEnv](https://reactnative.dev/docs/environment-setup)

### [React-NativeDocs](https://reactnative.dev/docs/environment-setup)

### [Tailwind-Cheatsheet](https://umeshmk.github.io/Tailwindcss-cheatsheet/)

### [NativewindDocs](https://www.nativewind.dev/quick-starts/react-native-cli)

### [React-NavigationDocs](https://reactnavigation.org/docs/getting-started/)

### [Sequelize-Docs](https://sequelize.org/)

## [Jest-Docs]()
