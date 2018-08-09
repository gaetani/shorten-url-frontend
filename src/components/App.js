import React from 'react'
import Footer from './Footer'
import AddShortener from '../containers/AddShortener'
import VisibleShortenerList from '../containers/VisibleShortenerList'

const App = () => (
  <div>
    <AddShortener />
    <VisibleShortenerList />
    <Footer />
  </div>
)

export default App
