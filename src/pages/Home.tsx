import { useNavigate } from 'react-router-dom';

function Home(): JSX.Element {
    const navigation = useNavigate()

    return (
        <div className="Home-container">
            <h2>ACS Digital Technical Assessment</h2>
            <div className="Home-buttoncontainer">
                <button onClick={() => navigation('/challenge1')} className="submit">Challenge 1</button>
                <button onClick={() => navigation('/challenge2')} className="submit">Challenge 2</button>
            </div>
        </div>
    );
}

export default Home;