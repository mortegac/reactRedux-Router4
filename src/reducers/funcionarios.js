const initialState = {
  data: [
          { id: '1368', idDireccion: '1', departamento: 'Computacion', img: '13838864.jpg'	, idDirec: '2', Direccion: 'Concejo'	, name: 'MANUEL ALEJANDRO',                 lastname: 'ORTEGA CARCAMO'    ,    adress: 'Marchant Pereira 880, Providencia' ,phone: '+569 2654 3924' ,rut:'16033011-2'	,email:	'mortega@providencia.cl',         show_map:'1', lat:'-33.432575',lng:	'-70.611336',   zoom:	'16'},
          { id: '938',  idDireccion: '1', departamento: 'Computacion', img: '10629923.jpg'	, idDirec: '2', Direccion: 'Concejo'	, name: 'ACEVEDO GUZMAN',                   lastname: 'MARCOS SERGIO'     ,    adress: 'Pedro de Valdivia 963'             ,phone: '+562 2654 3595'	,rut:'16033011-2'	,email: 'macevedo@providencia.cl',        show_map:'1', lat:'-33.432018',lng:	'-70.609314',   zoom: '17'},
          { id: '487',  idDireccion: '1', departamento: 'Computacion', img: '8816504.jpg'	, idDirec: '2', Direccion: 'Concejo'	, name: 'TERREROS ANDRADE',                 lastname: 'BORIS RODOLFO'	  ,    adress: 'Manuel Montt 1842'                 ,phone: '22 847 2703'    ,rut:'16033011-2'	,email: 'bterreros@providencia.cl',       show_map:'1', lat:'-33.444698',lng:	'-70.614326',   zoom: '15'},
          { id: '116',  idDireccion: '1', departamento: 'Computacion', img: '10964849.jpg'	, idDirec: '2', Direccion: 'Concejo'	, name: 'LEON GAJARDO',                     lastname: 'JULIO ROBERTO'	  ,    adress: 'Pedro de Valdivia 963'             ,phone: '+562 2654 3850'	,rut:'16033011-2'	,email: 'jleon@providencia.cl'    ,       show_map:'1', lat:'-33.432018',lng:	'-70.609314',   zoom: '17'},
          { id: '81',   idDireccion: '1', departamento: 'Computacion', img: '9281456.jpg'	, idDirec: '2', Direccion: 'Concejo'	, name: 'HUNT CORTES',                      lastname: 'KATIA MILENA'      ,    adress: 'Pedro de Valdivia 963'             ,phone: '+562 2654 3774'	,rut:'16033011-2'	,email: 'khunt@providencia.cl' ,          show_map:'1', lat:'-33.432018',lng:	'-70.609314',   zoom: '17'},
          { id: '65',   idDireccion: '1', departamento: 'Computacion', img: '1078.jpg'	    , idDirec: '2', Direccion: 'Concejo'	, name: 'GUZMAN ARAVENA',                   lastname: 'CARLOS ALBERTO'	  ,    adress: 'Pedro de Valdivia 963'             ,phone: '+562 2654 3415'	,rut:'16033011-2'	,email: 'carlos.guzman@providencia.cl',   show_map:'1', lat:'-33.432541',lng:	'-70.610939',   zoom: '18'},
          { id: '39',   idDireccion: '1', departamento: 'Computacion', img: '13468492.jpg'	, idDirec: '2', Direccion: 'Concejo'	, name: 'GONZALEZ GALAN',                   lastname: 'ALEJANDRA DANIELA' ,    adress: 'Pedro de Valdivia 963'             ,phone: '+562 2654 3225'	,rut:'16033011-2'	,email: 'agonzalez@providencia.cl',       show_map:'1', lat:'-33.432018',lng:	'-70.609314',   zoom: '17'},
          { id: '53',   idDireccion: '1', departamento: 'Computacion', img: '13604894.jpg'	, idDirec: '2', Direccion: 'Concejo'	, name: 'GONZALEZ VILLA',                   lastname: 'CARLOS ALBERTO'    ,    adress: 'Pedro de Valdivia 963'             ,phone: '+562 2654 3519'	,rut:'16033011-2'	,email: 'cgonzalez@providencia.cl',       show_map:'1', lat:'-33.432018',lng:	'-70.609314',   zoom: '17'},
          { id: '356',  idDireccion: '1', departamento: 'Computacion', img: '13378960.jpg'	, idDirec: '2', Direccion: 'Concejo'	, name: 'QUEZADA COLEPUE',                  lastname: 'LUIS ALFREDO'      ,    adress: 'Pedro de Valdivia 963'             ,phone: '+562 2847 3709'	,rut:'16033011-2'	,email: 'lquezada@providencia.cl',        show_map:'1', lat:'-33.432018',lng:	'-70.609314',   zoom: '17'},
          { id: '473',  idDireccion: '1', departamento: 'Computacion', img: '16033011.jpg'	, idDirec: '2', Direccion: 'Concejo'	, name: 'SILVA VILLEGAS',                   lastname: 'WILLIAMS ROLANDO',      adress: 'Pedro de Valdivia 963'             ,phone: '+562 2654 3518'	,rut:'16033011-2'	,email: 'wsilva@providencia.cl',          show_map:'1', lat:'-33.432018',lng:	'-70.609314',   zoom: '17'},
          { id: '10',    idDireccion: '2', departamento: 'Concejo',     img: '16033011.jpg'	, idDirec: '2', Direccion: 'Concejo'	, name: 'Manuel José ',                     lastname: 'Monckeberg Balmaceda',  adress: 'Pedro de Valdivia 963'             ,phone: '+562 2654 3518'	,rut:'16033011-2'	,email: 'mjmonckeberg@providencia.cl ' ,  show_map:'1', lat:'-33.432018',lng:	'-70.609314',   zoom: '17'},                  
          { id: '11',    idDireccion: '2', departamento: 'Concejo',     img: '16033011.jpg'	, idDirec: '2', Direccion: 'Concejo'	, name: 'Iván ',                            lastname: 'Noguera Phillips' ,     adress: 'Pedro de Valdivia 963'             ,phone: '+562 2654 3518'	,rut:'16033011-2'	,email: 'inoguera@providencia.cl ',       show_map:'1', lat:'-33.432018',lng:	'-70.609314',   zoom: '17'},              
          { id: '12',    idDireccion: '2', departamento: 'Concejo',     img: '16033011.jpg'	, idDirec: '2', Direccion: 'Concejo'	, name: 'Julio ',                           lastname: 'Jung del Favero' ,      adress: 'Pedro de Valdivia 963'             ,phone: '+562 2654 3518'	,rut:'16033011-2'	,email: 'julio.jung@providencia.cl ',     show_map:'1', lat:'-33.432018',lng:	'-70.609314',   zoom: '17'},              
          { id: '13',    idDireccion: '2', departamento: 'Concejo',     img: '16033011.jpg'	, idDirec: '2', Direccion: 'Concejo'	, name: 'Jaime ',                           lastname: 'Parada Hoyl' ,          adress: 'Pedro de Valdivia 963'             ,phone: '+562 2654 3518'	,rut:'16033011-2'	,email: 'jparada@providencia.cl ',        show_map:'1', lat:'-33.432018',lng:	'-70.609314',   zoom: '17'},              
          { id: '14',    idDireccion: '2', departamento: 'Concejo',     img: '16033011.jpg'	, idDirec: '2', Direccion: 'Concejo'	, name: 'Pilar ',                           lastname: 'Cruz Hurtado' ,         adress: 'Pedro de Valdivia 963'             ,phone: '+562 2654 3518'	,rut:'16033011-2'	,email: 'pcruz@providencia.cl ',          show_map:'1', lat:'-33.432018',lng:	'-70.609314',   zoom: '17'},              
          { id: '15',    idDireccion: '2', departamento: 'Concejo',     img: '16033011.jpg'	, idDirec: '2', Direccion: 'Concejo'	, name: 'Pedro ',                           lastname: 'Lizana Greve' ,         adress: 'Pedro de Valdivia 963'             ,phone: '+562 2654 3518'	,rut:'16033011-2'	,email: 'plizana@providencia.cl ',        show_map:'1', lat:'-33.432018',lng:	'-70.609314',   zoom: '17'},              
          { id: '16',    idDireccion: '2', departamento: 'Concejo',     img: '16033011.jpg'	, idDirec: '2', Direccion: 'Concejo'	, name: 'Tomás ',                           lastname: 'Echiburu Altamirano' ,  adress: 'Pedro de Valdivia 963'             ,phone: '+562 2654 3518'	,rut:'16033011-2'	,email: 'tomas.echiburu@providencia.cl ', show_map:'1', lat:'-33.432018',lng:	'-70.609314',   zoom: '17'},              
          { id: '17',    idDireccion: '2', departamento: 'Concejo',     img: '16033011.jpg'	, idDirec: '2', Direccion: 'Concejo'	, name: 'Pablo Luis ',                      lastname: 'Jaeger Cousiño' ,       adress: 'Pedro de Valdivia 963'             ,phone: '+562 2654 3518'	,rut:'16033011-2'	,email: 'pablo.jaeger@providencia.cl ',   show_map:'1', lat:'-33.432018',lng:	'-70.609314',   zoom: '17'},      
          { id: '18',    idDireccion: '2', departamento: 'Concejo',     img: '16033011.jpg'	, idDirec: '2', Direccion: 'Concejo'	, name: 'Pilar ',                           lastname: 'Fernández Valbuena' ,   adress: 'Pedro de Valdivia 963'             ,phone: '+562 2654 3518'	,rut:'16033011-2'	,email: 'pilar.fernandez@providencia.cl ',show_map:'1', lat:'-33.432018',lng:	'-70.609314',   zoom: '17'},        
          { id: '19',    idDireccion: '2', departamento: 'Concejo',     img: '16033011.jpg'	, idDirec: '2', Direccion: 'Concejo'	, name: 'Juan Carlos ',                     lastname: 'Labbé Reyes' ,          adress: 'Pedro de Valdivia 963'             ,phone: '+562 2654 3518'	,rut:'16033011-2'	,email: 'juan.labbe@providencia.cl ',     show_map:'1', lat:'-33.432018',lng:	'-70.609314',   zoom: '17'},  
        ]
}

/**
 * id: String
 * id: String
 * idDireccion: String
 * departamento: String
 * img: String, 
 * idDirec:String
 * Direccion:String
 * name:String
 * lastname:String
 * adress:String,
 * phone: String
 * rut:String
 * email:String
 * show_map:String
 * lat:String
 * lng:	String
 * zoom: String
 */


export default function funcionarios (state = initialState, action) {
  switch(action.type) {
    case 'ADD_FUNCIONARIO':
      return {
        ...state,
        data: [action.payload].concat(state.data),
      }
    case 'EDIT_FUNCIONARIO':
      return {
        ...state,
        data: state.data.map(x => x.id === action.payload.id ? { ...x, ...action.payload } : x)
      }
    case 'DELETE_FUNCIONARIO':
      return {
        ...state,
        data: state.data.filter(x => x.id !== action.payload.id)
      }
    default:
      return state
  }
}