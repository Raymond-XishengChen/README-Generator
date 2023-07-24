// Create a list of Github Licenses with name and the links of the badges.
// Including the "None" option
const licenseList = [
{ 
  name: 'Apache License',
  link: '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
},
{
  name: 'Boost Software License',
  link: '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)',
},
{
  name: 'MIT License',
  link: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
},
{
  name: 'ISC License',
  link: '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)',
},
{
  name: 'Mozilla Public License',
  link: '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)',
},
{
  name: 'None',
  link: '',
}
]

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "None"){
    return "";
  } else {      
    for (const badge of licenseList){
      if (license === badge.name){
        return badge.link;
      }
    }
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // Pass in the license and get the license badge
  const licenceLink = renderLicenseBadge(data.license);
  return `# ${data.title}
  ${licenceLink} <a id="License"></a>

  ## Description
  ${data.description}

  ## Table of Contents
  * [Installation Instructions](#Installation-Instuctions)
  * [Usage of the Project](#Usage-of-the-Project)
  * [Contributions](#Contributions)
  * [Test Instructions](#TestInstructions)
  * [License](#License)

  ## Installation Instructions <a id="Installation-Instuctions"></a>
  ${data.installation}

  ## Usage of the Project <a id="Usage-of-the-Project"></a>
  ${data.usage}

  ## Contributions <a id="Usage-of-the-Project"></a>
  ${data.contributing}

  ## Test Instructions <a id="Usage-of-the-Project"></a>
  ${data.tests}
`;
}

module.exports = generateMarkdown;
