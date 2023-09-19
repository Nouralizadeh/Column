import { ReactNode, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Grid from './Grid'
import Column from './Column'
import Example2 from './Example2'
import { css } from '@emotion/react'
import { Text, TextInput } from '@mantine/core'

export type Person = {
      firstName: string;
      lastName: string;
    address: string;
    city: string;
    state: string;
  };
  
function App() {
  
  //nested data is ok, see accessorKeys in ColumnDef below
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
  return (
    <>
      <div className="card">
        <Grid data={data} >
          <Column key={'firstName'} 
                  header={'FirstName'}
                  render={(cell:any)=><TextInput value={cell} />}               
                  ></Column>
          <Column key={'lastName'} header={'LastName'} ></Column>
          <Column key={'address'} header={'Address'}></Column>
          <Column key={'city'} header={'City'}></Column>
          <Column key={'state'} header={'State'}></Column>
        </Grid>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
