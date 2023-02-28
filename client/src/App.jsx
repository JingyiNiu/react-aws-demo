import { useEffect, useState } from 'react';
import './App.css';

function App() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((json) => setData(json));
    }, []);

    return (
        <>
            <div className="app">
                <div className="header">
                    <div className="">
                        <a href="/">
                            <svg
                                width="40"
                                height="40"
                                viewBox="0 0 1000 1000"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g clip-path="url(#clip0_1_2)">
                                    <circle cx="500" cy="500" r="500" fill="#86D1D6" />
                                    <path
                                        d="M339.233 280.234C311.735 300.438 313.143 583.163 317.284 722H369.05C371.397 617.113 377.002 405.435 380.646 397.817C385.201 388.295 586.883 722 649.417 722C699.443 722 687.24 427.489 675.921 280.234H639.892C638.373 385.535 632.106 599.117 619.185 611.041C603.034 625.946 373.606 254.978 339.233 280.234Z"
                                        fill="white"
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0_1_2">
                                        <rect width="1000" height="1000" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </a>
                    </div>
                </div>
                <div className="content">
                    <div className="container">
                        <div className="title">Hi there</div>
                        <div className="data">
                            {data &&
                                data.map((item) => {
                                    return <div key={item.id}>{item.title}</div>;
                                })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
