import { connect } from 'react-redux'
import PlacesList from '../../components/place/PlacesList';

const mapStateToProps = state => {
    return {
        places: state.places
    };
}

const mapDispatchToProps = dispatch => ({})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PlacesList)