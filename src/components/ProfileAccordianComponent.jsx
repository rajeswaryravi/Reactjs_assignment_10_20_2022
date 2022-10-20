import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './css/ProfileAccordianComponent.css';

export default function ProfileAccordianComponent(props) {
  return (
    <div className="employeeaccordian">
        <h4>Assignment 3</h4>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className="emploname">Elite</Typography>
        </AccordionSummary>
        <AccordionDetails className="accordian_flex">
          <Typography className="ename">
        Elite
          </Typography>
          <Typography className="ename">
         {/* <img src="{props.employee.img}" alt="profile_image"></img> */}
          </Typography>
          
          <Typography className="eabout">
         What an 'About Us' page should be is a goal-oriented sales page, one that focuses on highlighting the biggest selling points of your story and brand at the top of the page, making a strong first impression on curious customers
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className="emploname">John</Typography>
        </AccordionSummary>
        <AccordionDetails className="accordian_flex">
          <Typography className="ename">
          John
          </Typography>
          
          <Typography className="eabout">
          What an 'About Us' page should be is a goal-oriented sales page, one that focuses on highlighting the biggest selling points of your story and brand at the top of the page, making a strong first impression on curious customers
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className="emploname">Krishna</Typography>
        </AccordionSummary>
        <AccordionDetails className="accordian_flex">
          <Typography className="ename">
          Krishna
          </Typography>
          
          <Typography className="eabout">
          What an 'About Us' page should be is a goal-oriented sales page, one that focuses on highlighting the biggest selling points of your story and brand at the top of the page, making a strong first impression on curious customers
          </Typography>
        </AccordionDetails>
      </Accordion>
      
    </div>
  );
}