import Table from 'react-bootstrap/Table';
import { useState, useEffect } from 'react';
import AnimalRequestes from '../../fetch/AnimalRequests';

function listaAnimais() {

    const [animais, setAnimais] = useState([]);
    useEffect(()=>{
        fetchData();
    }, []);

    const deletarAnimal = async (id) => {
        const confirma = window.confirm(Deseja deletar o animal com o id ${id}?)
        if(confirma){
            if (await AnimalRequestes.deletarAnimal(id)){
                window.alert(Animal deletado com sucesso);
                window.location.reload();
            } else {
                window.alert(Erro ao deletar o animal)
            }
        }
    }

    return (
        <>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Idade</th>
                        <th>Genero</th>
                        <th>Envergadura</th>
                        <th>Ação</th>
                    </tr>
                </thead>
                <tbody>
                    {Animais.length > 0 ? (
                        animais.map((animal)=>(
                            <tr>
                            <td>{animal.nomeanimal}</td>
                            <td>{animal.idadeanimal}</td>
                            <td>{animal.generoanimal}</td>
                            <td>{animal.envergaduraanimal}</td>
                            <td onClick={() => deletarAnimal(animal.idanimal)}>Deletar</td>
                        </tr>
                        )
                        )) : (
                            <p>carregando ... verifique se o servidor esta conectado</p>
                        )}
                </tbody>
            </Table>
        </>
    );
}
;
export default BasicExample