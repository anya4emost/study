let login =(username, password) => {
  if(username !== 'admin' || password !== 'radical'){
    console.log('incorrect login');
    debugger;
  }
};

login('admin', 'sjdk');
