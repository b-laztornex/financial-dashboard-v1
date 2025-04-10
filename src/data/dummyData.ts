/**
 * This file holds all the mock data for the user, cards, transactions,
 * charts, and other relevant information for the financial dashboard.
 */
const mockData = {
  user: {
    name: "Charline Reed",
    username: "charline",
    email: "charlinereed@gmail.com",
    password: "Password123!",
    dateOfBirth: "25 January 1990",
    presentAddress: "San Jose, California, USA",
    permanentAddress: "San Jose, California, USA",
    city: "San Jose",
    postalCode: "45982",
    country: "USA",
    profilePicture: "https://randomuser.me/api/portraits/women/75.jpg",
  },
  cards: [
    {
      balance: "$4,120",
      cardholder: "Eddy Cusuma",
      validThru: "08/27",
      cardNumber: "3778 **** **** 9012",
    },
    {
      balance: "$7,890",
      cardholder: "Eddy Cusuma",
      validThru: "03/30",
      cardNumber: "3778 **** **** 3456",
    },
    {
      balance: "$1,150",
      cardholder: "Eddy Cusuma",
      validThru: "11/26",
      cardNumber: "3778 **** **** 7890",
    },
    {
      balance: "$3,775",
      cardholder: "Eddy Cusuma",
      validThru: "07/31",
      cardNumber: "3778 **** **** 2345",
    },
    {
      balance: "$9,642",
      cardholder: "Eddy Cusuma",
      validThru: "01/28",
      cardNumber: "3778 **** **** 6789",
    },
    {
      balance: "$6,320",
      cardholder: "Eddy Cusuma",
      validThru: "05/33",
      cardNumber: "3778 **** **** 0123",
    },
    {
      balance: "$2,508",
      cardholder: "Eddy Cusuma",
      validThru: "09/34",
      cardNumber: "3778 **** **** 4567",
    },
    {
      balance: "$8,111",
      cardholder: "Eddy Cusuma",
      validThru: "04/32",
      cardNumber: "3778 **** **** 8901",
    },
    {
      balance: "$5,432",
      cardholder: "Eddy Cusuma",
      validThru: "10/30",
      cardNumber: "3778 **** **** 1357",
    },
    {
      balance: "$3,365",
      cardholder: "Eddy Cusuma",
      validThru: "02/29",
      cardNumber: "3778 **** **** 2468",
    },
  ],
  transactions: [
    {
      id: 1,
      description: "Deposit Paypal",
      date: "25 January 2021",
      amount: 2500,
      type: "credit",
    },
    {
      id: 2,
      description: "Jeni Watson",
      date: "27 January 2021",
      amount: 1850,
      type: "debit",
    },
    {
      id: 3,
      description: "Deposit Paypal",
      date: "30 January 2021",
      amount: 1250,
      type: "credit",
    },
  ],
  weeklyActivity: [
    { day: "Mon", deposit: 100, withdrawal: 20 },
    { day: "Tue", deposit: 200, withdrawal: 100 },
    { day: "Wed", deposit: 300, withdrawal: 50 },
    { day: "Thu", deposit: 150, withdrawal: 80 },
    { day: "Fri", deposit: 400, withdrawal: 100 },
    { day: "Sat", deposit: 250, withdrawal: 40 },
    { day: "Sun", deposit: 350, withdrawal: 150 },
  ],
  expenses: [
    { category: "Entertainment", value: 40 },
    { category: "Bill Expenses", value: 25 },
    { category: "Investments", value: 20 },
    { category: "Others", value: 15 },
  ],
  balanceHistory: [
    { month: "Jan", balance: 3000 },
    { month: "Feb", balance: 3200 },
    { month: "Mar", balance: 4500 },
    { month: "Apr", balance: 4000 },
    { month: "May", balance: 4700 },
    { month: "Jun", balance: 5000 },
  ],
  contacts: [
    {
      profilePicture: "https://randomuser.me/api/portraits/men/72.jpg",
      name: "Mark",
      role: "CEO",
    },
    {
      profilePicture: "https://randomuser.me/api/portraits/men/73.jpg",
      name: "Phill",
      role: "CTO",
    },
    {
      profilePicture: "https://randomuser.me/api/portraits/men/74.jpg",
      name: "James",
      role: "MVP",
    },
  ],
};

export default mockData;
