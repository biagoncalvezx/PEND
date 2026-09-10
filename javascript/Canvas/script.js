const canvas = document.querySelector('#canvas');
const contexto = canvas.getContext('2d');

// desenha uma linha
contexto.beginPath();
contexto.moveTo(10, 0);
contexto.lineTo(50, 200);
contexto.stroke();

// desenha um retângulo
contexto.fillRect(50, 50, 150, 100);
contexto.strokeRect(250, 50, 150, 100);

// desenha um círculo
contexto.beginPath();
contexto.arc(250, 250, 50, 0, Math.PI * 2);
contexto.stroke();