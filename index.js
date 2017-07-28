let app = {};
const defaultPage = 'General';

const parse = (content, src) => {
  let page = content && content.trim();
  if (!page || page.length === 0) {
    page = defaultPage;
  }
  return { page };
};

const hook = (elements, element, block, filename) => {
  // @TODO, allow definition in @apiDefine
  // if (element.name === 'apipage' ) {
  //   let pop = elements.pop();
  //   console.log('z', element)
  //   console.log('p', pop)
  //   console.log(element === pop)
  //   elements.push(pop);
  // //   element.content = 'PUBLIC';
  // //   elements.push(element);
  // // } else if (element.name === 'apiversion') {
  // //   elements.pop();
  // //   element.content = app.packageInfos.version;
  // //   elements.push(element);
  // }
  return elements;
};

module.exports = {
  init(_app) {
    app = _app;
    app.addHook('parser-find-elements', hook);
    app.parsers.apipage = {
      parse,
      path: 'local',
      method: 'insert',
    };
  },
};
