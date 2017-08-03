const initialState = [
            { id: '1' ,name: 'Funcionario 1' },
            { id: '2' ,name: 'Funcionario 2' },
            { id: '3' ,name: 'Funcionario 3' },
  ]


/**
 * id: String
 * idDireccion: String
 * departamento: String
 * idDirec:String
 * Direccion:String
 * name:String
 * adress:String,

 */


export default function direcciones (state = initialState, action) {
  switch(action.type) {
    case 'ADD_DIRECCIONES':
      return {
        ...state,
        data: [action.payload].concat(state.data),
      }
    case 'EDIT_DIRECCIONES':
      return {
        ...state,
        data: state.data.map(x => x.id === action.payload.id ? { ...x, ...action.payload } : x)
      }
    case 'DELETE_DIRECCIONES':
      return {
        ...state,
        data: state.data.filter(x => x.id !== action.payload.id)
      }
    default:
      return state
  }
}