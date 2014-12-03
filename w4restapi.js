var http = require('http');

module.exports =
{
  call: function(options)
  {
    var uri = options.path;
    
    var formData = '';
    var httpEntity = false;
    if (options.parameters)
    {
      for (var parameterName in options.parameters)
      {
        var parameterValue = options.parameters[parameterName];
        formData += parameterName + '=' + parameterValue;
        formData += '&';
      }
      if (formData.length > 0)
      {
        formData = formData.slice(0, -1);
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

    if (httpOptions.method == 'POST' || httpOptions.method == 'PUT')
    {
      httpEntity = formData;
    }

    if (httpOptions.method == 'DELETE')
    {
    	httpEntity = ' ';
    }

    if (httpOptions.method == 'GET' || httpOptions.method == 'DELETE')
    {
      httpOptions.path += '?' + formData
    }

    if (httpEntity)
    {
      httpOptions.headers =
      {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': httpEntity.length,
      }
    }

    console.log(httpOptions.method + ' ' + httpOptions.path);

    var request = http.request(httpOptions, function(response)
    {
      response.setEncoding('utf8');
      response.on('data', function (data)
      {
        console.log('\nRESPONSE:\n' + JSON.stringify(JSON.parse(data), null, 2));
      });
    });

    request.on('error', function(error)
    {   
      console.log('problem with request: ' + error.message);
    });

    if (httpEntity)
    {
      console.log('BODY: ' + httpEntity);
      request.write(httpEntity + '\n\n');
    }

    request.end();
  }
}



