import React, { useEffect, useState } from 'react';
import { useForm, Controller, FieldValue } from 'react-hook-form';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import toast, { Toaster } from 'react-hot-toast';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker'
import {
    Backdrop,
    Box,
    Button,
    CircularProgress,
    Container,
    FormControl,
    InputLabel,
    MenuItem,
    Paper,
    Stack,
    TextField,
    Typography,
    useMediaQuery
} from '@mui/material';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ModalResultado from '../../components/Modal';
import '../../Theme/common.css';

const Servicos: React.FC = () => {
    const { register, handleSubmit, control } = useForm();
    const [analysedType, setAnalysedType] = useState('');
    const [dateValue, setDateValue] = useState<Date | null>();
    const [loading, setLoading] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const desktop = useMediaQuery('(min-width:600px)');

    useEffect(() => {
        if (loading === true) {
            setTimeout(handleLoading, 5000);
        }
    }, [loading]);

    const handleAnalyzedTypeChange = (event: SelectChangeEvent) => {
        setAnalysedType(event.target.value as string);
    };

    const handleForm = (formData: any) => {
        setLoading(true);
        console.log(formData);
    }

    const handleDateChange = (newValue: Date | null) => {
        setDateValue(newValue);
    };

    const handleLoading = () => {
        console.log(showModal)
       return (
        setLoading(false),
        setShowModal(!showModal)
       ); 
    };

    return (
        <>
            <Header />

            <Box>
                <Paper elevation={2} sx={{
                    height: '100vh',
                    minHeight: '800px',
                    padding: '24px',
                }} >
                    <Container sx={{ height: '100%' }} component='main' maxWidth='xs'>
                        <Typography component='h5' variant='h5'>
                            Realize sua Análise
                        </Typography>

                        <form className='servico-form' noValidate onSubmit={handleSubmit((data) => handleForm(data))}>
                            <Stack spacing={6}>
                                <TextField
                                    variant='outlined'
                                    margin='normal'
                                    {...register('titulo', {
                                        required: 'Required',
                                    })}
                                    fullWidth
                                    id='titulo'
                                    label='Título'
                                    name='titulo'
                                />

                                <TextField
                                    variant='outlined'
                                    margin='normal'
                                    {...register('link', {
                                        required: 'Required',
                                    })}
                                    fullWidth
                                    id='link'
                                    label='Link da Notícia'
                                    name='link'
                                />

                                <LocalizationProvider dateAdapter={AdapterDateFns}>
                                    {desktop
                                        ? <DesktopDatePicker
                                            label='Data da Notícia'
                                            inputFormat='dd/MM/yyyy'
                                            {...register('data-noticia')}
                                            value={dateValue}
                                            onChange={handleDateChange}
                                            renderInput={(params) => <TextField {...params} />}
                                        />

                                        : <MobileDatePicker
                                            label='Data da Notícia'
                                            inputFormat='dd/MM/yyyy'
                                            {...register('data-noticia')}
                                            value={dateValue}
                                            onChange={handleDateChange}
                                            renderInput={(params) => <TextField {...params} />}
                                        />}
                                </LocalizationProvider>

                                <TextField
                                    variant='outlined'
                                    margin='normal'
                                    multiline
                                    minRows={8}
                                    {...register('texto', {
                                        required: 'Required',
                                    })}
                                    fullWidth
                                    id='texto'
                                    label='Texto da Notícia'
                                    name='texto'
                                />

                                <FormControl fullWidth>
                                    <InputLabel id='tipo-de-analise'>Tipo de análise</InputLabel>
                                    <Select
                                        labelId='tipo-de-analise'
                                        id='tipo-analise'
                                        value={analysedType}
                                        label="Tipo de análise"
                                        {...register('tipo-analise', {
                                            required: 'Required',
                                        })}
                                        onChange={handleAnalyzedTypeChange}

                                    >
                                        <MenuItem value='Bert'>Bert</MenuItem>
                                        <MenuItem value='BubbleSort'>BubbleSort</MenuItem>
                                        <MenuItem value='QuickSort'>QuickSort</MenuItem>
                                    </Select>
                                </FormControl>

                                <Button
                                    type='submit'
                                    fullWidth
                                    variant='contained'
                                    color='primary'
                                >
                                    Enviar
                                </Button>
                                <Backdrop
                                    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1, margin: '0 !important'}}
                                    open={loading}
                                >
                                    <CircularProgress color="inherit" />
                                </Backdrop>
                            </Stack>
                        </form>
                        <Toaster />
                    </Container>
                </Paper>
            </Box>
            <ModalResultado show={showModal} handleShow={handleLoading} />

            <Footer />
        </>
    )
}

export default Servicos;
