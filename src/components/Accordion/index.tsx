import React from 'react';
import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Box,
    Typography
} from '@mui/material';

import { ExpandMore } from '@mui/icons-material';

import { useStyles } from './styles';

const Perguntas: React.FC = () => {
    const classes = useStyles();
    return (
        <div className={classes.mainDiv}>
            <Accordion square={true}>
                <AccordionSummary
                    expandIcon={<ExpandMore />}
                    id='panel1a-header'
                    aria-controls='panel1a-content'
                >
                    <Typography>Pergunta 1</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion square={true}>
                <AccordionSummary
                    expandIcon={<ExpandMore />}
                    id='panel2a-header'
                    aria-controls='panel2a-content'
                >
                    <Typography>Pergunta 2</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion square={true}>
                <AccordionSummary
                    expandIcon={<ExpandMore />}
                    id='panel3a-header'
                    aria-controls='panel3a-content'
                >
                    <Typography>Pergunta 3</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}

export default Perguntas;