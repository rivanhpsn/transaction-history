let initialState = {
  users: [
    {
      id: 1,
      nama: "Rivan",
      category: "Income",
      amount: 1000000,
    },
    {
      id: 2,
      nama: "Budi",
      category: "Expense",
      amount: 500000,
    },
    {
      id: 3,
      nama: "Bambang",
      category: "Income",
      amount: 700000,
    },
    {
      id: 4,
      nama: "Jordi",
      category: "Income",
      amount: 900000,
    },
    {
      id: 5,
      nama: "Sugeng",
      category: "expense",
      amount: 1000000,
    },
  ],
  error: false,
};
const users = (state = initialState, action) => {
  return state;
};

export default users;
