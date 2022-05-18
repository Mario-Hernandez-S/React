/*import React  from "react";
import axios from "axios";

function App() {
  
    axios.get("https://apigrupogr.com/grapi/clientes/lista-clientes")
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
  }
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}*/
import React from 'react';
import axios from 'axios';

function App(){
  function Register (){

    const getCP = async () =>{
        try {

            let clientes = new clientes();
            const url = "https://apigrupogr.com/grapi/clientes/lista-clientes";
            let result = await axios({
                url,
                method: 'GET',
                dataType: 'json',
                ContentType: 'application/json',
                data: formData
            });
            console.log(result)
            console.log(result.data)
            
        } catch (error) {
            console.log(error);
        }
    }

    return(
        <div className="App">
          <div className="content">
            <button onClick={getClientes}>Obtener</button>
          </div>
        </div>
    );

}
export default Register;