module.exports = {
  apps: [
    {
      name: 'NuxtAppName',
      port: '443',
      exec_mode: 'cluster',
      instances: 'max',
      script: './.output/server/index.mjs',
    },
  ],
};
