
import { PencilLine } from 'phosphor-react';
import styles from './Sidebar.module.css';
import { Avatar } from './Avatar';

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img className={styles.cover} src='https://images.unsplash.com/photo-1584949091598-c31daaaa4aa9?auto=format&fit=crop&q=50&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />

            <div className={styles.profile}>
                
                <Avatar src="https://github.com/arivaldocamargo.png" />

                <strong>Arivaldo Camargo</strong>
                <span>Web Developer</span>
            </div>

            <footer>
               
                <a href="#"> <PencilLine  size={20}/> Editar seu perfil</a>
                
            </footer>
        </aside>
    );

}