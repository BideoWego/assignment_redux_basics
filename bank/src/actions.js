export const CREATE_ACCOUNT = 'CREATE_ACCOUNT';
export const CREATE_DEPOSIT = 'CREATE_DEPOSIT';
export const CREATE_WITHDRAW = 'CREATE_WITHDRAW';
export const CREATE_TRANSFER = 'CREATE_TRANSFER';
export const SET_TRANSACTION_FILTER = 'SET_TRANSACTION_FILTER';


let nextAccountId = 1;


export function createAccount(data) {
  return {
    type: CREATE_ACCOUNT,
    data: {
      ...data,
      id: nextAccountId++
    }
  };
}


export function createDeposit(data) {
  return {
    type: CREATE_DEPOSIT,
    data
  };
}


export function createWithdraw(data) {
  return {
    type: CREATE_WITHDRAW,
    data
  };
}


export function createTransfer(data) {
  return {
    type: CREATE_TRANSFER,
    data
  };
}


export function setTransactionFilter(data) {
  return {
    type: SET_TRANSACTION_FILTER,
    data
  };
}








