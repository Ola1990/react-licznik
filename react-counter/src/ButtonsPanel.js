import React, {Component} from "react";

class ButtonsPanel extends Component {
    resetOrUpdate = (update) => {
        this.props.resetOrUpdateCounter(update);
        console.log(update);
    }


    render() {
        return(
                <div className="ButtonsPanel">
                <button onClick={() => this.resetOrUpdate(1)}>Zwiększ o 1</button>
                <button onClick={() => this.resetOrUpdate(0)}>Resetuj</button>
                </div>
        )
    }
}
export default ButtonsPanel;