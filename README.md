# Backend-Gigih-SDG4B
This repository contains the API for the Scholarship website for our capstone project. It provides endpoints to interact with scholar, article, and country data. The API is built using Node.js, Express, and MongoDB.

## Database Structure

The database for this API uses MongoDB as the backend database. It consists of these main collections:
1. **Scholarship Collection**:
- `slug` (String): Unique identifier for each scholarship.
- `title` (String): The name of the scholarship.
- `fundingType` (String): The type of funding for the scholarship.
- `educationalLevel` (Array of Strings): The educational levels eligible for the scholarship.
- `country` (Array of Strings): The countries where the scholarship is available.
- `registrationDate` (Date): Date when registration opens.
- `deadlineDate` (Date): Application deadline.
- `description` (String): Details about the scholarship program.
- `university` (Array of Strings): List of universities associated with the scholarship.
- `programs` (Array of Strings): Specific programs or fields covered by the scholarship.
- `requirement` (Array of Strings): Eligibility and application requirements.
- `benefit` (Array of Strings): Benefits provided by the scholarship.
- `applicationProcess` (Array of Strings): Step-by-step instructions on how to apply.
- `sourceInformation` (String): Source URL for more information.

**Example Scholarship Data**:
```json
{
  "slug": "sch001",
  "title": "Indiana Jones Scholarship",
  "fundingType": "Fully funded",
  "educationalLevel": ["S2"],
  "country": ["United States", "Canada"],
  "registrationDate": "2023-11-15",
  "deadlineDate": "2023-01-31",
  "description": "This scholarship program is offered by the Government of Ireland for international students who wish to pursue a Master's degree in Ireland. The scholarship covers tuition fees, living expenses, and research costs.",
  "university": ["All universities in Ireland registered on the official scholarship website"],
  "programs": ["Medicine", "Dentistry, and other health sciences"],
  "requirement": [
    "Non-UE/EEA citizens who have completed a Bachelor's degree at a recognized university.",
    "Desire to pursue a Master's degree in Ireland for the academic year 2024/2025.",
    "Strong academic record and a clear research plan.",
    "Proficiency in the English language at the standard of the target university.",
    "Not currently receiving a full or partial scholarship."
  ],
  "benefit": [
    "Full tuition fees up to a maximum of €16,000 per year.",
    "Living expenses of €1,200 per month.",
    "Research costs of €3,250 per year.",
    "Maximum scholarship duration of 2 years for Master's programs."
  ],
  "applicationProcess": [
    "Identify and contact potential supervisors at the destination university in Ireland. Supervisors should be willing to support the scholarship application and provide letters of recommendation.",
    "Complete the online application form on the official scholarship website. The application form should be accompanied by supporting documents, including transcripts, letters of recommendation, a research plan, English language certificates, and more.",
    "Submit the application before the specified deadline, which is October 21, 2023, at 4:00 PM Irish time.",
    "Participate in the selection process, which includes academic evaluation, assessment of the research plan, and interviews if required.",
    "Wait for the announcement of the selection results in March 2024."
  ],
  "sourceInformation": "http://scholarshipwebsite.com/full-scholarship"
}
```

## List API Request and Response
The API provides the following endpoints:
## **GET /api/scholar**
This API endpoint is responsible for retrieving a list of scholarships with optional filtering and pagination.

- **Query Params:** 
  - `page=[number]` (opsional): Halaman yang diinginkan, default 1.
  - `perPage=[number]` (opsional): Jumlah beasiswa per halaman, default 9.
  - `title=[string]` (opsional): Judul beasiswa yang dicari.
  - `fundingType=[string]` (opsional): Jenis pembiayaan beasiswa.
  - `educationalLevel=[string]` (opsional): Tingkat pendidikan untuk beasiswa.
  - `country=[string]` (opsional): Negara tujuan beasiswa.
  - `sort=[string]` (opsional): Cara pengurutan beasiswa.


- **Data Params**
  None

- **Headers**
  Content-Type: application/json

- **Success Response**
  - **Code:** 200
  - **Content:**
    ```
    {
    "data": [
        {
            "_id": "654453894f7fbbcf5528936b",
            "slug": "gates-cambridge-scholarships",
            "educationalLevel": [
                "PhD",
                "MSc/MLitt",
                "One-year postgraduate course"
            ],
            "country": [
                "United Kingdom"
            ],
            "title": "Gates Cambridge Scholarships",
            "fundingType": "Fully funded",
            "registrationDate": "2023-09-01T00:00:00.000Z",
            "deadlineDate": "2023-12-05T00:00:00.000Z",
            "description": "Gates Cambridge Scholarships are prestigious international awards that provide full funding for outstanding students to pursue postgraduate studies at the University of Cambridge. The program emphasizes leadership, intellectual ability, and a commitment to improving the lives of others.",
            "university": [
                "University of Cambridge"
            ],
            "programs": [
                "Any postgraduate program at the University of Cambridge"
            ],
            "benefit": [
                "Full cost of study, maintenance allowance, and more"
            ],
            "requirement": [
                "Be a citizen of any country outside the United Kingdom",
                "Apply to the University of Cambridge and Gates Cambridge Scholarships simultaneously",
                "Demonstrate a strong commitment to social service"
            ],
            "applicationProcess": [
                "Submit your application for admission to the University of Cambridge and the Gates Cambridge Scholarship online"
            ],
            "sourceInformation": "https://www.gatescambridge.org/",
            "__v": 0
           }
    ],
    "pagination": {
        "currentPage": 1,
        "totalPages": 1
    }
    ```

- **No Scholar Found Response**
  - **Code:** 200
  - **Content:**
    ```
    []
    ```

- **Error Response:**
  - **Code:** 500  
    **Content:** `{ error: error.message }`

## **GET /api/scholar/{slug}**
This API endpoint is responsible for retrieving a scholarship data by slug.

- **Query Params:**
None


- **Data Params**
  - `slug=[slug]` (required) : value slug dari scholarship data yang diinginkan.


- **Headers**
  Content-Type: application/json

- **Success Response**
  - **Code:** 200
  - **Content:**
    ```
    {
    "_id": "654453894f7fbbcf5528936b",
    "slug": "gates-cambridge-scholarships",
    "educationalLevel": [
        "PhD",
        "MSc/MLitt",
        "One-year postgraduate course"
    ],
    "country": [
        "United Kingdom"
    ],
    "title": "Gates Cambridge Scholarships",
    "fundingType": "Fully funded",
    "registrationDate": "2023-09-01T00:00:00.000Z",
    "deadlineDate": "2023-12-05T00:00:00.000Z",
    "description": "Gates Cambridge Scholarships are prestigious international awards that provide full funding for outstanding students to pursue postgraduate studies at the University of Cambridge. The program emphasizes leadership, intellectual ability, and a commitment to improving the lives of others.",
    "university": [
        "University of Cambridge"
    ],
    "programs": [
        "Any postgraduate program at the University of Cambridge"
    ],
    "benefit": [
        "Full cost of study, maintenance allowance, and more"
    ],
    "requirement": [
        "Be a citizen of any country outside the United Kingdom",
        "Apply to the University of Cambridge and Gates Cambridge Scholarships simultaneously",
        "Demonstrate a strong commitment to social service"
    ],
    "applicationProcess": [
        "Submit your application for admission to the University of Cambridge and the Gates Cambridge Scholarship online"
    ],
    "sourceInformation": "https://www.gatescambridge.org/",
    "__v": 0
    }
    ```

- **No Data Found Response**
  - **Code:** 404
  - **Content:**
    ```
    { error: scholarship not found}
    ```

- **Error Response:**
  - **Code:** 500  
    **Content:** `{ error: error.message }`


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
    data:{<article_object>}
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
    title: string,
    synopsis: string,
    image: string,
    content: string
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
  name: string
  image: string
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
      name: string,
      image: string
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

## How to running this service
### 1. Running with docker
1. Make sure you have installed docker in your system
2. Running your docker
3. Build the image by running the dockerfile, you can run this in your terminal:
```
   docker build -t be/scholar .
   ```
4. After finsih build the image, run this in your terminal:
```
   docker run -p 3000:3000 be/scholar
   ```
5. The API should now be running locally on `http://localhost:3000`.

### 2. Running locally
1. Install Node.js and MongoDB on your local machine if you haven't already.

2. Clone this repository to your local machine.

3. In the directory of the project, go to a `.env` file and set the following environment variables if you want to change.
Currently, the port has set to port 3000 and the database has set to our database that has contain the data that needed for this project.


4. Install the required dependencies by running:
   ```
   npm install
   ```

5. Start the API server by running:
    ```
   npm run dev
   ```

6. The API should now be running locally on `http://localhost:3000`.

**Note to Grader:**
if you encounter any issues, please feel free to contact me for assistance: fahmiramdhani.st@gmail.com.
    
