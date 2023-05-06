import React, { useState } from 'react'
import Table from 'react-bootstrap/Table';
import ButtonsPage from './components/ButtonsPage';
import Filter from './components/Filter';
import Forms from './components/Forms';
import Item from './components/Item';
import ModalChange from './components/ModalChange'
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Navbar from 'react-bootstrap/Navbar';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [data, setData] = useState([]);
  const [indexPage, setIndexPage] = useState(10);
  const [pageCounter, setPageCounter] = useState(1);
  const [prevIndexPage, setPrevIndexPage] = useState(0);
  const [currentChangeItem, setCurrentChangeItem] = useState(null);
  const [modalActive, setModalActive] = useState(false);
  const [filterData, setFilterData] = useState([]);

  function handleModal() {
    setModalActive(!modalActive)
  }

  function handleItem(dataItem) {
    setData(data.concat(dataItem))
    setFilterData([])
  }

  function handleChangeItem(itemId) {
    data.forEach((item, index) => {
      if (item['id'] === itemId) {
        setCurrentChangeItem(data[index])
      }
    })
    handleModal()
  }

  function handleChangeItemInData(dataItem) {
    data.forEach((item, index) => {
      if (item['id'] === dataItem['id']) {
        data[index] = dataItem
      }
    })
    filterData.forEach((item, index) => {
      if (item['id'] === dataItem['id']) {
        filterData[index] = dataItem
      }
    })
  }

  function deleteItem(itemId) {
    setData(data.filter(item => item['id'] !== itemId))
    setFilterData(filterData.filter(item => item['id'] !== itemId))
  }

  function handleIndex(direction) {
    switch (direction) {
      default:
        break;
      case 'left':
        setIndexPage(indexPage - 10)
        setPrevIndexPage(prevIndexPage - 10)
        setPageCounter(pageCounter - 1)
        break;
      case 'right':
        setIndexPage(indexPage + 10)
        setPrevIndexPage(prevIndexPage + 10)
        setPageCounter(pageCounter + 1)
        break;
    }
  }

  function handleFilter(filterValue, filterType) {
    switch (filterType) {
      default:
        break;
      case 'ID':
        setFilterData(data.filter(element => { return Number(filterValue) === element['id'] }))
        break;
      case 'Modelo':
        setFilterData(data.filter(element => { return filterValue === element['modelo'] }))
        break;
      case 'Marca':
        setFilterData(data.filter(element => { return filterValue === element['marca'] }))
        break;
      case 'Ano':
        setFilterData(data.filter(element => { return filterValue === element['ano'] }))
        break;
      case 'Preço':
        setFilterData(data.filter(element => { return filterValue === element['preco'] }))
        break;
    }
  }

  function resetFilter() {
    setFilterData([])
  }

  return (
    <>
      <Navbar expand="lg" variant="light" bg="light" className='mb-4'>
        <Container>
          <Navbar.Brand href="#">LeiloaCar</Navbar.Brand>
        </Container>
      </Navbar>

      <Container className='mx-10 my-0 p-0 py-0'>
        <Forms handleItem={handleItem}/>
        {data.length > 0 ? <Filter handleFilter={handleFilter} resetFilter={resetFilter} /> : ''}
        <Card className='mb-4' id="card-table">
          <Card.Header>Lista de veiculos</Card.Header>
          <Card.Body>
            <Table striped borderless hover id="table-list">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Modelo</th>
                  <th>Marca</th>
                  <th>Ano</th>
                  <th>Preço</th>
                  <th colSpan={2}>Opções</th>
                </tr>
              </thead>
              <tbody>
                {filterData.length > 0
                  ?
                  filterData.map((item, i) => {
                    if (i >= prevIndexPage && i <= indexPage) {
                      return (
                        <Item item={item} handleChangeItem={handleChangeItem} deleteItem={deleteItem} />
                      )
                    } else {
                      return ''
                    }
                  })
                  :
                  data.length > 0
                    ?
                    data.map((item, i) => {
                      if (i >= prevIndexPage && i <= indexPage) {
                        return (
                          <Item item={item} handleChangeItem={handleChangeItem} deleteItem={deleteItem} />
                        )
                      } else {
                        return ''
                      }
                    })
                    :
                    <p>Não há itens</p>
                }
              </tbody>
            </Table>

          </Card.Body>
        </Card>
        {data.length > 0 ?
          <ButtonsPage indexPage={indexPage} listLength={data.length} handleIndex={handleIndex} pageCounter={pageCounter}/>
          :
          ''
        }
        {modalActive === true
          ?
          <>
            <ModalChange currentChangeItem={currentChangeItem} handleChangeItemInData={handleChangeItemInData} handleModal={handleModal} />
          </>
          :
          ''
        }
      </Container>
      <ToastContainer/>
    </>

  )
}

export default App;