import arrow_image from 'next/image';

export default function ContactMe() {
    
    return (
        <div className="contact-container" >
            <div className="questions-container">
                <h1>Questions? Comments? Concerns?</h1>
                <img className="arrow-icon" src="ARROW.svg" alt="arrow icon" />
            </div>
            <h1>Contact ME</h1>
        </div>
    );
}