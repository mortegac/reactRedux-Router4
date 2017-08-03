import React, {Component} from 'react';
import { connect } from 'react-redux'

class Reducer extends Component {
    render () {
        console.log("PROPS")
        console.log(this.props)
        console.log("STATE")        
        console.log(this.state)

        const {dir} = this.props
    return (
        <div>
            <h2>REDUCER</h2>
            <ul>
                {
                    dir.map(x => <li key={x.id}>{x.name}</li> )
                }
            </ul>


        </div>
        )
    }
}

// export default Reducer;
const mapStateToProps = state => {
    console.log(state)
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