import { Header } from './components/Header';
import { Projects } from './components/Projects';
import { Footer } from './components/Footer';

import style from './App.module.css';
import './global.css';

export function App() {

  return (
    <div>
      <Header />
      <Projects />
      <Footer />
    </div>
  )
}


