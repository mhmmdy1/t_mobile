import React, { Component } from 'react'
import '../css/rapor1.css'



export default class DataTable extends Component {
    
    render() {
        return (
            <div className="Datatablee">
                 <table id="example" class="display" >
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>First Name</th>                          
                            <th>Email</th>
                            <th>Contract State</th>
                            <th>ICCID</th>
                            <th>MSISDN</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Muhammed Yıkdırım</td>
                            <td>test@gmail.com</td>
                            <td>active</td>
                            <td>8901260880000320169</td>
                            <td>5773798961</td>
                        </tr>
                       
                    </tbody>
                    <tfoot>
                    <tr>
                            <th>ID</th>
                            <th>First Name</th>                          
                            <th>Email</th>
                            <th>Contract State</th>
                            <th>ICCID</th>
                            <th>MSISDN</th>
                        </tr>
                    </tfoot>
                </table>

                
            </div>
        )
    }
}
