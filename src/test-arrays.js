const companies = [
	{
		id: 1,
		name: 'Apple',
		category: 'Consumer Electronics',
		founded: 1976,
		marketValue: 2222.4, // In Milliarden US-Dollar
	},
	{
		id: 2,
		name: 'Google',
		category: 'Search Engine',
		founded: 1998,
		marketValue: 1720.05,
	},
	{
		id: 3,
		name: 'Amazon',
		category: 'E-Commerce',
		founded: 1994,
		marketValue: 1685.05,
	},
	{
		id: 4,
		name: 'Facebook',
		category: 'Social Networking',
		founded: 2004,
		marketValue: 851.23,
	},
	{
		id: 5,
		name: 'Microsoft',
		category: 'Technology',
		founded: 1975,
		marketValue: 1818.05,
	},
	{
		id: 6,
		name: 'IBM',
		category: 'Technology',
		founded: 1911,
		marketValue: 113.38,
	},
	{
		id: 7,
		name: 'Samsung',
		category: 'Electronics',
		founded: 1938,
		marketValue: 362.09,
	},
	{
		id: 8,
		name: 'Intel',
		category: 'Semiconductor',
		founded: 1968,
		marketValue: 224.61,
	},
	{
		id: 9,
		name: 'Twitter',
		category: 'Social Networking',
		founded: 2006,
		marketValue: 52.5,
	},
	{
		id: 10,
		name: 'Tesla',
		category: 'Automotive',
		founded: 2003,
		marketValue: 680.08,
	},
	{
		id: 11,
		name: 'Uber',
		category: 'Transportation',
		founded: 2009,
		marketValue: 82.63,
	},
	{
		id: 12,
		name: 'Airbnb',
		category: 'Hospitality',
		founded: 2008,
		marketValue: 86.54,
	},
	{
		id: 13,
		name: 'Netflix',
		category: 'Entertainment',
		founded: 1997,
		marketValue: 245.91,
	},
	{
		id: 14,
		name: 'PayPal',
		category: 'Financial Technology',
		founded: 1998,
		marketValue: 345.13,
	},
	{
		id: 15,
		name: 'Snap Inc.',
		category: 'Social Media',
		founded: 2011,
		marketValue: 78.34,
	},
	{
		id: 16,
		name: 'Alibaba Group',
		category: 'E-Commerce',
		founded: 1999,
		marketValue: 556.0,
	},
	{
		id: 17,
		name: 'TikTok',
		category: 'Social Media',
		founded: 2016,
		marketValue: 50.0,
	},
	{
		id: 18,
		name: 'Zoom Video Communications',
		category: 'Video Conferencing',
		founded: 2011,
		marketValue: 114.07,
	},
	{
		id: 19,
		name: 'Salesforce',
		category: 'Cloud Computing',
		founded: 1999,
		marketValue: 200.97,
	},
	{
		id: 20,
		name: 'Oracle',
		category: 'Technology',
		founded: 1977,
		marketValue: 239.83,
	},
	{
		id: 21,
		name: 'Siemens',
		category: 'Electronics',
		founded: 1847,
		marketValue: 133.8, // In Milliarden US-Dollar
	},
	{
		id: 22,
		name: 'Infineon',
		category: 'Semiconductor',
		founded: 1999,
		marketValue: 64.6,
	},
	{
		id: 23,
		name: 'SAP',
		category: 'Enterprise Software',
		founded: 1972,
		marketValue: 171.59,
	},
]



// get averade founded year
const averageFounded = companies.reduce((total, company) => total + company.founded, 0) / companies.length
console.log(averageFounded.toFixed(0))


