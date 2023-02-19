import React from "react";

function NotesList() {
  return <div className="mt-10">
      <div className="flex w-full  text-greenLight font-bold text-base">
        <div className="w-3/12 text-center border">Thing</div>
        <div className="w-3/12 text-center border">Bath</div>
        <div className="w-3/12 text-center border">Rub</div>
        <div className="w-3/12 text-center border border-yellow">$ cad</div>
        <div className="w-3/12 text-center border border-orange">$ usa</div>
      </div>
      <div className="mt-3">
          <div className="flex w-full  text-greenLight font-light text-base">
              <div className="w-3/12 text-center border">
                  Thing
              </div>
              <div className="w-3/12 text-center border">
                  123
              </div>
              <div className="w-3/12 text-center border">
                  123
              </div>
              <div className="w-3/12 text-center border border-yellow">
                  123
              </div>
              <div className="w-3/12 text-center border border-orange">
                  123
              </div>
          </div>
      </div>
  </div>;
}

export default NotesList;