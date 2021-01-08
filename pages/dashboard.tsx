import styles from '../styles/Dashboard.module.css'

export default function Dashboard(props) {
    return (
        <form>
            <h1>Hello,{props.name}</h1>
            <h2 className={styles.red}>Form goes here!</h2>
        </form>
    )
}