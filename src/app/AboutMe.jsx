import sample_image from 'next/image';

export default function AboutMe() {
    return(
        <div className="AboutMe">
            <div className="aboutMe_content">
                <h1>About Me</h1>
                <p>software engineer at the university of hertfordshire looking to make bank.</p>
            </div>
            <div className="image">
                <img class="image-icon" alt="image" src=""></img>
            </div>
        </div>
    );
}