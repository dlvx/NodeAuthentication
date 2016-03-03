module.exports = {

  //'url' : 'mongodb://localhost/node-authentication'

// default to a 'localhost' configuration:
connection_string : '127.0.0.1:27017/node-authentication',
// if OPENSHIFT env variables are present, use the available connection info:
open_shift_setup : function(){
  if(process.env.OPENSHIFT_MONGODB_DB_PASSWORD){
    this.connection_string = process.env.OPENSHIFT_MONGODB_DB_USERNAME + ":" +
    process.env.OPENSHIFT_MONGODB_DB_PASSWORD + "@" +
    process.env.OPENSHIFT_MONGODB_DB_HOST + ':' +
    process.env.OPENSHIFT_MONGODB_DB_PORT + '/' +
    process.env.OPENSHIFT_APP_NAME;
  }

  return this.connection_string;
}



};
