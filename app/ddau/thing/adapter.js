import ApplicationAdapter from '../../application/adapter';

export default ApplicationAdapter.extend({
  pathForType(modelName) {
    return modelName;
  }
});
