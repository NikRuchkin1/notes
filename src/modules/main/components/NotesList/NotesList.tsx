import React from "react";
import { selectFormState } from "@store/reducers/AddFormReducer/AddRowReducer";
import {useSelector} from "react-redux";

const tableData = [
    {
        thing: 'test',
        bath: 123,
        rub: 123,
        cad: 123,
        usa: 123,
    }
]

function NotesList() {

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
          {tableData && tableData.map(
              (item, idx)=> {
                  return (
                      <div key={idx} className="flex w-full  text-greenLight font-light text-base">
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
                      </div>
                  )
              }
          )}
      </div>
  </div>;
}

export default NotesList;