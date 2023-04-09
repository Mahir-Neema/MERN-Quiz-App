import React from 'react'

function Resulttable() {
  return (<>
     <div>Result-table</div>
     <div>
        <table>
            <thread className='table-header'>
                <tr className='table-row'>
                    <td>Name</td>
                    <td>Attempts</td>
                    <td>Earn Points</td>
                    <td>Result</td>
                </tr>
            </thread>
            <tbody>
                <tr className="table-body">
                    <td>abc xyz</td>
                    <td>3</td>
                    <td>20</td>
                    <td>passed</td>
                </tr>
            </tbody>
        </table>
     </div>
    </>
  )
}

export default Resulttable