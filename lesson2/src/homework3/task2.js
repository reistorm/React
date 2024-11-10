
import { useState, React } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import '../App.css'

export default function TodoList() {
    const [ task, setTask] = useState('');
    const [ cards, setCards ] = useState(['task1']);

    const addTask = () => {
        setCards([...cards, task])
        setTask('')
    }
    
    function takeTask(e) {
        setTask(e.target.value)
    }
    function deleteTask(value) {
        setCards(item => item.filter(cardText => cardText !== value))
    };

    return (
        <>
        <h2 className='h2_todolist'>Список дел с Material UI</h2>
        <div className='container'>
            <TextField id="outlined-basic" label="Задача" variant="outlined" onChange={takeTask} value={task} />
            <Button variant="outlined" onClick={addTask}>Добавить задачу</Button>
            <ul className='todolist card'>
                {cards.map((el, index) => 
                <li key={index++}>
                    <Card variant="outlined" id={`card${index}`}>{el}
                        <Stack direction="row" spacing={1} onClick={() => deleteTask(el)}>
                            <IconButton aria-label="delete">
                                <DeleteIcon />
                            </IconButton>
                        </Stack>
                    </Card>
                </li>)}
            </ul>
        </div>
        </>
    );
}