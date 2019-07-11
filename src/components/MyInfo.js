import React from 'react';

function MyInfo() {
    const firstName = 'Victor';
    const lastName = 'Miranda';
    const date = new Date();
    const hours = date.getHours();
    const minutos = date.getMinutes();
    //style inline ao invés do estilo definido no arquivo css
    const stylesPlacesText = {
        color: "#FF8C00",
        backgroundColor: "#636363"
    };

    let cumprimento;

    if (hours < 12) {
        cumprimento = 'Bom dia!';
        stylesPlacesText.color = '#FFFFFF';
    } else if (hours >= 12 && hours <= 18) {
        cumprimento = 'Boa tarde!';
        stylesPlacesText. color = '#FF76AD';
    } else {
        cumprimento = 'Boa noite!';
        stylesPlacesText. color = '#71ddff';
    }

    return (
        <div className="Info">
            <h1>{firstName} {lastName}</h1>
            <h2>{firstName + ' ' + lastName}</h2>
            <h3>Hello {`${firstName} ${lastName}`}!</h3>
            <p>Eu sou Victor Miranda que anda pelas ladeiras</p>
            <p>Agora são {hours} horas e {minutos} minutos.</p>
            <p>{cumprimento}</p>
            {/* style inline definido acima */}
            <p style={stylesPlacesText}>Estes são os lugares que eu desejo visitar:</p>
            <ul>
                <li>Dubai</li>
                <li>Portugal</li>
                <li>Espanha</li>
            </ul>
        </div>
    );
}

export default MyInfo;
