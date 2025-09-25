// Create a new file: src/components/ConnectionLines.js
import React, { useEffect, useRef } from 'react';


const ConnectionLines = ({ connections }) => {
  const svgRef = useRef(null);
  const isMouseDown = useRef(false);

  const drawLines = () => {
    if (!svgRef.current) return;
    
    // Clear previous lines
    while (svgRef.current.firstChild) {
      svgRef.current.removeChild(svgRef.current.firstChild);
    }
    /*
    // Add test line at the bottom
    const testLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    testLine.setAttribute('x1', 0);
    testLine.setAttribute('y1', window.innerHeight - 50);
    testLine.setAttribute('x2', 200);
    testLine.setAttribute('y2', window.innerHeight - 50);
    testLine.setAttribute('stroke', 'red');
    testLine.setAttribute('stroke-width', '5');
    svgRef.current.appendChild(testLine);
    */
    connections.forEach(connection => {
      const box1 = document.getElementById(connection.from);
      const box2 = document.getElementById(connection.to);
      
      if (box1 && box2) {
        const rect1 = box1.getBoundingClientRect();
        const rect2 = box2.getBoundingClientRect();
        
        const x1 = rect1.left + rect1.width / 2;
        const y1 = rect1.top + rect1.height / 2;
        const x2 = rect2.left + rect2.width / 2;
        const y2 = rect2.top + rect2.height / 2;
        
        const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        line.setAttribute('x1', x1);
        line.setAttribute('y1', y1);
        line.setAttribute('x2', x2);
        line.setAttribute('y2', y2);
        line.setAttribute('stroke', 'white');
        line.setAttribute('stroke-width', '3');
        
        svgRef.current.appendChild(line);
      }
    });
  };

  useEffect(() => {
    // Draw immediately
    drawLines();
    
    // Redraw when window resizes or scrolls
    const handleResize = () => drawLines();
    const handleScroll = () => drawLines();
    
    // Track mouse button state
    const handleMouseDown = () => {
      isMouseDown.current = true;
      // Clear lines when drag starts
      if (svgRef.current) {
        while (svgRef.current.firstChild) {
          svgRef.current.removeChild(svgRef.current.firstChild);
        }
      }
    };
    
    const handleMouseMove = (e) => {
      // Only update lines if mouse button is down (dragging)
      if (isMouseDown.current) {
        drawLines();
      }
    };
    
    const handleMouseUp = () => {
      isMouseDown.current = false;
      // Redraw lines when drag ends
      setTimeout(drawLines, 50);
    };
    
    // Check mouse button state on any mouse event
    const handleMouseEvent = (e) => {
      isMouseDown.current = e.buttons > 0;
    };
    
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseenter', handleMouseEvent);
    document.addEventListener('mouseleave', handleMouseEvent);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseenter', handleMouseEvent);
      document.removeEventListener('mouseleave', handleMouseEvent);
    };
  }, [connections]);

  return (
    <svg
      ref={svgRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 999,
      }}
    />
  );
};

export default ConnectionLines;