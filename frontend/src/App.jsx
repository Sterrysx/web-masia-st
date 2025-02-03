import { useState, useEffect } from 'react';

function App() {
    const [message, setMessage] = useState('');

    useEffect(() => {
        fetch('/api/test')
            .then(res => res.json())
            .then(data => setMessage(data.message));
    }, []);

    return (
        <div>
            <h1>Welcome to My Frontend 🚀</h1>
            <p>{message}</p>
        </div>
    );
}

export default App;
