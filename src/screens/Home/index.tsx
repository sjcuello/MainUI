import React from 'react';
import DataGrid from 'ComponentLibrary/DataGrid';
import TableMUI from 'ComponentLibrary/Table';
import TabsMUI from 'ComponentLibrary/Tab';
import { useAppDispatch, useAppSelector } from '../../../redux';
import { selectToken, setToken } from '../../../redux/user';

import { TabContent } from 'ComponentLibrary/src/interfaces';
import { Button, Grid } from 'ComponentLibrary/src/components/MUI';

const Home = () => {
  const dispatch = useAppDispatch();
  const token = useAppSelector(selectToken);

  const tabArray: TabContent[] = [
    {
      title: '🎹 Buttons',
      children: (
        <Grid container spacing={2}>
          <Grid xs={12} spacing={2}>
            <Button
              sx={{ margin: '1rem' }}
              variant="text"
              onClick={() => dispatch(setToken('1234567890'))}>
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
              color="secondary"
              onClick={() => console.log('token', token)}>
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

  return (
    <div className="container">
      <TabsMUI tabArray={tabArray} />
    </div>
  );
};

export default Home;
