# Backend-Gigih-SDG4B

## Article API

- Article object

```
{
  _id: ObjectId()
  urlImageThumbnail: string
  created_at: datetime(iso 8601)
  updated_at: datetime(iso 8601)
}
```

## **GET api/article/all**

Returns all article in the system.

- **URL Params**  
  None
- **Data Params**  
  None
- **Headers**  
  Content-Type: application/json
- **Success Response:**
- **Code:** 200  
  **Content:**

```
{
    message: "Success retrieving data",
    data: [
        {<article_object>},
        {<article_object>},
        {<article_object>}
    ]
}
```

- **Error Response:**
  - **Code:** 500  
    **Content:** `{ message: error.message }`

## **GET api/article/:id**

Returns article with specified id.

- **URL Params**  
  _Required:_ `id=[string]`
- **Data Params**  
  None
- **Headers**  
  Content-Type: application/json
- **Success Response:**
- **Code:** 200  
  **Content:**

```
{
    message: "Success retrieving data",
    data:{<video_object>}
}
```

- **Error Response:**
  - **Code:** 500  
    **Content:** `{ message: error.message }`

## **POST api/article/create**

Returns created article in the system.

- **URL Params**  
  None
- **Data Params**

  ```
  {
      urlImageThumbnail: string
  }
  ```

- **Headers**
  Content-Type: application/json
- **Success Response:**
- **Code:** 201
  **Content:**

```
{
    message: "Article Posted",
    data: { <article_object> }
}
```

- **Error Response:**
  - **Code:** 500  
    **Content:** `{ message: error.message }`

## Country API

- Country object

```
{
  _id: ObjectId()
  urlImageThumbnail: string
  created_at: datetime(iso 8601)
  updated_at: datetime(iso 8601)
}
```

## **GET api/country/all**

Returns all country in the system.

- **URL Params**  
  None
- **Data Params**  
  None
- **Headers**  
  Content-Type: application/json
- **Success Response:**
- **Code:** 200  
  **Content:**

```
{
    message: "Success retrieving data",
    data: [
        {<country_object>},
        {<country_object>},
        {<country_object>}
    ]
}
```

- **Error Response:**
  - **Code:** 500  
    **Content:** `{ message: error.message }`

## **GET api/country/:id**

Returns country with specified id.

- **URL Params**  
  _Required:_ `id=[string]`
- **Data Params**  
  None
- **Headers**  
  Content-Type: application/json
- **Success Response:**
- **Code:** 200  
  **Content:**

```
{
    message: "Success retrieving data",
    data:{<country_object>}
}
```

- **Error Response:**
  - **Code:** 500  
    **Content:** `{ message: error.message }`

## **POST api/country/create**

Returns created country in the system.

- **URL Params**  
  None
- **Data Params**

  ```
  {
      urlImageThumbnail: string
  }
  ```

- **Headers**
  Content-Type: application/json
- **Success Response:**
- **Code:** 201
  **Content:**

```
{
    message: "Country Posted",
    data: { <country_object> }
}
```

- **Error Response:**
  - **Code:** 500  
    **Content:** `{ message: error.message }`