import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css';


export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Jhonata Nogueira"
            content="Lorem ipsum dolor sit amet consectetur 
            adipisicing elit. Rerum repellat corporis praesentium quasi est 
            dolor nam ipsum sit, aperiam magnam voluptas veniam doloremque! 
            Ab enim, dicta maxime a nisi molestiae"
          />
          <Post
            author="Luiz Gustavo"
            content="Lorem ipsum dolor sit amet consectetur 
            adipisicing elit. Rerum repellat corporis praesentium quasi est 
            dolor nam ipsum sit, aperiam magnam voluptas veniam doloremque! 
            Ab enim, dicta maxime a nisi molestiae"
          />
        </main>

      </div>
    </>
  );
}



