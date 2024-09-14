import PropTypes from 'prop-types';

const FrontPage = (prop) => {

    const { setCustomise } = prop;
    return (
        <div className="overlay">
            <h1>Let&apos;s Start</h1>
            <h3>Click the button below to customise your T-shirt</h3>
            <button className="btn" onClick={() => setCustomise(true)}>Start</button>
        </div>
    );
}

FrontPage.propTypes = {
    setCustomise: PropTypes.func.isRequired,
};
export default FrontPage;