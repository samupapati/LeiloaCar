import { TbX, TbEdit } from 'react-icons/tb';
import { toast } from 'react-toastify';

function Item({item, handleChangeItem, deleteItem}){
    return(
        <tr>
            <td>{item['id']}</td>
            <td>{item['modelo']}</td>
            <td>{item['marca']}</td>
            <td>{item['ano']}</td>
            <td>R${item['preco']}</td>
            <td>
                <button className="button" onClick={() => handleChangeItem(item['id'])}><TbEdit/></button>
                <button className="button" onClick={() => {
                    deleteItem(item['id'])
                    toast.success('Veiculo excluido', {
                        position: "bottom-right",
                        autoClose: 1000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                        });
                }}><TbX/></button>
            </td>
        </tr>
    );
}

export default Item;