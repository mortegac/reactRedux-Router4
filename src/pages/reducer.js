import React, {Component} from 'react';
import { connect } from 'react-redux'

// import Ionicon from 'react-ionicons'
// import '../utils/app.css'
  
//Campos
// id:
// abrev:
// nombre:

class Reducer extends Component {
    render () {
        console.log(this.props)
        const {func} = this.props
    return (
        <div>
            <h2>REDUCER</h2>
            <ul>
                {
                    func.map(x => <li key={x.id}>{x.name}</li> )
                }
            </ul>


        </div>
        )
    }
}

// export default Reducer;
const mapStateToProps = state => {
  return {
    ...state,
  }
}

const mapDispatchToProps = dispatch => ({
//   submit: payload => dispatch({ type: 'ADD_UNIVERSIDAD', payload: { ...payload, id: getId(), edit: false } }),
//   update: (payload, id) => {

//     dispatch({ type: 'EDIT_UNIVERSIDAD', payload: { ...payload, id } })
//   }
})

export default connect(mapStateToProps, mapDispatchToProps)(Reducer)