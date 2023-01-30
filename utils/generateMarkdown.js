// function to generate markdown for README
function generateMarkdown(data) {
  let installation = "";
  if (data.installation) {
    installation = `
  ### Installation
  ${data.installation}`;
  }

  let usage = "";
  if (data.usage) {
    usage = `
  ### Usage
  ${data.usage}`;
  }

  let contributing = "";
  if (data.contributing) {
    contributing = `
  ### Contributing
  ${data.contributing}`;
  }

  let test = "";
  if (data.test) {
    test = `
  ### Test
  ${data.test}`;
  }

  // This section checks the license choices and shows related badges.
  let licenseBadge = "";
  switch (data.license) {
    case "Apache License 2.0":
      licenseBadge = `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
      break;
    case "MIT License":
      licenseBadge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
      break;
    case "IBM Public License Version 1.0":
      licenseBadge = `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)`;
      break;
    case "Mozilla Public License 2.0":
      licenseBadge = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
      break;
    case "The Unlicense":
      licenseBadge = `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`;
      break;
    default:
      licenseBadge = "";
  }

  let license = "";
  if (data.license) {
    license = `
  ### License
  ${licenseBadge} ${data.license}`;
  }

  let gitHub = "";
  if (data.gitHub) {
    gitHub = `
    https://github.com/${data.gitHub}
    `
  }

  let email = "";
  if (data.email) {
    email = `${data.email}`
  }

  // This section sets the markdown layout.
  return `
  ${licenseBadge}

  # ${data.title}

  ## ${data.sections_entitled}

  ### Description
  ${data.description}

  ## Table of Contents
  ${data.installation ? `- [Installation](#installation)` : ""}
  ${data.usage ? `- [Usage](#usage)` : ""}
  ${data.license ? `- [License](#license)` : ""}
  ${data.contributing ? `- [Contributing](#contributing)` : ""}

  ${installation}

  ${usage}

  ${license}

  ${contributing}

  ${test}

  ### Questions
  GitHub Account: [${data.gitHub}](${gitHub})

  You can reach me at my email address > ${email}

`;
}

module.exports = generateMarkdown;
