const colorNameDict = { "aliceblue": [240, 248, 255], "antiquewhite": [250, 235, 215], "aqua": [0, 255, 255], "aquamarine": [127, 255, 212], "azure": [240, 255, 255], "beige": [245, 245, 220], "bisque": [255, 228, 196], "black": [0, 0, 0], "blanchedalmond": [255, 235, 205], "blue": [0, 0, 255], "blueviolet": [138, 43, 226], "brown": [165, 42, 42], "burlywood": [222, 184, 135], "cadetblue": [95, 158, 160], "chartreuse": [127, 255, 0], "chocolate": [210, 105, 30], "coral": [255, 127, 80], "cornflowerblue": [100, 149, 237], "cornsilk": [255, 248, 220], "crimson": [220, 20, 60], "cyan": [0, 255, 255], "darkblue": [0, 0, 139], "darkcyan": [0, 139, 139], "darkgoldenrod": [184, 134, 11], "darkgray": [169, 169, 169], "darkgreen": [0, 100, 0], "darkgrey": [169, 169, 169], "darkkhaki": [189, 183, 107], "darkmagenta": [139, 0, 139], "darkolivegreen": [85, 107, 47], "darkorange": [255, 140, 0], "darkorchid": [153, 50, 204], "darkred": [139, 0, 0], "darksalmon": [233, 150, 122], "darkseagreen": [143, 188, 143], "darkslateblue": [72, 61, 139], "darkslategray": [47, 79, 79], "darkslategrey": [47, 79, 79], "darkturquoise": [0, 206, 209], "darkviolet": [148, 0, 211], "deeppink": [255, 20, 147], "deepskyblue": [0, 191, 255], "dimgray": [105, 105, 105], "dimgrey": [105, 105, 105], "dodgerblue": [30, 144, 255], "firebrick": [178, 34, 34], "floralwhite": [255, 250, 240], "forestgreen": [34, 139, 34], "fuchsia": [255, 0, 255], "gainsboro": [220, 220, 220], "ghostwhite": [248, 248, 255], "gold": [255, 215, 0], "goldenrod": [218, 165, 32], "gray": [128, 128, 128], "grey": [128, 128, 128], "green": [0, 128, 0], "greenyellow": [173, 255, 47], "honeydew": [240, 255, 240], "hotpink": [255, 105, 180], "indianred": [205, 92, 92], "indigo": [75, 0, 130], "ivory": [255, 255, 240], "khaki": [240, 230, 140], "lavender": [230, 230, 250], "lavenderblush": [255, 240, 245], "lawngreen": [124, 252, 0], "lemonchiffon": [255, 250, 205], "lightblue": [173, 216, 230], "lightcoral": [240, 128, 128], "lightcyan": [224, 255, 255], "lightgoldenrodyellow": [250, 250, 210], "lightgray": [211, 211, 211], "lightgreen": [144, 238, 144], "lightgrey": [211, 211, 211], "    lightpink": [255, 182, 193], "lightsalmon": [255, 160, 122], "lightseagreen": [32, 178, 170], "lightskyblue": [135, 206, 250], "lightslategray": [119, 136, 153], "lightslategrey": [119, 136, 153], "lightsteelblue": [176, 196, 222], "lightyellow": [255, 255, 224], "lime": [0, 255, 0], "limegreen": [50, 205, 50], "linen": [250, 240, 230], "magenta": [255, 0, 255], "maroon": [128, 0, 0], "mediumaquamarine": [102, 205, 170], "mediumblue": [0, 0, 205], "mediumorchid": [186, 85, 211], "mediumpurple": [147, 112, 219], "mediumseagreen": [60, 179, 113], "mediumslateblue": [123, 104, 238], "mediumspringgreen": [0, 250, 154], "mediumturquoise": [72, 209, 204], "mediumvioletred": [199, 21, 133], "midnightblue": [25, 25, 112], "mintcream": [245, 255, 250], "mistyrose": [255, 228, 225], "moccasin": [255, 228, 181], "navajowhite": [255, 222, 173], "navy": [0, 0, 128], "oldlace": [253, 245, 230], "olive": [128, 128, 0], "olivedrab": [107, 142, 35], "orange": [255, 165, 0], "orangered": [255, 69, 0], "orchid": [218, 112, 214], "palegoldenrod": [238, 232, 170], "palegreen": [152, 251, 152], "paleturquoise": [175, 238, 238], "palevioletred": [219, 112, 147], "papayawhip": [255, 239, 213], "peachpuff": [255, 218, 185], "peru": [205, 133, 63], "pink": [255, 192, 203], "plum": [221, 160, 221], "powderblue": [176, 224, 230], "purple": [128, 0, 128], "red": [255, 0, 0], "rosybrown": [188, 143, 143], "royalblue": [65, 105, 225], "saddlebrown": [139, 69, 19], "salmon": [250, 128, 114], "sandybrown": [244, 164, 96], "seagreen": [46, 139, 87], "seashell": [255, 245, 238], "sienna": [160, 82, 45], "silver": [192, 192, 192], "skyblue": [135, 206, 235], "slateblue": [106, 90, 205], "slategray": [112, 128, 144], "slategrey": [112, 128, 144], "snow": [255, 250, 250], "springgreen": [0, 255, 127], "steelblue": [70, 130, 180], "tan": [210, 180, 140], "teal": [0, 128, 128], "thistle": [216, 191, 216], "tomato": [255, 99, 71], "turquoise": [64, 224, 208], "violet": [238, 130, 238], "wheat": [245, 222, 179], "white": [255, 255, 255], "whitesmoke": [245, 245, 245], "yellow": [255, 255, 0], "yellowgreen": [154, 205, 50] }



function name2Triad(name) {
  const extractName = /[a-z]+/i
  let rg = extractName.exec(name)
  if (rg) {
    return colorNameDict[rg[0].toLowerCase()]
  }
  else {
    return undefined
  }
}


const hextract6 = /([0-9a-f]{6})/
const hextract3 = /([0-9a-f]{3})/



function hex2Triad(hex) {
  hex = hex.toLowerCase()
  let res6 = hextract6.exec(hex)

  if (res6) {
    let hexString = res6[0]
    return [parseInt(hexString.substring(0, 2), 16), parseInt(hexString.substring(2, 4), 16), parseInt(hexString.substring(4, 6), 16)]
  }
  else {

    let res3 = hextract3.exec(hex)
    if (res3) {
      let hexString = res3[0]
      return [parseInt(hexString.substring(0, 1), 16) * 17, parseInt(hexString.substring(1, 2), 16) * 17, parseInt(hexString.substring(2, 3), 16) * 17]
    }
    else {
      return undefined
    }
  }

}

const numRegGlob = /[-+]?[0-9]*\.?[0-9]+%?/ig;

function txt2Triad(txt, basis = 255) {
  function getNum(val) {
    let ret
    const pcReg = /%/
    if (val) {
      if (pcReg.exec(val)) {
        ret = Math.round(parseFloat(val) / 100.0 * basis)
      }
      else {
        ret = parseInt(val)
      }
      return Math.max(0, Math.min(255, ret))
    }
    else {
      return undefined
    }
  }
  numReg.lastIndex = 0
  return [getNum(numRegGlob.exec(txt)), getNum(numRegGlob.exec(txt)), getNum(numRegGlob.exec(txt))]
}


function triad2Hex(triad) {

  function duoHex(val) {
    val = Math.max(0, Math.min(255, val))
    if (val < 16) {
      return "0" + val.toString(16)
    }
    else {
      return val.toString(16)
    }
  }
  return ("#" + duoHex(triad[0]) + duoHex(triad[1]) + duoHex(triad[2])).toUpperCase()
}

const isRGBReg = /rgb\s*\((\s*[-+]?[0-9]*\.?[0-9]+%?\s*[,\)]){3}\s*/i
const isHSLReg = /hsl\s*\((\s*[-+]?[0-9]*\.?[0-9]+%?\s*[,\)]){3}\s*/i
const isHexReg = /\#?[0-9a-f]{3}([0-9a-f]{3})?/i

function colorForm(val) {
  if (typeof val === 'string' || val instanceof String) {
    if (isRGBReg.test(val)) { return "rgbtext" }
    if (isHSLReg.test(val)) { return "hsltext" }
    if (isHexReg.test(val)) { return "hex" }
    return "name"
  }
  else { return "rgb" }
}


const percentReg = /[-+]?[0-9]*\.?[0-9]+%/i;

function parsePercent(text) {
  let val
  if (isNaN(text)) {
    if (percentReg.test(text)) {
      console.debug(percentReg.exec(text))
      val = parseFloat(percentReg.exec(text)[0]) / 100
    }
    else { return }
  }
  else {
    val = parseFloat(text)
  }
  if (Math.abs(val) > 1) {
    val = val / 100
  }
  return val
}

class Color {
  constructor(arg, type) {
    let triad

    if (!type) { type = colorForm(arg) }
    switch (type ? type.toLowerCase() : undefined) {
      case "rgb":
        this._rgb = arg
        break
      case "name":
        let rgb = name2Triad(arg)
        if (rgb) {
          this._rgb = rgb
        }
        else {
          this._invalid = true
        }
        break
      case "hsl":
        this._hsl = arg
        break
      case "hex":
        triad = hex2Triad(arg)
        this._rgb = triad ? triad : [0, 0, 0]
        break
      case "rgbtext":
        triad = txt2Triad(arg)
        this._rgb = [triad[0] ? triad[0] : 0, triad[1] ? triad[1] : 0, triad[2] ? triad[2] : 0,]
        break
      case "hsltext":
        triad = txt2Triad(arg, 100)
        this._hsl = [triad[0] ? triad[0] : 0, triad[1] ? triad[1] : 0, triad[2] ? triad[2] : 0,]
        break
      default:
        this._invalid = true
    }
  }

  _calculateHSL() {
    if (this._invalid) { return }
    let r1 = this._rgb[0] / 255;
    let g1 = this._rgb[1] / 255;
    let b1 = this._rgb[2] / 255;

    let maxColor = Math.max(r1, g1, b1);
    let minColor = Math.min(r1, g1, b1);
    //Calculate L:
    let L = (maxColor + minColor) / 2;
    let S = 0;
    let H = 0;
    if (maxColor != minColor) {
      //Calculate S:
      if (L < 0.5) {
        S = (maxColor - minColor) / (maxColor + minColor);
      } else {
        S = (maxColor - minColor) / (2.0 - maxColor - minColor);
      }
      //Calculate H:
      if (r1 == maxColor) {
        H = (g1 - b1) / (maxColor - minColor);
      } else if (g1 == maxColor) {
        H = 2.0 + (b1 - r1) / (maxColor - minColor);
      } else {
        H = 4.0 + (r1 - g1) / (maxColor - minColor);
      }
    }

    L = L * 100;
    S = S * 100;
    H = H * 60;
    if (H < 0) {
      H += 360;
    }
    this._hsl = [H, S, L]
  }


  _calculateRGB() {
    if (this._invalid) { return }
    var r, g, b, m, c, x, h, s, l

    [h, s, l] = this._hsl


    h /= 60
    if (h < 0) h = 6 - (-h % 6)
    h %= 6

    s = Math.max(0, Math.min(1, s / 100))
    l = Math.max(0, Math.min(1, l / 100))

    c = (1 - Math.abs((2 * l) - 1)) * s
    x = c * (1 - Math.abs((h % 2) - 1))

    if (h < 1) {
      r = c
      g = x
      b = 0
    } else if (h < 2) {
      r = x
      g = c
      b = 0
    } else if (h < 3) {
      r = 0
      g = c
      b = x
    } else if (h < 4) {
      r = 0
      g = x
      b = c
    } else if (h < 5) {
      r = x
      g = 0
      b = c
    } else {
      r = c
      g = 0
      b = x
    }

    m = l - c / 2
    this._rgb = [Math.round((r + m) * 255), Math.round((g + m) * 255), Math.round((b + m) * 255)]
  }



  _calculateHex() {
    if (this._invalid) { return }
    this._hex = triad2Hex(this.rgb)
  }

  get rgb() {
    if (!this._rgb) {
      this._calculateRGB()
    }
    return this._rgb
  }

  get isValid() {
    return !this._invalid
  }

  get r() {
    return this.rgb[0]
  }

  get g() {
    return this.rgb[1]
  }

  get b() {
    return this.rgb[2]
  }


  get hsl() {
    if (!this._hsl) {
      this._calculateHSL()
    }
    return this._hsl
  }

  get h() {
    return this.hsl[0]
  }

  get s() {
    return this.hsl[1]
  }

  get l() {
    return this.hsl[2]
  }

  get hex() {
    if (!this._hex) {
      this._calculateHex()
    }
    return this._hex
  }

  rotate(deg) {
    return new Color([(this.h + deg) % 360, this.s, this.l], "hsl")
  }

  saturate(fract) {
    fract = parsePercent(fract)
    if (!fract) { return }
    if (fract > 0) {
      return new Color([this.h, 1 - (1 - this.s) * fract, this.l], "hsl")
    }
    else {
      return new Color([this.h, this.s * (1 + fract), this.l], "hsl")
    }

  }


  lighten(fract) {
    fract = parsePercent(fract)
    if (!fract) { return }
    if (fract > 0) {
      return new Color([this.h, this.s, 1 - (1 - this.l) * fract], "hsl")
    }
    else {
      return new Color([this.h, this.s, this.l * (1 + fract)], "hsl")
    }

  }

}




// SVG ------------------

function toHex(arg, type) {

  let tmp = new Color(arg, type)
  if (tmp.isValid) {
    return tmp.hex
  }
  return arg
}


const nameReg1 = /(?<=<[^<]*)(?<=(?:fill|stroke|stop-color|color|flood-color|lighting-color)\s*=\s*")[a-z]+(?="[^<]*>)/gi
const nameReg2 = /(?<=<[^>]*style\s*=\s*"[^>^"^>]*(?:fill|stroke|stop-color|color|flood-color|lighting-color)\s*:\s*)[a-z]+/gi
const triadReg = /(?<=<[^<]*)\#[0-9a-f]{3,6}/gi
const rgbReg = /(?<=<[^<]*)rgb\s*\((\s*[-+]?[0-9]*\.?[0-9]+%?\s*[,\)]){3}\s*/gi
const hslReg = /(?<=<[^<]*)hsl\s*\((\s*[-+]?[0-9]*\.?[0-9]+%?\s*[,\)]){3}\s*/gi

function replaceName(svg) {
  return svg.replace(nameReg1, h => { return toHex(h, "name") }).replace(nameReg2, h => { return toHex(h, "name") })
}

function replaceTriad(svg) {
  return svg.replace(triadReg, h => { return toHex(h, "hex") })
}

function replacergb(svg) {
  return svg.replace(rgbReg, h => { return toHex(h, "rgbtext") })
}


function replacehsl(svg) {
  return svg.replace(hslReg, h => { return toHex(h, "hsltext") })
}


const hexColorReg = /(?<=<[^<]*)\#(?![0-9a-f]{7})[0-9a-f]{6}/gi

function findColors(svg) {
  let places = []
  let colors = {}
  let res
  do {
    res = hexColorReg.exec(svg)
    if (res) {
      let col = new Color(res[0])
      places.push([res.index, col])
      colors[col.hex] = col
    }
  }
  while (res)
  return [colors, places]
}

function canonize(svg) {
  return replaceName(replaceTriad(replacehsl(replacergb(svg))))
}

class SVG {
  constructor(text) {
    this.text = canonize(text)
    let tmp = findColors(this.text)
    this.colors = tmp[0]
    this._places = tmp[1]
  }


  reColor(map) {
    let tmpText = this.text
    let index, value
    this._places.forEach((pair) => {
      [index, value] = pair;
      let newValue = map[value.hex]
      if (newValue) {
        tmpText = tmpText.substring(0, index) + newValue + tmpText.substring(index + 7)
      }
    });
    return new SVG(tmpText)
  }

}





class ColorMap {

  constructor(collist) {
    this.add(collist)
  }

  add(collist) {
    for (const [key, value] of Object.entries(collist)) {
      this[key] = value
    }
  }

  rotate(angle) {
    let ret = new ColorMap({})
    for (const [key, value] of Object.entries(this)) {
      ret[key] = value.rotate(angle)

    }
    return ret
  }

  saturate(fract) {
    fract = parsePercent(fract)
    let ret = new ColorMap({})
    for (const [key, value] of Object.entries(this)) {
      ret[key] = value.saturate(fract)

    }
    return ret
  }


    lighgten(fract) {
    fract = parsePercent(fract)
    let ret = new ColorMap({})
    for (const [key, value] of Object.entries(this)) {
      ret[key] = value.lighgten(fract)

    }
    return ret
  }

    reMap(cMap) {
    let ret = new ColorMap({})
    for (const [key, value] of Object.entries(this)) {
      let tmp = cMap[key]
      ret[key] = tmp ? temp : value
    }
    return ret
  }

}







try {
module.exports = { Color, SVG, ColorMap }
}
catch (e) { }



