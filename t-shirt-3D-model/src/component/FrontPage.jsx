
import PropTypes from 'prop-types';

const FrontPage = (prop) => {

    const { setCustomise } = prop;

    return (

        <div className="overlay">
            <h1>Let&apos;s Start</h1>
            
            <button className="btn" onClick={()=> setCustomise(true)}>Customise</button>
        </div>

    );
}

FrontPage.propTypes = {
    setCustomise: PropTypes.func.isRequired,
};
export default FrontPage;