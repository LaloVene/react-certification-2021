# Youtube Clone App - Wizeline Academy 2021 React Bootcamp

Intructions: [GIST](https://gist.github.com/villacoder/9f980254461fa8bfbe93067db2126872).

**Deployment: https://youtube-clone-lalovene.netlify.app/ (currently down, see latest PR for preview)**

[![License](https://img.shields.io/github/license/LaloVene/react-certification-2021)](https://github.com/LaloVene/react-certification-2021/blob/main/LICENSE)
[![Monitoring](https://img.shields.io/website?url=https%3A%2F%2Fyoutube-clone-lalovene.netlify.app/)](https://youtube-clone-lalovene.netlify.app/)


## 📖 Project Overview
Youtube Clone App built using React and the YouTube v3 API.
Features:
- Main page with popular videos.
- Video detail page with related videos.
- User can login and mark videos as favorite (user: wizeline, password: Rocks!).
- Private page of favorites and favorite video detail view with favorite suggestions.
- Different Views for Desktop and Mobile.
- Implemented TDD using Jest.
- Added CI/CD with Github Actions and Netlify CD.
- Light / Dark mode using the context React Hook, Styled Components and the local storage.


## 📍 Table of Contents
- [Technologies Used](https://github.com/LaloVene/react-certification-2021#-technologies-used)
- [CI/CD](https://github.com/LaloVene/MLH-PE-Project#-cicd)
- [Site Overview](https://github.com/LaloVene/MLH-PE-Project#-site-overview)
- [Usage](https://github.com/LaloVene/MLH-PE-Project#-usage)
- [Contributing](https://github.com/LaloVene/MLH-PE-Project#-contributing)


## 💻 Technologies Used
- React
- Hooks
- Custom Hooks
- Youtube v3 API
- Jest testing
- Github Actions
- JavaScript


## 🤖 CI/CD
This project has a full Continuous Integration and Delivery system.
- All code is tested with a lintern when a commit is made and in the moment a pull request is created. Github Actions also runs the Jest tests in the CI workflow.
- You can merge into main when all tests pass 
- When a merge is done, the Continuous Delivery is triggered and Netlify deploys the code.


## 🔍 Site Overview

### Mobile View
![mobile main](https://user-images.githubusercontent.com/54692916/131431176-18db0eb2-0a5a-41bf-a1e2-df9e0cb5de11.png)
![mobile video](https://user-images.githubusercontent.com/54692916/131431078-865052e5-798a-4231-8b5d-61039348071c.png)

### Main Page & Search
![main page](https://user-images.githubusercontent.com/54692916/131430548-f8c4ab25-1d80-4c6b-82c9-5e6d10fa40a4.png)
![search](https://user-images.githubusercontent.com/54692916/131430828-0270aff5-0df9-4aad-aa89-288103b15da5.png)

### Video Detail
![video detail](https://user-images.githubusercontent.com/54692916/131430478-ce4f3d89-a3fc-4dae-9692-ac00e470773a.png)

### Login
![login](https://user-images.githubusercontent.com/54692916/131430639-51de2d27-40ac-42c8-b886-30b5514a0c4e.png)

### Favorites
![favorites page](https://user-images.githubusercontent.com/54692916/131430796-846237c6-26b2-498e-a4f8-af983de24c84.png)
![favorite video](https://user-images.githubusercontent.com/54692916/131430888-5f525e2e-a0e3-4fda-9095-90eb75114c29.png)


Developers can create a DevUp account to share their interests and languages, post about their projects, and contact other project owners.


 ## 💼 Usage
 Create a .env file in the root app directory using the following template:
 ```env
REACT_APP_YOUTUBE_KEY = "YouTube-API-v3-key"
```

 ### Install the node dependencies
 ```bash
 $ yarn
 ```
 
 ### Run the app
 ```bash
 $ yarn start
 ```
 
## 📝 Contributing
Contributions are welcome! Please refer to the [Contributing](https://github.com/LaloVene/react-certification-2021/blob/main/CONTRIBUTING.md) guidelines.
