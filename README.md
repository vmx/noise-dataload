Loading data into Noise
=======================

Load a file or directory full of JSON into [Noise][].

If it’s a single file it needs to be newline delimited JSON. One JSON record
per line. The Ids will be auto-generated.

If it is a directory containing JSON files, then the filename is used as Id
for the documents.


Quickstart
----------

    npm install
    npm start <file-or-directory>


License
-------

This project is Licensed under the MIT License.

[Noise]: https://github.com/pipedown/noise/
