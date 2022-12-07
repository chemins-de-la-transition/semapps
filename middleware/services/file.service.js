const { ControlledContainerMixin, ImageProcessorMixin } = require("@semapps/ldp");
const { writePermissionToCreator } = require("../permissions");

module.exports = {
  name: 'file',
  mixins: [ImageProcessorMixin, ControlledContainerMixin], // In that order
  settings: {
    path: '/files',
    acceptedTypes: ['semapps:File'],
    newResourcesPermissions: writePermissionToCreator,
    imageProcessor: {
      maxWidth: 1900,
      maxHeight: 1000
    }
  }
}