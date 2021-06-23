// USER DATABASE (TEMP)
const users = {
  "userRandomID": {
    id: "userRandomID",
    email: "user@example.com",
    password: "purple-monkey-dinosaur"
  },
 "user2RandomID": {
    id: "user2RandomID",
    email: "user2@example.com",
    password: "dishwasher-funk"
  }
};

// HELPER FUNCTIONS
// Returns true if email exists
function checkEmailExists(email){
  for(let key in users){
    if(users[key].email===email){
      return true;
    }
  }
  return undefined;
}
// Returns entire user object if email matches an existing user
function matchingUser(email) {
  for (let key in users) {
    if(users[key].email === email) {
      return users[key];
    }
  }
}

// Creates new Favourites object list by specific user ID
function getUserURLS(urlDatabase, id) {
  let userURLS = {};
  for (let key in urlDatabase) {
    if (urlDatabase[key].userID === id) {
      userURLS[key] = urlDatabase[key]; // adding new urls to urldatabase
    }
  }
  return userURLS;
};

module.exports = { checkEmailExists, matchingUser };
