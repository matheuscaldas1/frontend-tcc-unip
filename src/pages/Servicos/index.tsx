import React, { useState } from 'react';
import { useForm, Controller, FieldValue } from 'react-hook-form';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import toast, { Toaster } from 'react-hot-toast';
import { 
    Box,
    Button,
    Container,
    FormControl,
    InputLabel,
    MenuItem,
    Paper,
    TextField,
    Typography
 } from '@mui/material';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import '../../Theme/common.css';

const Servicos: React.FC = () => {
    const { register, handleSubmit, control } = useForm();
    const [analysedType, setAnalysedType] = useState('');

    const handleAnalyzedTypeChange = (event: SelectChangeEvent) => {
        setAnalysedType(event.target.value as string);
    };

    const handleForm = (formData: any) => {
        toast.success('Infos aparecem no console.log');
        console.log(formData);
    }

return (
    <>
        <Header />
        
        <Box>
            <Paper elevation={2} sx={{height: '100vh',
        padding: '24px',}} >
                <Container sx={{ height: '100%'}} component='main' maxWidth='xs'>
                    <Typography component='h5' variant='h5'>
                        Realize sua Análise
                    </Typography>

                    <form className='servico-form' noValidate onSubmit={handleSubmit((data) => handleForm(data))}>
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

                        <Typography component='p'>
                            Aqui vai vir a data
                        </Typography>

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
                    </form>
                    <Toaster />
                </Container>
            </Paper>
        </Box>

        <Footer />
    </>
)
}

export default Servicos;
