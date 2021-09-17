const repositoryName = 'Gabriel';

export function RepositoryList() {
    return (
        <section className="repository-list">
            <h1>Lista de Repositórios</h1>

            <ul>
                <li>
                    <strong>{repositoryName}</strong>
                    <p>Forms in React</p>

                    <a href="">
                        Acessar repositótorio
                    </a>
                </li>
                <li>
                    <strong>unform</strong>
                    <p>Forms in React</p>

                    <a href="">
                        Acessar repositótorio
                    </a>
                </li>
                <li>
                    <strong>unform</strong>
                    <p>Forms in React</p>

                    <a href="">
                        Acessar repositótorio
                    </a>
                </li>
                <li>
                    <strong>unform</strong>
                    <p>Forms in React</p>

                    <a href="">
                        Acessar repositótorio
                    </a>
                </li>
            </ul>
        </section>
    );
}