import { useState } from 'react'
import UseRoutesCustom from './hooks/UseRoutesCustom'


function App() {
  const routes = UseRoutesCustom();
  return routes;
}

export default App
