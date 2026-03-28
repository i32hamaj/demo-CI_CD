const express = require('express');
const app = express();

app.get('/api/status', (req, res) => {
    res.status(200).json({ status: 'OK', version: '1.0.0', mensaje: 'Despliegue exitoso' });
});

// Solo exportamos la app para los tests, o la iniciamos si la ejecutamos normal
if (require.main === module) {
    app.listen(3000, () => console.log('Servidor corriendo en el puerto 3000'));
}

module.exports = app;