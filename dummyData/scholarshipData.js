const Scholarship = require("../models/scholarship.model");
const mongoose = require("mongoose");
require('dotenv').config();


const seedData = [
    {
        title: "Indiana Jones Scholarship",
        fundingType: "Fully funded",
        educationalLevel: ["S2"],
        country: ["United States", "Canada"],
        registrationDate: "2023-11-15",
        deadlineDate: "2023-01-31",
        description: "This scholarship program is offered by the Government of Ireland for international students who wish to pursue a Master's degree in Ireland. The scholarship covers tuition fees, living expenses, and research costs.",
        university: ["All universities in Ireland registered on the official scholarship website"],
        programs: ["Medicine", "Dentistry, and other health sciences"],
        requirement: [
            "Non-UE/EEA citizens who have completed a Bachelor's degree at a recognized university.",
            "Desire to pursue a Master's degree in Ireland for the academic year 2024/2025.",
            "Strong academic record and a clear research plan.",
            "Proficiency in the English language at the standard of the target university.",
            "Not currently receiving a full or partial scholarship."
        ],
        benefit: [
            "Full tuition fees up to a maximum of €16,000 per year.",
            "Living expenses of €1,200 per month.",
            "Research costs of €3,250 per year.",
            "Maximum scholarship duration of 2 years for Master's programs."
        ],
        applicationProcess: [
            "Identify and contact potential supervisors at the destination university in Ireland. Supervisors should be willing to support the scholarship application and provide letters of recommendation.",
            "Complete the online application form on the official scholarship website. The application form should be accompanied by supporting documents, including transcripts, letters of recommendation, a research plan, English language certificates, and more.",
            "Submit the application before the specified deadline, which is October 21, 2023, at 4:00 PM Irish time.",
            "Participate in the selection process, which includes academic evaluation, assessment of the research plan, and interviews if required.",
            "Wait for the announcement of the selection results in March 2024."
        ],
        sourceInformation: "http://scholarshipwebsite.com/full-scholarship"
    },
    {
        title: 'Einstein Scholarship',
        fundingType: 'Fully funded',
        educationalLevel: ['S3'],
        country: ['Germany'],
        registrationDate: new Date('2023-12-01'),
        deadlineDate: new Date('2023-03-15'),
        description:
            'The Einstein Scholarship is awarded to international students interested in pursuing a Ph.D. in various fields in Germany. It covers tuition fees, living expenses, and research costs.',
        university: ['All participating universities in Germany'],
        programs: ['All Ph.D. programs'],
        requirement: [
            'Non-German citizens with a completed master\'s degree.',
            'Intention to pursue a Ph.D. in Germany for the academic year 2024/2025.',
            'Excellent academic record and a well-defined research proposal.',
            'Proficiency in the German language or English as required by the chosen program.',
            'Not currently holding any other full scholarships.',
        ],
        benefit: [
            'Full tuition coverage.',
            'Monthly stipend of €1,500 for living expenses.',
            'Research grant of €5,000 per year.',
            'Ph.D. program duration of up to 4 years.',
        ],
        applicationProcess: [
            'Identify a prospective academic advisor in a German university.',
            'Submit an online application with all required documents, including academic transcripts, recommendation letters, and research proposal.',
            'Applications must be received by the deadline on March 15, 2023.',
            'Selection process involves academic evaluation, research proposal assessment, and potential interviews.',
            'Selection results are announced in May 2023.',
        ],
        sourceInformation: 'http://scholarshipwebsite.com/einstein-scholarship',
    },
    {
        title: 'Newton Scholarship',
        fundingType: 'Partially funded',
        educationalLevel: ["S1", "S2"],
        country: ['United Kingdom'],
        registrationDate: new Date('2023-11-10'),
        deadlineDate: new Date('2023-02-28'),
        description:
            'The Newton Scholarship supports international students pursuing undergraduate and postgraduate degrees in the United Kingdom. It provides partial financial assistance for tuition and living expenses.',
        university: ['Top universities in the United Kingdom'],
        programs: ['All fields of study'],
        requirement: [
            'Non-UK citizens who have completed their previous degree.',
            'Desire to study in the United Kingdom for the academic year 2024/2025.',
            'Strong academic record and a well-defined study plan.',
            'English language proficiency as per university requirements.',
            'Not currently holding other full scholarships.',
        ],
        benefit: [
            'Partial tuition coverage up to £8,000 per year.',
            'Living allowance of £800 per month.',
            'Scholarship duration varies by degree level.',
        ],
        applicationProcess: [
            'Identify and contact prospective academic advisors or universities in the UK.',
            'Complete an online application with supporting documents, including transcripts and letters of recommendation.',
            'Submit the application by the deadline on February 28, 2023.',
            'Selection process includes academic evaluation and potential interviews.',
            'Selection results are announced in April 2023.',
        ],
        sourceInformation: 'http://scholarshipwebsite.com/newton-scholarship',
    },
    {
        title: 'Marie Curie Fellowship',
        fundingType: 'Research Grant',
        educationalLevel: ['Postdoctoral'],
        country: ['Various European Countries'],
        registrationDate: new Date('2023-11-25'),
        deadlineDate: new Date('2023-03-10'),
        description:
            'The Marie Curie Fellowship offers research grants for postdoctoral researchers in various European countries. The program provides funding for research projects in a wide range of fields.',
        university: ['Participating universities and research institutions in Europe'],
        programs: ['Research projects in all academic disciplines'],
        requirement: [
            'Ph.D. holders from any country.',
            'Desire to conduct postdoctoral research in Europe.',
            'Clear and innovative research proposal.',
            'Proficiency in English, and additional language skills may be required depending on the host institution.',
            'No concurrent full scholarships.',
        ],
        benefit: [
            'Research grant funding for up to 2 years.',
            'Support for research-related expenses, including travel and equipment.',
            'Flexible start dates for research projects.',
        ],
        applicationProcess: [
            'Identify a host institution and research project in Europe.',
            'Complete the online application with a detailed research proposal and CV.',
            'Submit the application by the deadline on March 10, 2023.',
            'Selection process involves a review of research proposals and potential interviews.',
            'Fellowship recipients are notified in May 2023.',
        ],
        sourceInformation: 'http://scholarshipwebsite.com/marie-curie-fellowship',
    },
];

async function insertDummyData() {
    try {
        for (const scholarship of seedData) {
            scholarship.slug = scholarship.title.toLowerCase().replace(/ /g, '-');
        }
        await Scholarship.insertMany(seedData);
        console.log('Dummy data inserted');
    } catch (error) {
        console.error('Error inserting dummy data:', error);
    }
}

async function clearData() {
    try {
        await Scholarship.deleteMany();
        console.log('Data cleared.');
    } catch (error) {
        console.error('Error clearing data:', error);
    }
}

async function seedDatabase() {
    const mongoStr = process.env.DATABASE_URL;
    console.log(mongoStr);
    try {
        await mongoose.connect(mongoStr);
        console.log('Connected to MongoDB');
        await clearData(); // Optional: Clear existing data before inserting dummy data
        await insertDummyData();
        mongoose.connection.close();
        console.log('Disconnected from MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}

seedDatabase();
