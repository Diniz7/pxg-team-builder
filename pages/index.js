import Link from 'next/link';

function Home() {
    return (<div>
        <h1>Home</h1>
        <Link href="/sobre">
            <a>Acessar Pagina Sobre</a>
        </Link>
        <Link href="/tempo">
            <a>Acessar Pagina Tempo</a>
        </Link>
        </div>)
}

export default Home