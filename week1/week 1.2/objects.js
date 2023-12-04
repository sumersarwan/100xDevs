const users = [
  {
    firstName: "sumer",
    gender: "male",
  },
  {
    firstName: "sarwan",
    gender: "male",
  },
  {
    firstName: "riya",
    gender: "female",
  },
];

for (let i = 0; i < users.length; i++) {
  if (users[i]["gender"] == "male") {
    console.log(users[i]["firstName"]);
  }
}
