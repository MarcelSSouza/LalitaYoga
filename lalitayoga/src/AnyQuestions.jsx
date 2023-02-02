import React from 'react';
import logoSmall from './assets/logoSmall.png';
function AnyQuestions() {
    return (
        <div>
            <hr />
            <img src={logoSmall} style={{width: "auto", height:"17vh"}} className="image-fluid mb-3 mt-4" alt="yoga" />
            <h2>Any questions?</h2>
            <p>If you have any questions feel free to <a href="mailto:lalitayogacamp@gmail.com" > send us a message!</a></p>
        </div>
    );
}

export default AnyQuestions;