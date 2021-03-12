# keep-alive-timeout

Node.jsのKeepAliveTimeoutの検証

## KeepAliveTimeout

https://nodejs.org/docs/latest-v14.x/api/http.html#http_server_keepalivetimeout

デフォルトは5秒で設定されている。

## 検証

### 未設定時

```
PS keep-alive-timeout> Invoke-WebRequest -Uri "http://localhost:3000/" -Headers @{
>> "Cache-Control"="max-age=0"
>>   "sec-ch-ua"="`"Chromium`";v=`"88`", `"Google Chrome`";v=`"88`", `";Not A Brand`";v=`"99`""
>>   "sec-ch-ua-mobile"="?0"
>>   "DNT"="1"
>>   "Upgrade-Insecure-Requests"="1"
>>   "User-Agent"="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.190 Safari/537.36"
>>   "Accept"="text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9"
>>   "Sec-Fetch-Site"="none"
>>   "Sec-Fetch-Mode"="navigate"
>>   "Sec-Fetch-User"="?1"
>>   "Sec-Fetch-Dest"="document"

StatusCode        : 200
StatusDescription : OK
Content           : {101, 110, 100}
RawContent        : HTTP/1.1 200 OK
                    Date: Fri, 12 Mar 2021 11:04:10 GMT
                    Connection: keep-alive
                    Keep-Alive: timeout=5
                    Content-Length: 3

                    end
Headers           : {[Date, System.String[]], [Connection, System.String[]], [Keep-Alive, System.String[]], [Content-Length, Sys 
                    tem.String[]]}
RawContentLength  : 3
RelationLink      : {}
```

`RawContent` に `Connection: keep-alive` と `Keep-Alive: timeout=5` が設定されている。

### 設定時

```
PS keep-alive-timeout> Invoke-WebRequest -Uri "http://localhost:3000/" -Headers @{
>> "Cache-Control"="max-age=0"
>>   "sec-ch-ua"="`"Chromium`";v=`"88`", `"Google Chrome`";v=`"88`", `";Not A Brand`";v=`"99`""
>>   "sec-ch-ua-mobile"="?0"
>>   "DNT"="1"
>>   "Upgrade-Insecure-Requests"="1"
>>   "User-Agent"="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.190 Safari/537.36"
>>   "Accept"="text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9"
>>   "Sec-Fetch-Site"="none"
>>   "Sec-Fetch-Mode"="navigate"
>>   "Sec-Fetch-Dest"="document"
>>   "Accept-Encoding"="gzip, deflate, br"
>>   "Accept-Language"="ja-JP,ja;q=0.9,en-US;q=0.8,en;q=0.7,zh-TW;q=0.6,zh;q=0.5"
>> }

StatusCode        : 200
StatusDescription : OK
Content           : {101, 110, 100}
RawContent        : HTTP/1.1 200 OK
                    Date: Fri, 12 Mar 2021 11:04:54 GMT
                    Connection: keep-alive
                    Content-Length: 3

                    end
Headers           : {[Date, System.String[]], [Connection, System.String[]], [Content-Length, System.String[]]}String[]]}
RawContentLength  : 3
RelationLink      : {}
```

`RawContent` に `Connection: keep-alive` のみが設定されている。
