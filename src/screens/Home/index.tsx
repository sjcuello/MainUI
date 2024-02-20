import React from 'react';
import { Button, Grid } from 'ComponentLibrary/MUI';
import DataGrid from 'ComponentLibrary/DataGrid';
import TableMUI from 'ComponentLibrary/Table';
import TabsMUI from 'ComponentLibrary/Tab';
import { useAppDispatch, useAppSelector } from '../../../redux';
import { selectData } from '../../../redux/user';

const Home = () => {
  const tabArray: any[] = [
    {
      title: '🎹 Buttons',
      children: (
        <Grid container spacing={2}>
          <Grid xs={12} spacing={2}>
            <Button
              sx={{ margin: '1rem' }}
              variant="text"
              onClick={() => console.log('ejemplo')}>
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
            <Button
              sx={{ margin: '1rem' }}
              variant="contained"
              color="secondary">
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
            <Button
              sx={{ margin: '1rem' }}
              variant="contained"
              color="tertiary">
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
  const dispatch = useAppDispatch();
  const data = useAppSelector(selectData);
  console.log('data', data);
  return (
    <div className="container">
      <TabsMUI tabArray={tabArray} />
    </div>
  );
};

export default Home;
