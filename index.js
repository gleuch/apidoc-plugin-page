let app = {};
const defaultPage = 'General';

const parse = (content, src) => {
  let page = content && content.trim();
  if (!page || page.length === 0) {
    page = defaultPage;
  }
  return { page };
};

module.exports = {
  init(_app) {
    app = _app;
    app.parsers.apipage = {
      parse,
      path: 'local',
      method: 'insert',
    };
  },
};
