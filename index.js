import './style.scss';
import { saveAsPng, saveAsJpeg } from 'save-html-as-image';
import { toPng, toJpeg, toBlob, toPixelData, toSvg } from 'html-to-image';

const b = document.getElementById('save');
b.onclick = () => {
  const node = document.getElementById('gen');
  toPng(node).then((dataUrl) => {
    // const img = new Image();
    // img.src = dataUrl;
    // document.body.append(img);

    const a = document.createElement('a');
    a.setAttribute('download', 'table-texture.png');
    a.setAttribute('href', dataUrl);
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  });
};
//

console.log('CSS Grid created with https://grid.layoutit.com');
console.log('Powered by https://vitejs.dev');
