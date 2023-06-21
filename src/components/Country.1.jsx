import styles from './Country.module.css'
export function Country({flag, name}) {

    return (
        <article className={styles.card}>
            <div
                className={styles.flag} 
                style={{
                    backgroundImage: `url(${flag})`
                }}
                >
                    
            </div>
            <div className={styles.name}>
                    {name}
            </div>
        </article>
    )
}
