const codeNumber = (param) => {
  if (param === 'invalid_data') {
    return 422;
  }

  if (param === 'not_found') {
    return 404;
  }
};

module.exports = (erroMiddleware, _req, res, _next) => {
  if ('err' in erroMiddleware) {
    return res.status(codeNumber(erroMiddleware.err.code)).json(erroMiddleware);
  }

  return res.status(500).json('Algo deu ruim :(');
};