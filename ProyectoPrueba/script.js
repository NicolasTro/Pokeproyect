window.onload = function() {
    const canvas = document.getElementById('myCanvas');
    const ctx = canvas.getContext('2d');

    // Fondo rojo
    ctx.fillStyle = '#c00';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Botón azul grande
    ctx.beginPath();
    ctx.arc(40, 40, 20, 0, Math.PI * 2, true);
    ctx.fillStyle = '#00f';
    ctx.fill();
    ctx.lineWidth = 5;
    ctx.strokeStyle = '#fff';
    ctx.stroke();

    // Botón rojo
    ctx.beginPath();
    ctx.arc(100, 20, 10, 0, Math.PI * 2, true);
    ctx.fillStyle = '#f00';
    ctx.fill();

    // Botón amarillo
    ctx.beginPath();
    ctx.arc(130, 20, 10, 0, Math.PI * 2, true);
    ctx.fillStyle = '#ff0';
    ctx.fill();

    // Botón verde
    ctx.beginPath();
    ctx.arc(160, 20, 10, 0, Math.PI * 2, true);
    ctx.fillStyle = '#0f0';
    ctx.fill();

    // Dibujar la curva
    ctx.beginPath();
    ctx.moveTo(0, 150); // Punto de inicio
    ctx.bezierCurveTo(250, 156, 200, 50, 400, 50); // Curva
    ctx.lineWidth = 10;
    ctx.strokeStyle = '#500';
    ctx.stroke();
};
