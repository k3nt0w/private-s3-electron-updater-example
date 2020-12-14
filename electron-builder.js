const { version } = require('./package.json')

const baseConfig = {
  productName: 'Private S3 AutoUpdater Example',
  appId: 'com.github.k3nt0w.privates3autoupdaterexample',
  directories: {
    output: 'PrivateS3AutoUpdaterExample'
  },
  releaseInfo: {
    releaseName: `${version}`
  },
  mac: {
    category: 'public.app-category.finance', // example
    target: ['zip', 'dmg']
  },
  win: {
    target: [
      {
        target: 'nsis',
        arch: ['x64']
      },
      {
        target: 'zip',
        arch: ['x64']
      }
    ]
  },
  npmArgs: ['--version=10.0.0-beta.1', '--force-abi=82'],
  extends: null
}

const publishS3 = {
  provider: 's3',
  bucket: 'private-s3-electron-auto-updater-test',
  region: 'ap-northeast-1',
  acl: 'private',
  path: 'application'
}

module.exports = {
  ...baseConfig,
  publish: process.env.IS_LOCAL ? publishS3 : undefined
}
