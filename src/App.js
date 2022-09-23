import React from "react";

class App extends React.Component {

    /*
        Using an older constructor method, remove arrow functions 
        and instead use .bind() in the constructor. Scirmba JS course 
        deep dive classes goes into this in more depth.
    */


    //Scrimba Notes
    /*
     * If you can't use class fields in your class components
     * for some reason, then you'll need to make use of the
     * class' `constructor` method to initialize your state object.
     * The first line of the constructor method should be a call
     * to `super()` like you see below, and then you can add your
     * state variable as a property attached to `this`
     */

    constructor(props) {
        super(props);
        this.state = { blueText: true }
        this.handleClick = this.handleClick.bind(this)
    }

    /*
     * If you can't use arrow functions for your class methods,
     * you'll need to make sure to `bind` them inside the 
     * constructor above.
     */

    handleClick() {
        this.setState(s=>({ blueText: (!s.blueText) }))
    }

    render() {
        const style = {
            cursor: "pointer",
            backgroundColor: (this.state.blueText) ? "lightgreen" : ""
        }

        return (
            <button style={style} onClick={this.handleClick}>Click!</button>
        )

    }
}

export default App