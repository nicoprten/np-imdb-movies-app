import { connect } from 'react-redux';
import './Movie.scss';


function Movie(props){
    console.log(props)
    return(
        <div className="card-detail">
            {props.detail.loading ? <h2>Loading...</h2> : 
                <h2>{props.detail.data.Title}</h2>
                
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        detail: state.detail
    }
}

export default connect(mapStateToProps, {})(Movie);