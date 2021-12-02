import React,{useState} from 'react'
import { useSelector,useDispatch } from 'react-redux';
import "./todo.css"
import { addtodo, deletetodo, removetodo } from '../action/index';
const Todo = () => {
    const [inputData, setInputData] = useState('');
    const list = useSelector((state)=>state.todoreducers.list)
    const dispatch = useDispatch();
    return (
        <>
            <div className="main-div">
                <div className="child-div">
                    <figure>
                        <figcaption>Add your List Here✌ </figcaption>
                    </figure>

                    <div className="addItems">
                        <input type="text" placeholder="add items..." 
                        value={inputData}
                        onChange={(event)=>setInputData(event.target.value)}/>
                        <i className="fa fa-plus add-btn" onClick={()=>dispatch(addtodo(inputData),
                            setInputData(''))}> </i>
                    </div>


                    <div className="showItems">

                        {
                            list.map((elem)=>{
                                return(
                                <div className="eachItem" key={elem.id}>
                                    <h3>{elem.data}</h3>
                                    <div className="todo-btn">
                                        <i className="far fa-trash-alt add-btn" title="Delete Item" onClick={()=>dispatch(deletetodo(inputData),
                                        setInputData(''))}> </i>
                                    </div>
                                </div>
                                )
                            })
                        }

                        
                    </div>


                    <div className="showItems">
                        <button className="btn effect04" data-sm-link-text="remove All"
                        onClick={()=>dispatch(removetodo())}
                        ><span>CheckList</span></button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Todo
