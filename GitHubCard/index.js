/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
  axios.get('https://api.github.com/users/tippitytapp')
  .then(response => {
    console.log(response);
    response.forEach(item =>{
      cards.append(userData(item))
    })
  })
  .catch(err => {
    console.log(err);
  });


/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [];

function userData(User){
    let user = document.createElement("div");
    user.classList.add("card");
    let userImg = document.createELement("img");
    let cardInfo = document.createElement("div");
    cardInfo.classList.add("card-info");
    let name = document.createElement("h3");
    name.classList.add("name");
    let userName = document.createElement("p");
    userName.classList.add("username");
    let location = document.createElement("p");
    let profile = document.createElement("p");
    let profileLink = document.createElement("a");
    let followers = document.createElement("p");
    let following = document.createElement("p");
    let bio = document.createElement("p");

    name.textContent = User.data.name;
    userName.textContent = User.data.login;
    location.textContent = `Location: ${User.data.location}`;
    profile.textContent = "Profile:";
    profileLink.textContent = User.data.html_url;
    followers.textContent = `Followers: ${User.data.followers}`
    following.textContent = `Following: ${User.data.following}`


    user.append(userImg, cardInfo);
    userInfo.append(name, userName, location, profile, profileLink, followers, following, bio);
    profile.append(profileLink);
    return userData
}

const cards = document.querySelector(".cards");
console.log(cards);
/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
