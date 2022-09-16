import type { NextPage } from "next";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const palavraTeste = "Esse";

  const isPalindromo = (palavra: string) => {
    const count = palavra.length
    const initial = 0
    const divisor = count / 2
    const firstLetter = palavra[initial].toLocaleLowerCase()
    const lastLetter = palavra[count - 1].toLocaleLowerCase()
    const secoundLetter = palavra[initial + 1].toLocaleLowerCase()
    const lastSecoundLetter = palavra[count - 2].toLocaleLowerCase()
for(let i = 0; i < palavra.length; i = i + 1 ) {
    console.log('[for]', palavra[i]);
}
    if (firstLetter === lastLetter) {
return true
    }
    return false;
  };
  return (
    <button
      className={styles.container}
      onClick={() => isPalindromo(palavraTeste)}
    >
      teste
    </button>
  );
};

export default Home;
