const canvas = document.querySelector('#canvas');
const contexto = canvas.getContext('2d');

// cabeça
contexto.beginPath();
contexto.arc(255, 100, 20, 0, Math.PI * 2);
contexto.lineWidth = 4;
contexto.lineCap = 'round';
contexto.linejoin = 'round';
contexto.stroke();

// corpo
contexto.beginPath();
contexto.moveTo(250, 120);
contexto.lineTo(250, 180);
contexto.stroke();

// braço direito
contexto.beginPath();
contexto.moveTo(310, 120);
contexto.lineTo(280, 150);
contexto.stroke();

contexto.beginPath();
contexto.moveTo(250, 120);
contexto.lineTo(280, 150);
contexto.stroke();

// braço esquerdo
contexto.beginPath();
contexto.moveTo(250, 120);
contexto.lineTo(220, 150);
contexto.stroke();

contexto.beginPath();
contexto.moveTo(220, 150);
contexto.lineTo(260, 170);
contexto.stroke();

// perna direita
contexto.beginPath();
contexto.moveTo(250, 180);
contexto.lineTo(280, 210);
contexto.stroke();

contexto.beginPath();
contexto.moveTo(250, 180);
contexto.lineTo(220, 210);
contexto.stroke();

// perna esquerda
contexto.beginPath();
contexto.moveTo(280, 210);
contexto.lineTo(280, 250);
contexto.stroke();

contexto.beginPath();
contexto.moveTo(220, 210);
contexto.lineTo(220, 250);
contexto.stroke();