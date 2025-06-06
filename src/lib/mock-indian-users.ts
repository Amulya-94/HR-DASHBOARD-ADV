
import type { User } from "./types";
import { DEPARTMENTS, PERFORMANCE_RATINGS } from "./constants";

// Helper function to generate a more diverse set of past performance
const generatePastPerformance = () => {
  const count = Math.floor(Math.random() * 3) + 1; // 1 to 3 entries
  return Array.from({ length: count }, (_, i) => ({
    date: new Date(Date.now() - Math.random() * 1000 * 60 * 60 * 24 * (180 + i * 90)).toISOString().split('T')[0], // Random date in past 6-12 months
    rating: PERFORMANCE_RATINGS[Math.floor(Math.random() * PERFORMANCE_RATINGS.length)],
    comments: `Performance review from Q${Math.ceil((new Date().getMonth() +1)/3) - (i+1)}. Lorem ipsum dolor sit amet.`
  }));
};

export const indianUsers: User[] = [
  {
    id: 1,
    firstName: "Aarav",
    lastName: "Sharma",
    email: "aarav.sharma@example.com",
    age: 28,
    image: "https://placehold.co/128x128.png",
    department: DEPARTMENTS[0], // Engineering
    performanceRating: 4,
    address: { address: "123 MG Road", city: "Mumbai", postalCode: "400001", state: "Maharashtra" },
    phone: "+91 9876543210",
    company: { department: "Tech", name: "InfoSolutions Ltd.", title: "Software Engineer" },
    username: "aaravs",
    bio: "Dedicated software engineer with a passion for developing innovative solutions.",
    pastPerformance: generatePastPerformance(),
  },
  {
    id: 2,
    firstName: "Priya",
    lastName: "Patel",
    email: "priya.patel@example.com",
    age: 32,
    image: "https://placehold.co/128x128.png",
    department: DEPARTMENTS[1], // Marketing
    performanceRating: 5,
    address: { address: "456 Park Street", city: "Delhi", postalCode: "110001", state: "Delhi" },
    phone: "+91 9876543211",
    company: { department: "Marketing", name: "MarketGrowth Inc.", title: "Marketing Manager" },
    username: "priyap",
    bio: "Experienced marketing manager focused on driving brand growth and engagement.",
    pastPerformance: generatePastPerformance(),
  },
  {
    id: 3,
    firstName: "Rohan",
    lastName: "Mehra",
    email: "rohan.mehra@example.com",
    age: 30,
    image: "https://placehold.co/128x128.png",
    department: DEPARTMENTS[2], // Sales
    performanceRating: 3,
    address: { address: "789 Residency Road", city: "Bangalore", postalCode: "560001", state: "Karnataka" },
    phone: "+91 9876543212",
    company: { department: "Sales", name: "SellWell Corp.", title: "Sales Executive" },
    username: "rohanm",
    bio: "Results-oriented sales executive with a knack for building client relationships.",
    pastPerformance: generatePastPerformance(),
  },
  {
    id: 4,
    firstName: "Ananya",
    lastName: "Singh",
    email: "ananya.singh@example.com",
    age: 25,
    image: "https://placehold.co/128x128.png",
    department: DEPARTMENTS[3], // HR
    performanceRating: 4,
    address: { address: "101 Lake View", city: "Hyderabad", postalCode: "500001", state: "Telangana" },
    phone: "+91 9876543213",
    company: { department: "Human Resources", name: "PeopleFirst Co.", title: "HR Specialist" },
    username: "ananyas",
    bio: "HR specialist passionate about fostering a positive and productive work environment.",
    pastPerformance: generatePastPerformance(),
  },
  {
    id: 5,
    firstName: "Vikram",
    lastName: "Reddy",
    email: "vikram.reddy@example.com",
    age: 35,
    image: "https://placehold.co/128x128.png",
    department: DEPARTMENTS[4], // Product
    performanceRating: 5,
    address: { address: "202 River Side", city: "Chennai", postalCode: "600001", state: "Tamil Nadu" },
    phone: "+91 9876543214",
    company: { department: "Product", name: "Innovate Hub", title: "Product Lead" },
    username: "vikramr",
    bio: "Product lead focused on creating user-centric and impactful products.",
    pastPerformance: generatePastPerformance(),
  },
  {
    id: 6,
    firstName: "Sanya",
    lastName: "Gupta",
    email: "sanya.gupta@example.com",
    age: 29,
    image: "https://placehold.co/128x128.png",
    department: DEPARTMENTS[5], // Design
    performanceRating: 4,
    address: { address: "303 Hill Top", city: "Pune", postalCode: "411001", state: "Maharashtra" },
    phone: "+91 9876543215",
    company: { department: "Design", name: "CreativeWorks", title: "UX Designer" },
    username: "sanyag",
    bio: "Creative UX designer committed to crafting intuitive and beautiful user experiences.",
    pastPerformance: generatePastPerformance(),
  },
  {
    id: 7,
    firstName: "Aditya",
    lastName: "Nair",
    email: "aditya.nair@example.com",
    age: 31,
    image: "https://placehold.co/128x128.png",
    department: DEPARTMENTS[6], // Finance
    performanceRating: 3,
    address: { address: "404 Sea View", city: "Kolkata", postalCode: "700001", state: "West Bengal" },
    phone: "+91 9876543216",
    company: { department: "Finance", name: "FinancePros", title: "Financial Analyst" },
    username: "adityan",
    bio: "Detail-oriented financial analyst with expertise in market trends and financial modeling.",
    pastPerformance: generatePastPerformance(),
  },
  {
    id: 8,
    firstName: "Diya",
    lastName: "Joshi",
    email: "diya.joshi@example.com",
    age: 27,
    image: "https://placehold.co/128x128.png",
    department: DEPARTMENTS[7], // Operations
    performanceRating: 4,
    address: { address: "505 Garden Lane", city: "Jaipur", postalCode: "302001", state: "Rajasthan" },
    phone: "+91 9876543217",
    company: { department: "Operations", name: "OpsExcel", title: "Operations Coordinator" },
    username: "diyaj",
    bio: "Efficient operations coordinator ensuring smooth and effective business processes.",
    pastPerformance: generatePastPerformance(),
  },
  {
    id: 9,
    firstName: "Kabir",
    lastName: "Verma",
    email: "kabir.verma@example.com",
    age: 33,
    image: "https://placehold.co/128x128.png",
    department: DEPARTMENTS[8], // Support
    performanceRating: 5,
    address: { address: "606 Valley Road", city: "Ahmedabad", postalCode: "380001", state: "Gujarat" },
    phone: "+91 9876543218",
    company: { department: "Support", name: "SupportStars", title: "Customer Support Lead" },
    username: "kabirv",
    bio: "Customer-focused support lead dedicated to providing excellent service.",
    pastPerformance: generatePastPerformance(),
  },
  {
    id: 10,
    firstName: "Ishaan",
    lastName: "Chopra",
    email: "ishaan.chopra@example.com",
    age: 29,
    image: "https://placehold.co/128x128.png",
    department: DEPARTMENTS[9], // Research
    performanceRating: 4,
    address: { address: "707 Sky High Apts", city: "Gurgaon", postalCode: "122001", state: "Haryana" },
    phone: "+91 9876543219",
    company: { department: "Research", name: "Insight Labs", title: "Research Analyst" },
    username: "ishaanc",
    bio: "Analytical research analyst skilled in data interpretation and trend analysis.",
    pastPerformance: generatePastPerformance(),
  },
  {
    id: 11,
    firstName: "Mira",
    lastName: "Desai",
    email: "mira.desai@example.com",
    age: 30,
    image: "https://placehold.co/128x128.png",
    department: DEPARTMENTS[0], // Engineering
    performanceRating: 5,
    address: { address: "808 Ocean Drive", city: "Goa", postalCode: "403001", state: "Goa" },
    phone: "+91 9876543220",
    company: { department: "Tech", name: "InfoSolutions Ltd.", title: "Senior Software Engineer" },
    username: "mirad",
    bio: "Senior software engineer with expertise in scalable system architecture.",
    pastPerformance: generatePastPerformance(),
  },
  {
    id: 12,
    firstName: "Arjun",
    lastName: "Kumar",
    email: "arjun.kumar@example.com",
    age: 34,
    image: "https://placehold.co/128x128.png",
    department: DEPARTMENTS[1], // Marketing
    performanceRating: 3,
    address: { address: "909 Pine Avenue", city: "Chandigarh", postalCode: "160001", state: "Punjab" },
    phone: "+91 9876543221",
    company: { department: "Marketing", name: "MarketGrowth Inc.", title: "Digital Marketing Specialist" },
    username: "arjunk",
    bio: "Digital marketing specialist driving online presence and campaigns.",
    pastPerformance: generatePastPerformance(),
  },
  {
    id: 13,
    firstName: "Neha",
    lastName: "Malhotra",
    email: "neha.malhotra@example.com",
    age: 26,
    image: "https://placehold.co/128x128.png",
    department: DEPARTMENTS[2], // Sales
    performanceRating: 4,
    address: { address: "111 Palm Grove", city: "Lucknow", postalCode: "226001", state: "Uttar Pradesh" },
    phone: "+91 9876543222",
    company: { department: "Sales", name: "SellWell Corp.", title: "Junior Sales Associate" },
    username: "neham",
    bio: "Ambitious sales associate eager to learn and contribute to team success.",
    pastPerformance: generatePastPerformance(),
  },
  {
    id: 14,
    firstName: "Riya",
    lastName: "Choudhary",
    email: "riya.choudhary@example.com",
    age: 28,
    image: "https://placehold.co/128x128.png",
    department: DEPARTMENTS[3], // HR
    performanceRating: 5,
    address: { address: "222 Maple Street", city: "Indore", postalCode: "452001", state: "Madhya Pradesh" },
    phone: "+91 9876543223",
    company: { department: "Human Resources", name: "PeopleFirst Co.", title: "Talent Acquisition Lead" },
    username: "riyac",
    bio: "Talent acquisition lead connecting top talent with organizational needs.",
    pastPerformance: generatePastPerformance(),
  },
  {
    id: 15,
    firstName: "Karan",
    lastName: "Bajaj",
    email: "karan.bajaj@example.com",
    age: 36,
    image: "https://placehold.co/128x128.png",
    department: DEPARTMENTS[4], // Product
    performanceRating: 4,
    address: { address: "333 Oak Lane", city: "Bhopal", postalCode: "462001", state: "Madhya Pradesh" },
    phone: "+91 9876543224",
    company: { department: "Product", name: "Innovate Hub", title: "Senior Product Manager" },
    username: "karanb",
    bio: "Strategic product manager with a track record of successful product launches.",
    pastPerformance: generatePastPerformance(),
  },
  {
    id: 16,
    firstName: "Siddharth",
    lastName: "Menon",
    email: "siddharth.menon@example.com",
    age: 30,
    image: "https://placehold.co/128x128.png",
    department: DEPARTMENTS[0], // Engineering
    performanceRating: 4,
    address: { address: "12 Nehru Park", city: "Kochi", postalCode: "682001", state: "Kerala" },
    phone: "+91 9123456780",
    company: { department: "Tech", name: "Kerala Techies", title: "DevOps Engineer" },
    username: "sidmenon",
    bio: "DevOps engineer focused on CI/CD pipelines and cloud infrastructure.",
    pastPerformance: generatePastPerformance(),
  },
  {
    id: 17,
    firstName: "Zara",
    lastName: "Khan",
    email: "zara.khan@example.com",
    age: 27,
    image: "https://placehold.co/128x128.png",
    department: DEPARTMENTS[5], // Design
    performanceRating: 5,
    address: { address: "9 Rose Garden", city: "Srinagar", postalCode: "190001", state: "Jammu and Kashmir" },
    phone: "+91 9123456781",
    company: { department: "Creative", name: "Kashmir Designs", title: "Lead Graphic Designer" },
    username: "zarak",
    bio: "Lead graphic designer with a flair for modern aesthetics and branding.",
    pastPerformance: generatePastPerformance(),
  },
  {
    id: 18,
    firstName: "Vihaan",
    lastName: "Das",
    email: "vihaan.das@example.com",
    age: 32,
    image: "https://placehold.co/128x128.png",
    department: DEPARTMENTS[7], // Operations
    performanceRating: 3,
    address: { address: "77 Ganges View", city: "Varanasi", postalCode: "221001", state: "Uttar Pradesh" },
    phone: "+91 9123456782",
    company: { department: "Logistics", name: "Ganga Flow", title: "Supply Chain Manager" },
    username: "vihaand",
    bio: "Supply chain manager optimizing logistics and inventory.",
    pastPerformance: generatePastPerformance(),
  },
  {
    id: 19,
    firstName: "Myra",
    lastName: "Iyer",
    email: "myra.iyer@example.com",
    age: 29,
    image: "https://placehold.co/128x128.png",
    department: DEPARTMENTS[9], // Research
    performanceRating: 4,
    address: { address: "2 Temple Road", city: "Madurai", postalCode: "625001", state: "Tamil Nadu" },
    phone: "+91 9123456783",
    company: { department: "R&D", name: "Dravidian Insights", title: "Senior Researcher" },
    username: "myrai",
    bio: "Senior researcher specializing in qualitative and quantitative studies.",
    pastPerformance: generatePastPerformance(),
  },
  {
    id: 20,
    firstName: "Advik",
    lastName: "Pillai",
    email: "advik.pillai@example.com",
    age: 31,
    image: "https://placehold.co/128x128.png",
    department: DEPARTMENTS[6], // Finance
    performanceRating: 5,
    address: { address: "5 Backwater Close", city: "Alappuzha", postalCode: "688001", state: "Kerala" },
    phone: "+91 9123456784",
    company: { department: "Finance", name: "Coastal Capitals", title: "Finance Controller" },
    username: "advikp",
    bio: "Finance controller managing budgets and financial strategy with precision.",
    pastPerformance: generatePastPerformance(),
  },
  {
    id: 21,
    firstName: "Samaira",
    lastName: "Rao",
    email: "samaira.rao@example.com",
    age: 28,
    image: "https://placehold.co/128x128.png",
    department: DEPARTMENTS[0], // Engineering
    performanceRating: 4,
    address: { address: "Cyber Towers, Hitec City", city: "Hyderabad", postalCode: "500081", state: "Telangana" },
    phone: "+91 9123456785",
    company: { department: "IT", name: "Tech Mahindra", title: "Cloud Architect" },
    username: "samairar",
    bio: "Cloud architect designing and implementing scalable cloud solutions.",
    pastPerformance: generatePastPerformance(),
  },
  {
    id: 22,
    firstName: "Vivaan",
    lastName: "Chatterjee",
    email: "vivaan.chatterjee@example.com",
    age: 33,
    image: "https://placehold.co/128x128.png",
    department: DEPARTMENTS[1], // Marketing
    performanceRating: 3,
    address: { address: "Park Street Extn", city: "Kolkata", postalCode: "700016", state: "West Bengal" },
    phone: "+91 9123456786",
    company: { department: "Branding", name: "Bengal Brands", title: "Content Strategist" },
    username: "vivaanc",
    bio: "Content strategist creating compelling narratives for brand engagement.",
    pastPerformance: generatePastPerformance(),
  },
  {
    id: 23,
    firstName: "Anika",
    lastName: "Subramanian",
    email: "anika.subramanian@example.com",
    age: 26,
    image: "https://placehold.co/128x128.png",
    department: DEPARTMENTS[4], // Product
    performanceRating: 5,
    address: { address: "OMR Road", city: "Chennai", postalCode: "600119", state: "Tamil Nadu" },
    phone: "+91 9123456787",
    company: { department: "Innovation", name: "Future Forward", title: "Associate Product Manager" },
    username: "anikas",
    bio: "Dynamic associate product manager driving product features from ideation to launch.",
    pastPerformance: generatePastPerformance(),
  },
  {
    id: 24,
    firstName: "Reyansh",
    lastName: "Biswas",
    email: "reyansh.biswas@example.com",
    age: 29,
    image: "https://placehold.co/128x128.png",
    department: DEPARTMENTS[8], // Support
    performanceRating: 4,
    address: { address: "Salt Lake Sector V", city: "Kolkata", postalCode: "700091", state: "West Bengal" },
    phone: "+91 9123456788",
    company: { department: "Customer Care", name: "HelpNow Solutions", title: "Technical Support Engineer" },
    username: "reyanshb",
    bio: "Technical support engineer resolving complex issues with a smile.",
    pastPerformance: generatePastPerformance(),
  },
  {
    id: 25,
    firstName: "Kiara",
    lastName: "Dubey",
    email: "kiara.dubey@example.com",
    age: 30,
    image: "https://placehold.co/128x128.png",
    department: DEPARTMENTS[3], // HR
    performanceRating: 4,
    address: { address: "Film City Road", city: "Mumbai", postalCode: "400065", state: "Maharashtra" },
    phone: "+91 9123456789",
    company: { department: "Talent Management", name: "Star HR Services", title: "HR Business Partner" },
    username: "kiarad",
    bio: "Strategic HR business partner aligning HR initiatives with business goals.",
    pastPerformance: generatePastPerformance(),
  },
  {
    id: 26,
    firstName: "Dev",
    lastName: "Kapoor",
    email: "dev.kapoor@example.com",
    age: 40,
    image: "https://placehold.co/128x128.png",
    department: DEPARTMENTS[0], // Engineering
    performanceRating: 5,
    address: { address: "Bandra West", city: "Mumbai", postalCode: "400050", state: "Maharashtra" },
    phone: "+91 9123456790",
    company: { department: "Tech", name: "InfoSolutions Ltd.", title: "Principal Engineer" },
    username: "devk",
    bio: "Principal engineer leading high-impact projects and mentoring junior developers.",
    pastPerformance: generatePastPerformance(),
  },
  {
    id: 27,
    firstName: "Navya",
    lastName: "Mittal",
    email: "navya.mittal@example.com",
    age: 24,
    image: "https://placehold.co/128x128.png",
    department: DEPARTMENTS[1], // Marketing
    performanceRating: 4,
    address: { address: "Connaught Place", city: "Delhi", postalCode: "110001", state: "Delhi" },
    phone: "+91 9123456791",
    company: { department: "Social Media", name: "MarketGrowth Inc.", title: "Social Media Executive" },
    username: "navyam",
    bio: "Creative social media executive managing online communities and campaigns.",
    pastPerformance: generatePastPerformance(),
  },
  {
    id: 28,
    firstName: "Parth",
    lastName: "Saxena",
    email: "parth.saxena@example.com",
    age: 31,
    image: "https://placehold.co/128x128.png",
    department: DEPARTMENTS[2], // Sales
    performanceRating: 3,
    address: { address: "Electronic City", city: "Bangalore", postalCode: "560100", state: "Karnataka" },
    phone: "+91 9123456792",
    company: { department: "Enterprise Sales", name: "SellWell Corp.", title: "Key Account Manager" },
    username: "parths",
    bio: "Key account manager fostering long-term relationships with enterprise clients.",
    pastPerformance: generatePastPerformance(),
  },
  {
    id: 29,
    firstName: "Saanvi",
    lastName: "Agarwal",
    email: "saanvi.agarwal@example.com",
    age: 35,
    image: "https://placehold.co/128x128.png",
    department: DEPARTMENTS[6], // Finance
    performanceRating: 5,
    address: { address: "Nariman Point", city: "Mumbai", postalCode: "400021", state: "Maharashtra" },
    phone: "+91 9123456793",
    company: { department: "Investment", name: "Capital Growth Partners", title: "Senior Investment Analyst" },
    username: "saanvia",
    bio: "Senior investment analyst providing data-driven financial insights and strategies.",
    pastPerformance: generatePastPerformance(),
  },
  {
    id: 30,
    firstName: "Yash",
    lastName: "Trivedi",
    email: "yash.trivedi@example.com",
    age: 29,
    image: "https://placehold.co/128x128.png",
    department: DEPARTMENTS[7], // Operations
    performanceRating: 4,
    address: { address: "SG Highway", city: "Ahmedabad", postalCode: "380054", state: "Gujarat" },
    phone: "+91 9123456794",
    company: { department: "Logistics", name: "Gujarat Transports", title: "Logistics Manager" },
    username: "yasht",
    bio: "Logistics manager streamlining operations for timely and cost-effective delivery.",
    pastPerformance: generatePastPerformance(),
  },
];


    