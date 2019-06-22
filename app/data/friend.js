// ===============================================================================
// DATA
// Below data will hold all answers from the survey
// Initially we just set it equal to a "dummy" friend.
// But you could have it be an empty array as well.
// ===============================================================================

var tableArray = [
  {
    friendName: "John Doe",
    friendPhoto: "https://friend1picture.com/picture",
    question1: "4",
    question2: "4",
    question3: "4",
    question4: "4",
    question5: "4",
    question6: "4",
    question7: "4",
    question8: "4",
    question9: "4",
    question10: "4"
  }
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = tableArray;
