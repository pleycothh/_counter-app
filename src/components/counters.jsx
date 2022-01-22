import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  // state is private an invisable to other component
  // prop is read only
  render() {
    const { onReset, onIncrement, onDecrement, onDelete, counters } =
      this.props;
    return (
      // pass attrapude to props
      // when pass between open and clos tags, use children
      // children is sepecial type of props
      <div>
        <button onClick={onReset} className="btn-primary btn-sm m2">
          Reset
        </button>

        {counters.map((counter) => (
          <Counter
            key={counter.id}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            onDelete={onDelete}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
