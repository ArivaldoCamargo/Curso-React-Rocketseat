import styles from './Input.module.css';
import { PlusCircle } from "phosphor-react";

export function Input() {

    return (
        <form className={styles.taskForm}>

            <input
                className={styles.input}
                placeholder="Adicione uma nova tarefa"
            />
            <button type="submit" className={styles.button}>Criar
                <PlusCircle size={16} />
            </button>
        </form>
    )
}





// export function Input({ handleAdd }) {
//  const [inputValue, setInputValue] = React.useState('');

//  const handleChange = (e) => {
//     setInputValue(e.target.value);
//  };

//  const handleSubmit = (e) => {
//     e.preventDefault();
//     if (inputValue.trim()) {
//       handleAdd(inputValue);
//       setInputValue('');
//     }
//  };

//  return (
//     <form className={styles.form} onSubmit={handleSubmit}>
//       <input
//         className={styles.input}
//         type="text"
//         placeholder="Adicione uma nova tarefa"
//         value={inputValue}
//         onChange={handleChange}
//       />
//       <button className={styles.button} type="submit">
//         Criar
//       </button>
//     </form>
//  );
// }