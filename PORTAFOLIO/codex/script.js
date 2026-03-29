const canvas = document.getElementById("matrix");

if (canvas) {
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const letras = "01";
    const fontSize = 14;
    const columnas = Math.floor(canvas.width / fontSize);

    const drops = new Array(columnas).fill(1);

    function draw() {
        ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = "#00ff00";
        ctx.font = fontSize + "px monospace";

        for (let i = 0; i < drops.length; i++) {
            const texto = letras[Math.floor(Math.random() * letras.length)];

            ctx.fillText(texto, i * fontSize, drops[i] * fontSize);

            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }

            drops[i]++;
        }
    }

    setInterval(draw, 33);
}

function contacto(){

alert(
`Contacto

Email: tucorreo@email.com
GitHub: github.com/tuusuario
LinkedIn: linkedin.com/in/tuusuario`
);

}
