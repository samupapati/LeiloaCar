import { useState } from "react";
import Card from 'react-bootstrap/Card';
import Table from "react-bootstrap/esm/Table";
import Form from 'react-bootstrap/Form';
import { TbCircleCheck, TbXboxX } from "react-icons/tb";
import { toast } from "react-toastify";



function ModalChange({currentChangeItem, handleChangeItemInData, handleModal}){
    const [valueInputModelo, setValueInputModelo] = useState(currentChangeItem['modelo']);
    const [valueInputMarca, setValueInputMarca] = useState(currentChangeItem['marca']);
    const [valueInputAno, setValueInputAno] = useState(currentChangeItem['ano']);
    const [valueInputPreco, setValueInputPreco] = useState(currentChangeItem['preco']);

    function handleInputs(elementId, elementValue){
        switch (elementId){
            default:
                break;
            case 'input-modelo-change':
                setValueInputModelo(elementValue);
                break;
            case 'input-marca-change':
                setValueInputMarca(elementValue);
                break;
            case 'input-ano-change':
                setValueInputAno(elementValue);
                break;
            case 'input-preco-change':
                setValueInputPreco(elementValue);
                break;
        }
    }

    return(
        <div className="modal-container">
            <div className="modal-back" onClick={() => handleModal()}></div>
            <Card className="w-50 modall" id="modal">
                <Card.Header>Modificar veiculo</Card.Header>
                <Card.Body>
                    <Table striped borderless hover>
                        <tr>
                            <th>ID</th>
                            <td>{currentChangeItem['id']}</td>
                        </tr>
                        <tr>
                            <th>Modelo</th> 
                            <Form.Control className="" type="text" id="input-modelo-change" value={valueInputModelo} onChange={(e) => handleInputs(e.target.id, e.target.value)}/>
                        </tr> 
                        <tr>
                            <th>Marca</th> 
                            <Form.Control className="" type="text" id="input-marca-change" value={valueInputMarca} onChange={(e) => handleInputs(e.target.id, e.target.value)}/>
                        </tr>
                        <tr>
                            <th>Ano</th> 
                            <Form.Control className="" type="text" id="input-ano-change" value={valueInputAno} onChange={(e) => handleInputs(e.target.id, e.target.value)}/>
                        </tr>
                        <tr>
                            <th>Preço</th> 
                            <Form.Control className="" type="text" id="input-preco-change" value={valueInputPreco} onChange={(e) => handleInputs(e.target.id, e.target.value)}/>
                        </tr>
                    </Table>
                    <hr/>
                    <button className="button button-icon" onClick={() => {
                            if(
                                valueInputModelo !== '' &&
                                valueInputMarca !== '' &&
                                valueInputAno !== '' &&
                                valueInputPreco !== ''
                            ){
                                handleChangeItemInData(
                                    {
                                        id: currentChangeItem['id'],
                                        modelo: valueInputModelo,
                                        marca: valueInputMarca,
                                        ano: valueInputAno,
                                        preco: valueInputPreco,
                                    }
                                )
                                handleModal()
                                toast.success('Veiculo alterado', {
                                    position: "bottom-right",
                                    autoClose: 1000,
                                    hideProgressBar: false,
                                    closeOnClick: true,
                                    pauseOnHover: true,
                                    draggable: true,
                                    progress: undefined,
                                    theme: "light",
                                });
                            }
                        }}><TbCircleCheck className="button-icon_icon"/></button>
                    <button className="button button-icon" onClick={() => handleModal()}><TbXboxX className="button-icon_icon"/></button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default ModalChange;