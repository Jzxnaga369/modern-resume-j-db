'use strict';

const experiences = [
  {
    logoimg:"https://i.imghippo.com/files/Slx9312kOA.png",
    companyname:"PT. Visionet Data International",
    monthfrom:10,
    yearfrom: 2023,
    monthto:99,
    yearto: 9999,
    title: "Cyber Security Presales",
    detail: "Hired as Cyber Security Presales, duties and responsibilities :",
    points: [
      "Drive revenue increase for all application security services, including new offerings such as GuardSquare (Mobile App Protection), AppKnox (Mobile App Vulnerability Assessment), and Acunetix (Web & API Security Testing)."
      ,"Present GuardSquare, AppKnox & Acunetix to client. Implement technology and services to client. Making sure it meets client’s needs."
      ,"Provide monthly feedback to the SME team to ensure application security products remain relevant to customer needs."
      ,"Conduct market research and competitor analysis to enhance product positioning."
      ,"Perform weekly reviews of the application security sales pipeline to track progress and identify opportunities."
      ,"Develop and submit proposals and commercial summaries (CS) within three days of receiving a request, ensuring a balance between profitability and competitive pricing."
      ,"Work closely with sales teams to validate pricing strategies that align with customer expectations."
      ,"Execute marketing campaigns for new security products (Acunetix, AppKnox) to increase customer awareness and adoption."
      ,"Engage in technical enablement sessions and role-play presentations to enhance product knowledge and improve sales effectiveness."
      ,"Enhance technical capabilities by studying GuardSquare, AppKnox, and Acunetix materials. Stay updated with industry trends and evolving security threats to improve product recommendations and customer solutions."
    ],
    photoimgs: ["","","","",""],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    logoimg:"https://i.imghippo.com/files/hHFs9252jU.png",
    companyname:"Hacktiv8",
    monthfrom:8,
    yearfrom: 2022,
    monthto:10,
    yearto: 2023,
    title: "Fullstack Instructor",
    detail: "Hacktiv8 is an intensive coding bootcamp in Indonesia that focuses on fullstack web development and data science training to prepare students for careers in tech. After COVID was considered over, Hacktiv8 contacted me to be a fullstack instructor. Duties and responsibilities :",
    points: [
      "Teaching and mentoring students in full-stack web development, covering technologies such as JavaScript, React, Node.js, Express, and PostgreSQL."
      ,"Conducting live coding sessions, debugging assistance, and code reviews to ensure best practices and clean code."
      ,"Guiding students through real-world projects, fostering problem-solving skills and industry readiness."
      ,"Providing feedback and assessments to track student progress and improve learning outcomes."
      ,"Collaborating with other instructors and curriculum developers to enhance course content and delivery."
    ],
    photoimgs: ["","","","",""],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    logoimg:"https://i.imghippo.com/files/IkL3439Pk.png",
    companyname:"PT Olsera Indonesia Pratama",
    monthfrom:7,
    yearfrom: 2022,
    monthto:2,
    yearto: 2023,
    title: "Android & iOS Developer",
    detail: "Hired as Senior IT Fullstack Developer, online remote working also I can take another job meanwhile, duties and responsibilities :",
    points: [
      "Maintaining & developing working environment sites Php Laravel , React , React Native , Vue and Swift."
      ,"Sprint planning every two weeks and sprint review every week ( Scrum Agile Methodology )."
      ,"Reporting developed feature also reporting developed main feature from Junior Developer at Olsera Jakarta Office to CTO."
      ,"Reporting professional issues at Jakarta Office to CTO."
      ,"Debugging and testing with Jest also manually with Postman for backend and frontend junior developer before it tested by QA."
      ,"Gather bugs that have been found or not resolved yet weekly to PM."
      ,"Reporting weekly successes and failures weekly to CTO."
    ],
    photoimgs: ["","","","",""],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    logoimg:"https://i.imghippo.com/files/atlC3893Xs.png",
    companyname:"PT. Paramadaksa Teknologi Nusantara (nexSOFT)",
    monthfrom:7,
    yearfrom: 2021,
    monthto:7,
    yearto: 2022,
    title: "Fullstack Engineer (Mainly Java)",
    detail: "Hired as IT Fullstack Developer, duties and responsibilities :",
    points: [
      "Maintaining & developing working environment sites ( Frontend and Backend) using Java , React , React Native and Docker."
      ,"Sprint planning every two weeks and sprint review every week ( Scrum Agile Methodology )  Reporting developed feature everyday on office backlog."
      ,"Testing with SonarQube."
      ,"Integrating RESTful APIs and handling data exchange between frontend and backend."
      ,"Collaborating closely with UI/UX designers to implement responsive and user-friendly interfaces using Figma."
      ,"Performing code reviews and debugging to ensure code quality and functionality."
      ,"Managing version control using Git and participating in merge/pull requests."
      ,"Participating in deployment processes and maintaining CI/CD pipelines for efficient release cycles."
    ],
    photoimgs: ["","","","",""],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    logoimg:"https://i.imghippo.com/files/atlC3893Xs.png",
    companyname:"PT. Paramadaksa Teknologi Nusantara (nexSOFT)",
    monthfrom:7,
    yearfrom: 2021,
    monthto:7,
    yearto: 2022,
    title: "Fullstack Engineer",
    detail: "Hired as IT Fullstack Developer mainly using tech as Java Bootstrap Backend and React Frontend, duties and responsibilities :",
    points: [
      "Maintaining & developing working environment sites ( Frontend and Backend) using Java , React , React Native and Docker."
      ,"Sprint planning every two weeks and sprint review every week ( Scrum Agile Methodology )  Reporting developed feature everyday on office backlog."
      ,"Testing with SonarQube."
      ,"Integrating RESTful APIs and handling data exchange between frontend and backend."
      ,"Collaborating closely with UI/UX designers to implement responsive and user-friendly interfaces using Figma."
      ,"Performing code reviews and debugging to ensure code quality and functionality."
      ,"Managing version control using Git and participating in merge/pull requests."
      ,"Participating in deployment processes and maintaining CI/CD pipelines for efficient release cycles."
    ],
    photoimgs: ["","","","",""],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    logoimg:"https://i.imghippo.com/files/atlC3893Xs.png",
    companyname:"PT. Reliance Indonesia",
    monthfrom:5,
    yearfrom: 2020,
    monthto:6,
    yearto: 2021,
    title: "Fullstack Engineer & Oracle Application Developer",
    detail: "Hired as IT Maintenance and Developer, duties and responsibilities :",
    points: [
      "Maintaining & developing working environment sites ( Frontend and Backend) using C# language aspx.cs & Aspx."
      ,"Maintaining & developing Database, Toad as helper using Oracle & SQL language."
      ,"Developing mobile apps using React Native."
    ],
    photoimgs: ["","","","",""],
    createdAt: new Date(),
    updatedAt: new Date()
  }
];

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Experiences', experiences, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Experiences', null, {});
  }
};