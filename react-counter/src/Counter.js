import React, {Component} from "react";
import Imie from "./Imie";
import "./Counter.css";
import Display from "./Display";
import ButtonsPanel from "./ButtonsPanel";

class Counter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            counterValue: 0
        }
    }

            resetOrUpdateCounter = (resetOrUpdate) => {
                if (resetOrUpdate ===0) {
                    this.setState({
                        counterValue: 0
                    });
                } else {
                    this.setState( (prevState) => {
                        return {
                            counterValue: prevState.counterValue + 1
                        }
                    });
                }
                        
            }


            render () {
            return (
                <div className="counter">
                <Display currentValue={this.state.counterValue} />
                    <ButtonsPanel resetOrUpdateCounter={this.resetOrUpdateCounter} />
                </div>
            )
        }
    }

export default Counter;