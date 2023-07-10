// const { readFileSync } = require('fs');
// const { JSONPath } = require('jsonpath-plus');
const axios = require('axios')


// module.exports.requestActions = [
//   {
//     label: 'Authorize requests',
//     icon: 'fa-unlock',
//     action: async (context, data) => {
//       console.log('foo')
// 
//       setItem('token', 'token');
//     }
//   }
// ];
// 
// module.exports.templateTags = [
//   {
//     name: 'token',
//     description: 'Access token from authorize request',
//     async run (context) {
//       const { store: { getItem } } = context;
//       return getItem('token');
//     }
//   }
// ];

// module.exports.requestHooks = [
//   context => {
//     console.log(context)
// 
//     const body = context.request.getBody()
//     const url = context.request.getUrl()
//     const method = context.request.getMethod()
// 
//     const host = context.store.all().then(value => console.log(value))
// 
//     // console.log(body)
//     // console.log(url)
//     // console.log(host)
// 
//     // context.request.setBody({
//     //   mimeType: 'application/json',
//     //   text: JSON.stringify({
//     //     username: 'foo',
//     //     password: 'bar'
//     //   }),
//     // })
// 
//     // context.request.setUrl('http://foo:1234/enter')
// 
//     // context.request.setMethod('post')
// 
//     context.network.sendRequest(context.request)
// 
//     // console.log(response)
//   }
// ];

module.exports.templateTags = [{
    name: 'token',
    displayName: 'Authentication token',
    description: 'Get token from an authentication service',
    args: [
        {
            displayName: 'Host',
            description: 'Authentication service host',
            type: 'string',
            defaultValue: 'localhost'
        }, 
        {
            displayName: 'Port',
            description: 'Authentication service port',
            type: 'number',
            defaultValue: 8080
        },
        {
            displayName: 'Username',
            description: 'User\'s id',
            type: 'string'
        },
        {
            displayName: 'Password',
            description: 'User\'s secret phrase',
            type: 'string'
        },
        {
            displayName: 'Method',
            description: 'API method to use for authentication',
            type: 'string'
        },
        {
            displayName: 'Token property',
            description: 'Property name in the response body which contains the token',
            type: 'string'
        }
    ],
    async run (context, host, port, username, password, method, property) {
        // console.log('foo')

        const response = await axios.post(
          `http://${host}:${port}/${method}`,
          {
            username,
            password
          }
        )

        return response.data[property]

        // console.log(context)
        // console.log(context.request)
        // const { app: { alert }, network: { sendRequest }, store: { setItem } } = context;
        // const { network: { sendRequest } } = context;
        // sendRequest({ foo: "bar" })
        // const { request } = data;

        // console.log(request)

        // return 'token';
    }
}];
