import { createSlice } from "@reduxjs/toolkit";
const initState = {
  accounts: [
    {
      id: 1,
      customerName: "khaled alkarmy",
      accountNumber: "123333",
      accountType: "Savings accounts",
    },
    {
      id: 2,
      customerName: "Abdullah ",
      accountNumber: "987111",
      accountType: "Student accounts",
    },
    {
      id: 3,
      customerName: "ahmad alawneh",
      accountNumber: "934211",
      accountType: "Student accounts",
    },
    {
      id: 4,
      customerName: "Malek Al-Desougi",
      accountNumber: "931121",
      accountType: "Student accounts",
    },
  ],
};

//slice
const accountsSlice = createSlice({
  //name of reduser to call it in store
  name: "accounts",
  initialState: initState,

  //action
  reducers: {
    ADD_ACCOUNT: (state, action) => {
      //get legth of array
      const length = state.accounts.length;
      //get last ID from array
      const lastId = state.accounts[length - 1].id;
      console.log(action.payload);
      //payload come from component
      state.accounts.push({
        id: lastId + 1,
        ...action.payload,
      });
    },
    DELETE_ACCOUNT: (state, action) => {
      //filter return new array
      state.accounts = state.accounts.filter((acc) => acc.id != action.payload);
    },
  },
});

export const { ADD_ACCOUNT, DELETE_ACCOUNT } = accountsSlice.actions;
export default accountsSlice.reducer;
