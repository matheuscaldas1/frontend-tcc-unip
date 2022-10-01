import React, { useState, useEffect } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import {
    Box,
    Modal,
    Typography
} from '@mui/material';

ChartJS.register(ArcElement, Tooltip, Legend);

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

type ModalResultadoProps = {
    show: boolean,
    handleShow: () => void,
}

type ChartDataProps = {
    labels: string[],
    datasets: {
        label: string,
        data: number[],
        backgroundColor: string[],
        borderColor: string[],
        borderWidth: number
    }[],
}

const ModalResultado: React.FC<ModalResultadoProps> = ({ show, handleShow }) => {
    const [open, setOpen] = useState(false);
    const handleClose = () => setOpen(false);
    const chartData: ChartDataProps = {
        labels: ['verdadeiro', 'falso'],
        datasets: [
            {
                label: 'Probabilidade',
                data: [60, 40],
                backgroundColor: [
                    'rgb(94, 226, 84)',
                    'rgb(238, 81, 81)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 0,
            }
        ],
    }

    useEffect(() => {
        if (show) {
            setOpen(true);
        }
    }, [show])

    return (
        <div>
            <Modal
                open={show}
                onClose={handleShow}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Resultados
                    </Typography>
                    <Pie data={chartData} />
                </Box>
            </Modal>
        </div>
    );
}

export default ModalResultado;
