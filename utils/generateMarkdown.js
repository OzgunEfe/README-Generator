// function to generate markdown for README
function generateMarkdown(data) {

  let installation = '';
  if (data.installation) {
    installation = `
  ### Installation
  ${data.installation}`
  }

  let usage = '';
  if (data.usage) {
    usage = `
  ### Usage
  ${data.usage}`
  }

  let license = '';
  if (data.license) {
    license = `
  ### License
  ${data.license}`
  }

  let contributing = '';
  if (data.contributing) {
    contributing = `
  ### Contributing
  ${data.contributing}`
  }

  let test = '';
  if (data.test) {
    questions = `
  ### Test
  ${data.test}`
  }

  let questions = '';
  if (data.questions) {
    questions = `
  ### Questions
  ${data.questions}`
  }

  return `
  # ${data.title}

  ## ${data.sections_entitled}

  ${data.description}

  ## Table of Contents
  ${data.installation ? `- [Installation](#Installation)` : ''}
  ${data.usage ? `- [Usage](#Usage)` : ''}
  ${data.license ? `- [License](#License)` : ''}
  ${data.contributing ? `- [Contributing](#Contributing)`: ''}

  ${installation}

  ${usage}

  ${license}

  ${contributing}

  ${test}

  ${questions}

`;
}

module.exports = generateMarkdown;
