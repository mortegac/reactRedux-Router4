const initialState = {
  data: [
        { id: 1, abrev: 'ALCALDIA' , nombre: 'Alcaldía ', 
          sedes:[
              { name:'Palacio Falabella',direccion:'Pedro de Valdivia 963',fono:'+562 654 3900' }
            ] },
        { id: 2, abrev: 'CDS', nombre: 'Corporación de Desarrollo Social ' },
        { id: 3, abrev: 'CLUB PROVIDENCIA', nombre: 'Club Providencia' , 
          sedes:[
              { name:'Sede Central',direccion:'Pocuro 2878',fono:'+562 42 66 400' },
              { name:'Sede Deportes',direccion:'Los Jesuitas 123',fono:'+562 42 66 400' }
            ] },
        { id: 4, abrev: 'CONCEJO MUNICIPAL', nombre: 'Concejo Municipal' },
        { id: 5, abrev: 'CONCEJO COMUNAL', nombre: 'Concejo Comunal'  , 
          sedes:[
              { name:'Sede Central',direccion:'Pedro de Valdivia 963',fono:'+562 654 39 00' }
            ] },
        { id: 6, abrev: 'DAF', nombre: 'Dirección de Administración' },
        { id: 7, abrev: 'DAOM', nombre: 'Dirección de medio ambiente Aseo Ornato y mantenciones',
          sedes:[
              { name:'Sede Central',direccion:'Caupolican 1151',fono:'+562 654 39 00' }
            ] },
        { id: 8, abrev: 'DBPT', nombre: 'Dirección de Barrios Patrimonios y turismos' ,
          sedes:[
              { name:'Sede Central',direccion:'Pedro de Valdivia 963',fono:'+562 654 39 00' }
            ] },
        { id: 9, abrev: 'DC', nombre: 'Dirección de Control '  ,
          sedes:[
              { name:'Sede Central',direccion:'Pedro de Valdivia 963',fono:'+562 654 39 00' }
            ] },
        { id: 10, abrev: 'DCOM', nombre: 'Dirección de Comunicaciones'  ,
          sedes:[
              { name:'Sede Central',direccion:'Pedro de Valdivia 963',fono:'+562 654 39 00' }
            ] },
        { id: 11, abrev: 'DEC', nombre: 'Dirección de Emergencias Comunales '  ,
          sedes:[
              { name:'Sede Central',direccion:'Manuel Montt 1842',fono:'+562 654 39 00' }
            ] },
        { id: 12, abrev: 'DGCA', nombre: 'Dirección Gabinete Alcaldía' ,
          sedes:[
              { name:'Sede Central',direccion:'Pedro de Valdivia 963',fono:'+562 654 39 00' }
            ] },
        { id: 13, abrev: 'DIDECO', nombre: 'Dirección de Desarrollo Comunitarío' ,
          sedes:[
              { name:'Sede Central',direccion:'Pedro de Valdivia ',fono:'+562 654 39 00' },
              { name:'SPA',direccion:'Jorge Matte Gormaz 963',fono:'+562 654 39 00' },
              { name:'CDP',direccion:'Pedro de Valdivia ',fono:'+562 654 39 00' },
              { name:'ADULTO MAYOR',direccion:'Pedro de Valdivia ',fono:'+562 654 39 00' },
              { name:'ORGANIZACIONES COMUNITARIAS',direccion:'Pedro de Valdivia ',fono:'+562 654 39 00' },
            ] },
        { id: 14, abrev: 'DIGC', nombre: 'Dirección Innovación y Gestión de Calidad' },
        { id: 15, abrev: 'DJ', nombre: 'Dirección de Tránsito' ,
          sedes:[
              { name:'Sede Central',direccion:'Pedro de Valdivia 963',fono:'+562 654 39 00' }
            ] },
        { id: 16, abrev: 'DOM', nombre: 'Dirección de Obras',
          sedes:[
              { name:'Sede Central',direccion:'Pedro de Valdivia 963',fono:'+562 654 39 00' }
            ] },
        { id: 17, abrev: 'DSC', nombre: 'Dirección de Seguridad'  ,
          sedes:[
              { name:'Sede Central',direccion:'Pedro de Valdivia 963',fono:'+562 654 39 00' },
              { name:'Sede Central',direccion:'Alferez Real 966',fono:'+562 654 39 00' }
            ] },
        { id: 18, abrev: 'DSM', nombre: 'Dirección Secretaría',
          sedes:[
              { name:'Sede Central',direccion:'Pedro de Valdivia 963',fono:'+562 654 39 00' }
            ] },
        { id: 19, abrev: 'DT', nombre: 'Dirección de Tránsito',
          sedes:[
              { name:'Sede Central',direccion:'Pedro de Valdivia 963',fono:'+562 654 39 00' }
            ] },
        { id: 20, abrev: 'FUNDACION CULTURAL', nombre: 'Fundación Cultural de Providencia',
          sedes:[
              { name:'Sede Central',direccion:'Pedro de Valdivia esquina Providencia',fono:'+562 654 39 00' }
            ] },
        { id: 21, abrev: 'HELP DESK', nombre: 'Help Desk',
          sedes:[
              { name:'Sede Central',direccion:'Pedro de Valdivia 963',fono:'+562 654 39 00' }
            ] },
        { id: 22, abrev: 'JUZGADOS', nombre: 'Jusgados de Policía Local',
          sedes:[
              { name:'1 Juzgado',direccion:'Pedro de Valdivia 706',fono:'+562 654 39 00' },
              { name:'2 Juzgado',direccion:'Pedro de Valdivia 706',fono:'+562 654 39 00' },
              { name:'3 Juzgado',direccion:'Eliodoro Yañez 1687',fono:'+562 654 39 00' }
            ] },
        { id: 23, abrev: 'SECPLA', nombre: 'Dirección Secretaría Comunal de Planificación ',
          sedes:[
              { name:'Sede Central',direccion:'Pedro de Valdivia 963',fono:'+562 654 39 00' }
            ] },
        ]
}

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