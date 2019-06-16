import React, { Component } from 'react'
import Main from '../template/Main'

const headerProps = {
    icon: 'users',
    tittle:'Usuários',
    subtit: 'Inserir, Alterar Excluir'
}

export default class UserCrud extends Component{
    render(){
        return(
            <Main {...headerProps}>
                Cadastro de Usuário
            </Main>
        )
    }
}