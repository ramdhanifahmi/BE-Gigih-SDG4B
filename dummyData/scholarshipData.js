const Scholarship = require("../models/scholarship.model");
const mongoose = require("mongoose");
require('dotenv').config();


const seedData = [
    {
        title: "Lester B. Pearson International Scholarship Program",
        fundingType: "Fully funded",
        educationalLevel: ["Bachelor"],
        country: ["Canada"],
        registrationDate: new Date('2023-08-31'),
        deadlineDate: new Date('2024-11-07'),
        description:
            "The Lester B. Pearson International Scholarship Program at the University of Toronto is intended to recognize international students who demonstrate exceptional academic achievement and creativity and who are recognized as leaders within their school. The scholarship will cover tuition, books, incidental fees, and full residence support for four years.",
        university: ["University of Toronto"],
        programs: ["All undergraduate programs offered at the University of Toronto"],
        requirement: [
            "An international student nominated by their school.",
            "Currently in their final year of secondary school or have graduated no earlier than June 2023.",
            "Beginning their studies at the University of Toronto in September 2024."
        ],
        benefit: [
            "Full tuition coverage for four years.",
            "Books, incidental fees, and full residence support for four years."
        ],
        applicationProcess: [
            "Receive a nomination from your school (High schools not already contacted/verified are asked to submit an application to participate in our program, available here).",
            "Apply to study at the University of Toronto to begin your studies in 2024 and complete your application for admission by the appropriate deadlines.",
            "Once we’ve received a nomination and you’ve applied to the university, you can complete the online Lester B. Pearson Scholarship application."
        ],
        sourceInformation: "https://future.utoronto.ca/pearson/"
    },
    {
        title: "Vanier Canada Graduate Scholarships",
        fundingType: "Fully funded",
        educationalLevel: ["PhD"],
        country: ["Canada"],
        registrationDate: "2023-09-01",
        deadlineDate: "2023-11-02",
        description: "The Vanier Canada Graduate Scholarships (Vanier CGS) program is designed to attract and retain world-class doctoral students by supporting students who demonstrate both leadership skills and a high standard of scholarly achievement in graduate studies in the natural sciences and/or engineering, social sciences and/or humanities and health. The scholarship is valued at $50,000 per year for three years.",
        university: ["Any Canadian university with a quota"],
        programs: ["Any doctoral program in the natural sciences and/or engineering, social sciences and/or humanities and health"],
        requirement: [
            "Be nominated by only one Canadian university, which must have received a Vanier CGS quota.",
            "Be pursuing your first doctoral degree (including joint undergraduate/graduate research program such as MD/PhD, DVM/PhD, JD/PhD - if it has a demonstrated and significant research component). Note that only the PhD portion of a combined degree is eligible for funding.",
            "Intend to pursue, in the summer semester or the academic year following the announcement of results, full-time doctoral (or a joint graduate program such as MD/PhD, DVM/PhD, JD/PhD) studies and research at the nominating university; Note that only the PhD portion of a combined degree is eligible for funding.",
            "Have completed no more than 20 months of doctoral studies as of May 1, 2024.",
            "Have achieved a first-class average, as determined by your university, in each of the last two years of full-time study or equivalent. Candidates are encouraged to contact the university for its definition of a first-class average."
        ],
        benefit: [
            "$50,000 annual stipend for three years.",
            "Access to research and professional development opportunities."
        ],
        applicationProcess: [
            "Contact your desired nominating institution to find out about their internal selection process and deadlines.",
            "Prepare and submit your application package to your nominating institution by their internal deadline using ResearchNet. The application package includes two letters of reference, one leadership reference, a research proposal, transcripts and other supporting documents.",
            "The nominating institution will forward recommended nominations to the Vanier-Banting Secretariat (the Secretariat) by November 2, 2023."
        ],
        sourceInformation: "https://vanier.gc.ca/en/home-accueil.html"
    },
    {
        title: "University of Calgary International Entrance Scholarship",
        fundingType: "Partial funding",
        educationalLevel: ["Bachelor"],
        country: ["Canada"],
        registrationDate: "2023-10-01",
        deadlineDate: "2023-12-01",
        description: "The University of Calgary International Entrance Scholarship is a prestigious award that recognizes outstanding accomplishments of an international student beginning their undergraduate studies. The criteria for the Scholarship includes not only academic excellence but also accomplishments outside the classroom. The scholarship is renewable in the second, third and fourth year at the University of Calgary, provided recipients achieve a GPA of 2.60 or more over a minimum of 24.00 units in the previous fall and winter terms.",
        university: ["University of Calgary"],
        programs: ["Any undergraduate program offered at the University of Calgary"],
        requirement: [
            "Be an international student who is required to have a Study Permit to study in Canada.",
            "Be admitted directly from high school to an undergraduate degree program for the upcoming fall term.",
            "Demonstrate academic excellence, leadership abilities, involvement in student affairs and community service."
        ],
        benefit: ["$15,000 renewable annually for four years."],
        applicationProcess: [
            "Apply for admission to an undergraduate degree program at the University of Calgary by December 1.",
            "Complete the online scholarship application form available on your Student Centre by December 15."
        ],
        sourceInformation: "https://www.ucalgary.ca/registrar/awards/university-calgary-international-entrance-scholarship"
    },
    {
        title: "Canada-ASEAN Scholarships and Educational Exchanges for Development",
        fundingType: "Fully funded",
        educationalLevel: ["Bachelor", "Master", "PhD", "Postdoctoral", "Short-term"],
        country: ["Canada"],
        registrationDate: "2023-02-01",
        deadlineDate: "2023-03-04",
        description: "The Canada-ASEAN Scholarships and Educational Exchanges for Development (SEED) program provides students, from member states of the Association of Southeast Asian Nations (ASEAN), with short-term exchange opportunities for study or research in Canadian post-secondary institutions at the college, undergraduate and graduate levels. The program aims to reduce poverty in the developing countries of ASEAN and to achieve the 2030 Agenda for Sustainable Development.",
        university: ["Any Canadian post-secondary institution"],
        programs: ["Any program of study or research related to one or more of the 2030 Agenda for Sustainable Development Goals"],
        requirement: [
            "Be a citizen of an ASEAN member state (Brunei Darussalam, Cambodia, Indonesia, Laos (Lao People’s Democratic Republic (Lao PDR)), Malaysia, Myanmar, The Philippines, Singapore, Thailand, or Vietnam).",
            "Be enrolled full-time at a post-secondary institution in an eligible country and paying any tuition fees regulated by that institution at the time of application and for the full duration of the exchange.",
            "Have a valid passport or travel document from their country of citizenship."
        ],
        benefit: [
            "Visa and/or study/work permit fees and/or travel related expenses.",
            "Economy-class airfare.",
            "Health insurance.",
            "Living expenses."
        ],
        applicationProcess: [
            "Contact your home institution’s international office to find out about their internal selection process and deadlines.",
            "Apply for admission to a Canadian post-secondary institution that has a formal exchange agreement with your home institution.",
            "Complete the online application form available on the International Scholarships Canada Application Tool by March 4, 2023."
        ],
        sourceInformation: "https://www.educanada.ca/scholarships-bourses/can/institutions/asean-anase.aspx?lang=eng"
    },
    {
        title: "Beasiswa S2 dan S3 di University of British Columbia, Kanada",
        fundingType: "Fully funded",
        educationalLevel: ["Master", "PhD"],
        country: ["Canada"],
        registrationDate: new Date('2023-09-01'),
        deadlineDate: new Date('2024-01-31'),
        description:
            "Beasiswa ini diberikan oleh University of British Columbia (UBC) kepada mahasiswa internasional yang berprestasi dan berpotensi untuk menempuh studi S2 atau S3 di UBC. Beasiswa ini mencakup biaya kuliah, biaya hidup, asuransi kesehatan, dan bantuan perjalanan.",
        university: ["University of British Columbia"],
        programs: ["Any graduate program offered at the University of British Columbia"],
        requirement: [
            "Memiliki ijazah sarjana atau magister dari universitas terakreditasi.",
            "Memiliki nilai rata-rata minimal 80% atau setara dengan A dalam dua tahun terakhir studi sebelumnya.",
            "Memiliki tawaran untuk belajar penuh waktu di UBC pada program pascasarjana yang sesuai.",
            "Memiliki kemampuan bahasa Inggris yang memenuhi standar UBC."
        ],
        benefit: [
            "Biaya kuliah penuh.",
            "Biaya hidup sebesar $16,000 per tahun untuk mahasiswa S2 dan $18,000 per tahun untuk mahasiswa S3.",
            "Asuransi kesehatan melalui iMED dan MSP.",
            "Bantuan perjalanan sebesar $1,000."
        ],
        applicationProcess: [
            "Mendaftar ke program pascasarjana yang diinginkan di UBC melalui situs web [Graduate and Postdoctoral Studies] sebelum 31 Januari 2024.",
            "Mengisi formulir aplikasi beasiswa yang tersedia di situs web [International Student Initiative] setelah menerima tawaran dari UBC."
        ],
        sourceInformation: "[https://www.schoters.com/id/beasiswa/beasiswa-s2-dan-s3-di-university-of-british-columbia-kanada]"
    },
    {
        title: "Beasiswa S1 di University of Waterloo, Kanada",
        fundingType: "Partial funding",
        educationalLevel: ["Bachelor"],
        country: ["Canada"],
        registrationDate: new Date('2023-09-01'),
        deadlineDate: new Date('2024-02-01'),
        description:
            "Beasiswa ini diberikan oleh University of Waterloo kepada mahasiswa internasional yang berprestasi akademis dan non-akademis untuk menempuh studi S1 di University of Waterloo. Beasiswa ini mencakup sebagian biaya kuliah dan biaya hidup selama empat tahun.",
        university: ["University of Waterloo"],
        programs: ["Any undergraduate program offered at the University of Waterloo"],
        requirement: [
            "Warga negara dari negara selain Kanada yang membutuhkan visa untuk belajar di Kanada.",
            "Memiliki nilai rata-rata minimal 90% atau setara dengan A+ dalam tahun terakhir sekolah menengah.",
            "Memiliki tawaran untuk belajar penuh waktu di University of Waterloo pada program sarjana yang sesuai.",
            "Memiliki keterlibatan dan kepemimpinan dalam kegiatan ekstrakurikuler."
        ],
        benefit: [
            "Biaya kuliah sebesar $10,000 per tahun selama empat tahun.",
            "Biaya hidup sebesar $2,500 per tahun selama empat tahun."
        ],
        applicationProcess: [
            "Mendaftar ke program sarjana yang diinginkan di University of Waterloo melalui situs web [Ontario Universities' Application Centre] sebelum 1 Februari 2024.",
            "Mengisi formulir aplikasi beasiswa yang tersedia di situs web [Student Awards and Financial Aid] setelah menerima tawaran dari University of Waterloo."
        ],
        sourceInformation: "[https://www.schoters.com/id/beasiswa/beasiswa-s1-di-university-of-waterloo-kanada]"
    },
    {
        title: "Rotary Foundation Global Grant Scholarship",
        fundingType: "Fully funded",
        educationalLevel: ["Master", "PhD"],
        country: ["Various countries"],
        registrationDate: "2023-07-15",
        deadlineDate: "2023-10-15",
        description: "The Rotary Foundation Global Grant Scholarship supports international graduate students pursuing a master's or doctoral degree in fields related to peace, conflict resolution, and prevention. It aims to foster international cooperation and understanding. Scholars have the opportunity to study in a foreign country while developing a project to address a critical issue in their home country.",
        university: ["Various universities worldwide"],
        programs: ["Fields related to peace, conflict resolution, and prevention"],
        requirement: [
            "Be proficient in the language of the host country.",
            "Have a strong commitment to promoting peace and understanding.",
            "Demonstrate leadership abilities and a dedication to community service."
        ],
        benefit: [
            "Tuition and other fees",
            "Monthly stipend for living expenses",
            "Round-trip airfare",
            "Language training (if required)",
            "Cultural and academic orientation"
        ],
        applicationProcess: [
            "Contact a local Rotary club in your area to express your interest.",
            "Work with the Rotary club to prepare and submit your application to Rotary International.",
            "Participate in interviews and assessments by the Rotary Foundation and host institutions."
        ],
        sourceInformation: "https://www.rotary.org/en/our-programs/scholarships"
    },
    {
        title: "Fulbright Foreign Student Program",
        fundingType: "Fully funded",
        educationalLevel: ["Master", "PhD"],
        country: ["United States"],
        registrationDate: "2023-05-01",
        deadlineDate: "2023-07-31",
        description: "The Fulbright Foreign Student Program offers fully funded scholarships to international students who wish to pursue a master's or doctoral degree in the United States. It promotes cross-cultural exchange and understanding. Scholars are expected to contribute to their home country's development after completing their studies in the U.S.",
        university: ["Various U.S. universities"],
        programs: ["Various fields of study"],
        requirement: [
            "Be a citizen of an eligible country (varies by program).",
            "Hold a bachelor's degree or its equivalent.",
            "Demonstrate English language proficiency.",
            "Exhibit a strong commitment to community engagement and leadership."
        ],
        benefit: [
            "Tuition and fees",
            "Monthly stipend for living expenses",
            "Health insurance",
            "Round-trip airfare",
            "Cultural enrichment activities"
        ],
        applicationProcess: [
            "Check the application guidelines for your home country on the Fulbright website.",
            "Complete and submit your application online through the Chevening application portal."
        ],
        sourceInformation: "https://foreign.fulbrightonline.org/"
    },
    {
        title: "Chevening Scholarship",
        fundingType: "Fully funded",
        educationalLevel: ["Master"],
        country: ["United Kingdom"],
        registrationDate: "2023-08-03",
        deadlineDate: "2023-11-02",
        description: "The Chevening Scholarship is a prestigious international award funded by the UK government. It offers outstanding individuals the opportunity to pursue a master's degree in the United Kingdom and become future leaders and decision-makers. The scholarship emphasizes leadership, networking, and academic excellence.",
        university: ["Various UK universities"],
        programs: ["Any master's degree program"],
        requirement: [
            "Be a citizen of an eligible Chevening country (varies by program).",
            "Have at least two years of work experience.",
            "Demonstrate leadership qualities and a commitment to community engagement.",
            "Meet the English language requirement."
        ],
        benefit: [
            "Tuition fees",
            "Monthly stipend for living expenses",
            "Travel to and from the UK",
            "Thesis or dissertation grant",
            "Networking events and cultural trips"
        ],
        applicationProcess: [
            "Check the application details for your home country on the Chevening website.",
            "Submit your application online through the Chevening application portal."
        ],
        sourceInformation: "https://www.chevening.org/"
    },
    {
        title: "Australia Awards Scholarships",
        fundingType: "Fully funded",
        educationalLevel: ["Bachelor", "Master", "PhD"],
        country: ["Australia"],
        registrationDate: "2023-05-01",
        deadlineDate: "2023-12-15",
        description: "The Australia Awards Scholarships provide opportunities for international students to undertake full-time undergraduate or postgraduate studies at participating Australian universities and technical and further education (TAFE) institutions. These scholarships are aimed at developing leadership, social responsibility, and economic development within recipient countries.",
        university: ["Participating Australian universities and TAFE institutions"],
        programs: ["Various undergraduate and postgraduate programs"],
        requirement: [
            "Be a citizen of an eligible country (varies by program).",
            "Not hold Australian citizenship or permanent residency.",
            "Have at least two years of work experience (varies by program).",
            "Demonstrate a commitment to contributing to your home country's development."
        ],
        benefit: [
            "Full tuition fees",
            "Return air travel",
            "Contribution to living expenses",
            "Introductory academic program",
            "Overseas Student Health Cover (OSHC)"
        ],
        applicationProcess: [
            "Check the eligibility criteria and application process for your country on the Australia Awards website.",
            "Submit your application online through the official portal of your home country's government."
        ],
        sourceInformation: "https://www.dfat.gov.au/geo/global-education/australia-awards"
    },
    {
        title: "University of Sydney International Scholarships",
        fundingType: "Partial funding",
        educationalLevel: ["Bachelor", "Master", "PhD"],
        country: ["Australia"],
        registrationDate: "2023-04-01",
        deadlineDate: "2023-09-30",
        description: "The University of Sydney offers a range of scholarships to international students, recognizing academic excellence and promoting diversity. Scholarships cover tuition fees and are available for both undergraduate and postgraduate programs.",
        university: "University of Sydney",
        programs: "Any eligible program at the University of Sydney",
        requirement: [
            "Be an international student",
            "Meet the academic criteria for the chosen program",
            "Apply by the scholarship deadline"
        ],
        benefit: "Tuition fee reduction or full scholarship, depending on the program",
        applicationProcess: "Apply online through the University of Sydney's scholarship application portal",
        sourceInformation: "https://www.sydney.edu.au/scholarships/international.html"
    },
    {
        title: "Gates Cambridge Scholarships",
        fundingType: "Fully funded",
        educationalLevel: ["PhD", "MSc/MLitt", "One-year postgraduate course"],
        country: ["United Kingdom"],
        registrationDate: "2023-09-01",
        deadlineDate: "2023-12-05",
        description: "Gates Cambridge Scholarships are prestigious international awards that provide full funding for outstanding students to pursue postgraduate studies at the University of Cambridge. The program emphasizes leadership, intellectual ability, and a commitment to improving the lives of others.",
        university: "University of Cambridge",
        programs: "Any postgraduate program at the University of Cambridge",
        requirement: [
            "Be a citizen of any country outside the United Kingdom",
            "Apply to the University of Cambridge and Gates Cambridge Scholarships simultaneously",
            "Demonstrate a strong commitment to social service"
        ],
        benefit: "Full cost of study, maintenance allowance, and more",
        applicationProcess: "Submit your application for admission to the University of Cambridge and the Gates Cambridge Scholarship online",
        sourceInformation: "https://www.gatescambridge.org/"
    },
    {
        title: "DAAD Scholarships",
        fundingType: "Fully funded",
        educationalLevel: ["Master", "PhD", "Postdoctoral", "Short courses"],
        country: "Germany",
        registrationDate: "2023-08-15",
        deadlineDate: "2023-11-30",
        description: "The German Academic Exchange Service (DAAD) offers a wide range of scholarships to international students and researchers. These scholarships support study, research, and language learning in Germany.",
        university: "Various German universities",
        programs: "Program-specific, varies by scholarship type",
        requirement: [
            "Be an international student or researcher",
            "Meet program-specific criteria",
            "Apply to the DAAD scholarship program of your choice"
        ],
        benefit: "Tuition waiver, monthly stipend, travel allowance, and more",
        applicationProcess: "Apply through the DAAD portal or the respective program's website",
        sourceInformation: "https://www.daad.de/en/"
    },
    {
        title: "Swiss Government Excellence Scholarships",
        fundingType: "Fully funded",
        educationalLevel: ["PhD", "Postdoctoral", "Research", "Artists"],
        country: "Switzerland",
        registrationDate: "2023-08-01",
        deadlineDate: "2023-11-15",
        description: "The Swiss Government offers excellence scholarships to promote international exchange and research collaboration. These scholarships are available to doctoral students, postdoctoral researchers, and artists in various fields.",
        university: "Various Swiss universities",
        programs: "Program-specific, varies by scholarship type",
        requirement: [
            "Be an international student, researcher, or artist",
            "Meet program-specific criteria",
            "Apply to the Swiss Government Excellence Scholarship program"
        ],
        benefit: "Monthly stipend, health insurance, and other allowances",
        applicationProcess: "Apply through the Swiss government's online platform or the respective program's website",
        sourceInformation: "https://www.sbfi.admin.ch/sbfi/en/home/education/scholarships-and-grants/swiss-government-excellence-scholarships.html"
    },
    {
        title: "Rhodes Scholarships",
        fundingType: "Fully funded",
        educationalLevel: ["Postgraduate"],
        country: "United Kingdom",
        registrationDate: "2023-06-01",
        deadlineDate: "2023-09-09",
        description: "Rhodes Scholarships are prestigious international awards for postgraduate study at the University of Oxford. These scholarships aim to nurture public-spirited leaders for the world's future. Scholars are selected for their exceptional intellect, character, leadership, and commitment to service.",
        university: "University of Oxford",
        programs: "Various postgraduate programs at the University of Oxford",
        requirement: [
            "Be a citizen of an eligible country (varies by program)",
            "Hold at least a bachelor's degree before commencing the scholarship",
            "Demonstrate outstanding academic and personal achievements"
        ],
        benefit: "University and college fees, stipend for living expenses, airfare, and more",
        applicationProcess: "Check the application process for your home country on the Rhodes Trust website and apply through your country's selection committee",
        sourceInformation: "https://www.rhodeshouse.ox.ac.uk/scholarships/"
    },
    {
        title: "University of Calgary International Entrance Scholarship",
        fundingType: "Partial funding",
        educationalLevel: ["Bachelor"],
        country: "Canada",
        registrationDate: "2023-10-01",
        deadlineDate: "2023-12-01",
        description: "The University of Calgary International Entrance Scholarship is a prestigious award that recognizes outstanding accomplishments of an international student beginning their undergraduate studies. The criteria for the Scholarship includes not only academic excellence but also accomplishments outside the classroom. The scholarship is renewable in the second, third, and fourth year at the University of Calgary, provided recipients achieve a GPA of 2.60 or more over a minimum of 24.00 units in the previous fall and winter terms.",
        university: "University of Calgary",
        programs: "Any undergraduate program offered at the University of Calgary",
        requirement: [
            "Be an international student who is required to have a Study Permit to study in Canada",
            "Be admitted directly from high school to an undergraduate degree program for the upcoming fall term",
            "Demonstrate academic excellence, leadership abilities, involvement in student affairs, and community service"
        ],
        benefit: "$15,000 renewable annually for four years",
        applicationProcess: "Apply for admission to an undergraduate degree program at the University of Calgary by December 1 and complete the online scholarship application form available on your Student Centre by December 15",
        sourceInformation: "https://www.ucalgary.ca/registrar/awards/university-calgary-international-entrance-scholarship"
    },
    {
        title: "Japanese Government (MEXT) Scholarship",
        fundingType: "Fully funded",
        educationalLevel: ["Bachelor", "Master", "PhD"],
        country: ["Japan"],
        registrationDate: "2023-04-01",
        deadlineDate: "2023-06-15",
        description: "The Japanese Government (MEXT) Scholarship is a prestigious program that supports international students in their pursuit of undergraduate, master's, and doctoral degrees in Japan. It aims to foster global leaders and promote understanding of Japanese culture and society.",
        university: ["Japanese universities and specialized training colleges"],
        programs: ["Various fields of study"],
        requirement: [
            "Be a citizen of an eligible country (varies by program).",
            "Meet the age criteria (varies by program).",
            "Have a strong interest in Japan and its culture.",
            "Pass the necessary exams for your chosen course of study."
        ],
        benefit: [
            "Full tuition coverage",
            "Monthly stipend for living expenses",
            "Round-trip airfare",
            "Free accommodation"
        ],
        applicationProcess: [
            "Contact the Japanese embassy or consulate in your home country for details and guidelines.",
            "Submit your application according to the specific requirements of your country."
        ],
        sourceInformation: "https://www.mext.go.jp/en/"
    },
    {
        title: "Swedish Institute Scholarships for Global Professionals (SISGP)",
        fundingType: "Fully funded",
        educationalLevel: ["Master"],
        country: ["Sweden"],
        registrationDate: "2023-12-01",
        deadlineDate: "2024-02-10",
        description: "The Swedish Institute Scholarships for Global Professionals (SISGP) offer opportunities for international students to pursue a master's degree in Sweden. These scholarships aim to develop future leaders who will contribute to global sustainable development.",
        university: ["Participating Swedish universities"],
        programs: ["Master's programs in eligible fields"],
        requirement: [
            "Be a citizen of an eligible country (varies by program).",
            "Have a minimum of 3,000 hours of work or volunteer experience.",
            "Demonstrate leadership and sustainability experience.",
            "Meet the specific program requirements."
        ],
        benefit: [
            "Full tuition coverage",
            "Monthly living allowance",
            "Travel grant",
            "Insurance, thesis, and other benefits"
        ],
        applicationProcess: [
            "Apply for admission to the master's program of your choice at a Swedish university.",
            "Apply for the SISGP scholarship through the Swedish Institute's online application portal."
        ],
        sourceInformation: "https://si.se/en/scholarship/si-scholarships-for-global-professionals/"
    },
    {
        title: "Commonwealth Scholarships",
        fundingType: "Fully funded",
        educationalLevel: ["Master", "PhD"],
        country: ["Various Commonwealth countries"],
        registrationDate: "2023-08-01",
        deadlineDate: "2023-12-15",
        description: "Commonwealth Scholarships provide opportunities for students from Commonwealth countries to pursue postgraduate studies in other member countries. These scholarships aim to promote international collaboration and knowledge sharing.",
        university: ["Participating universities in Commonwealth countries"],
        programs: ["Various postgraduate programs"],
        requirement: [
            "Be a citizen of a Commonwealth country.",
            "Hold a bachelor's degree or its equivalent.",
            "Meet the specific eligibility criteria of the host country and program.",
            "Demonstrate a commitment to the development of your home country."
        ],
        benefit: [
            "Full tuition coverage",
            "Monthly living allowance",
            "Airfare to and from the host country",
            "Thesis and other allowances"
        ],
        applicationProcess: [
            "Check the eligibility and application process for your specific Commonwealth country or university.",
            "Apply through the designated application channels."
        ],
        sourceInformation: "https://www.acu.ac.uk/scholarships/commonwealth-scholarships/"
    },
    {
        title: "New Zealand Scholarships",
        fundingType: "Fully funded",
        educationalLevel: ["Master", "PhD"],
        country: ["New Zealand"],
        registrationDate: "2023-02-01",
        deadlineDate: "2023-03-28",
        description: "The New Zealand Scholarships offer opportunities for international students to study in New Zealand and contribute to the development of their home countries. These scholarships support various postgraduate programs and emphasize sustainable development and leadership.",
        university: ["Participating New Zealand universities"],
        programs: ["Postgraduate programs in eligible fields"],
        requirement: [
            "Be a citizen of an eligible country (varies by program).",
            "Meet the academic and English language requirements of the host university.",
            "Demonstrate a commitment to the sustainable development of your home country."
        ],
        benefit: [
            "Full tuition coverage",
            "Living allowance",
            "Establishment allowance",
            "Medical and travel insurance",
            "Research and thesis expenses"
        ],
        applicationProcess: [
            "Apply for admission to your chosen postgraduate program at a New Zealand university.",
            "Apply for the New Zealand Scholarship through the official portal."
        ],
        sourceInformation: "https://www.mfat.govt.nz/en/what-we-do/scholarships/new-zealand-scholarships/"
    },
    {
        title: "Eiffel Excellence Scholarship Program",
        fundingType: "Fully funded",
        educationalLevel: ["Master", "PhD"],
        country: ["France"],
        registrationDate: "2023-09-01",
        deadlineDate: "2023-11-03",
        description: "The Eiffel Excellence Scholarship Program offers opportunities for international students to pursue a master's or doctoral degree in France. These scholarships are awarded for excellence in academic and research fields and promote international collaboration.",
        university: ["Participating French universities"],
        programs: ["Master's and PhD programs in various disciplines"],
        requirement: [
            "Be a citizen of an eligible country (varies by program).",
            "Not be of French nationality.",
            "Meet the age criteria (varies by program).",
            "Demonstrate academic excellence and a commitment to research."
        ],
        benefit: [
            "Full tuition coverage",
            "Monthly stipend for living expenses",
            "International airfare",
            "Cultural activities and healthcare coverage"
        ],
        applicationProcess: [
            "Contact the French higher education institution where you wish to study for application details.",
            "Submit your application to the institution, which will then submit it to the French Ministry of Foreign Affairs."
        ],
        sourceInformation: "https://www.campusfrance.org/en/eiffel-scholarship-program-of-excellence"
    },
    {
        title: "Commonwealth Shared Scholarships",
        fundingType: "Fully funded",
        educationalLevel: ["Master"],
        country: ["Various Commonwealth countries"],
        registrationDate: "2023-12-01",
        deadlineDate: "2024-02-10",
        description: "The Commonwealth Shared Scholarships provide opportunities for international students from eligible Commonwealth countries to pursue a master's degree in the United Kingdom. These scholarships promote development and sustainability.",
        university: ["Participating UK universities"],
        programs: ["Master's programs in various fields"],
        requirement: [
            "Be a citizen of an eligible Commonwealth country.",
            "Hold a first degree at either first or upper second class level.",
            "Demonstrate financial need and commitment to development.",
            "Meet the specific eligibility criteria of the chosen program."
        ],
        benefit: [
            "Full tuition coverage",
            "Monthly stipend for living expenses",
            "Airfare to and from the United Kingdom",
            "Thesis and other allowances"
        ],
        applicationProcess: [
            "Apply for admission to your chosen master's program at a UK university.",
            "Submit your Commonwealth Shared Scholarship application through the UK's online application system."
        ],
        sourceInformation: "https://cscuk.fcdo.gov.uk/scholarships/commonwealth-shared-scholarships/"
    },
    {
        title: "Korean Government Scholarship Program (KGSP)",
        fundingType: "Fully funded",
        educationalLevel: ["Bachelor", "Master", "PhD"],
        country: ["South Korea"],
        registrationDate: "2023-02-01",
        deadlineDate: "2023-03-28",
        description: "The Korean Government Scholarship Program (KGSP) provides opportunities for international students to pursue undergraduate, master's, or doctoral degrees in South Korea. These scholarships aim to promote international exchange and mutual understanding.",
        university: ["Participating South Korean universities"],
        programs: ["Various programs in eligible fields"],
        requirement: [
            "Be a citizen of an eligible country (varies by program).",
            "Hold a bachelor's degree (for master's and PhD applicants).",
            "Demonstrate a commitment to cultural exchange and academic achievement."
        ],
        benefit: [
            "Full tuition coverage",
            "Monthly stipend for living expenses",
            "Round-trip airfare",
            "Medical insurance"
        ],
        applicationProcess: [
            "Apply for admission to your chosen program at a South Korean university.",
            "Submit your KGSP application through the designated application channels."
        ],
        sourceInformation: "https://www.studyinkorea.go.kr/en/sub/gks/allnew_invite.do"
    },
    {
        title: "Commonwealth Scholarships for Developing Countries",
        fundingType: "Fully funded",
        educationalLevel: ["Master", "PhD"],
        country: ["Various Commonwealth countries"],
        registrationDate: "2023-06-01",
        deadlineDate: "2023-10-31",
        description: "Commonwealth Scholarships for Developing Countries provide opportunities for students from eligible Commonwealth countries to pursue master's or doctoral studies in various Commonwealth nations. These scholarships aim to contribute to the development needs of Commonwealth countries by providing high-quality education and promoting intercultural exchange.",
        university: ["Participating Commonwealth universities"],
        programs: ["Various master's and doctoral programs"],
        requirement: [
            "Be a citizen of an eligible Commonwealth country (varies by program).",
            "Hold a relevant bachelor's or master's degree (varies by program).",
            "Demonstrate a strong commitment to contributing to your home country's development."
        ],
        benefit: [
            "Tuition fees",
            "Monthly stipend for living expenses",
            "Airfare to and from the host country",
            "Thesis or research grant",
            "Warm clothing allowance (if applicable)"
        ],
        applicationProcess: [
            "Check the specific scholarship details and application process for your country on the Commonwealth Scholarship Commission's website.",
            "Submit your application to the national nominating agency or department in your home country."
        ],
        sourceInformation: "http://cscuk.dfid.gov.uk/apply/commonwealth-scholarships/"
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
