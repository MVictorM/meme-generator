import React from 'react';

function ToDo() {
    return (
        <div className="ToDo">
            <form>
                <input type="checkbox" name="barcelona" id="barcelona" className="custom"/>
                <label htmlFor="barcelona">Barcelona</label>
                <input type="checkbox" name="real_madri" id="real_madri" className="custom"/>
                <label htmlFor="real_madri">REAL MADRI</label>
                <input type="checkbox" name="liverpool" id="liverpool" className="custom"/>
                <label htmlFor="liverpool">LIVERPOOL</label>
                <input type="checkbox" name="ajax" id="ajax" className="custom"/>
                <label htmlFor="ajax">AJAX</label>
            </form>
        </div>
    );
}

export default ToDo;
