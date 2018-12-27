# Jammming
Build Front-End Web Applications from Scratch - A Codecademy Intensive Course Project

##### Features
Below is a list of the website's required features:

- Spotify Login — the first time a user searches for a song, album, or artist, Spotify will ask them to log in or set up a new account. You will need to follow the steps in the Spotify Developer Guide to register your application.
- Search by Song, Album, or Artist - a user can type the name of a song, artist, or album into the search bar and click the SEARCH button. The app will request song data about the user's input from the Spotify library (find Spotify endpoints here).
- Populate Results List — Jammming displays the list of returned tracks from the user's query.
- Add Song to a Custom Playlist — users can add a track to their playlist by selecting a + sign on the right side of the track's display container.
- Remove Song from Custom Playlist — users can remove a track from their playlist by selecting a - sign on the right side of the track's display container.
- Change Playlist Title — users can change the title of their custom playlist.
- Save Playlist to Account — users can save their custom playlist by clicking a button called SAVE TO SPOTIFY.

#### Resources

Supplied assets. Notice, to complete the project, the HTML/CSS will need to be split into their components.

- index.html — all of the HTML for a static version of the website.
- style.css — all of the CSS for a static version of the website.
- image assets — all of the image assets used in the website.

#### A final note
Whether you're up for the challenge or not, we recommend you consider the following questions before you start coding.
- What components does the application need?
- How will the application handle state?
- What methods does the application need?
- How does the application hook up to the Spotify API?
- How does the application save a playlist to a user's profile? As you complete the steps, you can compare the structure you devised to the one we use recommend in the project steps.

This is a large project. Take your time and review the earlier lessons if you run into problems. Good luck!

### TODO:
- Spotify
    * Obtain an account
    * Access developer dashboard.
    * Follow Developer Guide to register the application.
- Clean up starting files.
- Incorporate given HTML, CSS amd images.
- Determine components/methods needed:
    * Spotify account creation/login
    * App
    * SearchBar
        * search
    * SearchResults
        * AddTrackToPlaylist
    * Playlist:
        * changeTitle
        * deleteTrack
        * savePlaylist
    * TrackList
    * Track
