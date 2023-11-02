export const datadogScript = `window.DD_CONFIGS = {
  service: '${process.env.DD_SERVICE}',
  env: '${process.env.DD_ENV}',
  version: '${process.env.DD_VERSION}',
}`;
