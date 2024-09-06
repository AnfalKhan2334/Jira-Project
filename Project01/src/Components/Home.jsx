import React, { useState } from 'react';
import { Container, TextField, Button, List, ListItem, ListItemText, ListItemSecondaryAction, IconButton, Typography, Box } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const Home = () => {
  const [tasks, setTasks] = useState([]); // Empty array for tasks
  const [task, setTask] = useState(''); // Track the new task input

  const addTask = () => {
    if (task.trim()) { // Ensure the task isn't an empty string
      setTasks((prevTasks) => [...prevTasks, { text: task, completed: false }]);
      setTask(''); // Clear input after adding the task
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ marginTop: 5 }}>
        <Typography variant="h4" gutterBottom>JIRA Project</Typography>
        
        {/* Input field for new task */}
        <TextField
          fullWidth
          label="Enter a new task..."   
          value={task}
          onChange={(e) => setTask(e.target.value)}
          margin="normal"
        />
        
        {/* Button to add task */}
        <Button
          onClick={addTask}
          variant="contained"
          color="primary"
          fullWidth
          sx={{ marginBottom: 2 }}
        >
          Add Task
        </Button>

        {/* Display tasks */}
        <List>
          {tasks.length > 0 ? (
            tasks.map((t, index) => (
              <ListItem key={index} sx={{ background: '#f9f9f9', marginBottom: 1 }}>
                <ListItemText primary={t.text} />
                <ListItemSecondaryAction>
                  <IconButton edge="end" onClick={() => deleteTask(index)}>
                    <DeleteIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            ))
          ) : (
            <Typography variant="body1" sx={{ marginTop: 2 }}>
              No tasks added yet!
            </Typography>
          )}
        </List>
      </Box>
    </Container>
  );
};

export default Home;
