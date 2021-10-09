import React from "react";
// import Button from 'react-bootstrap/Button';
// reactstrap components
import { Card, Container, Row, ListGroup } from "reactstrap";
// import './Home.css';
import './EntryOrExit.css';
// core components
import EmptyHeader from "components/Headers/EmptyHeader.js";


// const EntryOrExit = () => {
//   return (
//     <>
//     <h1>נא הקישי מספר זהות:</h1>
//       <EmptyHeader />
//       {/* EntryOrExit content */}
//       <input type="text" placeholder="מספר זהות" ></input>

//     </>
//   );
// };

// export default EntryOrExit;
class EntryOrExit extends React.Component {
    constructor(props) {
        super(props);
        this.state = { userid: '' };
    }
    myChangeHandler = (event) => {
        this.setState({ userid: event.target.value });
    }
    render() {
        return (
            <div className="EntryOrExit">
                <EmptyHeader />
                {/* EntryOrExit content */}
                <p className="p"></p>
                <h1 className="home">  {this.state.userid}:  שלום ל  </h1>
                <button className="a">יציאה</button>
                <button className="a">כניסה</button>

                {/* <ButtonGroup>
                    <Button>1</Button>
                    <Button>2</Button>

                    <DropdownButton as={ButtonGroup} title="Dropdown" id="bg-nested-dropdown">
                        <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
                        <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
                    </DropdownButton>
                </ButtonGroup> */}
            </div>
        );
    }
}

//   ReactDOM.render(<EntryOrExit />, document.getElementById('root'));
export default EntryOrExit;