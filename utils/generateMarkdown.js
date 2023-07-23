// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "None"){
    return "";
  } else {
    const licenseBadge = `https://img.shields.io/badge/license-${license}-blue.svg`;
    return licenseBadge;
  }
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "None"){
    return "";
  } else {
    const licenseLink = `https://img.shields.io/badge/license-${license}-blue.svg`;
    return licenseLink;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const licenceLink = renderLicenseLink(data.license);
  return `# ${data.title}
  ![Github license](https://img.shields.io/badge/license-${data.license}-blue.svg)
    [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


  ## Description
  ${data.description}

  ## Table of Contents
  * [Installation Instructions]
  * [Usage of the Project]
  * [Contributions]
  * [Test Instructions]
  * [License]

  ## Installation Instructions
  ${data.installation}

  ## Usage of the Project
  ${data.usage}

  ## Contributions
  ${data.contributing}

  ## Test Instructions
  ${data.tests}


`;
}

module.exports = generateMarkdown;
