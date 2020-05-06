import React, { useRef, useEffect } from "react";
import { select } from "d3";
import "./App.css";

const data = [24, 30, 45, 60, 20];

function App() {
  const svgRef = useRef();
  console.log(svgRef);

  useEffect(() => {
    console.log(svgRef);
    const svg = select(svgRef.current);
    svg
    .selectAll("circle")
    .data(data)
    .join(
      enter => 
        enter
          .append('circle')
          .attr('r', value => value)
          .attr('cx', value => value * 2)
          .attr('cy', value => value * 2)
          .attr('stroke', 'blue'),
      update => update.attr('class', 'update'),
      exit => exit.remove()
    );
    console.log(svg.selectAll("circle").data(data));
  }, []);
  return (
    <div>
      <h1>Hello World</h1>
      <svg ref={svgRef}></svg>
    </div>
  );
}

export default App;
