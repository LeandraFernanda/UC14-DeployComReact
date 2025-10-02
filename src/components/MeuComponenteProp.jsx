import React from "react";
import PropTypes from "prop-types";
// Componente com propriedades
const MeuComponenteProp = ({ nome }) => {
    return (
        <div className="container">
            <h1> Olá, {nome}!</h1>
        </div>
    );
};

MeuComponenteProp.propTypes = {
    nome: PropTypes.string.isRequired,
};

export default MeuComponenteProp;