import styles from './Tasks.module.css';
import { Trash,  } from "phosphor-react";

export function Tasks(){

 
    
    return(
        <div className={styles.container}>  
        
        <div className={styles.countTasks}>
         <p>Tarefas criadas</p> <p>Concluidas</p>
        </div>

        <div className={styles.tasksList}>
        {/* <input type="radio"></input> */}
      
        <p>Lavar tenis e mochila</p> 
          <Trash size={24}/>  
          </div>
        <div className={styles.tasksList}>
        {/* <input  type="radio" ></input> */}
          <p>Tomar café as 10horas</p> 
          <Trash size={24}/> 
        </div>

        </div>
    )
}