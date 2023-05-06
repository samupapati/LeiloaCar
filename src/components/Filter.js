import { useState } from "react";
import Form from 'react-bootstrap/Form';
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Card from 'react-bootstrap/Card';

function Filter({handleFilter, resetFilter}){
    const [valueInput, setValueInput] = useState(0);
    const [inputType, setInputType] = useState('number')
    const [filterType, setFilterType] = useState('ID')

    function handleInputValue(value){
        setValueInput(value)
    }

    function handleInputType(value){
        if(value === 'ID' || value === 'Ano' || value === 'Preço'){
            setInputType('number')
            return
        }
        setInputType('text')    
    }

    function handleFilterType(value){
        setFilterType(value)
    }

    return(
        <Card className="mb-4">
            <Card.Header>Filtrar</Card.Header>
            <form onSubmit={(e) => e.preventDefault()}>
                <Card.Body>
                    <Row id="filter-inputs">
                        <Col className="pe-0 me-0" xs={2}>
                            <Form.Select onChange={(e) => {
                                handleInputType(e.target.value);
                                handleFilterType(e.target.value);
                            }}>
                                <option disabled>Selecionar filtro</option>
                                <option>ID</option>
                                <option>Modelo</option>
                                <option>Marca</option>
                                <option>Ano</option>
                                <option>Preço</option>
                            </Form.Select>
                        </Col>
                        <Col className="pe-0 me-0" xs={3}>
                            <Form.Control type={inputType} placeholder="" onChange={(e) => handleInputValue(e.target.value)}/>
                        </Col>
                        <Col className="d-flex pe-0 me-0">
                            <input className="button" type="submit" value="Filtrar" onClick={() => handleFilter(valueInput, filterType)}/>
                            <input className="button" type="reset" value="Resetar" onClick={() => resetFilter()}/> 
                        </Col>
                    </Row>
                </Card.Body>
            </form>
        </Card>
    )
}

export default Filter;