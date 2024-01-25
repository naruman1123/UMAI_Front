export type UserStateAction = {
    type: 'setData'
    payload: string
  } | {
    type: 'setName'
    payload: string
  }|{
    type: 'removeId'
  };