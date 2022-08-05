import React, { useState } from 'react'

export default function About() {
    document.title = "TextUtils - About"
    const [mode, setMode] = useState('Dark');
    const [myStyle, setStyle] = useState(
        {
            color: 'black',
            backgroundColor: 'white'
        }
    );

    const toggleStyle = () => {
        if (myStyle.color === 'white') {
            setStyle({
                color: 'black',
                backgroundColor: 'white'
            })
            setMode('Dark');
        }
        else {
            setStyle({
                color: 'white',
                backgroundColor: 'black',
                border: '0.5px solid white',
                borderRadius: '8px'
            })
            setMode('Light');
        }
    }

    return (
        <div className='container'>
            <h1 className='my-3'>About Us</h1>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button style={myStyle} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            AAnalyze your Text
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div style={myStyle} className="accordion-body">
                            <strong>TextUtils</strong> gives you a easy and efficient way to analyze your text. Be it word count or convert to lower/upper case or reverse it.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button style={myStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Free to use
                        </button>
                    </h2>
                    <div style={myStyle} id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>TextUtils</strong> is a free character counter tool that provide instant character count and word count statistics for a given text. TextUtils report the number of words and characters. Thus it is useful for writing text with words/characters limit.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" >
                    <h2 className="accordion-header" id="headingThree">
                        <button style={myStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Browser Compatibals
                        </button>
                    </h2>
                    <div style={myStyle} id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>TextUtils</strong> is word counter software works in any web browser such as Chrome, Firefox, Edge, Opera. it suits to count character in Facebook post, blog books, excel documents, pdf, essay etc.                        </div>
                    </div>
                </div>
            </div>
            <div className="container my-3">
                <button type="button" className="btn btn-dark" onClick={toggleStyle} style={myStyle}>{mode}</button>
            </div>
        </div>
    )
}
