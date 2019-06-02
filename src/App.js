import React, { Component } from 'react';
//import './App.css';
import './App2.css';
import ReactTable from "react-table";
import "react-table/react-table.css";
import Navegacion from './Componentes/Navegacion';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      post: []
    }
  }


  componentDidMount(){
    const url = "https://api-dolares.herokuapp.com/api/todo";
    fetch(url, {
      method: "GET"
    }).then(response => response.json()).then(posts => {
      this.setState({posts: posts})
    })
  }

  
  render(){
    const columns = [
      {
        Header: <b>Fecha</b>,
        accessor: "fecha",
        style:{
          textAlign: "center"
        },
        width: 150,
        maxWidth: 100,
        minWidth:100,
        
        
      },
      {
        Header: <b background-color="red">Importe $</b>,
        accessor: "importe",
        style:{
          textAlign: "center",
          
        },
        width: 150,
        maxWidth: 100,
        minWidth:100,
        sortable: false,
        filterable: false
      },
      {
        Header: <b>Importe S/.</b>,
        style:{
          textAlign: "center",
          
        },
        width: 100,
        maxWidth: 100,
        minWidth:100,
        sortable: false,
        filterable: false
      },
      {
        Header: <b>Editar</b>,
        Cell: props =>{
          return(
            <a class="waves-effect waves-light btn-small"><i class="material-icons center">edit</i></a>
          )
        },
        width: 100,
        maxWidth: 100,
        minWidth:100,
        sortable: false,
        filterable: false
      },
      {
        Header: <b>Guardar</b>,
        Cell: props =>{
          return(
            <a class="waves-effect waves-light btn-small"><i class="material-icons center">save</i></a>
          )
        },
        width: 100,
        maxWidth: 100,
        minWidth:100,
        sortable: false,
        filterable: false
      },
    ]
    return(
      <div>
        <Navegacion/>
        
        <div className="vistaTabla">
        <h4>Fechas de pagos realizados en dolares</h4>
        <ReactTable
        columns={columns}
        data={this.state.posts}
        filterable
        noDataText={"No hay pagos"}
        defaultPageSize={7}
      /></div>
      </div>
      
    );
  }

}

export default App;
