# **BOOKIFY**
**BOOKIFY** is a React Native application designed to help users track their reading. Users can create an account, sign in, save books they want to read, add books they've read, and rate books. The data is stored in Firebase. The project is still in development, with a goal to leverage machine learning through Python to create an algorithm that suggests books to users based on their preferences.

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgements](#acknowledgements)

  
## **Features**
- User authentication (create account, sign in)
- Save books to read
- Add books read
- Rate books
- Store data in Firebase
- Future: Book recommendation algorithm using machine learning

## **Installation**
To run this project locally, follow these steps:

1. **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/bookify.git
    cd bookify
    ```
2. **Install dependencies**:
    ```bash
    npm install
    ```
3. **Set up Firebase**:
    - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
    - Add an Android and/or iOS app to your Firebase project
    - Generate `google-services.json` (for Android) and/or `GoogleService-Info.plist` (for iOS)
    - Place these files in the appropriate locations in your React Native project

4. **Configure Firebase**:
    - Update your Firebase configuration in the project to include your Firebase project details.

5. **Run the app**:
    ```bash
    npm run android  # For Android
    npm run ios      # For iOS
    ```

		## **Usage**

1. **Sign Up**:
   - Create an account using your email and password.

2. **Sign In**:
   - Log in to your account.

3. **Track Books**:
   - Save books you want to read.
   - Add books you have read.
   - Rate books you have read.

4. **Future Features**:
   - Receive book recommendations based on your reading preferences (using machine learning).

## **License**

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## **Acknowledgements**

- [React Native](https://reactnative.dev/)
- [Firebase](https://firebase.google.com/)
- [React Navigation](https://reactnavigation.org/)
- [Redux](https://redux.js.org/)

## **Screenshots**
### Here's a sneak peek of the BOOKIFY app:


<img src="https://github.com/Cakewhale97/ReactNat/assets/121439769/d3291cb3-e4aa-480c-9a27-e062d04f7c99" width="300">
<img src="https://github.com/Cakewhale97/ReactNat/assets/121439769/e375631e-e0fa-4f7a-8c6b-52f45b329f0c" width="300">
<img src="https://github.com/Cakewhale97/ReactNat/assets/121439769/a9a204df-095f-4e50-9ee9-8773039afd19" width="300">

