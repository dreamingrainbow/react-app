import React from 'react';

import { Typography } from '@mui/material';

import { Accordion, AccordionSummary, AccordionDetails } from './accordion';

export function Accordions({ items }) {
  const [expanded, setExpanded] = React.useState('panel1');
  const handleChange = (panel) => (_event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <div>
      {items.map((item, index) => (
        <Accordion
          expanded={expanded === `panel${index + 1}`}
          onChange={handleChange(`panel${index + 1}`)}
          key={`accordion-${index}`}
        >
          <AccordionSummary
            aria-controls={`panel${index + 1}d-content`}
            id={`panel${index + 1}d-header`}
          >
            <Typography>{item.title}</Typography>
          </AccordionSummary>
          <AccordionDetails>{item.content}</AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
