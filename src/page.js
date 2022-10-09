const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");

const page = function(employeeArray) {
  const teamHtmlArray = [];
  const headHtml = `
  <!DOCTYPE html> 
  <html lang="en"> 
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Team Profiles</title>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
      </head>
    </head>
    <body>
      <div class="container-fluid align-items-center border-light">
        <div class="row bg-secondary text-center">
          <h2 class="text-dark p-5">Team:</h2>
        </div>
        <div class="row g-2 justify-content-around p-4">
  `;

  teamHtmlArray.push(headHtml)

    for (let i = 0; i < employeeArray.length; i++) {
      teamHtmlArray.push(employeeArray[i].addHtml());
    }

    const footerHtml = 
    `
      </div>
    </div>
    <footer>
      <p class="text-center position-absolute"></p>
    </footer>
    </body>
  </html>  
    `;

  teamHtmlArray.push(footerHtml);

  return teamHtmlArray.join("\r\n");

}

module.exports = page;