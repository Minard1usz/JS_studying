import { Link } from 'react-router-dom';

const Notfoundpage = () => {
    return (
        <div>
        <h1>Not found page</h1>
        <p>This page doesn't exist. Go <Link to ="/">home</Link></p>
    </div>
    )
}

export {Notfoundpage};