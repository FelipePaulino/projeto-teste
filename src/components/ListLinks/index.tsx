import styles from '../../../styles/Home.module.css'
import { LinkComponent } from '../Link'

export const ListLinks = () => {
    return (
        <ul className={styles.container}>
            <LinkComponent name={'Primeiro Link'} link='/primeiro-link' />
            <LinkComponent name={'Segundo Link'} link='/segundo-link' />
            <LinkComponent name={'Terceiro Link'} link='/terceiro-link' />
        </ul>
    )
}
