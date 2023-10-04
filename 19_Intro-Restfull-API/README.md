<h1>(19) Introduction Restfull API</h1>

### What is API?
Sekumpulan fungsi dan prosedur yang memungkinkan pembuatan aplikasi yang mengakses fitur atau data suatu sistem operasi, aplikasi, atau layanan lainnya

### API Tools
- Katalon
- Apache JMeter
- SoapUI
- Postman
- Insomnia

### Postman
HTTP client yang bisa digunakan untuk melakukan testing web service. Postman dapat membantu untuk melakukan testing, develop dan membuat dokumentasi API dengan mudah cepat dan simple.

### Frontend Backend Integration

Aplikasi frontend seperti :
mobile apps, web apps 

Backend : 
Api <-> database

Proses yang terjadi antara fe dan be : <br/>
Fe melakukan request ke be (API) maka API akan memberikan response sesuai request dari FE.

### REST (REpresentational State Transfer)
Use : HTTP Protocol <br/>
Example : https://www.instagram.com/graphql/query

Request & Response format : 
- JSON
- XML
- SOAP

HTTP request method : 
- GET
- POST
- PUT
- DELETE
- HEAD
- OPTION
- PATCH

### JSON (Javascript Object Notation)
```
{
    "name" : "Ades",
    "umur" : 21,
    "single" : true,
    "hobi" ; [
        "belajar",
        "mengaji"
    ],
    "alamat" : {
        "rumah" : "Palu",
        "no" : 9,
        "rt" : "03",
        "rw" : "04"
    }
}
```

### HTTP Response Code
- 200 Ok
- 201 Created
- 400 Bad Request
- 404 Not Found
- 401 Unauthorized
- 405 Method not Allowed
- 500 Internal Server Error

### REST API Design Best Practice
1. Gunakan kata benda, bukan kata kerja

|Kata Benda|Kata kerja|
|------|------|
|GET/books/123| GET/addBook123|
|DELETE/books/123|GET/DeleteBooks/123|
|POST/books|POST/DeleteAllBooks|
|PUT/books/123|POST/books/123/delete|

2. Penamaan menggunakan kata benda jamak
   
||||
|------|------|-----|
|GET/cars/123| VS|GET/car/123|
|POST/cars|VS|POST/car|
|GET/cars|VS|GET/car|

### Use Resource Nesting to show relations or hierarchy

1. /users -> user's list
2. /users/123 -> spesific user
3. /users/123/orders -> order list that belongs to a specific user
4. /user/123/orders/0001 -> specific order of a specific user

### OPEN API
Link : https://github.com/public-apis/public-apis