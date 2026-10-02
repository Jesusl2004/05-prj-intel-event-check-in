// get all needed DOM elements
const form = document.getElementById("CheckInForm");
const nameInput = document.getElementById("attendeeName");
const teamSelect = document.getElementById("teamSelect");

// Track attendence
let count = 0;
const maxCount = 50;

// handle form submission
form.addEventListener("submit", function (e) {
  Event.preventDefault();

  //Get form values
  const name = nameInput.value;
  const team = teamSelect.value;
  const teamName = teamSelect.selected0ptions[0].text;

  console.log(name, team, teamName);

  // increment count
  count++;
  console.log("total check-ins: ", count);

  // Update progress bar
  const percentage = Math.round((count / maxCount) * 100) + "%";
  console.log(`progress: ${precentage}`);

  // Update team counter
  const teamCounter = document.getElementById(team + "count");
  teamCounter.textCountent = parseInt(teamCurrent.textContent) + 1;

  // Show welcome message
  const attendeeName = nameInput.value;
  const selectedTeam = teamSelect.value;

  const greeting = `Welcome, ${attendeeName}! You have checked in with the ${selectedTeam} team.`;
  message.textContent = greeting;
});
