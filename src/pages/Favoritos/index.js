import Banner from 'componets/Banner'
import styles from './Favoritos.module.css'
import Titulo from 'componets/Titulo'
import Card from 'componets/Card'
import { useFavoritoContext } from 'contextos/Favoritos'

function Favoritos() {
    const { favorito } = useFavoritoContext()
    return (
        <>
        <Banner imagem='favoritos'/>
        <Titulo>
            <h1>Meus Favoritos</h1>
        </Titulo>
        <section className={styles.container}>
            {favorito.map((fav) => {
                return <Card {...fav} key={fav.id} />
            })}
        </section>
        </>
    )
}

export default Favoritos