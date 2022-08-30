import styles from './Sidebar.module.css';
import { PencilLine } from 'phosphor-react';
export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img 
                className={styles.cover}
                src="https://images.unsplash.com/photo-1618641986557-1ecd230959aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=50" />
            <div className={styles.profile}>
                <img 
                className={styles.avatar}
                src="https://avatars.githubusercontent.com/u/101819736?v=4" />

                <strong>Jhonata Nogueira</strong>
                <span>Web Developer</span>
            </div>
            <footer>
                
                <a href="#">
                    <PencilLine size={20}/>
                    Editar o seu perfil
                </a>
            </footer>
        </aside>
    );
}