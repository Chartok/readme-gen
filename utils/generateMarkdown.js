// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = '';
  if (license === 'MIT') {
    badge = '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
  } else if (license === 'APACHE 2.0') {
    badge = '![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)';
  }
  else if (license === 'GPL 3.0') {
    badge = '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)';
  }
  else {
    badge = '';
  }
  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let badgeLink = '';
  if (license === 'MIT') {
    badgeLink = 'https://opensource.org/licenses/MIT';
  }
  else if (license === 'APACHE 2.0') {
    badgeLink = 'https://opensource.org/licenses/Apache-2.0';
  }
  else if (license === 'GPL 3.0') {
    badgeLink = 'https://www.gnu.org/licenses/gpl-3.0';
  }
  else {
    badgeLink = '';
  }
  return badgeLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let badgeSection = '';
  if (license === 'MIT') {
    badgeSection = 'MIT License';
  }
  else if (license === 'APACHE 2.0') {
    badgeSection = 'Apache License 2.0';
  }
  else if (license === 'GPL 3.0') {
    badgeSection = 'GNU General Public License v3.0';
  }
  else {
    badgeSection = '';
  }
  return badgeSection;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  const licenseBadge = renderLicenseBadge(answers.license);
  const licenseLink = renderLicenseLink(answers.license);
  const licenseSection = renderLicenseSection(answers.license);

  return `
  # ${ answers.title }

  ## Description

  ${ answers.description }

  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [License](#license)
  * [Questions](#questions)

  ## Installation

  ${ answers.installation }

  ## Usage

  ${ answers.usage }

  ## Contributing

  ${ answers.contributing }

  ## Tests

  ${ answers.tests }

  ## License

  ${ licenseBadge }
  ${ licenseSection }
  ${ licenseLink }

  ## Questions

  If you have any questions, please contact me at ${ answers.email }.
  You can also find me on GitHub at ${ answers.github }.

  ## Credits

  ${ answers.credits }
  `;
}

module.exports = generateMarkdown;
