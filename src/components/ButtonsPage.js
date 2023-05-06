import { TbSquareRoundedChevronLeft, TbSquareRoundedChevronRight } from "react-icons/tb"

function ButtonsPage({indexPage, listLength, handleIndex, pageCounter}){
    return(
        <div id="statusList">
            <button className="button button-icon" id="button-page-left" onClick={() => handleIndex('left')} disabled={indexPage === 10 ? true : false}>
                <TbSquareRoundedChevronLeft className="button-icon_icon"/>
            </button>
            <span id="pageCounter">{pageCounter}</span>
            <button className="button button-icon" id="button-page-right" onClick={() => handleIndex('right')} disabled={indexPage >= listLength ? true : false}>
                <TbSquareRoundedChevronRight className="button-icon_icon"/>
            </button>
        </div>
    )
}

export default ButtonsPage;