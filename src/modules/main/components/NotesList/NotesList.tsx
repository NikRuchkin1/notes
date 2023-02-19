import React from "react";
import { selectFormState, deleteRowDataOfTable } from "@store/reducers/AddFormReducer/AddRowReducer";
import {useDispatch, useSelector} from "react-redux";
import trash from './img/trash.png'

function NotesList() {
    const dispatch = useDispatch()
    const isOpenAddRowForm = useSelector(selectFormState)

  return <div className="mt-10">
      <div className="flex w-full  text-greenLight font-bold text-base">
        <div className="w-3/12 text-center border">Thing</div>
        <div className="w-3/12 text-center border">Bath</div>
        <div className="w-3/12 text-center border">Rub</div>
        <div className="w-3/12 text-center border border-yellow">$ cad</div>
        <div className="w-3/12 text-center border border-orange">$ usa</div>
      </div>
      <div className="mt-3">
          {isOpenAddRowForm.dataTable && isOpenAddRowForm.dataTable.map(
              (item, idx)=> {
                  return (
                      <div key={idx} className="flex w-full  text-greenLight font-light text-base relative">
                          <div className="w-3/12 text-center border">
                              {item.thing}
                          </div>
                          <div className="w-3/12 text-center border">
                              {item.bath}
                          </div>
                          <div className="w-3/12 text-center border">
                              {item.rub}
                          </div>
                          <div className="w-3/12 text-center border border-yellow">
                              {item.cad}
                          </div>
                          <div className="w-3/12 text-center border border-orange">
                              {item.usa}
                          </div>
                          <img
                              src={trash}
                              alt='trash'
                              className='absolute w-6 right-0 top-1px'
                              onClick={()=> dispatch(deleteRowDataOfTable(idx))}
                          />
                      </div>
                  )
              }
          )}
      </div>
  </div>;
}

export default NotesList;