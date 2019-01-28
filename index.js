Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = exports.Fieldset = exports.LiveArea = exports.Input = exports.Label = exports.List = exports.Section = exports.Heading = undefined;

var _lib = require("./lib");

var Components = _interopRequireWildcard(_lib);

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};
    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key))
          newObj[key] = obj[key];
      }
    }
    newObj.default = obj;
    return newObj;
  }
}

var Heading = Components.Heading,
  Section = Components.Section,
  List = Components.List,
  Label = Components.Label,
  Input = Components.Input,
  LiveArea = Components.LiveArea,
  Fieldset = Components.Fieldset,
  Button = Components.Button;
TextArea = Components.TextArea;

exports.Heading = Heading;
exports.Section = Section;
exports.List = List;
exports.Label = Label;
exports.Input = Input;
exports.LiveArea = LiveArea;
exports.Fieldset = Fieldset;
exports.Button = Button;
exports.TextArea = TextArea;
