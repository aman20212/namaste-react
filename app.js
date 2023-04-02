import React from "react";
import ReactDOM from "react-dom";


// React createElement => Object => HTML Element (when rendered to DOM)

const heading = React.createElement("h1", {id: 'heading'}, "Namaste React");

// JSX = is not HTML || HTML Like Syntax or XML Like
//JSX (transpiled before it reaches the JS) -PARCEL
// JSX => React.createElement => JS Object => HTML Element (when rendered to DOM)
// Babel is responsible to transpile are code
const Title = () => <h1 id="heading">Namaste React Using JSX</h1>;


//React Component
// Class Based Component - OLD
// Functional Component -  NEW

// React Function Component
//Component Composition
const HeadingComponent1 = () => {
    return (
        <React.Fragment>
            <Title></Title>
            <React.Fragment>
                <h3>Inside Second Fragment1</h3>
            </React.Fragment>
        </React.Fragment>
    );
}; 

const HeadingComponent2 = () => {
    return (
        <React.Fragment>
            <Title></Title>
            <React.Fragment>
                <h3>Inside Second Fragment2</h3>
            </React.Fragment>
        </React.Fragment>
    );
}; 

const root1 = ReactDOM.createRoot(document.getElementById('root'));
const root2 = ReactDOM.createRoot(document.getElementById('root'));

root1.render(<HeadingComponent1 />);
root2.render(<HeadingComponent2 />);