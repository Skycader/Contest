const TEXT_STYLES_MAPPER = {
    fontSize: (value) => `font-size: ${value}px;`,
    fontWeight: (value) => `font-weight: ${value};`,
    textAlignHorizontal: (value) => `text-align: ${value.toLowerCase()};`,
}

const buildBlock = ({ type, content, className, style }) => {
    return `<${type} class="${className}" style="${style}">${content}</${type}>`;
};

const getTextStyles = (node) => {
    const styleArr = [];
    if (node.style) {
        for (let [key, value] of Object.entries(node.style)) {
            if (TEXT_STYLES_MAPPER[key]) {
                styleArr.push(TEXT_STYLES_MAPPER[key](value));
            }
        }
    }
    return styleArr.join(' ');
}

const PRIMITIVES = {
    TEXT: (node) => {
        return buildBlock({
            type: 'span',
            content: node.characters,
            className: node.type,
            style: getTextStyles(node),
        });
    }

};

const parse = (entry) => {
    return bypass(entry)
};

const traverse = (node) => {
    // тут надо придумать, как обходить дерево:)
    let render = ""
    if (node.type != "TEXT") node.type = "TEXT"
    try {
    return PRIMITIVES[node.type](node);
    } catch(e) {console.log(node.type)}
};

const bypass = (obj,render) => {
    if (render) render = ""
    console.log(obj)
    if (obj)
    if (obj.type != "TEXT") obj.type = "TEXT"
    if (obj)
    render+= PRIMITIVES[obj.type](obj);
    if (obj) {
    if (obj.children != undefined) {
      obj.children.map((item) => bypass(item.render));
    }
}
if (obj) 
    if (obj.children) {
    bypass(obj.children,render);
    } else {
        return render
    }
}

///*** попробую сперва обойти json */
let obj = {
    text: 1,
    children: [
      { text: 2, children: [ {text: 11} ] },
      { text: 3 },
      {
        text: 4,
        children: [{ text: 5 }, { text: 6 }],
      },
    ],
  };

const f = (obj) => { //рекурсивный обход json
    console.log(obj.text);
    if (obj.children != undefined) {
      obj.children.map((item) => f(item));
    }
    if (obj.children)
    f(obj.children);
};

module.exports = function (json) {
    const entry = json.document.children[0];
    return parse(entry);
};
