import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({
  attrs: {
    manager: {embedded: 'always'}
  }
});
