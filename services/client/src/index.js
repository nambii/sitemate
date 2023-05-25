const axios = require("axios");
const readline = require("readline");

const SERVER_URL = "http://localhost:3000"; // Replace with your server's base URL

const readLineInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function createIssue() {
  readLineInterface.question("Enter issue(as JSON object): ", (data) => {
    axios
      .post(`${SERVER_URL}/issues`, JSON.parse(data))
      .then((res) => {
        console.log("Created Issue:", res.data);
      })
      .catch((err) => {
        console.error("Error while creating issue:", err.res.data);
      })
      .finally(() => {
        readLineInterface.close();
      });
  });
}

function readIssue() {
  readLineInterface.question("Enter issue ID: ", (issueId) => {
    axios
      .get(`${SERVER_URL}/issues/${issueId}`)
      .then((res) => {
        console.log("Issue details:", res.data);
      })
      .catch((err) => {
        console.error("Error getting issue:", err.response.data);
      })
      .finally(() => {
        readLineInterface.close();
      });
  });
}

function updateIssue() {
  readLineInterface.question("Enter issue ID to update: ", (issueId) => {
    readLineInterface.question("Enter updated issue details: ", (data) => {
      axios
        .patch(`${SERVER_URL}/issues/${issueId}`, JSON.parse(data))
        .then((res) => {
          console.log("Issue updated:", res.data);
        })
        .catch((err) => {
          console.error("Error updating issue:", err.response.data);
        })
        .finally(() => {
          readLineInterface.close();
        });
    });
  });
}

function deleteIssue() {
  readLineInterface.question("Enter issue ID to delete: ", (issueId) => {
    axios
      .delete(`${SERVER_URL}/issues/${issueId}`)
      .then(() => {
        console.log("Issue deleted");
      })
      .catch((error) => {
        console.error("Error deleting issue:", error.response.data);
      })
      .finally(() => {
        readLineInterface.close();
      });
  });
}

function displayMenu() {
  console.log("1. Create issue");
  console.log("2. Read issue");
  console.log("3. Update issue");
  console.log("4. Delete issue");
  console.log("5. Finish");

  readLineInterface.question("Select an option: ", (option) => {
    switch (option) {
      case "1":
        createIssue();
        break;
      case "2":
        readIssue();
        break;
      case "3":
        updateIssue();
        break;
      case "4":
        deleteIssue();
        break;
      case "5":
        rl.close();
        break;
      default:
        console.log("Invalid option");
        displayMenu();
        break;
    }
  });
}


displayMenu();
