const companies = [
    {name: "Company One", category: "Finance", start: 1981, end: 2003},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2013},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32, 76];
let agesIndex = ages.length;

// forEach
// companies.forEach(company => console.log(company.name));

// filter 
const canDrink = ages.filter(age => age >= 18);
const retailCompanies = companies.filter(company => company.category === 'Retail');
const eightiesCompanies = companies.filter(company => (company.start >= 1980 && company.start <= 1990));
const companiesLastedThenYear = companies.filter(company => company.end - company.start >= 10);

// map
const companyName = companies.map(company => company.name);
const companyTest = companies.map(company => `${company.name} - [${company.start} - ${company.end}]`);
const agesSquared = ages.map(age => Math.sqrt(age));

// sort
const companiesSorted = companies.sort((a, b) => (a.start > b.start ? 1 : -1));
const lastElementInCompaniesSorted = companiesSorted.pop();
const sortAges = ages.sort((a, b) => a - b);

// reduce      
const agesSum = ages.reduce((total, age) => total + age, 0);
const totalCompaniesYears = companies.reduce((total, company) => total + (company.end - company.start), 0);

// console.log(canDrink);
// console.log(retailCompanies);
// console.log(eightiesCompanies);
// console.log(companiesLastedThenYear);
// console.log(companyName);
// console.table(companyTest);
// console.log(agesSquared);
// console.table(companiesSorted);
// console.log(lastElementInCompaniesSorted);
// console.log(sortAges);
// console.log(agesSum);
// console.log(totalCompaniesYears);