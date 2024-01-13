
import './App.css'
import Grid from './Grid'
import Column from './Column'
import { TextInput } from '@mantine/core'
import { useState } from 'react';
import { createTheme, MantineProvider } from '@mantine/core';

const theme = createTheme({
  /** Your theme override here */
});

export type Person = {
    firstName: string;
    lastName: string;
    address: string;
    city: string;
    state: string;
  };
  
function App() {
  
  const data: Person[] = [
    {
      firstName: 'Zachary',
      lastName: 'Davis',
      address: '261 Battle Ford',
      city: 'Columbus',
      state: 'Ohio',
    },
    {
      firstName: 'Robert',
      lastName: 'Smith',
      address: '566 Brakus Inlet',
      city: 'Westerville',
      state: 'West Virginia',
    },
    {
      firstName: 'Kevin',
      lastName: 'Yan',
      address: '7777 Kuhic Knoll',
      city: 'South Linda',
      state: 'West Virginia',
    },
    {
      firstName: 'John',
      lastName: 'Upton',
      address: '722 Emie Stream',
      city: 'Huntington',
      state: 'Washington',
    },
    {
      firstName: 'Nathan',
      lastName: 'Harris',     
      address: '1 Kuhic Knoll',
      city: 'Ohiowa',
      state: 'Nebraska',
    },
  ];

  const [persons, setPersons] = useState<Person[]>(data)

  return (
    <MantineProvider theme={theme}>
      <div className="card">
        <Grid gridData={persons} setGridData={setPersons}>
          <Column key={'firstName'} 
                  header={'FirstName'}
                  render={(cell:any,onChange)=><TextInput onChange={event=>onChange?.(event.target.value)} value={cell} />}               
                  />
          <Column key={'lastName'} header={'LastName'} />
          <Column key={'address'} header={'Address'}/>
          <Column key={'city'} header={'City'}/>
          <Column key={'state'} header={'State'}/>
        </Grid>
      </div>
    </MantineProvider>
  )
}

export default App
