import React from 'react';
import ReactDOM from 'react-dom/client';

import { Button, Grid } from 'ComponentLibrary/MUI';
import DataGrid from 'ComponentLibrary/DataGrid';
import TableMUI from 'ComponentLibrary/Table';
import TabsMUI from 'ComponentLibrary/Tab';
import ThemeContainer from 'ComponentLibrary/ThemeContainer';

import './index.css';

const tabArray: any[] = [
  {
    title: '🎹 Buttons',
    children: (
      <Grid container spacing={2}>
        <Grid xs={12} spacing={2}>
          <Button sx={{ margin: '1rem' }} variant="text">
            Primary
          </Button>
          <Button sx={{ margin: '1rem' }} variant="contained">
            Primary
          </Button>
          <Button sx={{ margin: '1rem' }} disabled={true} variant="contained">
            Primary
          </Button>
          <Button sx={{ margin: '1rem' }} variant="outlined">
            Primary
          </Button>
          <Button sx={{ margin: '1rem' }} disabled={true} variant="outlined">
            Primary
          </Button>
        </Grid>
        <Grid xs={12}>
          <Button sx={{ margin: '1rem' }} variant="contained" color="secondary">
            Secondary
          </Button>
          <Button
            sx={{ margin: '1rem' }}
            disabled={true}
            variant="contained"
            color="secondary">
            Secondary
          </Button>
        </Grid>
        <Grid xs={12}>
          <Button sx={{ margin: '1rem' }} variant="contained" color="tertiary">
            Tertiary
          </Button>
          <Button
            sx={{ margin: '1rem' }}
            disabled={true}
            variant="contained"
            color="tertiary">
            Tertiary
          </Button>
        </Grid>
      </Grid>
    ),
  },
  { title: '📦 Simple Table', children: <TableMUI /> },
  { title: '⚡️ Data Grid', children: <DataGrid /> },
];

const App = () => (
  <ThemeContainer>
    <div className="container">
      <TabsMUI tabArray={tabArray} />
    </div>
  </ThemeContainer>
);
const rootElement = document.getElementById('app');
if (!rootElement) throw new Error('Failed to find the root element');

const root = ReactDOM.createRoot(rootElement as HTMLElement);

root.render(<App />);
