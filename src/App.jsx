import React from 'react';
import home from './components/home';
import note from './components/note';
import task from './components/task';
import quiz from './components/quiz';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';



function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <><home/></>,
        },
        {
            path: "/quiz",
            element: <><quiz/></>,
        },
        {
            path: "/task",
            element: <><task/></>,
        },
        {
            path: "/note",
            element: <><note/></>,
        }
    ]);

    return (
        <>
            <RouterProvider router={router} />
        </>
    );

}
export default App;