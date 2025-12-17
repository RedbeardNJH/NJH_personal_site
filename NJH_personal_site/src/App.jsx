import { useState } from 'react'
import './App.css'
import Header from './Header'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <div class="image_container">
          <img src="https://static.wikia.nocookie.net/mtgsalvation_gamepedia/images/e/ec/Progenitus.jpg"/>
          <img src="https://media.istockphoto.com/id/1496615445/photo/portrait-of-beautiful-happy-woman-smiling-during-sunset-outdoor.jpg?s=612x612&w=0&k=20&c=_HXfCjbresNg_9Y-z1XHrw-JPBzov9l39RK_8Qmv7nk="/>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn_SnbOBt9UoNy8Yft_ZGSr6kBDugy0O0jXQ&s"/>
        </div>
      </main>
    </>
  )
}