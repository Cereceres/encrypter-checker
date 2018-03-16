const nock = require('nock');

module.exports = () => {
  //   nock('https://bucketencryptiontest.s3.amazonaws.com:443', { encodedQueryParams:true })
  // .head('/gentoo_root.img')
  // .reply(200, '', [ 'x-amz-id-2',
  //     '8D4OjZxmXINeUGlx8W2z+GdO0OQAn9KW48AJPYeKWMClRUnj4aKXwMGxukaJ07osr1WdfYsr6SU=',
  //     'x-amz-request-id',
  //     '95F51066EB82180E',
  //     'Date',
  //     'Fri, 03 Nov 2017 00:29:58 GMT',
  //     'Last-Modified',
  //     'Fri, 03 Nov 2017 00:19:46 GMT',
  //     'ETag',
  //     '"2ab876e6e72b0fe9215ba306bea4f697-63"',
  //     'Accept-Ranges',
  //     'bytes',
  //     'Content-Type',
  //     'binary/octet-stream',
  //     'Content-Length',
  //     '524288000',
  //     'Server',
  //     'AmazonS3' ]);


  //   nock('https://bucketencryptiontest.s3.amazonaws.com:443', { encodedQueryParams:true })
  // .put('/gentoo_root.img_new')
  // .reply(200, '<?xml version="1.0" encoding="UTF-8"?>\n\n<CopyObjectResult xmlns="http://s3.amazonaws.com/doc/2006-03-01/"><LastModified>2017-11-03T00:29:58.000Z</LastModified><ETag>&quot;d8b61b2c0025919d5321461045c8226f&quot;</ETag></CopyObjectResult>', [ 'x-amz-id-2',
  //     'KNCm3niBXS1rZOzA5hqgADSIfGcXPVgY3NIzPYLPkMCsQIx8/YdPLKWqsGdNQ1p5FwnaGNgm1qI=',
  //     'x-amz-request-id',
  //     '06701DD26DFD55CF',
  //     'Date',
  //     'Fri, 03 Nov 2017 00:29:58 GMT',
  //     'x-amz-server-side-encryption',
  //     'AES256',
  //     'Content-Type',
  //     'application/xml',
  //     'Transfer-Encoding',
  //     'chunked',
  //     'Server',
  //     'AmazonS3' ]);


  //   nock('https://bucketencryptiontest.s3.amazonaws.com:443', { encodedQueryParams:true })
  // .delete('/gentoo_root.img')
  // .reply(204, '', [ 'x-amz-id-2',
  //     'tTWRUUn8CMUcbUD74qbDBSRLQf1x4Cola5Xt5w/rip1YTtY6iRYiz1d03k0OK8Yd2ov8b/C0yBQ=',
  //     'x-amz-request-id',
  //     'C6B3F7EE8CC55A92',
  //     'Date',
  //     'Fri, 03 Nov 2017 00:30:20 GMT',
  //     'Server',
  //     'AmazonS3' ]);


  //   nock('https://bucketencryptiontest.s3.amazonaws.com:443', { encodedQueryParams:true })
  // .put('/gentoo_root.img')
  // .reply(200, '<?xml version="1.0" encoding="UTF-8"?>\n\n<CopyObjectResult xmlns="http://s3.amazonaws.com/doc/2006-03-01/"><LastModified>2017-11-03T00:30:21.000Z</LastModified><ETag>&quot;d8b61b2c0025919d5321461045c8226f&quot;</ETag></CopyObjectResult>', [ 'x-amz-id-2',
  //     'xv6Q1JIWYdxMsiw5STPMVlpFUk5tFcZa23M8r9QHsLFHFzotcKa2hoHQ01xUCaxLMFd6pOva3W8=',
  //     'x-amz-request-id',
  //     '17BCC95007696171',
  //     'Date',
  //     'Fri, 03 Nov 2017 00:30:21 GMT',
  //     'x-amz-server-side-encryption',
  //     'AES256',
  //     'Content-Type',
  //     'application/xml',
  //     'Transfer-Encoding',
  //     'chunked',
  //     'Server',
  //     'AmazonS3' ]);


  //   nock('https://bucketencryptiontest.s3.amazonaws.com:443', { encodedQueryParams:true })
  // .delete('/gentoo_root.img_new')
  // .reply(204, '', [ 'x-amz-id-2',
  //     'DiNgnU4bGMT66ILFWKL9PtQeal5+g7ZGx62hCEghrw+PKyHjwjNpivNFiipw7q30dJUl+6dXbIU=',
  //     'x-amz-request-id',
  //     '5D92BF8A2DB68D4F',
  //     'Date',
  //     'Fri, 03 Nov 2017 00:30:40 GMT',
  //     'Server',
  //     'AmazonS3' ]);

  //   nock('https://bucketencryptiontest.s3.amazonaws.com:443', { encodedQueryParams:true })
  // .head('/gentoo_root.img')
  // .reply(200, '', [ 'x-amz-id-2',
  //     '62hTz0Jhmuw8iZu+phm3yP03IxS3TwcgCBUk36U5MNuwL/DPphvRJfyG1K6tz0fUzbMN8vYdg2w=',
  //     'x-amz-request-id',
  //     'DBF223939B119513',
  //     'Date',
  //     'Fri, 03 Nov 2017 00:38:08 GMT',
  //     'Last-Modified',
  //     'Fri, 03 Nov 2017 00:30:21 GMT',
  //     'ETag',
  //     '"d8b61b2c0025919d5321461045c8226f"',
  //     'x-amz-server-side-encryption',
  //     'AES256',
  //     'Accept-Ranges',
  //     'bytes',
  //     'Content-Type',
  //     'binary/octet-stream',
  //     'Content-Length',
  //     '524288000',
  //     'Server',
  //     'AmazonS3' ]);
};
