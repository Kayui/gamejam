var fs = require('fs'),
      PNG = require('pngjs').PNG;

var png = new PNG({
      width: 100,
      height: 100,
      filterType: 1
});

for (var y = 0; y < png.height; y++) {
      for (var x = 0; x < png.width; x++) {
                var idx = (png.width * y + x) << 2;
                png.data[idx  ] = 255;
                png.data[idx+1] = 255;
                png.data[idx+2] = 255;
                png.data[idx+3] = 255; // transparent
            }
}

png.pack().pipe(fs.createWriteStream('newOut.png'));
