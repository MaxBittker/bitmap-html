function setFavicon() {
  if (typeof window == "undefined") {
    return;
  }
  let current = document.getElementById("moon-favicon");
  if (current) {
    current.remove();
  }
  var canvas = document.createElement("canvas");
  canvas.width = 16;
  canvas.height = 16;
  var ctx = canvas.getContext("2d");

  // let imageData = ctx.getImageData(0, 0, 16, 16);
  // ctx.putImageData(imageData, 0, 0);
  let l = Math.random() * 0.0;
  l += (window.l || 0.0) / 9;
  l = 1.0 - l;
  for (var x = 0; x < 16; x++) {
    for (var y = 0; y < 16; y++) {
      let radius = Math.abs((x - 8) * (y - 8));
      // let b = Math.random()<radius/6 ? 255:0;
      let radius2 = Math.sqrt((x - 8) ** 2 + (y - 8) ** 2);

      radius = radius * l + radius2 * (1 - l);
      let b = Math.random() < radius / 8 ? 255 : 0;

      ctx.fillStyle =
        "rgba(" + b + "," + b + "," + b + "," + (255 - b) / 255 + ")";
      ctx.fillRect(x, y, 1, 1);
    }
  }

  var link = document.createElement("link");
  link.type = "image/x-icon";
  link.rel = "shortcut icon";
  link.href = canvas.toDataURL("image/x-icon");
  link.id = "moon-favicon";
  document.getElementsByTagName("head")[0].appendChild(link);
}

export default setFavicon;
