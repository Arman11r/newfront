import React from 'react';
import './quiz.css'; // Import your CSS file

const QuizGenerator = () => {
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

            <section className="quiz-section">
                <h1 className="quizgen">Quiz Generator</h1>
                <form className="quiz-form">
                    <label className="pdf">Upload File (PDF or Image):</label>
                    <input type="file" accept=".pdf, image/*" />

                    <label className="ques">Number of Questions:</label>
                    <input type="number" placeholder="Example: 10" />

                    <label className="lang">Preferred Language:</label>
                    <input type="text" placeholder="Example: Hindi, Spanish" />

                    <button type="submit">Submit</button>
                </form>
            </section>
        </div>
    );
};

export default QuizGenerator;