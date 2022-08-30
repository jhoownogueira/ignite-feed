import { Header } from './components/Header';

import styles from './App.module.css';
import './global.css';
import { Post } from './assets/Post';
import { Sidebar } from './components/Sidebar';

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



