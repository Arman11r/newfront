import React from 'react';
import './task.css'; // Import your CSS file

const TaskSolver = () => {
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

            <section className="task-section">
                <h1 className="taskgen">Your Own Task Solver</h1>
                <form className="task-form">
                    <label className="pdf">Upload Your Notes (Optional):</label>
                    <input type="file" />

                    <label className="ques">Upload An Image (Optional):</label>
                    <input type="file" />

                    <label className="lang">Enter Your Prompt:</label>
                    <input type="text" placeholder="Enter Your Prompt Here" />

                    <label className="watermark">Select a Watermark for PDF:</label>
                    <select name="colr" id="colr">
                        <option value="color">Color</option>
                        <option value="bnw">Black and White</option>
                        <option value="none">None</option>
                    </select>

                    <button type="submit">Submit</button>
                </form>
            </section>
        </div>
    );
};

export default TaskSolver;