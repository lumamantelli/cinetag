import { Link } from 'react-router-dom'
import logo from './logo.svg'
import styles from './Cabecalho.module.css'
import CabecalhoLink from '../CabecalhoLink'

function Cabecalho() {
    return(
        <header className={styles.cabecalho}>
            <Link to='./'>
                <img 
                    src={logo}
                    alt='Logo Cine Tag'
                />
            </Link>
            <nav>
                <CabecalhoLink url='./'>
                    Home
                </CabecalhoLink>
                <CabecalhoLink to='./Favoritos'>
                    Favoritos
                </CabecalhoLink>
            </nav>
        </header>
    )
}

export default Cabecalho