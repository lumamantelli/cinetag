import Cabecalho from "componets/Cabecalho"
import Container from "componets/Container"
import Rodape from "componets/Rodape"
import FavoritosProvider from "contextos/Favoritos"
import { Outlet } from "react-router-dom"

function PaginaBase() {
    return (
        <main>
            <Cabecalho/>
            <FavoritosProvider>
                <Container>
                    <Outlet/>
                </Container>
            </FavoritosProvider>
            <Rodape/>
        </main>
    )
}

export default PaginaBase