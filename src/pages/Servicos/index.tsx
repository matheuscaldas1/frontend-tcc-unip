import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { useForm, Controller } from 'react-hook-form';
import Select, { SelectChangeEvent } from '@mui/material/Select';
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

const useStyles = makeStyles((theme) => ({
    form: {
        width: '100%',
    }
}))

const Servicos: React.FC = () => {
    const classes = useStyles();
    const { register, handleSubmit, control } = useForm();
    const [analysedType, setAnalysedType] = useState('');

    const handleAnalyzedTypeChange = (event: SelectChangeEvent) => {
        setAnalysedType(event.target.value as string);
    };

return (
    <>
        <Header />
        
        <Box>
            <Paper elevation={2}>
                <Container component='main' maxWidth='xs'>
                    <Typography component='h1' variant='h5'>
                        Realize sua Análise
                    </Typography>

                    <form className={classes.form} noValidate onSubmit={handleSubmit((data) => console.log(data))}>
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
                </Container>
            </Paper>
        </Box>

        <Footer />
    </>
)
}

export default Servicos;