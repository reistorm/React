import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';

import '../App.css'
import { useState, React } from 'react';


export default function TodoList() {

    const [task, setTask] = useState('');
    const[cards, setCards] = useState(['task1']);

    const addTask = () =>{
        setCards([...cards, task])
        setTask('')
    }
    const takeTask = (e) => {
        setTask(e.target.value);
    }
    function deleteFunc(value)  {
        setCards(prevCards => prevCards.filter(cardText => cardText !== value))
      };


    return ( 
        <>
        <h2 className='task_two_label'>Список дел</h2>
        <div className='mainContainer'>
            <TextField id="tf" label="add task" variant="outlined" onChange={takeTask} value={task} />
            <Button variant="contained" onClick={addTask}>Add task</Button>
            <ul className='todoList card'>
                {cards.map((el, index=0) => 
                <li key={index++}>
                    <Card variant="outlined" id={`card${index}`}>{el}  
                        <Stack direction="row" spacing={1} onClick={() => deleteFunc(el)}>
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
