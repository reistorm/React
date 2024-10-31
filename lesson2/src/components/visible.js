import { useState } from "react";

function Show({data}) {
    // true - изначально текст виден
    const [block, setBlock] = useState(true);
    const blockShow = () => {
        setBlock(!block);
    }
    return ( 
        <div>
            <button onClick={blockShow}>Показать/Скрыть</button>
            {/* ЧТобы блок показывался/исчезал */}
            <p style={{display: block ? 'block' : 'none'}}>{data}</p>
        </div>
     );
}

export default Show;
