import React from 'react';
import './note.css'; // Import your CSS file

const NotesGenerator = () => {
    return (
        <div>
            <nav className="navbar">
                <div className="logo">
                    <img src="your-logo.png" alt="Brightways Logo" />
                </div>
                <ul className="nav-links">
                    <li><a href="#" className="headr">Home</a></li>
                    <li><a href="#" className="headr">Note Enhancer</a></li>
                    <li><a href="#" className="headr">Quiz</a></li>
                    <li><a href="#" className="headr">Task</a></li>
                    <li><a href="#" className="headr">Grammar</a></li>
                </ul>
                <a href="#" className="register-btn">Register</a>
            </nav>

            <section className="note-section">
                <h1 className="notegen">Enhance Begins Here</h1>
                <form className="note-form">
                    <label className="pdf">Upload Your Notes (PDF Only):</label>
                    <input type="file" accept=".pdf" />

                    <label className="ques">Upload An Image:</label>
                    <input type="file" accept="image/*" />

                    <label className="lang">Preferred Language (Optional, Default: English):</label>
                    <input type="text" placeholder="Enter Your Language Here" />

                    <button type="submit">Submit</button>
                </form>
            </section>
        </div>
    );
};

export default NotesGenerator;