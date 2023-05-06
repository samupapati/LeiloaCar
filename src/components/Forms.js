import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Card from 'react-bootstrap/Card';
import { TbCircleCheck } from "react-icons/tb";
import { toast } from "react-toastify";

function Forms({ handleItem }) {
    const [id, setId] = useState(0)
    const [valueInputModelo, setValueInputModelo] = useState('');
    const [valueInputMarca, setValueInputMarca] = useState('');
    const [valueInputAno, setValueInputAno] = useState('');
    const [valueInputPreco, setValueInputPreco] = useState('');
    function handleInputs(elementId, elementValue) {
        switch (elementId) {
            default:
                break;
            case 'input-modelo':
                setValueInputModelo(elementValue);
                break;
            case 'input-marca':
                setValueInputMarca(elementValue);
                break;
            case 'input-ano':
                setValueInputAno(elementValue);
                break;
            case 'input-preco':
                setValueInputPreco(elementValue);
                break;
        }
    }
    function handleId() {
        setId(id + 1)
    }
    function resetInput() {
        setValueInputModelo('')
        setValueInputMarca('')
        setValueInputAno('')
        setValueInputPreco('')
        let inputs = Array.from(document.getElementsByTagName('input'));
        inputs.forEach(input => input.value = '')
    }
    
    return (
        <Card className="mb-4">
            <Card.Header>Adicionar veiculo</Card.Header>
            <Card.Body>
                <form id="container-create-form" className="flex-column" onSubmit={e => e.preventDefault()}>
                    <Row className="d-flex justify-content-center" id="form-inputs">
                        <Col className="pe-0 me-0">
                            <Form.Control type="text" id="input-modelo" placeholder="Modelo" onChange={(e) => handleInputs(e.target.id, e.target.value)} />
                        </Col>
                        <Col className="pe-0 me-0">
                            <Form.Control type="text" id="input-marca" placeholder="Marca" onChange={(e) => handleInputs(e.target.id, e.target.value)} />
                        </Col>
                        <Col className="pe-0 me-0">
                            <Form.Control type="text" id="input-ano" placeholder="Ano" onChange={(e) => handleInputs(e.target.id, e.target.value)} />
                        </Col>
                        <Col className="pe-0 me-0">
                            <Form.Control type="text" id="input-preco" placeholder="Preço" onChange={(e) => handleInputs(e.target.id, e.target.value)} />
                        </Col>
                        <Col className="d-flex pe-0 me-0">
                            <button className="button button-icon" type="submit" onClick={() => {
                                if (
                                    valueInputModelo !== '' &&
                                    valueInputMarca !== '' &&
                                    valueInputAno !== '' &&
                                    valueInputPreco !== ''
                                ) {
                                    handleItem(
                                        {
                                            id: id,
                                            modelo: valueInputModelo,
                                            marca: valueInputMarca,
                                            ano: valueInputAno,
                                            preco: valueInputPreco
                                        }
                                    )
                                    handleId()
                                    resetInput()
                                    toast.success('Veiculo adicionado', {
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
                            }}>
                                <TbCircleCheck className="button-icon_icon"/>
                            </button>
                        </Col>
                    </Row>
                </form>
            </Card.Body>
        </Card>
    )

}

export default Forms;