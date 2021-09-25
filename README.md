<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Thanks again! Now go create something AMAZING! :D
***
***
***
*** To avoid retyping too much info. Do a search and replace for the following:
*** github_username, repo-name, twitter_handle, email, project_title, project_description
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
<!-- [![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url] -->
<!-- [![LinkedIn][linkedin-shield]][linkedin-url] -->



<!-- PROJECT LOGO -->
<!-- <br />
<p align="center">
  <a href="https://github.com/github_username/personal-project">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a> -->

  <h3 align="center">Forager Field Finds</h3>

  <p align="center">
    A web application created to help users keep a seasonal location-based log of edible plants and mushrooms.
    <br />
    <a href="https://github.com/newspaperhobo/personal-project" target="_blank" rel="noopener noreferrer"><strong>Explore the repo »</strong></a>
    <br />
    <br />
    <a href="https://forager-field-notes.herokuapp.com/" target="_blank" rel="noopener noreferrer">View Demo</a>
    ·
    <a href="https://github.com/newspaperhobo/personal-project/issues" target="_blank" rel="noopener noreferrer">Report Bug</a>
    ·
    <a href="https://github.com/newspaperhobo/personal-project/issues" target="_blank" rel="noopener noreferrer">Request Feature</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

<img width=300px src="https://raw.githubusercontent.com/newspaperhobo/personal-project/main/public/imgs/readme/libraryscreenshot.png">


Created by Kira Novak as a project for [CodeSquad](https://codesquad.org/), this web application serves as a virtual logbook for foragers (those interested in harvesting wild edible plants and mushrooms) to privately track their findings by location and season. It is currently deployed as a demo for a single user, but expansion to multiple users is forthcoming.

Using the Google Maps Javascript API and Geolocation Web API, the user is able to mark the specific latitude and longitude of their findings by allowing location services on their device. Upon creating a new log entry, the user's pinned location will default to their current location. However, if the user wants to modify their location, this pin can be dragged around the map. The form fields will update automatically with the new coordinate data. The user can also add additional details to their log form to make an accurate and thorough entry. 

Once submitted, the user entries are then displayed on the library page, which by default populates all entries in a "List View", sorted by date. The user can then choose to sort their entries by season (spring, summer, fall, and winter), which uses an aggregation pipeline on the back end to return the correct results from the MongoDB database. The user also has an option to visualize their entries in a "Map View" by clicking the "Map View" link. If the user has already sorted by season, the "Map View" will reflect this sort. 

Each entry has a details page, where the user can edit/update their entry or simply delete an entry entirely from their collection via the front end, which will subsequently reflect their changes within the back end database.

Finally, to make the virtual notebook feel more personalized, the homepage gives the user an option to change themes between the default theme, dark mode, forest theme, and camping theme. 

### Built With

#### Dependencies
* [Google Maps Javascript API](https://developers.google.com/maps/documentation/javascript/overview)
* [MongoDB](https://www.mongodb.com/)
* [Express](http://expressjs.com/)
* [EJS](https://ejs.co/)
* [NodeJS](https://nodejs.org/en/)
* [Multer](https://www.npmjs.com/package/multer)
* [dotenv](https://www.npmjs.com/package/dotenv)
* [method-override](http://expressjs.com/en/resources/middleware/method-override.html)
* [Mongoose](https://mongoosejs.com/docs/)
* [Passport](http://www.passportjs.org/)

#### Other
* [Geolocation Web API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API)
* [Heroku](https://www.heroku.com/)

<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these steps.

### Prerequisites

* npm
  ```sh
  npm install npm@latest -g
  ```
* [MongoDB](https://www.mongodb.com/) Account
* [Google Cloud Platform](https://console.cloud.google.com/) Account


### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/newspaperhobo/personal-project.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. [MongoDB](https://www.mongodb.com/) Setup
    1. Create a new project
    2. Create a free shared cluster
        - Select your closest location for "Cloud Provider & Region"
        - Cluster Tier: M0 Sandbox (Shared RAM, 512 Storage)
        - Do not change additional settings
    3. On left side dashboard, under SECURITY, click "Database Access", then click the green button "Add New Database User" on right side of screen
        - Authentication method: Password
        - Database User Privileges: "Read and write to any database"
        - Restrict Access to Specific Clusters/Data Lakes: OFF
    4. On left side dashboard, under SECURITY, click "Network Access", then click the green button "Add IP Address" on right side of screen
        - Access List Entry: 0.0.0.0/0
    5. Navigate back to "Databases" under DEPLOYMENT on left side of screen
        - Your created cluster (Cluster0 by default) should have a "Connect" button next to it
        - Click this, then click the second option "Connect your application"
        - Driver: Node.js, Version: 4.0 or later
        - Copy the URL for the connection string under step 2
    6. Navigate to the ".envtemplate" file in this project folder
        - On line 2, after "DB_URL=" paste your connection string
        - Within the connection string, replace <password> with the password you created in step 3. Replace myFirstDatabase with the name of the database that connections will use by default. You may find the name of and/or create your database under DEPLOYMENT, "Databases", "Browse Collections". On the left side, you will see a "Create Database" button- underneath will be the name of your database.

4. [Google Cloud Platform](https://console.cloud.google.com/) (Maps Javascript API Key) Setup
    1. Create a new project
    2. Under APIs & Services, click "Library"
    3. Search for "Maps JavaScript API"
    4. Enable API
    5. On left side, click "Credentials"
    6. On top of screen, click "Create Credentials", then API key
    7. Navigate to the ".envtemplate" file in this project folder
    8. Paste your created API key after "key="

5. Express Session Secret Key
    1. Navigate to the ".envtemplate" file in this project folder
    2. Create a randomly generated password
    3. On line 6, paste the password after "SECRET_KEY="

6. Rename ".envtemplate" file to ".env"
    

<!-- USAGE EXAMPLES
## Usage

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

_For more examples, please refer to the [Documentation](https://example.com)_ -->



<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/newspaperhobo/personal-project/issues) for a list of proposed features (and known issues).



<!-- CONTRIBUTING
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request -->



<!-- LICENSE
## License

Distributed under the MIT License. See `LICENSE` for more information. -->



<!-- CONTACT -->
## Contact

Kira Novak: kiranovak@gmail.com

Repository Link: [https://github.com/newspaperhobo/personal-project](https://github.com/newspaperhobo/personal-project)

[![LinkedIn][linkedin-shield]][https://www.linkedin.com/in/kiraenovak/]

<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements

* [CodeSquad](https://codesquad.org/)






<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/newspaperhobo/repo.svg?style=for-the-badge
[contributors-url]: https://github.com/newspaperhobo/personal-project/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/newspaperhobo/repo.svg?style=for-the-badge
[forks-url]: https://github.com/newspaperhobo/personal-project/network/members
[stars-shield]: https://img.shields.io/github/stars/newspaperhobo/repo.svg?style=for-the-badge
[stars-url]: https://github.com/newspaperhobo/personal-project/stargazers
[issues-shield]: https://img.shields.io/github/issues/newspaperhobo/repo.svg?style=for-the-badge
[issues-url]: https://github.com/newspaperhobo/personal-project/issues
[license-shield]: https://img.shields.io/github/license/newspaperhobo/repo.svg?style=for-the-badge
[license-url]: https://github.com/newspaperhobo/personal-project/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/kiraenovak
