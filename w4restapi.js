var http = require('http');

module.exports =
{
  call: function(options)
  {
    var uri = options.path;
    
    var formData = '';
    if (options.parameters)
    {
      for (var parameterName in options.parameters)
      {
        var parameterValue = options.parameters[parameterName];
        formData += parameterName + '=' + parameterValue;
        formData += '&';
      }
    }

    var httpOptions =
    {
      hostname: options.hostname || 'localhost',
      port: options.port || 7705,
      path: uri,
      method: options.method || 'GET'
    };
    
    if ('authUser' in options)
    {
      httpOptions.auth = options.authUser + ':' + options.authPassword
    }

    if (httpOptions.method == 'GET')
    {
      uri += '?' + formData;
    }
    else
    {
      httpOptions.headers =
      {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': formData.length,
      }
    }

    console.log(httpOptions.method + ' ' + httpOptions.path);
    
    var request = http.request(httpOptions, function(response)
    {
      response.setEncoding('utf8');
      response.on('data', function (data)
      {
        console.log(data);
      });
    });

    request.on('error', function(error)
    {   
      console.log('problem with request: ' + error.message);
    });

    if (httpOptions.method == 'POST')
    {
      console.log('POST DATA: ' + formData);
      request.write(formData + '\n\n');
    }

    request.end();
  }
}



