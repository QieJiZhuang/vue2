let demoList = {
    status: 200,
    message: 'success',
    data: {
      total: 100,
      'rows|5': [{
        id: '@guid',
        name: '@cname',
        'age|20-30': 23,
        'job|1': ['前端工程师', '后端工程师', 'UI工程师', '需求工程师']
      }]
    }
  };

  let List = {
    status: 200,
    message: 'success',
    data: {
      total: 100,
      'rows|10': [{
        id: '@guid',
        name: '@cname',
        'age|20-30': 23,
        'job|1': ['前端', '后端', 'UI', '需求']
      }]
    }
  };
  export default {
      'get|/parameter/query': demoList,
    //   'get|/parameter/query1': List
  }