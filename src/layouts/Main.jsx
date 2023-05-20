import React from 'react'
import { Outlet, useLoaderData } from 'react-router-dom';

//helper functions
import { fetchData } from '../helpers'


//loader
export function mainLoader(){
    const userName = fetchData('userName');
    return { userName }
}

const Main = () => {
    const {userName} = useLoaderData();

  return (
    <div>
        <h1>main</h1>
        <Outlet />
    </div>
  )
}

export default Main