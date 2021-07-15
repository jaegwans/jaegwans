import React from 'react';


function CommonTableRow({children}) {

    return (
        <tr className="common-table-row">
        {
          children
        }
      </tr>
    ) 
}

export default CommonTableRow
