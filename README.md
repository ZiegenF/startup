# petVital

[My Notes](notes.md)

This app or say webiste will deliver a unique aspect to those who want great health and tracking for their pets!

> [!NOTE]
> This is a template for your startup application. You must modify this `README.md` file for each phase of your development. You only need to fill in the section for each deliverable when that deliverable is submitted in Canvas. Without completing the section for a deliverable, the TA will not know what to look for when grading your submission. Feel free to add additional information to each deliverable description, but make sure you at least have the list of rubric items and a description of what you did for each item.

> [!NOTE]
> If you are not familiar with Markdown then you should review the [documentation](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax) before continuing.

### Elevator pitch

Just like humans track steps, calories, and weight to stay healthy, our pets deserve the same care, but most owners are guessing. **PetVitals** is a simple app for tracking the health of everyday pets (dogs and cats), log daily weight, meals, calories, and activity, get feeding reminders, and watch trends over time with easy-to-read charts. Whether you're managing a picky eater, a pet on a diet, or just want peace of mind that Whiskers is thriving, PetVitals turns guesswork into simple, visual data, right from your phone or browser.

### Design

![petVitals](<img width="477" height="822" alt="petVitalspreview" src="https://github.com/user-attachments/assets/31560ed2-f42b-4298-8cd5-f2c9a9f1ceec" />)



### Key features

- User registration, login, and logout, with each user managing their own pets
- Add one or more pets (name, species, breed, age, target weight)
- Log daily weight entries per pet, with a trend chart over time
- Log meals/feedings with calorie counts, building a daily calorie total
- Pull breed-specific info (e.g. typical weight range, temperament) from a public dog/cat breed API
- Real-time feed showing when other users on the app log a weight entry or feeding, so you can see recent activity across the community
- Simple dashboard summarizing today's calories, latest weight, and trend vs. target


### Technologies

I am going to use the required technologies in the following ways.

**HTML**
Semantic structure for the core views: login/register page, pet dashboard, add/edit pet form, and weight/calorie log entry forms.

**CSS**
Clean, card-based layout with a calming, pet-friendly color palette; responsive design so it works on both phone and desktop; simple chart styling for weight/calorie trend lines.

**React**
Single-page application built from components: `LoginForm`, `PetList`, `PetDashboard`, `WeightLogForm`, `MealLogForm`, `ActivityFeed`. React routing switches between login, dashboard, and individual pet detail views, and re-renders the dashboard reactively as new log entries are added.

**Service (backend endpoints)**
- `POST /auth/register`, `POST /auth/login`, `POST /auth/logout` — secure user authentication
- `GET/POST /pets` — create and retrieve a user's pets
- `POST /pets/:id/weight` and `GET /pets/:id/weight` — log and retrieve weight history
- `POST /pets/:id/meals` and `GET /pets/:id/meals` — log and retrieve feeding/calorie history
- `GET /breed-info?species=dog&breed=labrador` — proxy call to a third-party breed info API (e.g. [TheDogAPI](https://thedogapi.com/) or [TheCatAPI](https://thecatapi.com/)) to fetch breed characteristics and a reference photo

**Database**
Stores user credentials (securely hashed), pets, weight log entries, and meal/calorie log entries, all linked by user and pet ID so each owner only sees their own animals' data.

**WebSocket**
Broadcasts a lightweight, anonymized activity event (e.g. "A user just logged a weight entry for their dog") to all connected clients whenever any user adds a weight or meal log, powering the real-time activity feed on the dashboard.

## 🚀 Specification Deliverable

> [!NOTE]
> Fill in this sections as the submission artifact for this deliverable. You can refer to this [example](https://github.com/webprogramming260/startup-example/blob/main/README.md) for inspiration.

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] I completed the prerequisites for this deliverable (Git commit requirement)
- [x] Proper use of Markdown
- [x] A concise and compelling elevator pitch
- [x] Description of key features
- [x] Description of how you will use each technology including your 3rd party API and use of WebSocket
- [x] One or more rough sketches of your application. Images must be embedded in this file using Markdown image references.

## 🚀 AWS deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Rented EC2 server** - I did not complete this part of the deliverable.
- [ ] **Leased domain name** - I did not complete this part of the deliverable.
- [ ] **Server accessible** from my domain: [https://yourdomainnamehere.click](https://yourdomainnamehere.click) - I did not complete this part of the deliverable.

## 🚀 HTML deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] I completed the prerequisites for this deliverable (Simon deployed, GitHub link, Git commits)
- [ ] **HTML pages** - I did not complete this part of the deliverable.
- [ ] **Proper HTML element usage** - I did not complete this part of the deliverable.
- [ ] **Links** - I did not complete this part of the deliverable.
- [ ] **Text** - I did not complete this part of the deliverable.
- [ ] **3rd party API placeholder** - I did not complete this part of the deliverable.
- [ ] **Images** - I did not complete this part of the deliverable.
- [ ] **Login placeholder** - I did not complete this part of the deliverable.
- [ ] **DB data placeholder** - I did not complete this part of the deliverable.
- [ ] **WebSocket placeholder** - I did not complete this part of the deliverable.

## 🚀 CSS deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] I completed the prerequisites for this deliverable (Simon deployed, GitHub link, Git commits)
- [ ] **Visually appealing colors and layout. No overflowing elements.** - I did not complete this part of the deliverable.
- [ ] **Use of a CSS framework** - I did not complete this part of the deliverable.
- [ ] **All visual elements styled using CSS** - I did not complete this part of the deliverable.
- [ ] **Responsive to window resizing using flexbox and/or grid display** - I did not complete this part of the deliverable.
- [ ] **Use of a imported font** - I did not complete this part of the deliverable.
- [ ] **Use of different types of selectors including element, class, ID, and pseudo selectors** - I did not complete this part of the deliverable.

## 🚀 React part 1: Routing deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] I completed the prerequisites for this deliverable (Simon deployed, GitHub link, Git commits)
- [ ] **Bundled using Vite** - I did not complete this part of the deliverable.
- [ ] **Components** - I did not complete this part of the deliverable.
- [ ] **Router** - I did not complete this part of the deliverable.

## 🚀 React part 2: Reactivity deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] I completed the prerequisites for this deliverable (Simon deployed, GitHub link, Git commits)
- [ ] **All functionality implemented or mocked out** - I did not complete this part of the deliverable.
- [ ] **Hooks** - I did not complete this part of the deliverable.

## 🚀 Service deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] I completed the prerequisites for this deliverable (Simon deployed, GitHub link, Git commits)
- [ ] **Node.js/Express HTTP service** - I did not complete this part of the deliverable.
- [ ] **Static middleware for frontend** - I did not complete this part of the deliverable.
- [ ] **Calls to third party endpoints** - I did not complete this part of the deliverable.
- [ ] **Backend service endpoints** - I did not complete this part of the deliverable.
- [ ] **Frontend calls service endpoints** - I did not complete this part of the deliverable.
- [ ] **Supports registration, login, logout, and restricted endpoint** - I did not complete this part of the deliverable.
- [ ] **Uses BCrypt to hash passwords** - I did not complete this part of the deliverable.

## 🚀 DB deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] I completed the prerequisites for this deliverable (Simon deployed, GitHub link, Git commits)
- [ ] **Stores data in MongoDB** - I did not complete this part of the deliverable.
- [ ] **Stores credentials in MongoDB** - I did not complete this part of the deliverable.

## 🚀 WebSocket deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] I completed the prerequisites for this deliverable (Simon deployed, GitHub link, Git commits)
- [ ] **Backend listens for WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **Frontend makes WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **Data sent over WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **WebSocket data displayed** - I did not complete this part of the deliverable.
- [ ] **Application is fully functional** - I did not complete this part of the deliverable.
